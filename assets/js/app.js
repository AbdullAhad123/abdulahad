const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
}),
  document.addEventListener("click", (e) => {
    cursor.classList.add("expand"),
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
  });

function toggleMouseIcon() {
  const scrolled = $(window).scrollTop();
  if (scrolled >= 100) {
    $(".scrollDownMouse").fadeOut();
  } else {
    $(".scrollDownMouse").fadeIn();
  }
}
window.addEventListener("scroll", toggleMouseIcon);
