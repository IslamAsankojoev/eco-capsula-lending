function showSuccessPopup() {
  const successPopup = document.querySelector(".success-popup")
  successPopup.classList.add("active")
}

function closeSuccessPopup() {
  const successPopup = document.querySelector(".success-popup")
  successPopup.classList.remove("active")
}

window.addEventListener("message", (event) => {
  if (event.origin.includes("amocrm.ru")) {
    const data = JSON.parse(event.data)
    if (data.func === "amoformsSuccessSubmit") {
      showSuccessPopup()
    }
  }
});