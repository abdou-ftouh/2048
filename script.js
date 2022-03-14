const square=document.querySelectorAll('.hidden')



for(let i=0;i<16;i++){
    
        square[i].innerHTML=" "
       

}

function generate(){
    let randomNumber=Math.floor(Math.random()*16)
    if(square[randomNumber].innerHTML==" "){
        square[randomNumber].innerHTML=2
        
       
    }else generate()
   colours()
} 
generate()
generate()
colours()

function colours() {
  for (let i=0; i < 16; i++) {
   
    if (square[i].innerHTML == " ") {square[i].style.backgroundColor = 'white'}
    else if (square[i].innerHTML == 2) {square[i].style.backgroundColor = 'green'}
      else if (square[i].innerHTML  == 4) {square[i].style.backgroundColor = 'yellow' }
      else if (square[i].innerHTML  == 8) {square[i].style.backgroundColor = 'red' }
      else if (square[i].innerHTML  == 16){ square[i].style.backgroundColor = 'blue' }
      else if (square[i].innerHTML  == 32) {square[i].style.backgroundColor = '#d98243' }
      else if (square[i].innerHTML  == 64) {square[i].style.backgroundColor = '#00ffe7' }
      else if (square[i].innerHTML == 128) {square[i].style.backgroundColor = '#efc668' }
      else if (square[i].innerHTML == 256) {square[i].style.backgroundColor = '#79567f' }
      else if (square[i].innerHTML == 512) {square[i].style.backgroundColor = '#f8a78e' }
      else if (square[i].innerHTML == 1024) {square[i].style.backgroundColor = '#6233a8' }
      else if (square[i].innerHTML == 2048) {square[i].style.backgroundColor = '#ff97ba' }
    
  }
}
function goRight() {
    for (let i=0; i < 16; i++) {
      if (i % 4 === 0) {
        let firstElement = square[i].innerHTML
        let secondElement = square[i+1].innerHTML
        let therdElement = square[i+2].innerHTML
        let fourthElement = square[i+3].innerHTML
        let row = [firstElement, secondElement, therdElement, fourthElement]
       
        row=row.map(num=>Number(num))  //convert my string to number
        console.log(row)
        // go evreything if not a zero
        let myFilter = row.filter(val => val)  //takes any value without zero
       
        let missing = 4 - myFilter.length
        let zeros = Array(missing).fill(" ")
        let newRow = zeros.concat(myFilter)
  
        square[i].innerHTML = newRow[0]
        square[i +1].innerHTML = newRow[1]
        square[i +2].innerHTML = newRow[2]
        square[i +3].innerHTML = newRow[3]
        
       
      }
    }
  }

  
  function goLeft() {
    for (let i=0; i < 16; i++) {
      if (i % 4 === 0) {
        let firstElement = square[i].innerHTML
        let secondElement = square[i+1].innerHTML
        let therdElement = square[i+2].innerHTML
        let fourthElement = square[i+3].innerHTML
        let row = [firstElement, secondElement, therdElement, fourthElement]
       
        row=row.map(num=>Number(num))  //convert my string to number
        console.log(row)
        // go evreything if not a zero
        let myFilter = row.filter(val => val)  //takes any value without zero
       
        let missing = 4 - myFilter.length
        let zeros = Array(missing).fill(" ")
        let newRow = myFilter.concat(zeros)

        square[i].innerHTML = newRow[0]
        square[i +1].innerHTML = newRow[1]
        square[i +2].innerHTML = newRow[2]
        square[i +3].innerHTML = newRow[3]
       
      }
    }
  }

  function goUp() {
    for (let i=0; i <4; i++) {
      
      let firstElement = square[i].innerHTML
      let secondElement = square[i+4].innerHTML
      let therdElement = square[i+8].innerHTML
      let fourthElement = square[i+12].innerHTML
      let row = [firstElement, secondElement, therdElement, fourthElement]
      row=row.map(num=>Number(num))  //convert my string to number
      // go evreything if not a zero
      let myFilter = row.filter(val => val)  //takes any value without zero
     
      let missing = 4 - myFilter.length
      let zeros = Array(missing).fill(" ")
      let newRow = myFilter.concat(zeros)
      // console.log(newRow)
  
     
      square[i].innerHTML = newRow[0]
      square[i +4].innerHTML = newRow[1]
      square[i +8].innerHTML = newRow[2]
      square[i +12].innerHTML = newRow[3]
    
       
      }
    }


    function goDown() {
        for (let i=0; i <4; i++) {
          
            let firstElement = square[i].innerHTML
            let secondElement = square[i+4].innerHTML
            let therdElement = square[i+8].innerHTML
            let fourthElement = square[i+12].innerHTML
            let row = [firstElement, secondElement, therdElement, fourthElement]
            row=row.map(num=>Number(num))  //convert my string to number
            // go evreything if not a zero
            let myFilter = row.filter(val => val)  //takes any value without zero
           
            let missing = 4 - myFilter.length
            let zeros = Array(missing).fill(" ")
            let newRow = zeros.concat(myFilter)
            console.log(newRow)

           
            square[i].innerHTML = newRow[0]
            square[i +4].innerHTML = newRow[1]
            square[i +8].innerHTML = newRow[2]
            square[i +12].innerHTML = newRow[3]
        
           
          }
        }
       
 


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

function keyRight(){
    goRight()
   

    colours()
   
  
}
function keyLeft(){
    goLeft()

 
    colours()
 
   
  
}
function keyDown(){
    goDown()
 
    colours()
 
    
  
}
function keyUp(){
    goUp  ()

    colours()

  
    
  
}

document.addEventListener('keyup',myControl)




