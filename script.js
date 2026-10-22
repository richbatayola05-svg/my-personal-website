const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message was received by this demo form.";

    form.reset();
});