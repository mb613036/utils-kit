/**
 * Throttle a function.
 * @param {Function} fn
 * @param {number} ms
 */
export function throttle(fn, ms = 300) {
  let last = 0
  let timer = null
  return (...args) => {
    const now = Date.now()
    const left = ms - (now - last)
    if (left <= 0) {
      if (timer) { clearTimeout(timer); timer = null }
      last = now
      fn(...args)
    } else if (!timer) {
      timer = setTimeout(() => {
        last = Date.now()
        timer = null
        fn(...args)
      }, left)
    }
  }
}
