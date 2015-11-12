# JS-Fundamentals

## Summary
JS-Fundamentals is a series of functions that perform common object-related tasks

### Learning Goals
- Understand how to manipulate date types - integers, strings, booleans, objects, and arrays
- Understand closures
- Understanding of callbacks

### Identity and typing

The first challenges require you to understand what `datatype` things are in javascript.
Datatype is a how the computer stores things in memory. Different types of data are handled differently.
Additionally, its important to know what type of data you are dealing with.
It makes send to multiply two numbers, but you wouldnt want to try and multiply two strings!
The first 4 exercises involve understanding these concepts. How do you find out what datatype something is in javascript?

###Cloning
Sometimes its necessary to create a perfect copy of an object rather than just passing that object along. How do we go through an object and create a copy of it?

###Array methods
working with arrays is something that is really important, for these exercises we need you to implement some array methods. You need to find a way to get the first and the last elements in that array.

* `indexOf` We give you a function that takes 2 arguments, an array of numbers, and a single number? How do you loop though an array and return the index of the element that matches the number?

* `drop` There are tow problems here, they both involve removing elements from an array, the only difference is that one removes from the top and the other removes from the bottom. Whats the difference in these two approaches? Pay attention to the fact that `n defaults to 1` this means that if n isn't defined it should equal 1

* `take`. This is a just a different twist on the drops, instead of just throwing those elements away, we should instead save them and return them

### Callbacks
Callbacks are a crucial piece of knowledge to have and these next exercises help reinforce that knowledge.
A **callback function** or **callback** for short is just a function that you pass into a function. Here's a simple example
```
// we create 2 functions

// we call the first one 'callback', it takes one parameter, a string 'name'
function callBack(name) {
 return "hello" + name;
}

// then we createa another function that takes two paramenters, a string 'name' and a function 'cb'
function logger(name, cb) {
  // we execute that callback function and give it the name parameter
  // we set the variable 'output'  equal to whatever it returns
  var output = cb(name);

  // we console log that variable
  console.log(output);
}
logger('rob', callBack);
```

* `forEach`. This function takes two parameters, an array and a callback function. WE need to loop through the array and execute our callback function on every element inside of it
* `forEachRight`. Same as above, just start at the end rather than the beginning
* `map`. Map is the same idea as above except this time you actually **change** the element in the array to whatever the callback returns
* `filter`. this is the same concept except the function now only returns `true` or `false` if its true keep it in the array, if its false, dont.
* `reject`. the opposite of filter

### Array methods pt. 2
These ones are still things we can hard code but they take it to the next level.
* `uniq`. WE should be able to loop through the array and see what is unique and whats not. The challenge on this one is trying to do it as fast as possible.
* `pluck` How do we get a all the values of a certain key? If we know how to get just one how do we get all? Think about storing the output in an array and just returning that in the end.
* `reduce` this concept is the same as the callback ones above, the only difference is that we now have to do something to each value when it comes out of the callback. This one might be a little harder, google online and see if you can see some sample implementations. Reduce is great if you need to do operations that squish an array down
* `flatten` goes inside of an array and converts any sub arrays into elements of the parent array but it only goes one level down.
* `flattenDeep` Is the same concept but in this case we don't know how deep the subarrays go, this could be a perfect application of recursion. just keep flattening infinitely until the array is only one level deep.
* `isString` the same concept as the ones in the beginning, how do you check a datatype in javascript?

###Clone deep
This one is a little trickier, you might want to do a little research on "pass by value" vs "pass by reference"
Why does `console.log({name: 'rob'} === {name: 'rob'})` return false?

* `deepClone` how do we make a copy of an object that has an unknown number of nested properties?

### Apply and Empty
Use one of the functions above and just keep passing the output of one function as the input of the other until you're through the stack.


##Getting Started
1. Fork this repo
  - click on fork button on the top right of the page
  <br><img src="https://help.github.com/assets/images/help/repository/fork_button.jpg" width="300px"></img>  
  - click on your handle to fork to your repo

2. Clone the repo
  - copy and paste github url from the right side of the screen
  <br><img src="https://help.github.com/assets/images/help/repository/clone-repo-clone-url-button.png" width="200px"></img>
  - type in the following line into your command line and insert your copies url as shown below:
  ````
  git clone *github url
  ````

##Testing
* An incredibly useful tool is Chrome Dev Tool's Javascript Console (which can be opened in Chrome by pressing command+option+J). The console allows for developers to type javascript directly into the browser. Test it out by typing in the following to the console:
````
var a = 'lorem';
console.log(a);
````

* To test your functions, open index.html in your browser
** NOTE: While completing the challenges, if all tests that previously passed ALL suddenly fail, there is most likely a syntax error in your code. Open Chrome Dev Tool's to locate the cause of the error.

##Challenges
1. Complete the challenge located in ```src/js-fundamentals.js```. Feel free complete the functions in any order.

##Extension Challenges
1. Complete the extension challenges located in ```src/js-fundamentals.js```.

