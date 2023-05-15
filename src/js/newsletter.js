
const sendNewsletterNoBtn = document.querySelector('#newsletter-modal-btn-no');
const backwordArctiveBtn = document.querySelector('#newsletter-modal-btn-back')


const sendEmailBtn = document.querySelector('#send-newsletter-email')

const archive = document.querySelector('#add-newsletter-archive')



  



const sendEmail = function(){
    modalGray.style.display = 'block';
    modalBox.style.display = 'block';
    

}



sendNewsletterNoBtn.addEventListener('click', function(){
    modalGray.style.display = 'none';
    modalBox.style.display = 'none';
   
   

})


backwordArctiveBtn.addEventListener('click', function(){
    modalGrayArchive.style.display = 'none';
    modalBoxArchive.style.display = 'none';

})