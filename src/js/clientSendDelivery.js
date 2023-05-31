// const requestBtn = document.querySelectorAll(".request-btn");



const clickDelivery = function(requestListPosition){
    
    let requestList = document.querySelectorAll('.request-list');
   
    
    if(requestList[requestListPosition].style.display == 'none'){
        requestList[requestListPosition].style.display = 'block';
    }else {
        requestList[requestListPosition].style.display = 'none';
    }

}

// const closeOpenBtn = function(btn, position){
//     btn[position].addEventListener('click', function(){
//         if(requestList[position].style.display == 'none'){
//             requestList[position].style.display = 'block';
//         }else {
//             requestList[position].style.display = 'none';
    
//         }

//     })
// }

// closeOpenBtn(requestBtn, 0)
// closeOpenBtn(requestBtn, 1)
// closeOpenBtn(requestBtn, 2)
// closeOpenBtn(requestBtn, 3)
