const squares=document.querySelectorAll('.hidden')


function generate(){
    let randomNumber=Math.floor(Math.random()*16)
    if(squares[randomNumber].innerHTML==''){
        squares[randomNumber].innerHTML=2
        squares[randomNumber].classList.remove('hidden')
        squares[randomNumber].classList.add('blue');
        console.log(squares[randomNumber])
    }else generate()
    
   
}
generate();
generate();
