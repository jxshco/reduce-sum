export default (arr, key) => {
  return arr.reduce((n, item) => {
    return n + (item[key] ? item[key] : 0)
  }, 0)
}
