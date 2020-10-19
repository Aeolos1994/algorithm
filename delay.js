async function repeat (func, times, wait) {
  for (let i = 0; i < times; i++) {
    await delay(wait)
    func()
  }
}
async function delay (time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}