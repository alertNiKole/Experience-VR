/* const section = document.getElementById("animateMe");

function startAnimation() {
  //Applies spinning animation to section element
  section.className = "spin";
}

make it lamda
*/

Example:
setTimeout(() => {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
} , randdomTime);


startAnimation( (section) => {
  section.className = "spin"

})

const section = document.getElementById("animateMe");

section( (startAnimation) => {
  section.className = "spin"

}, 2000);

setTimeout(function, milliseconds)
//Executes a function, after waiting a specified number of milliseconds.


setInterval(function milliseconds);
//Same as setTimeout(), but repeats the execution of the function continuously.

 setTimeout(() => {
  this.reqMaq(obj['fkmaqid'])
}, 2000);

// ============

setTimeout(() => {
    callback(param);
  }, 1);

  
setTimeout(function(){
  (randomGreeting);
}, 1000);

