import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/art/*.webp', {
  eager: true,
});

export function art(slug: string): ImageMetadata {
  const mod = files[`../assets/art/${slug}.webp`];
  if (!mod) throw new Error(`No image for slug "${slug}"`);
  return mod.default;
}

export interface Artwork {
  slug: string;
  title: string;
  medium: string;
  year?: number;
  alt: string; // what the image shows, for screen readers
  description?: string;
  process?: string; // slug of a process image
  processNote?: string;
}

// Titles, media, years, and descriptions are from Suzie's own portfolio deck.
// Entries titled "Title will be updated" are placeholders until she names them.
export const artworks: Artwork[] = [
  {
    slug: 'overflow',
    title: 'Overflow',
    medium: 'Alcohol markers and colored pencils',
    year: 2025,
    alt:
      'A stretched blue figure screaming, yellow flowers bursting from the head and body, ' +
      'green money spilling from the mouth',
    description:
      'By stretching the figure, I hope to convey emotional strain, as if pulled thin by ' +
      'invisible hands. Bright flowers erupt from the brain and body, symbolizing ' +
      'creativity, ideas, and vitality striving to break free. Money spilling from the ' +
      'mouth represents societal demands, suggesting that personal expression is being ' +
      'commodified or consumed.',
  },
  {
    slug: 'infinite-joy',
    title: 'Infinite Joy',
    medium: 'Alcohol markers and colored pencils',
    year: 2025,
    alt:
      'A figure in a blue Lolita dress whose head is a yellow smiley balloon on a string, ' +
      'against a red wall of distorted faces',
    description:
      'Infinite Joy explores how joy can be reshaped and stretched until it reveals the ' +
      'tension holding it in place. The Lolita dress and the balloon symbolize purity and ' +
      'childhood innocence, while the chaotic reds and distorted faces hint at violent ' +
      'emotions that purity cannot contain. I use strong color contrasts to show how ' +
      'innocence can sharpen into something uneasy, and how happiness can be pushed or ' +
      'performed rather than freely felt.',
  },
  {
    slug: 'say-cheese',
    title: 'Say Cheese?',
    medium: 'Alcohol markers and colored pencils',
    year: 2025,
    alt: "Hands holding a phone whose screen shows a girl's selfie, in vivid pastel colors",
    description:
      'The piece explores the distortions of self-perception: how a selfie can feel ' +
      '“off” even when light and physics should have accurately captured our ' +
      'appearance. Which one is distorted: our perception, or the camera? I use pastel ' +
      'and vibrant colors to amplify a hyperbolic, dreamlike mood to show the inherent ' +
      'bias in the way we view ourselves and the world.',
    process: 'say-cheese-process',
    processNote:
      'This sketchbook spread documents the brainstorming process, artistic choices, ' +
      'reflections, progress photos, and inspirations behind Say Cheese?.',
  },
  {
    slug: 'breakthrough',
    title: 'BreakThrough',
    medium: '3D print, wood, alcohol markers, colored pencils',
    year: 2024,
    alt:
      'A girl painting a girl painting a girl, framed on a wall of blue and gray 3D-printed' +
      ' tiles',
    description:
      'I use the self-similar composition of a girl painting a girl painting a girl, ' +
      'continuing into infinity, to reflect the uncertainty of knowledge: how every answer ' +
      'uncovers another question. After each door we open and each canvas we paint, there’s' +
      ' always another waiting beyond. I illustrate blue figures peeling underneath the ' +
      'surface to question: does there exist some higher being that oversees mankind?',
    process: 'breakthrough-process',
    processNote:
      'The background is made from 3D-printed Einstein tiles of varying sizes, with glitter' +
      ' used to depict a night sky. I cut out the outermost figure and glued it on top of ' +
      'the 3D-printed tiles, while using balsa sticks to form the frame of the outermost ' +
      'painting to create a layered effect.',
  },
  {
    slug: 'run-toward-misery',
    title: 'Run, Run Toward Misery',
    medium: 'Alcohol markers',
    year: 2023,
    alt:
      'A giant screaming mouth and clawing hands tangled in black strings over red and ' +
      'black shadow figures',
    description:
      'I depict rage born from the loss of control: a giant mouth opens in a yell, with ' +
      'oversized hands clawing outward, tangled in black strings. Shadowy figures sink ' +
      'beneath the force of anger. Through exaggeration and roughly blended, contrasting ' +
      'colors, I aim to capture the raw, destructive power.',
  },
  {
    slug: 'hole-in-the-universe',
    title: 'A Hole in the Universe',
    medium: 'Alcohol markers, colored pencils, and ink pen',
    year: 2023,
    alt: 'A girl with wild blue hair peering through a crack in an ink-drawn wall',
    description:
      'I want to draw a figure who interacts with the viewer: a girl peers through a ' +
      'crack, fully illuminated by light while the space behind her remains in darkness. ' +
      'She directly meets the viewer’s gaze. Through such composition, I want to ' +
      'depict the feeling of cracking a hole between the known and the unknown.',
  },
  {
    slug: 'the-dome',
    title: 'BreakThrough (The Dome)',
    medium: 'Alcohol markers and ink',
    year: 2023,
    alt:
      'A gray ink drawing of a girl painting a girl painting a girl, with a single drip ' +
      'of bright orange and pink paint',
    description:
      'I draw a girl painting a girl painting a girl (an earlier version of ' +
      'BreakThrough), inspired by fractal geometry. I want the viewer’s focus to rest ' +
      'on the color palette, so I draw the piece in black and gray by hand and add color ' +
      'to the palette digitally. Through that single burst of color, I hope to express ' +
      'how creativity slips through established frameworks to keep renewing itself.',
  },
  {
    slug: 'blue-hour',
    title: 'Blue Hour',
    medium: 'Alcohol markers and ink pen',
    year: 2024,
    alt:
      'A collage of sketches: red clasped hands, a blue patterned vase, a woman in a blue ' +
      'headscarf, and a girl with long blue hair',
    description:
      'This collage of sketches emphasizes mood and atmosphere through a palette ' +
      'dominated by blues and purples. Layering color and texture, I try to create depth ' +
      'and subtle shifts, like feelings that change just beneath the surface.',
  },
  {
    slug: 'fifteen-plus-25',
    title: '15 + 25',
    medium: 'Alcohol markers and colored pencils (Doodle for Google entry)',
    year: 2024,
    alt:
      'A colorful Google logo with a girl holding the number 15, a future self painting ' +
      '40, and a bird in flight',
    description:
      'My doodle for Google about my goals for myself in 25 years. The composition ' +
      'includes a bird in flight representing freedom, a present-day self holding ' +
      '“15” to mark my age, and a future self painting “40” (my age in 25 ' +
      'years), symbolizing personal growth and aspirations. Through playful details, I ' +
      'want to depict an energetic, vibrant mood.',
  },
  {
    slug: 'see-you-tomorrow',
    title: 'See You Tomorrow',
    medium: 'Alcohol markers and colored pencils',
    year: 2025,
    alt: 'A man in a long gray coat bent over ruins under a pale rising sun',
    description:
      'I explore facade and destruction through a man standing in ruins, his coat ' +
      'concealing a skeleton beneath. I use a dirty mixture of gray to mask the piles of ' +
      'smiley faces in the ruins and the sunrise in the background to show destruction, ' +
      'questioning the meaning of such facades after destruction. I try to reflect the end ' +
      'of innocence and purity through the small blue flowers the man is holding.',
    process: 'see-you-tomorrow-process',
  },
  {
    slug: 'her-reflection-smiles-first',
    title: 'Her Reflection Smiles First',
    medium: 'Alcohol markers and colored pencils',
    year: 2025,
    alt:
      'A woman with eyes closed holding sunflowers, framed like a camera viewfinder, on ' +
      'olive green',
    description:
      'I want this piece to look serene at first glance but slowly unsettling. So I use ' +
      'bright, lively colors to imply “peace” and add inverted reflections in the ' +
      'background to imply “anomaly.” The idea of reflection led me to layer recording ' +
      'signs on top, blurring the line between watching and being watched. Her closed eyes ' +
      'and curved smile form arcs that appear natural when inverted, reflecting confusions ' +
      'about reality and perception.',
  },
  {
    slug: 'hello-big-beautiful-world',
    title: 'Hello, Big Beautiful World',
    medium: 'Alcohol markers and colored pencils',
    year: 2025,
    alt:
      'Three girls in pink dresses lifted by yellow balloons above a hand, over a page of ' +
      'printed text',
    description:
      'The piece examines the tension between contained spaces and the moments we push ' +
      'beyond them. It asks how memory, imagination, and personal narrative shape the ' +
      'worlds we inhabit and the leaps we take. I use soft and vibrant colors to create a ' +
      'sense of suspension and transition, capturing the feeling of crossing boundaries ' +
      'between what is familiar and what is possible. The contrast between the intimate, ' +
      'enclosed stroke and the open background emphasizes the fragility and courage ' +
      'involved in stepping into the unknown.',
  },
  {
    slug: 'almost-seen',
    title: 'Almost Seen',
    medium: 'Alcohol markers and ink pen',
    year: 2025,
    alt: 'A girl in a blue shirt and red sneakers sitting on a yellow ledge',
    description:
      'I use contrasting but muted colors to depict a vivid yet restrained mood. Ink pens ' +
      'define outlines, shading, and fine details, while markers build up color gradients. ' +
      'I juxtapose the figure’s youthful face and harder expression with the soft colors to' +
      ' reflect the tension between the vulnerability and defiance of teenagers.',
  },
  {
    slug: 'golden-hour',
    title: 'Golden Hour',
    medium: 'Alcohol markers, acrylic markers, and colored pencils',
    year: 2024,
    alt:
      'A collage of portraits: a girl with a red rose, a woman with tied-up hair, and a ' +
      'sketched older woman',
    description:
      'This collage of sketches emphasizes intense emotion through the dramatic contrast of' +
      ' warm orange and gold against deep gray shadows. I hope to convey energy and tension' +
      ' through layered colors, as well as the power of light and shadow in shaping mood.',
  },
  {
    slug: 'still-seventeen',
    title: 'Still Seventeen',
    medium: 'Alcohol markers',
    year: 2023,
    alt:
      'A girl with short dark hair in a blue vest and white shirt, sitting with her knees ' +
      'up and a hand on her cheek',
    description:
      'In this portrait, I focus on tone and texture and weaken the lines to convey a ' +
      'vague, undetermined mood. Gray shadows show depth, while orange brings warmth. ' +
      'Light, blended colors on the clothing create a smooth, silky effect. Without ' +
      'definite outlines, I hope to depict a soft, uninterrupted mood.',
  },
  {
    slug: 's-he',
    title: 'S(he)',
    medium: 'Alcohol markers and ink pen',
    year: 2025,
    alt:
      'A loose ink and marker portrait of a woman with short hair in a black top and blue ' +
      'jeans, sitting barefoot with a hand at her chin',
    description:
      'I draw this female portrait based on a male model, experimenting with rough, free ' +
      'lines. Unlike my earlier work, where I rendered details with markers or colored ' +
      'pencils, here I use ink pens for outlines, shading, and fine details, while markers ' +
      'gradually build up color gradients. By doing so, I hope to capture form and ' +
      'expression with a looser, more casual style.',
  },
  {
    slug: 'dont-look-back',
    title: 'Don\u2019t Look Back',
    medium: 'Alcohol markers and ink pen',
    year: 2024,
    alt:
      'A figure on stone steps in a dark forest, drawn in blues and purples, with a bird ' +
      'swooping overhead',
    description:
      'This piece explores the tension between looking back and moving forward. I use the ' +
      'depths of the forest to symbolize the unknown, mysterious future through a muted ' +
      'palette of blue and gray to convey a surreal, introspective tone.',
  },
  {
    slug: 'hey-over-here',
    title: 'Hey! Over Here!',
    medium: 'Alcohol markers and ink pen',
    year: 2025,
    alt:
      'Friends at a caf\u00e9 table waving, drawn in loose ink lines with flat yellow ' +
      'and purple',
    description:
      'I hope to capture the small, unexpected happiness in life (like the moment you spot ' +
      'a friend and wave), so I blend opposite colors, bright yellow and vibrant purple, to ' +
      'express that spark of energy; I keep the colors flat and the lines simple to mirror ' +
      'the purity of joy.',
  },
  {
    slug: 'my-moon-and-i',
    title: 'My Moon and I Both Died on the High Tower',
    medium: 'Details will be updated',
    alt:
      'A figure with face in hands by a moonlit window with fish drawn on the glass, ' +
      'in blues and purples',
  },
  {
    slug: 'i-am-batman',
    title: 'I Am Batman',
    medium: 'Details will be updated',
    alt:
      'A dim purple room with an open door letting in warm light, a black cat sitting in ' +
      'the doorway',
  },
];

export const bySlug = (slug: string) => artworks.find((a) => a.slug === slug)!;
