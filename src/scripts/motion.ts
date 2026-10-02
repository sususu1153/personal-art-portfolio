// Page motion: pieces "paste" onto the page as they scroll in, headings get their
// cut-out strips laid down, [data-type] text is typed out like a typewriter, and
// words in [data-marker] text get a highlighter stroke when the mouse passes over.
// The `js` class on <html> (set inline in Base.astro) is what hides things before
// they animate, so without this script everything simply shows.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Wrap each word in a span so CSS can draw a marker stroke on hover. */
function markWords(root: HTMLElement) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const texts: Text[] = [];
  while (walker.nextNode()) {
    const t = walker.currentNode as Text;
    if (!t.parentElement?.closest('a, .sr-only') && t.data.trim()) texts.push(t);
  }
  for (const t of texts) {
    const frag = document.createDocumentFragment();
    for (const part of t.data.split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        frag.append(part);
      } else {
        const w = document.createElement('span');
        w.className = 'w';
        w.textContent = part;
        frag.append(w);
      }
    }
    t.replaceWith(frag);
  }
}

const rand = (min: number, max: number) => min + Math.random() * (max - min);
let burst = 0; // keystrokes left in a quick run

/** How long to wait after typing `ch`, so the rhythm feels like a person typing. */
function humanDelay(ch: string, endOfLine: boolean, base: number): number {
  if (endOfLine || /[.!?]/.test(ch)) return base * rand(12, 20); // end of a thought
  if (/[,;:—–]/.test(ch)) return base * rand(6, 11); // end of a phrase
  if (ch === ' ') return base * rand(1.4, 2.6); // between words
  if (burst > 0) {
    burst--;
    return base * rand(0.35, 0.6);
  }
  const r = Math.random();
  if (r < 0.03) return base * rand(8, 16); // hesitation mid-word
  if (r < 0.08) burst = Math.floor(rand(3, 7)); // a familiar word comes out fast
  return base * rand(0.6, 1.5); // ordinary keystroke jitter
}

function typeOut(el: HTMLElement, msPerChar: number, done?: (shown: HTMLElement) => void) {
  const full = el.textContent ?? '';
  el.style.minHeight = `${el.offsetHeight}px`;

  // Screen readers get the whole text at once; the animated copy is hidden from them.
  const shown = document.createElement('span');
  shown.setAttribute('aria-hidden', 'true');
  while (el.firstChild) shown.appendChild(el.firstChild);
  const sr = document.createElement('span');
  sr.className = 'sr-only';
  sr.textContent = full;
  el.append(shown, sr);

  const walker = document.createTreeWalker(shown, NodeFilter.SHOW_TEXT);
  const nodes: { node: Text; text: string }[] = [];
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    nodes.push({ node, text: node.data });
    node.data = '';
  }
  const caret = document.createElement('span');
  caret.className = 'caret';
  shown.appendChild(caret);

  let n = 0;
  let i = 0;
  const tick = () => {
    while (n < nodes.length && i >= nodes[n].text.length) {
      n++;
      i = 0;
    }
    if (n >= nodes.length) {
      setTimeout(() => {
        caret.remove();
        done?.(shown);
      }, 1600);
      return;
    }
    const { node, text } = nodes[n];
    node.parentNode!.insertBefore(caret, node.nextSibling);
    node.data = text.slice(0, ++i);
    setTimeout(tick, humanDelay(text[i - 1], i >= text.length, msPerChar));
  };
  tick();
}

function reveal(el: HTMLElement) {
  el.classList.add('in');
  el.querySelectorAll<HTMLElement>('[data-type]').forEach((t) => start(t));
  if (el.matches('[data-type]')) start(el);
}

function start(el: HTMLElement) {
  if (el.dataset.typed) return;
  el.dataset.typed = '1';
  typeOut(el, Number(el.dataset.type) || 22, (shown) => {
    if (el.hasAttribute('data-marker')) markWords(shown);
  });
}

// Typed text gets its words wrapped once typing finishes; everything else right away.
document
  .querySelectorAll<HTMLElement>('[data-marker]')
  .forEach((el) => {
    if (reduce || !el.hasAttribute('data-type')) markWords(el);
  });

// Selected text takes the color of the cut-out strip on its section's heading (the last
// strip, if the heading has several). See the .sel-* rules in global.css.
document.querySelectorAll<HTMLElement>('section, article').forEach((scope) => {
  const strips = scope.querySelectorAll<HTMLElement>('h1 .hl, h2 .hl');
  const strip = strips[strips.length - 1];
  if (!strip) return;
  const c = ['r', 'b', 'k'].find((k) => strip.classList.contains(k)) ?? 'y';
  scope.classList.add(`sel-${c}`);
});

if (reduce) {
  document.documentElement.classList.remove('js');
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        reveal(e.target as HTMLElement);
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  document
    .querySelectorAll<HTMLElement>('[data-paste], h1, h2, [data-type], [data-anim]')
    .forEach((el) => io.observe(el));
}
