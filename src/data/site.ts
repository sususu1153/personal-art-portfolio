export const site = {
  name: 'Suzie Lou',
  tagline: 'Illustration and graphic design by Suzie Lou.',
  email: 'lsuzie523@gmail.com',
  github: 'https://github.com/sususu1153',
};

// Suzie's artist statement, one string per paragraph.
export const statement = [
  'I keep drawing people who are coming apart a little. Someone smiling a bit too hard, ' +
    'a scream that takes over the whole page, a selfie that looks wrong even though the ' +
    'camera got everything right. I’m interested in the gap between what we feel and ' +
    'what we’re expected to show, and in how a self can stretch, crack, and get put ' +
    'back together.',
  'I like math too, so recursion shows up a lot: a girl painting a girl painting a girl, ' +
    'on and on.',
  'I start with light alcohol markers and sketch loose outlines without planning much. ' +
    'Then I build shadows with darker colors and finish edges and textures with colored ' +
    'pencils. Sometimes I draw on other things: ink, acrylic markers, balsa wood, ' +
    '3D-printed tiles. Color does a lot of the talking: bright yellow when something’s ' +
    'joyful, muted purple when it’s confused.',
  'I’m inspired by fractal art and tessellations, Francis Bacon’s paintings, and ' +
    'Frida Kahlo’s self-portraits.',
];

/** Prefix a site-relative path with the configured base (for GitHub Pages). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
