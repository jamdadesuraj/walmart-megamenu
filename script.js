// --------change category on hover
$(".main_menu>nav>ul>li").hover(function () {
  var mega_Menu_Height = $(".shop-category>li")
    .find(".shop-mega-menu")
    .height();
  var containerHeight = $(".shop-category>li")
    .parents(".shop-category-contain")
    .height();
  if (mega_Menu_Height > containerHeight) {
    $(".shop-category>li")
      .parents(".shop-category-contain")
      .height(mega_Menu_Height);
  } else {
    $(".shop-category>li")
      .parents(".shop-category-contain")
      .height(containerHeight);
  }
});

$(".shop-category>li").hover(function () {
  $(".shop-category>li.active").removeClass("active");
  $(".shop-mega-menu.hover").removeClass("hover");
  $(this).parents(".shop-category-contain").attr("style", "");
  $(this).addClass("active");
  $(this).find(".shop-mega-menu").addClass("hover");
  var mega_Menu_Height = $(".shop-category>li.active")
    .find(".shop-mega-menu.hover")
    .height();
  var containerHeight = $(this).parents(".shop-category-contain").height();

  if (mega_Menu_Height > containerHeight) {
    $(this).parents(".shop-category-contain").height(mega_Menu_Height);
    $(this).find(".shop-menu > ul").height(mega_Menu_Height);
  } else {
    $(this).parents(".shop-category-contain").height(containerHeight);
    $(this).find(".shop-menu > ul").height(containerHeight);
  }
});

$(window).load(function () {
  var mega_Menu_Height = $(".shop-category>li.active")
    .find(".shop-mega-menu.hover")
    .height();
  var containerHeight = $(".shop-category>li")
    .parents(".shop-category-contain")
    .height();
  if (mega_Menu_Height > containerHeight) {
    $(".shop-category>li")
      .parents(".shop-category-contain")
      .height(mega_Menu_Height);
  } else {
    $(".shop-category>li")
      .parents(".shop-category-contain")
      .height(containerHeight);
  }
});
