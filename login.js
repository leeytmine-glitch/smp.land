const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "" || password === "") {
    message.textContent = "لطفاً همه فیلدها را پر کن!";
    message.style.color = "red";
    return;
  }

  message.textContent = "خوش آمدی! در حال ورود...";
  message.style.color = "#27e87b";

  setTimeout(function () {
    window.location.href = "home.html";
  }, 700);
});
