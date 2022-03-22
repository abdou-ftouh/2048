const tile=document.querySelectorAll('.hidden')

const myScore=document.getElementById('score')



// Loop to fill my tiles with empty tiles
for(let i=0;i<16;i++){
        tile[i].innerHTML=" "
       
}

// myGenerate the tiles to be random Number 2 
let score=0
function myGenerate(){
    let randomNumber=Math.floor(Math.random()*16)
    if(tile[randomNumber].innerHTML==" "){
        tile[randomNumber].innerHTML=2
         myScore.innerHTML=score
          
         loser()
    }else myGenerate()
    
   colours()
} 
myGenerate()
myGenerate()
colours()

// function colors to give a numbers diferent color
function colours() {
  for (let i=0; i < 16; i++) {
   
    if (tile[i].innerHTML == " ") {
      tile[i].style.backgroundColor = 'white'
    }
    else if (tile[i].innerHTML == 2) {
      tile[i].style.backgroundColor = 'green'
    }
      else if (tile[i].innerHTML  == 4) {
        tile[i].style.backgroundColor = 'yellow' 
      }
      else if (tile[i].innerHTML  == 8) {
        tile[i].style.backgroundColor = 'red' 
      }
      else if (tile[i].innerHTML  == 16){ 
        tile[i].style.backgroundColor = 'blue'
     }
      else if (tile[i].innerHTML  == 32) {
        tile[i].style.backgroundColor = '#d98243' 
      }
      else if (tile[i].innerHTML  == 64) {
        tile[i].style.backgroundColor = '#00ffe7' 
      }
      else if (tile[i].innerHTML == 128) {
        tile[i].style.backgroundColor = '#efc668' 
      }
      else if (tile[i].innerHTML == 256) {
        tile[i].style.backgroundColor = '#79567f' 
      }
      else if (tile[i].innerHTML == 512) {
        tile[i].style.backgroundColor = '#f8a78e' 
      }
      else if (tile[i].innerHTML == 1024) {
        tile[i].style.backgroundColor = '#6233a8' 
      }
      else if (tile[i].innerHTML == 2048) {
        tile[i].style.backgroundColor = '#ff97ba' 
      }
    
  }
}

// pack everything at right
// Swipe Right 

function goRight() {
  for (let i=0; i < 16; i++) {
    if (i % 4 === 0) {
      let myArray = [tile[i].innerHTML, tile[i+1].innerHTML, tile[i+2].innerHTML, tile[i+3].innerHTML]
    
      console.log(myArray)
      myArray=myArray.map(num=>Number(num))  //converted my string to number
     
      // go evreything if not a zero
      let myFilter = myArray.filter(val => val)  //takes any value without empty
     
      //add how many their rates are like 
      let rates = 4 - myFilter.length
      //rates size fill with empty
      let empty = Array(rates).fill(" ")
  
      let newArray = empty.concat(myFilter)
      
      tile[i].innerHTML = newArray[0]
      tile[i +1].innerHTML = newArray[1]
      tile[i +2].innerHTML = newArray[2]
      tile[i +3].innerHTML = newArray[3]
      
     
    }
  }

}

//Swipe left
function goLeft() {
  for (let i=0; i < 16; i++) {
    if (i % 4 === 0) {
      let myArray = [tile[i].innerHTML, tile[i+1].innerHTML, tile[i+2].innerHTML, tile[i+3].innerHTML]
      // console.log(myArray)
      myArray=myArray.map(num=>Number(num))  //convert my string to number
      
      // go evreything if not a zero
      let myFilter = myArray.filter(val => val)  //takes any value without zero
  
      let rates = 4 - myFilter.length
      let empty = Array(rates).fill(" ")
      let newArray = myFilter.concat(empty)

      tile[i].innerHTML = newArray[0]
      tile[i +1].innerHTML = newArray[1]
      tile[i +2].innerHTML = newArray[2]
      tile[i +3].innerHTML = newArray[3]
     
    }
  }

}
//Swipe Up
function goUp() {
  for (let i=0; i <4; i++) {
   
    let myArray = [tile[i].innerHTML, tile[i+4].innerHTML, tile[i+8].innerHTML, tile[i+12].innerHTML]
    // console.log(myArray)
    myArray=myArray.map(num=>Number(num))  //convert my string to number
    // go evreything if not a zero
    let myFilter = myArray.filter(val => val)  //takes any value without zero
   
    let rates = 4 - myFilter.length
    let empty = Array(rates).fill(" ")
    let newArray = myFilter.concat(empty)
    // console.log(newArray)

    tile[i].innerHTML = newArray[0]
    tile[i +4].innerHTML = newArray[1]
    tile[i +8].innerHTML = newArray[2]
    tile[i +12].innerHTML = newArray[3]
  
     
    }

  }

//Swipe Down
  function goDown() {
      for (let i=0; i <4; i++) {
        
        let myArray = [tile[i].innerHTML, tile[i+4].innerHTML, tile[i+8].innerHTML, tile[i+12].innerHTML]
        myArray=myArray.map(num=>Number(num))  //convert my string to number
        // go evreything if not a zero
        let myFilter = myArray.filter(val => val)  //takes any value without zero
       
        let rates = 4 - myFilter.length
        let empty = Array(rates).fill(" ")
        let newArray = empty.concat(myFilter)
        // console.log(newmyArray)
    
        tile[i].innerHTML = newArray[0]
        tile[i +4].innerHTML = newArray[1]
        tile[i +8].innerHTML = newArray[2]
        tile[i +12].innerHTML = newArray[3]
      
         
        }

      }
     

// combine my row numbers they should be combined into one number 
function addNumber1() {

  for (let i =0; i < 15; i++) {
       let a=tile[i]
       let b=tile[i+1]
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
    let a=tile[i]
    let b=tile[i+4]
    if (a.innerHTML === b.innerHTML) {
      let total = Number(a.innerHTML) + Number(b.innerHTML)
      a.innerHTML = 0
      b.innerHTML = total
     score=score+total;
    
    }

  }

  winner()
}

// Simple winner function
function winner(){
  for(let i=0;i<16;i++){
    if(tile[i].innerHTML == 2048){
      var element = document.querySelector(".grid_container");
      element.classList.add('game-over');

      tile.forEach(taco=>{
        taco.remove('hidden')
       
      }
      )
      document.removeEventListener('keyup', myControl)
     
    }
  }
}

function loser(){
  let myvar = false;

for(let i = 0; i < 15; i++){
  for(let j = 0; j < 12; j++){
  
      if(tile[j].innerHTML === " " || tile[j].innerHTML === tile[j+4].innerHTML){
          myvar = true;
      }
    }
    if(tile[i].innerHTML === " " || tile[i].innerHTML=== tile[i+1].innerHTML){
      myvar = true;
  }
}

if(myvar == false){
   
    var element = document.querySelector(".grid_container");
    element.classList.add('loser');
    tile.forEach(taco=>{
      taco.remove('hidden')
     
    })
    document.removeEventListener('keyup', myControl)
   
}
}



 // My KeyPress Control 

function myControl(e){

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
    myGenerate()
   
}
// KeyLeft Control
function keyLeft(){
    goLeft()
    addNumber1()
    goLeft()
    myGenerate()
   
}
// KeyDown Control
function keyDown(){
    goDown()
    addNumber2()
    goDown()
    myGenerate()
  
}
// KeyUp Control
function keyUp(){
    goUp()
    addNumber2()
    goUp()
    myGenerate()
 
}
// My Event 
document.addEventListener('keyup',myControl)


// Reset My Game
function gameReset(){
  window.location.reload();
}


