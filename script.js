const button = document.querySelector("button")
const input = document.querySelector("input")
input.addEventListener("input", () => {
    button.setAttribute("onclick","https://www.google.com/search?q=" + input.value)
})
button.addEventListener("click", () => {
    location.href = `https://www.google.com/search?q=${document.querySelector("input").value}`;
})
