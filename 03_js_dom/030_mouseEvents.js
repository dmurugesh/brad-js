const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
// clearBtn.addEventListener('click', runEvent);
//Double Click 
// clearBtn.addEventListener('dblclick', runEvent);


//Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);
//Mouse up
// clearBtn.addEventListener('mouseup', runEvent);
//Mouseenter
// clearBtn.addEventListener('mouseenter', runEvent);
//Mouse Levae
// clearBtn.addEventListener('mouseleave', runEvent);
//Mouse out
// clearBtn.addEventListener('mouseout', runEvent);
//Mouse over
// clearBtn.addEventListener('mouseover', runEvent);
// Mouse move 
card.addEventListener('mousemove', runEvent);

//Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)
   heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;  

   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 30)`;
}
