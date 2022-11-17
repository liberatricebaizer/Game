const body = document.querySelector(".body");
const block = document.querySelector(".block");

function jump() {
  if (body.classList != "animate") {
    body.classList.add("animate");
  }
  setTimeout(function () {
    body.classList.remove("animate");
  }, 500);
}

const checkdead = setInterval(function () {
  const bodyTop = parseInt(
    window.getComputedStyle(body).getPropertyValue("top")
  );

  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && bodyTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("u lose");
  }
}, 10);
