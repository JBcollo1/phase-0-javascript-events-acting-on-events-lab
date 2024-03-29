// Your code here
let dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"
function moveDodgerLeft() {
   
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
}}
    
   

function moveDodgerRight(){
   
    const rightNumber = dodger.style.left.replace("px","");
    const right = parseFloat(rightNumber, 10);

    if(right > 0) {
        dodger.style.left = `${right + 1}px`
    }}


moveDodgerLeft()
moveDodgerRight()



// function moveDodgerLeft() {
    document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  })    
     document.addEventListener("keydown", function (event){
        if (event.key ==="ArrowRight"){
            const rightNumber = dodger.style.left.replace("px", "");
            const right = parseInt(rightNumber, 10);

            dodger.style.left = `${left + 1}px`;
        }
     })