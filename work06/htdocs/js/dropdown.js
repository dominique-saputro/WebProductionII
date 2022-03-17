{
    const menu = document.querySelector('.menu');
    const topNav = document.querySelector('.topNav')
    const dropdown = document.querySelector('.dropdown');
    
    menu.addEventListener( 'click' , function(){
      topNav.classList.toggle('active');
      dropdown.classList.toggle('open');
    });
    
  }