// Controls: 
// Strafe-left : arrow-left
// Strafe-right: arrow-right
// Move-Down: arrow-down
// Move-Up: arrow-up


box = document.querySelector('#player')

movementSpeed= 10;
y_motion=0;
x_motion=0;

document.addEventListener('keydown', (event)=> {
    event.preventDefault()
    if(event.key.startsWith('Arrow')){
        changeState();
        switch (event.key){
            case "ArrowUp":
                y_motion-=movementSpeed;
                break;
            case "ArrowDown":
                y_motion+=movementSpeed;
                break;
            case 'ArrowLeft':
                x_motion-=movementSpeed;
                break;
            case 'ArrowRight':
                x_motion+=movementSpeed;
                break;
        }

        box.style.top=`${y_motion}px`
        box.style.left= `${x_motion}px`
    }
})

document.addEventListener('keyup', (event)=>{
        revertState();
})


function changeState(){
    box.style.backgroundColor="red";
    box.textContent="😨"
    
}
function revertState(){
    box.style.backgroundColor="lightgreen";
    box.textContent="🙂"
    
}