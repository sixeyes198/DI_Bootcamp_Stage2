//////     HTTP Methods  ///////

// There are many methods to send HTTP messages; the most used is GET and POST.
// Here is the difference between them:

//// GET Method  ////

// get method is used to retrieve data ,all data passeed to the URL thats why it has a length restriction
//  it can be bookmarked and WE SHOULD NEVER USE IT TO PASS SENSITIVE DATA  because whoever is listening to the network can see the data

// GET indicates that a resource should be fetched

//The data is passed as argument
// arg1=val1&arg2=val2, in this syntax:
//       /path/to/page.html?arg1=val1&arg2=val2

//example :  /action_page.html?firstname=Mickey&lastname=Mouse

// This is a request to action_page.html, where firstname is equal to Mickey and lastname is equivalent to Mouse.
