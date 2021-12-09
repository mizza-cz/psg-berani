$(function(){
  $('.homepage-video__player, .homepage-video__item a').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

   $('select, .shop__check').styler();
   $('.mob-menu').on('click', function () {
      $(this).closest('.mob-menu').toggleClass('active');
      $('.navbar').slideToggle();
    });


    $('.navbar__menu-item').on('click', function () {
      $(this).closest('.navbar__menu-list').toggleClass('active');
    });


    $('.tabs__wrapper .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.tabs__wrapper').find('.tab__content').removeClass('tab-active').hide();
      $('.tabs__wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id)
        .addClass('tab-active')
        .fadeIn();
      return false;
    });


 $('.article-slider').slick({
  variableWidth:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '64px',
  prevArrow: '<button class="article-slider__btn article-slider__btnprev"><img src="images/svg/angle-left.svg" alt="" ></button> ',
  nextArrow: ' <button class="article-slider__btn  article-slider__btnnext"><img src="images/svg/angle-right.svg" alt = "" ></button>',
  asNavFor: '.article-nav__inner',
  responsive: [{
    breakpoint: 1061,
    settings: {
      centerPadding: '0',
      slidesToShow: 1,
      centerMode: false,
      variableWidth:false,
    },
    breakpoint: 941,
    settings: {
      // arrows: false,
      centerPadding: '0',
      slidesToShow: 1,
      centerMode: false,
      variableWidth:false,
      autoplay: true,
    },
    breakpoint: 571,
    settings: {
      arrows: false,
      centerPadding: '0',
      slidesToShow: 1,
      centerMode: false,
      variableWidth:false,
      autoplay: true,
    },

  }]
});
$('.article-nav__inner').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.article-slider',
  dots: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '0px',
});
var _gallery_loading = false;

$('a[data-gallery]').click(function () {
  if (_gallery_loading) return;
  _gallery_loading = true;

  var mode = $(this).data('gallery');
  var url = '/inc/gallery_ajax.asp?mode=' + mode;

  if (mode == 1 || mode == 2) {
    url += '&id=' + $(this).data('gallery-id');
  }

  $.getJSON(url, { format: 'json' })
    .done(function (e) {
      $(this).lightGallery({
        hash: false,
        share: false,
        dynamic: true,
        dynamicEl: e,
        download: false,
        backdropDuration: 500,
      });
    })
    .fail(function (e, textStatus, error) {
      alert('Nastala chyba při načítání galerie. Prosím zkuste to znovu.');
      console.error('getJSON failed, status: ' + textStatus + ', error: ' + error);
      console.error(e);
    })
    .always(function () {
      _gallery_loading = false;
    });

  return false;
});
})

