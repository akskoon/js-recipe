/* eslint-disable no-unused-vars */
/*const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}*/

/*const number = 100
for (let n = 1; n <= number; n++) {
  if (n % 15 === 0) {
    console.log("FizzBuzz")
  } else if (n % 3 === 0) {
    console.log("Fizz")
  } else if (n % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(n)
  }
}*/
const number = 100

const threeLove = function() {
  for (let n = 1; n <= number; n++) {
    if (n.includes("3")) {
      console.log(n + "!!!!!")
    } else {
      console.log(n)
    }
  }
}
