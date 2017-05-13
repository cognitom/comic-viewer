export default function wait (ms) {
  return new Promise((resolve, reject) => {
    window.setTimeout(resolve, ms)
  })
}
