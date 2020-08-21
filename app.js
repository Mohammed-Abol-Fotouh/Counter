// set initial value
let counter = 0;

const counterValue = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// best practice
// loop through each button using foreach
btns.forEach(function(btn){
    // add event listener to all buttons and listen to that event(e)
    btn.addEventListener('click',function(e){
        // get classes of clicked button
        let btnClass = e.currentTarget.classList;
        if(btnClass.contains('decrease')){
            counter--;
        }else if(btnClass.contains('increase')){
            counter++;
        }else{
            counter = 0;
        }

        counterValue.textContent = counter;
        
        if(counter > 0){
            counterValue.style.color = "green";
        }else if(counter < 0){
            counterValue.style.color = "red";
        }else{
            counterValue.style.color = "#222";
        }
    });
});


// old way !!!!

// const decreaseBtn = document.querySelector('.decrease');
// const resetBtn = document.querySelector('.reset');
// const increaseBtn = document.querySelector('.increase');

// decreaseBtn.addEventListener('click', function(){
//     decreaseCount = counter--;
//     counterValue.textContent = decreaseCount; 
//     counterValue.style.color = "red";
// });

// resetBtn.addEventListener('click', function(){
//     counter = 0;
//     counterValue.textContent = counter; 
//     counterValue.style.color = "black";
// });

// increaseBtn.addEventListener('click', function(){
//     increaseCount = counter++;
//     counterValue.textContent = increaseCount; 
//     counterValue.style.color = "green";
// });