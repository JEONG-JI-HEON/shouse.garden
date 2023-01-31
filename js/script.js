var swiper = new Swiper(".slide_wrap", {
  // spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    /* 도트모양 타입변경 (swiper API 참조) */
    clickable: true,
  },
  navigation: {
    nextEl: ".slide_next",
    prevEl: ".slide_prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: false,
});



$(function() {
  $('.fir_sec .tab_wrap>ul>li').click(function() {
      var activeTab = $(this).attr('data-tab');
      $('.fir_sec .tab_wrap>ul>li').removeClass('green_active');
      $('.fir_sec .lst_gallery.tab_cont').removeClass('active');
      $(this).addClass('green_active');
      $('#' + activeTab).addClass('active');
  })
});

$(function() {
  $('.sec_sec .tab_wrap>ul>li').click(function() {
      var activeTab = $(this).attr('data-tab');
      $('.sec_sec .tab_wrap>ul>li').removeClass('green_active');
      $('.sec_sec .lst_gallery.tab_cont').removeClass('active');
      $(this).addClass('green_active');
      $('#' + activeTab).addClass('active');
  })
});

$(function() {
  $('.trd_sec .tab_wrap>ul>li').click(function() {
      var activeTab = $(this).attr('data-tab');
      $('.trd_sec .tab_wrap>ul>li').removeClass('green_active');
      $('.trd_sec .rank_users.tab_cont').removeClass('active');
      $(this).addClass('green_active');
      $('#' + activeTab).addClass('active');
  })
});