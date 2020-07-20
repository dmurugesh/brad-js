document.querySelector('.clear-tasks').addEventListener('click', function(e){
console.log('hello World');
// e.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // console.log('clicked');

    let val;

    val = e;

    //Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // e.target.innerText = 'Hellow';

    // Event type
    val = e.type;

    // Time Stamp
    val = e.timeStamp;

    //Coords event relaative to window
    val = e.clientX;
    val = e.clientY;

    //Coords event relavtive to element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
} 