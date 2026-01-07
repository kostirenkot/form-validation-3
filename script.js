document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let msg = document.getElementById("message");

    // Перевірка на порожні поля
    if(name === "" || email === "" || pass === "" || confirm === ""){
        msg.textContent = "Усі поля повинні бути заповнені!";
        return;
    }

    // Перевірка email
    if(!email.includes("@")){
        msg.textContent = "Некоректний email!";
        return;
    }

    // Перевірка довжини пароля
    if(pass.length < 6){
        msg.textContent = "Пароль повинен містити мінімум 6 символів!";
        return;
    }

    // Перевірка співпадіння паролів
    if(pass !== confirm){
        msg.textContent = "Паролі не співпадають!";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "Реєстрація успішна!";
});