

window.onload = function() {
    var fileInput = document.getElementById('editEbook-file-input');
    var imageContainer = document.getElementById('imageContainer');
    var deleteButton = document.getElementById('deleteButton');

    var editEbookBtn = document.querySelector('#editEbook-modal-btn-insert');
  
    editEbookBtn.addEventListener('click', function(){
        editEbookBtn.style.display = 'none';
        deleteButton.style.display = 'block';
    });
    
    fileInput.addEventListener('change', function(event) {

      var file = event.target.files[0];
  
      if ((file && file.type === 'image/jpeg') || file && file.type ==='image/png') {
        var reader = new FileReader();
  
        reader.onload = function() {
          var image = document.createElement('img');
          image.src = reader.result;
          imageContainer.innerHTML = '';
          imageContainer.appendChild(image);
        };
  
        reader.readAsDataURL(file);
      }


      deleteButton.disabled = false;


      deleteButton.addEventListener('click', function() {
        this.style.display = 'none';
        editEbookBtn.style.display = 'block';
        fileInput.value = '';
        deleteButton.disabled = true;
      });

      if(this.value){
        console.log('jfdf')
      }




    });





};

