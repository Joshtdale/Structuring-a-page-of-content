console.log('script working');

let darkMode = document.getElementById('darkMode');

let headerText = document.getElementsByClassName('headerText')




const elements = document.querySelectorAll('.element')

darkMode.addEventListener('click', () => {
    // event.preventDefault();
    for (var element of elements) {
    if (element.classList.contains('dark')) {
    element.classList.remove('dark');
    } else {
    element.classList.add('dark');
    }
}
});


// console.log(darkMode)
// darkMode.addEventListener('click', () => {
//     console.log('clicked')

// elements.forEach(element => {
    
//     element.style.backgroundColor = 'grey';
//     element.style.color = 'white';
//     // headerText.style.color = 'white';
// });


// event.target.classList.add('dark')

//   doesn't work
//   elements.forEach(element => {
//     if(element.style.backgroundColor === '#00ff0080') {
//     element.style.backgroundColor = '#ff0000';
//     element.style.color = 'white';
//     // headerText.style.color = 'white';
//     }  else {
//         element.style.backgroundColor = '#00ff0080';
//     element.style.color = '#2a2a2a';
//     };
// });

//    if(element.style.backgroundColor === '#00ff0080') {
//      const element = document.getElementById('element')
    
// element.style.backgroundColor = 'grey';
//    } else{
//     element.style.backgroundColor = '#00ff0080'

//    }



    // if(document.html.style.backgroundColor === '#a9a9a9')
    // document.main.style.backgroundColor = 'black'
// });