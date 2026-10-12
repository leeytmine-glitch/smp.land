const serverIP = "py.ampland.ir";

const copyButton = document.getElementById("copyIP");
const copyMessage = document.getElementById("copyMessage");

if (copyButton && copyMessage) {
  copyButton.addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(serverIP);
      copyMessage.textContent = "✅ آدرس سرور کپی شد!";
    } catch (error) {
      copyMessage.textContent = "آدرس سرور: " + serverIP;
    }
  });
}

const rankButtons = document.querySelectorAll(".buy-btn");

rankButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const rank = button.getAttribute("rank-name");
    if (rank) {
      console.log("رنک انتخاب‌شده: " + rank);
    }
  });
});
