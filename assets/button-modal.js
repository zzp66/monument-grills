
  document.addEventListener("DOMContentLoaded", (e) => {
    const myOpenbtn = document.getElementById('openModal');
    const myCountdownBtn = document.getElementById('countdown_btn');
    const myCloseBtn = document.getElementById('close_btn');
    
    myOpenbtn.addEventListener("click", () => {
       var countdownDuration = 10;
        var display = document.querySelector('#countdown');
        var modal = document.querySelector('.register_modal');
        if (modal.hasAttribute('open')) {
          startCountdown(countdownDuration, display);
        };
        myCountdownBtn.setAttribute("disabled", true);
        e.stopPropagation();
        // startCountdown(countdownDuration, display);
    });

    myCountdownBtn.addEventListener("click", (e) => {
      console.log('aaaa ' + e)
       myCountdownBtn.style.display = 'none';
       var iframeBox = document.querySelector('.modal__content>.iframe-form');
       var pBox = document.querySelector('.modal__content>.normal-des');
       var closeBtn = document.querySelector('.js-close-modal'); 
      
       iframeBox.classList.remove('modal-hide');
       closeBtn.classList.remove('modal-hide');
       pBox.classList.add('modal-hide');
      
       // document.querySelector('.modal__header>h3').innerHTML = 'Fill the Warranty Request Form';
       e.stopPropagation();
    });

    myCloseBtn.addEventListener("click", (e) => {
        var iframeBox = document.querySelector('.modal__content>.iframe-form');
        var pBox = document.querySelector('.modal__content>.normal-des');

        iframeBox.classList.add('modal-hide');
        pBox.classList.remove('modal-hide');
        myCountdownBtn.style.display = 'block';
        // myOpenbtn.setAttribute("disabled", true);
    });
  });
  
  function startCountdown(duration, display) {
    var timer = duration, seconds;
    var countdownInterval = setInterval(function () {
      seconds = parseInt(timer % 60, 10);
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = 'Please Read the Terms, Time Left: ' + seconds + 's.';
      display.style.textTransform = 'none';

      if (--timer < 0) {
        clearInterval(countdownInterval);
        document.querySelector('#countdown_btn').removeAttribute('disabled');
        display.textContent = 'Next, Confirm and Fill in the Form';
      }   
    }, 1000);
};
