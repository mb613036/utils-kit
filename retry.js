export const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/**
 * Retry an async function with exponential backoff.
 */
export async function retry(fn, { attempts = 3, base = 200, factor = 2 } = {}) {
  let lastError
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn()
    } catch (err) {
      lastError = err
      if (i === attempts - 1) break
      await sleep(base * Math.pow(factor, i))
    }
  }
  throw lastError
}
