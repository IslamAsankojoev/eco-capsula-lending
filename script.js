const SELECTOR = '.amoforms__form, #amoforms_widget, iframe[src*="forms.amocrm"]'
function applyStyles() {
  const input = document.querySelector('.amoforms__field__control')
  if (input) {
    inputStyle(input)
  }
}

function inputStyle(btn) {
  btn.style.borderRadius = '600px'
}

;(function waitAndStyle(maxTries = 150, intervalMs = 200) {
  let tries = 0
  const timer = setInterval(() => {
    const form = document.querySelector(SELECTOR)
    if (form) {
      clearInterval(timer)
      // если это iframe — ждём загрузку (на всякий случай)
      if (form.tagName === 'IFRAME') {
        if (form.complete) applyStyles(form)
        else form.addEventListener('load', () => applyStyles(form), { once: true })
      } else {
        applyStyles(form)
      }
    } else if (++tries >= maxTries) {
      clearInterval(timer)
      console.warn('AMO-форма не найдена по селектору:', SELECTOR)
    }
  }, intervalMs)
})()
