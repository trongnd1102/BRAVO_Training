/**
 * When an error occurs, JavaScript will stop and generate an error message.
 * The try/catch/finally statements handles errors without stopping JavaScript.
 * try statement defines the code block to run
 * catch statement defines the code block to handle any errors
 * finally statement defines the code block to run regardless of the result
 * catch and finally are optional, but must use one of them
 * Syntax:
 *      try {
 *          code block to run
 *      } catch (err) {
 *          code block to handle errors
 *      } finally {
 *          code block to excute regardless of the try result
 *      }
 */
function myFunction() {
    const message = document.getElementById("message");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try { 
      if(x == "")  throw "Empty";
      if(isNaN(x)) throw "Not a number";
      if(x > 10)   throw "Too high";
      if(x < 5)  throw "Too low";
    } catch(err) {
      message.innerHTML = "Error: " + err;
    } finally {
      document.getElementById("demo").value = "";
      console.log("Thank for a test!")
    }
}

function nestedBlock() {
    const message = document.getElementById("message");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        try {
            if(x == "")  throw "Empty";
            if(isNaN(x)) throw "Not a number";
            if(x > 10)   throw "Too high";
            if(x < 5)  throw "Too low";
        } finally {
            console.log("End part 1!");
            // return;
        }
    } catch(err) {
        console.error("?",err);
        message.innerHTML = "Error: " + err;
    } finally {
        document.getElementById("demo").value = "";
        console.log("End part 2!");
    }
}