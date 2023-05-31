
const myPopup = document.getElementById("myPopup");
const closePopup = document.querySelector(".close-pop-up");
const myPopupText = document.querySelector('.popup p')



const ebookFileInputActivePopup = document.querySelector('#ebook-file-input');



ebookFileInputActivePopup.addEventListener('change',function(){
    if(this.value){
        myPopup.style.display = "block";
        myPopupText.textContent = 'Inseriu o Arquivo'
        myPopup.style.backgroundColor = '#47d72f';
        setTimeout(function() {
          myPopup.style.top = "10px";
        }, 100);
        setTimeout(function() {
          myPopup.style.top = "-50px";
          setTimeout(function() {
            myPopup.style.display = "none";
          }, 500);
        }, 3000);

    }else {
        myPopup.style.display = "block";
        myPopup.style.backgroundColor = '#ff0000';
        myPopupText.textContent = 'Erro, algo inexperado aconteceu!'
        setTimeout(function() {
          myPopup.style.top = "10px";
        }, 100);
        setTimeout(function() {
          myPopup.style.top = "-50px";
          setTimeout(function() {
            myPopup.style.display = "none";
          }, 500);
        }, 3000);

    }
});



closePopup.addEventListener("click", function() {
  myPopup.style.top = "-50px";
  setTimeout(function() {
    myPopup.style.display = "none";
  }, 500);
});

window.addEventListener("click", function(event) {
  if (event.target === myPopup) {
    myPopup.style.top = "-50px";
    setTimeout(function() {
      myPopup.style.display = "none";
    }, 500);
  }
});



