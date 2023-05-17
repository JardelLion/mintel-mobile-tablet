const ebookFileInput = document.querySelector('#ebook-file-input');
const ebookBtnArchive = document.querySelector('#ebook-modal-btn-insert');
const ebookFileName = document.querySelector('#ebook-file-name');

const modalBoxArchiveTitle = document.querySelector('.modal-box-archive .modal-box-content h3')

let regEx = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\, \$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;  //[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+%;



ebookBtnArchive.addEventListener('click', function(){
    ebookFileInput.click()
})





ebookFileInput.addEventListener('change', function(){

    if(this.value){
        let nameValue = this.value.match(regEx);
        ebookFileName.textContent = nameValue;
        ebookFileName.style.fontSize = '12px';
        modalBoxArchiveTitle.textContent = 'Já inseriu o arquivo'
       

       
        
        
        
    
    }
    else {
        ebookFileName.textContent = "No file chosen";
    
      

    }
})

