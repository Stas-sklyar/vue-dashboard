export default {
  mounted(el) {
    const input = el.tagName === 'INPUT' ? el : el.querySelector('input')
    if (input) {
      input.focus()
    }
  }
}
