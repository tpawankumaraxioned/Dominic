$(document).ready(function(){ 
  // slider starts here
  $('.slider-list').slick({
    dots: false,
    arrow: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 995,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        }
      }
    ] 
  });
  // slider ends here
})

var navBtn = document.querySelectorAll('nav ul li a');
navBtn.forEach(function(e) {
  e.addEventListener('click', function(){
    navBtn.forEach(function(ev){
      ev.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Navigation menu active ends here
// Hamburger menu starts here
var hamburger, menuList; 

hamburger = document.getElementById('hamburger');
menuList = document.getElementById('main_menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('is-active');
  menuList.classList.toggle('active');
  document.querySelector('html').classList.toggle('menu-open');
});

window.addEventListener("resize", fixMobileMenu);

function fixMobileMenu() {
  var widthSize = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (widthSize >= 995){ 
    hamburger.classList.remove('is-active');
    menuList.classList.remove('active');
    document.querySelector('html').classList.remove('menu-open');
  }
}
// Hamburger menu ends here
// Scroll top starts here
$(".up-arrow").on("click", function() {
  $("body,html").animate({
    scrollTop: 0
  }, 2000)
})
// Scroll top ends here
// Filter, active Menu function starts here

btnList = document.querySelectorAll('.filter-menu-btn');

btnList.forEach(function(a){
  a.addEventListener('click', function() {
    resetActiveBtn();
    a.classList.add('filter-menu-btn-active');
    var dataFilter = document.querySelector('.filter-menu-btn-active').getAttribute('data-filter');
    var gridItem = document.querySelectorAll('.'+dataFilter);
    gridItemList(gridItem);
  });
});

function resetActiveBtn() {
  btnList.forEach(function(e) {
    e.classList.remove('filter-menu-btn-active');
  });
}

function gridItemList(list) {
  var gridItemList1 = document.querySelectorAll('.grid-item');
  var dataFilter = document.querySelector('.filter-menu-btn-active').getAttribute('data-filter');
  if(dataFilter == 'all'){
    gridItemList1.forEach(function(list) { 
      list.style.display = "inline-block";
    });
  } 
  else {
    gridItemList1.forEach(function(list) { 
      list.style.display = "none";
    });
    list.forEach(function(ev) {
      ev.style.display = "inline-block";
    });
  }
}

// Filter, active Menu function ends here