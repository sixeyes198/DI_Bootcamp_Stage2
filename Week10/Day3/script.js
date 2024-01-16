//////     HTTP Methods  ///////

//// GET Method ///
// is used to get data from the server ie: like user-first name or last name

// /action_page.html?firstname=Mickey&lastname=Mouse

///// POST Method /////

//  is used to change data from the server

///// HTTP Request /////
//  There are two http messages : requests and responses.
// HTTP requests are messages sent by the client to initiate an action on the server.
// The HTTP request contains three elements:

//1. A start line, designed to give basic information on the message
//2. A header, that adds some information to the message
//3. A body, which contains the content of the message.

////// Form - Action & Method ///////
// The Action Attribute
// The action attribute defines where the data gets sent.

//// Example:

// Here, the data is sent to an absolute URL :

/* <form action="https://example.com"></form> */

// Here, the data is sent to a relative URL. The data is sent to a different URL on the same origin:

// <form action="/somewhere_else"></form>

/////   The Method Attribute ////
// HTML pages may include forms, which allow the user to fill out the information and send it to the server.
// Here is an example of an HTML form asking the user for his name and a message.

//Example:
// <form method="GET" action="index.html">
/* <p>Name: <input type="text" name="name"></p>
    <p>Message:<br><textarea name="message"></textarea></p>
    <p><button type="submit">Send</button></p>
    </form> */

///////   Exceptions /////////

// Exceptions are a mechanism that makes it possible for code that runs into a problem to raise (or throw) an exception. An exception can be any value.
// Their power lies in the fact that you can set “obstacles” along the stack to catch the exception. Once you’ve caught an exception, you can do something with it to address the problem and then continue to run the program.

//// Try / Catch ///

try {
  //lines of code
} catch (e) {}

////////   Try / Catch / Finally  ///////
const func = () => {
  try {
    console.log("starting the try block");
    //Unexisting variable
    hello;
    //not accessed if there is an error with the above code
    console.log("finishing the try block");
  } catch (err) {
    console.log("starting the catch block");
    console.log(err);
  } finally {
    console.log("Function done");
  }
};

func();

// You can use finally without a catch block.

try {
  //lines of code
} finally {
}
