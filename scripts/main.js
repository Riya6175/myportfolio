// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000,
  //disable: 'mobile'
});

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  horizontalOrder: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  


// Add your javascript here
document.addEventListener('DOMContentLoaded', () => {

  const themeStylesheet = document.getElementById('theme');
  const themeToggle = document.getElementById('theme-toggle');
  themeStylesheet.href = 'css/main.css';
  themeToggle.addEventListener('click', () => {
      // if it's light -> go dark
      if(themeStylesheet.href.includes('main')){
        $("button").click(function(){
          $(this).find("i").removeClass("fa-moon").addClass("fa-sun")
          themeStylesheet.href = 'css/dark-theme.css';
          
      });
      } else {
        $("button").click(function(){
          $(this).find("i").removeClass("fa-sun").addClass("fa-moon")
          themeStylesheet.href = 'css/main.css';
      });
      }
  })
})
