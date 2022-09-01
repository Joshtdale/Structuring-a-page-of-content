console.log('script working');

let darkMode = document.getElementById('darkMode');

const elements = document.querySelectorAll('.element')
darkMode.addEventListener('click', () => {
    console.log('clicked')

elements.forEach(element => {
    element.style.backgroundColor = 'grey';
    element.style.color = 'white';

  });


//    if(element.style.backgroundColor === '#00ff0080') {
//      const element = document.getElementById('element')
    
// element.style.backgroundColor = 'grey';
//    } else{
//     element.style.backgroundColor = '#00ff0080'

//    }



    // if(document.html.style.backgroundColor === '#a9a9a9')
    // document.main.style.backgroundColor = 'black'
});