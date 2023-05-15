const ebookBtnInsert = document.querySelector('#ebook-btn-insert')

const ebookInput = document.querySelector('#ebook-file-input');

const fileName = document.querySelector('.archive-file');

const ebookPopRed = document.querySelector('.modal-ebook-pop-up');

const ebookPopGreen = document.querySelector('.modal-ebook-pop-up--green');

const menuBtn = document.querySelector('#menu__burger')
const headerTitle = document.querySelector('.mintel-title');



let regEx = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\, \$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;  //[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+%;





ebookBtnInsert.addEventListener('click', function(){
    ebookInput.click()

})





ebookInput.addEventListener('change', function(){

    if(this.value){
        let nameValue = this.value.match(regEx);
        fileName.textContent = nameValue;
        fileName.style.fontSize = '12px';
        ebookPopGreen.style.display = 'block';
        ebookPopRed.style.display = 'none';
        
        
        
    
    }
    else {
        fileName.textContent = "No file chosen";
        ebookPopRed.style.display = 'block';
        ebookPopGreen.style.display = 'none';
      

    }
})











