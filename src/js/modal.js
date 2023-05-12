const modalGray = document.querySelector('.modal-gray');
const modalGrayArchive = document.querySelector('.modal-archive-gray');

const modalBox = document.querySelector('.modal');
const modalBoxArchive = document.querySelector('.modal-archive');


const sendNewsletterNoBtn = document.querySelector('#newsletter-modal-btn-no');
const backwordArctiveBtn = document.querySelector('#newsletter-modal-btn-back')


const sendEmailBtn = document.querySelector('#send-newsletter-email')

const archive = document.querySelector('#add-newsletter-archive')



  



const sendEmail = function(){
    modalGray.style.display = 'block';
    modalBox.style.display = 'block';
    

}

const clickArchive = function(){
    modalGrayArchive.style.display = 'block';
    modalBoxArchive.style.display = 'block';
}

sendNewsletterNoBtn.addEventListener('click', function(){
    modalGray.style.display = 'none';
    modalBox.style.display = 'none';
   
   

})


modalBox.addEventListener('click', function(){
    console.log('jardel')
})


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


backwordArctiveBtn.addEventListener('click', function(){
    modalGrayArchive.style.display = 'none';
    modalBoxArchive.style.display = 'none';

})