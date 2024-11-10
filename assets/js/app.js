$(".featuredProjectBanner").on("mouseover mouseenter", function () {
  const image = $(this).find("img");
  const image_height = image.height();
  image.css("transform", "translateY(-" + (image_height - 450) + "px)");
});

$(".featuredProjectBanner").on("mouseleave", function () {
  const image = $(this).find("img");
  image.css("transform", "translateY(0)");
});