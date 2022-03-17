const square=document.querySelectorAll('.hidden')

const myScore=document.getElementById('score')



// Loop to remplair my squares
for(let i=0;i<16;i++){
        square[i].innerHTML=" "
       
}
// Simple winner function
function winner(){
  for(let i=0;i<16;i++){
    if(square[i].innerHTML == 2048){
      var element = document.querySelector(".grid_container");
      element.classList.add('game-over');

      square.forEach(taco=>{
        taco.remove('hidden')
       
      }
      )
      document.removeEventListener('keyup', myControl)
     
    }
  }
}

// Colors for each Numbers
function colours() {
  for (let i=0; i < 16; i++) {
   
    if (square[i].innerHTML == " ") {
      square[i].style.backgroundColor = 'white'
    }
    else if (square[i].innerHTML == 2) {
      square[i].style.backgroundColor = 'green'
    }
      else if (square[i].innerHTML  == 4) {
        square[i].style.backgroundColor = 'yellow' 
      }
      else if (square[i].innerHTML  == 8) {
        square[i].style.backgroundColor = 'red' 
      }
      else if (square[i].innerHTML  == 16){ 
        square[i].style.backgroundColor = 'blue'
     }
      else if (square[i].innerHTML  == 32) {
        square[i].style.backgroundColor = '#d98243' 
      }
      else if (square[i].innerHTML  == 64) {
        square[i].style.backgroundColor = '#00ffe7' 
      }
      else if (square[i].innerHTML == 128) {
        square[i].style.backgroundColor = '#efc668' 
      }
      else if (square[i].innerHTML == 256) {
        square[i].style.backgroundColor = '#79567f' 
      }
      else if (square[i].innerHTML == 512) {
        square[i].style.backgroundColor = '#f8a78e' 
      }
      else if (square[i].innerHTML == 1024) {
        square[i].style.backgroundColor = '#6233a8' 
      }
      else if (square[i].innerHTML == 2048) {
        square[i].style.backgroundColor = '#ff97ba' 
      }
    
  }
}
// Generate the Number 2 
let score=0
function generate(){
    let randomNumber=Math.floor(Math.random()*16)
    if(square[randomNumber].innerHTML==" "){
        square[randomNumber].innerHTML=2
         myScore.innerHTML=score
     
    }else generate()
   
   colours()

} 
generate()
generate()
colours()

// Swipe Right

function goRight() {
    for (let i=0; i < 16; i++) {
      if (i % 4 === 0) {
        let myArray = [square[i].innerHTML, square[i+1].innerHTML, square[i+2].innerHTML, square[i+3].innerHTML]
        myArray=myArray.map(num=>Number(num))  //convert my string to number
        console.log(myArray)
        // go evreything if not a zero
        let myFilter = myArray.filter(val => val)  //takes any value without zero
    
        let missing = 4 - myFilter.length
        let zeros = Array(missing).fill(" ")
        let newArray = zeros.concat(myFilter)
        
        square[i].innerHTML = newArray[0]
        square[i +1].innerHTML = newArray[1]
        square[i +2].innerHTML = newArray[2]
        square[i +3].innerHTML = newArray[3]
        
       
      }
    }

  }

  //Swipe left
  function goLeft() {
    for (let i=0; i < 16; i++) {
      if (i % 4 === 0) {
        let myArray = [square[i].innerHTML, square[i+1].innerHTML, square[i+2].innerHTML, square[i+3].innerHTML]
        myArray=myArray.map(num=>Number(num))  //convert my string to number
        console.log(myArray)
        // go evreything if not a zero
        let myFilter = myArray.filter(val => val)  //takes any value without zero
    
        let missing = 4 - myFilter.length
        let zeros = Array(missing).fill(" ")
        let newArray = myFilter.concat(zeros)

        square[i].innerHTML = newArray[0]
        square[i +1].innerHTML = newArray[1]
        square[i +2].innerHTML = newArray[2]
        square[i +3].innerHTML = newArray[3]
       
      }
    }

  }
  //Swipe Up
  function goUp() {
    for (let i=0; i <4; i++) {
     
      let myArray = [square[i].innerHTML, square[i+4].innerHTML, square[i+8].innerHTML, square[i+12].innerHTML]
      myArray=myArray.map(num=>Number(num))  //convert my string to number
      // go evreything if not a zero
      let myFilter = myArray.filter(val => val)  //takes any value without zero
     
      let missing = 4 - myFilter.length
      let zeros = Array(missing).fill(" ")
      let newArray = myFilter.concat(zeros)
      // console.log(newArray)
 
      square[i].innerHTML = newArray[0]
      square[i +4].innerHTML = newArray[1]
      square[i +8].innerHTML = newArray[2]
      square[i +12].innerHTML = newArray[3]
    
       
      }

    }

//Swipe Down
    function goDown() {
        for (let i=0; i <4; i++) {
          
          let myArray = [square[i].innerHTML, square[i+4].innerHTML, square[i+8].innerHTML, square[i+12].innerHTML]
          myArray=myArray.map(num=>Number(num))  //convert my string to number
          // go evreything if not a zero
          let myFilter = myArray.filter(val => val)  //takes any value without zero
         
          let missing = 4 - myFilter.length
          let zeros = Array(missing).fill(" ")
          let newArray = zeros.concat(myFilter)
          // console.log(newmyArray)
      
          square[i].innerHTML = newArray[0]
          square[i +4].innerHTML = newArray[1]
          square[i +8].innerHTML = newArray[2]
          square[i +12].innerHTML = newArray[3]
        
           
          }

        }
       
 
 // My KeyPress Control 


function myControl(e){
loser()
    if (e.key == "d"){
        keyRight()
    }if (e.key == "a"){
        keyLeft()
    }
	if (e.key == "s"){
        keyDown()

    } 
	if (e.key == "w"){
        keyUp()
    }
}
// KeyRight Control
function keyRight(){
    goRight()
    addNumber1()
    goRight()
    generate()
   
}
// KeyLeft Control
function keyLeft(){
    goLeft()
    addNumber1()
    goLeft()
    generate()
   
  
}
// KeyDown Control
function keyDown(){
    goDown()
    addNumber2()
    goDown()
    generate()
    
  
}
// KeyUp Control
function keyUp(){
    goUp()
    addNumber2()
    goUp()
    generate()
  
    
}
// My Event 
document.addEventListener('keyup',myControl)
function loser(){
  if(!addNumber1 && !addNumber2 !==true){
    alert('yououj')
  }
}

// combine my row numbers
function addNumber1() {

  for (let i =0; i < 15; i++) {
       let a=square[i]
       let b=square[i+1]
    if (a.innerHTML === b.innerHTML) {
      let total = Number(a.innerHTML) + Number(b.innerHTML)
      a.innerHTML = total
      b.innerHTML = 0
      score=score+total;
     
    }
   
  }
 
  winner()
}

// combine my column numbers
function addNumber2() {

  for (let i =0; i < 12; i++) {
    let a=square[i]
    let b=square[i+4]
    if (a.innerHTML === b.innerHTML) {
      let total = Number(a.innerHTML) + Number(b.innerHTML)
      a.innerHTML = 0
      b.innerHTML = total
     score=score+total;
     
    }

  }

  winner()
}
// Reset My Game
function gameReset(){
  window.location.reload();
}







