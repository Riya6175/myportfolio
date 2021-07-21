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
  const iconToggle = document.getElementById('dark');
  themeToggle.addEventListener('click', () => {
      // if it's light -> go dark
      if(themeStylesheet.href.includes('main')){
          themeStylesheet.href = 'css/dark-theme.css';
          iconToggle.classList.remove('fa-moon');
          iconToggle.classList.add('fa-sun');
      } else {
          // if it's dark -> go light
          themeStylesheet.href = 'css/main.css';
          iconToggle.classList.remove('fa-sun');
          iconToggle.classList.add('fa-moon');

      }
  })
})

