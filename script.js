const btnEl = document.getElementById("generate-btn");
const inputEl = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert");

btnEl.addEventListener("click", () => {
    CreatePassword();
});

copyIcon.addEventListener("click", () => {
    if (inputEl.value !== "") {
        navigator.clipboard.writeText(inputEl.value);

        alertEl.classList.add("active");

        setTimeout(() => {
            alertEl.classList.remove("active");
        }, 2000);
    }
});

function CreatePassword(){
    const chars = "012345679QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()";
    const passwordLength = 14;
    let password = "";

    for(let i = 0; i < passwordLength; i++){
        const randomPassword = Math.floor(Math.random() * chars.length);
        password += chars[randomPassword];
    }

    inputEl.value = password;
}
