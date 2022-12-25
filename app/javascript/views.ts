// NOTE: Optimize the SSR bundle by not splitting by page.
const pages = import.meta.env.SSR
  ? import.meta.globEagerDefault('./Layouts/**/*.vue')
  : import.meta.glob('./Layouts/**/*.vue')

export async function resolveView (name: string) {
  const page = pages[`./Layouts/${name}.vue`]

  if (!page)
    throw new Error(`Unknown page ${name}. Is it located under Dashboard with a .vue extension?`)

  return import.meta.env.SSR
    ? page
    : (await page()).default
}
