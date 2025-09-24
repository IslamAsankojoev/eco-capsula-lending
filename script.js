function showSuccessPopup() {
  const successPopup = document.querySelector(".success-popup")
  window.location.href = "success.html"
}

function closeSuccessPopup() {
  const successPopup = document.querySelector(".success-popup")
  window.location.href = "index.html"
}

window.addEventListener("message", (event) => {
  if (event.origin.includes("amocrm.ru")) {
    const data = JSON.parse(event.data)
    if (data.func === "amoformsSuccessSubmit") {
      showSuccessPopup()
    }
  }
});