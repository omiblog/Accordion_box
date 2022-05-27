let listElements = document.querySelectorAll('.link');

listElements.forEach(user =>{
    user.addEventListener('click', () =>{
        if(user.classList.contains('active')){
            user.classList.remove('active');
        }else{
            listElements.forEach(listE => {
                listE.classList.remove('active');
            })
            user.classList.toggle('active');
        }
    })
});


// let listElements = document.querySelectorAll('.link');

// listElements.forEach(listElement => {
//     listElement.addEventListener('click', ()=>{
//         if (listElement.classList.contains('active')){
//             listElement.classList.remove('active');
//         }else{
//             listElements.forEach (listE => {
//                 listE.classList.remove('active');
//             })
//             listElement.classList.toggle('active');
//         }
//     })
// });