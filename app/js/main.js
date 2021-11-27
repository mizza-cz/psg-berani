$(function(){
   $('.mob-menu').on('click', function () {
      $(this).closest('.mob-menu').toggleClass('active');
      $('.navbar').slideToggle();
    });
    $('.navbar__menu-item').on('click', function () {
      $(this).closest('.navbar__menu-list').toggleClass('active');
    });
})