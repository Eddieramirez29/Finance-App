const registerNextForm = document.getElementById("registerNextForm");
const registerLogIn = document.getElementById("registerLogIn");
const registerRegister = document.getElementById("registerRegister");
const nameLabel = document.getElementById("nameLabel");
const name = document.getElementById("name");
const noAccountLabel = document.getElementById("noAccountLabel");


registerNextForm.addEventListener("click", () =>
{
    nameLabel.style.display = "flex";
    name.style.display = "flex";
    registerRegister.style.display = "flex";
    registerLogIn.style.display = "none";
    registerNextForm.style.display = "none";
    noAccountLabel.style.display = "none";
})