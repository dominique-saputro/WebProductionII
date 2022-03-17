{
    const navButton = document.querySelector('.navButton');
    const topNav = document.querySelector('.topNav');
    
    navButton.addEventListener( 'click' , function(){
      navButton.classList.toggle('active');
      topNav.classList.toggle('open');
    });
    
  }