(($) => {
  const $counter = $('.js-counter')
  const $button = $('.js-button')
  const state = {
    count: 0,
  }

  function render() {
    $counter.text(state.count)
  }

  $button.on('click', () => {
    state.count += 1
    render()
  })

  render()
})(jQuery)

