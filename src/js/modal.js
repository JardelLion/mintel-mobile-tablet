const modalGray = document.querySelector('.modal-gray');
const modalBox = document.querySelector('.modal-box');


const modalGrayArchive = document.querySelector('.modal-gray-archive');
const modalBoxArchive = document.querySelector('.modal-box-archive');





const clickArchive = function(){
    modalGrayArchive.style.display = 'block';
    modalBoxArchive.style.display = 'block';
}






modalGray.addEventListener('click', function(){
    if(this.style.display == 'none'){
        this.style.display = 'block';
        modalBox.style.display = 'block';
    } else {
        this.style.display = 'none';
        modalBox.style.display = 'none';
    }
      
    }) 



modalGrayArchive.addEventListener('click', function(){
    if(this.style.display == 'none'){
        this.style.display = 'block';
        modalBoxArchive.style.display = 'block';
    } else {
        this.style.display = 'none';
        modalBoxArchive.style.display = 'none';
    }
      
    }) 


