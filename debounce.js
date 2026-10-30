/**
 * Debounce a function.
 * @param {Function} fn
 * @param {number} ms
 */
export function debounce(fn, ms = 300) {
  let timer = null
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn(...args)
    }, ms)
  }
}
