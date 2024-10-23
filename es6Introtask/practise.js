// setTimeout ( () => {
//      console.log(' Hello World')
// }, 5000);

// const delayedGreeting = (name, delayTime) =>{

//      setTimeout( () => {
//           console.log(`Hello ${name}`);
//      }, delayTime);
// }

// delayedGreeting('Alice', 2000)

// function tellJoke(){

//      let count =0;
//      const jokeInterval = setInterval(() => {
//           count++;
//           if(count === 5){
//                clearInterval(jokeInterval);
//           }
//           console.log("Why dont scientists trust atoms? Because they make up everything!")
//      }, 2000);
// }

// function tellJock() {
//   let num = 0;

//   function jokeLogger() {
//     num++;
//     console.log(
//       "Why don't scientists trust atoms? Because they make up everything!"
//     );

//     if (num < 5) {
//       // Repeat until 5 iterations
//       setTimeout(jokeLogger, 2000);
//     }
//   }

//   setTimeout(jokeLogger, 2000); // Initial call to start after 2 seconds
// }

// tellJock();

//    How it works:
// jokeLogger() is called using setTimeout after 2000 milliseconds.
// Inside jokeLogger(), it increments num and logs the joke.
// If num is less than 5, it schedules the next jokeLogger() call using setTimeout again.
// This continues until num reaches 5, at which point it stops.


// function tellJoke() {
//      // console.log("Why don't scientists trust atoms? Because they make up everything!");
     
//      // Log a joke every 2 seconds
//      const jokeInterval = setInterval(() => {
//          console.log("Why don't scientists trust atoms? Because they make up everything!");
//      }, 2000);
     
//      // After 10 seconds, stop telling jokes
//      setTimeout(() => {
//          clearInterval(jokeInterval); // Stop the interval
//      }, 10000);
//  }
 
//  // Call the function to see the output
//  tellJoke();

function tellJock() {
     
     const jokeInterval = setInterval(() => {
          console.log("Why dont scientists trust atoms? Because they make up everything");
     }, 2000);

     setTimeout(() => {
          clearInterval(jokeInterval);
     }, 10000);
}

tellJock();