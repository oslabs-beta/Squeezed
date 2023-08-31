# JS-Fundamentals

## Summary
JS-Fundamentals is a series of functions that perform common object-related tasks

## Learning Goals
- Understand how to manipulate date types - integers, strings, booleans, objects, and arrays
- Understand closures
- Understanding of callbacks

## How do I get started?
1. Have __BOTH__ partners fork this repo
    - click on the __Fork__ button on the top right of the page
  <br><img src="./docs/assets/images/fork_button.jpg" width="300px"></img>  
    - click on your handle to fork to your repo

2. Each partner clones their own newly forked repo to their local machine
    - first, make sure you're on your new forked repo on GitHub
    - copy and paste GitHub url from the right side of the page
<br><img src="./docs/assets/images/clone-repo-clone-url-button-new.png" width="200px"></img>
    - enter the following line into your command line and insert your copied url instead of the quoted text:
      ```
      git clone 'copied url'
      ```
3. Each partner adds two remote links to their cloned repo on their own local workstation: one to CodesmithLLC's repo, and one to the partner's repo:
    ```
    git remote add upstream https://github.com/CodesmithLLC/unit-1-js-fundamentals.git
    ```
    ```
    git remote add partner https://github.com/PARTNERS_GITHUB_HANDLE/unit-1-js-fundamentals.git
    ```
    \* Make sure to edit the remote partner link with your partner's GitHub handle.
4. As you work remotely on your own workstation, periodically push your changes to your repo with `git push origin master`. Your partner can then use `git pull partner master` to get the changes onto their machine, followed by `git push origin master` to push those changes to their own GitHub repo!

Check out the [GitHub Documentation](https://help.github.com/articles/fork-a-repo/) for a more in-depth explanation of forking and cloning.

If working remotely, you'll want to make sure you have the VS Code extension [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) installed. When working with your partner, one of you will need to share your copy of the unit via Live Share - this will allow you to both work together in the same VS Code editor. Note that when using Live Share, it will still be important for *both* partners to fork the challenge, and whoever is sharing should still regularly push changes to their repo. This will ensure that both of you consistently have access to the most recent version of your work.

## Testing
* An incredibly useful tool is Chrome Dev Tool's Javascript Console (which can be opened in Chrome by pressing command+option+J). The console allows for developers to type javascript directly into the browser. Test it out by typing in the following to the console:
```javascript
var a = 'lorem';
console.log(a);
```

* To test your functions, open index.html in your browser
** NOTE: While completing the challenges, if all tests that previously passed ALL suddenly fail, there is most likely a syntax error in your code. Open Chrome Dev Tool's to locate the cause of the error.

## Challenges
Complete the challenge located in `src/js-fundamentals.js`. Feel free complete the functions in any order.


### Identity and typing

The first challenges require you to understand what `datatype` things are in JavaScript.
Data types are how the computer stores things in memory. Different types of data are handled differently.
Additionally, its important to know what type of data you are dealing with.
It makes sense to multiply two numbers, but you wouldn't want to try and multiply two strings!
The first 4 exercises involve understanding these concepts. How do you find out what data type something is in javascript?

### Cloning
Sometimes its necessary to create a perfect copy of an object rather than just passing that object along. How do we go through an object and create a copy of it?

### Array methods
Working with arrays is really important. For these exercises you need to implement some array methods. You need to find a way to get the first and the last elements in that array.

* `indexOf` We give you a function that takes 2 arguments, an array of numbers, and a single number. How do you loop though an array and return the index of the element that matches the number?

* `drop` There are two problems here that each involve removing elements from an array. The difference is that one removes from the top and the other removes from the bottom. What's the difference in these two approaches? Pay attention to the fact that `n defaults to 1`. This means that if n isn't defined it should equal 1

* `take`. This is a just a twist on the drops: Instead of just throwing those elements away, we should instead save them and return them

### Callbacks
Callbacks are a crucial piece of knowledge to have and these next exercises help reinforce that knowledge.
A **callback function** or **callback** for short is just a function that you pass into another function (and typically call inside of it). Here's a simple example:
```javascript
// we create 2 functions

// we call the first one 'callBack', it takes one parameter, a string 'name'
function callBack(name) {
 return "hello" + name;
}

// then we create another function that takes two parameters, a string 'name' and a function 'cb'
function logger(name, cb) {
  // we execute that callback function and give it the name parameter
  // we set the variable 'output'  equal to whatever it returns
  var output = cb(name);

  // we console log that variable
  console.log(output);
}
logger('rob', callBack);
```

* `forEach`. This function takes two parameters, an array and a callback function. We need to loop through the array and execute our callback function on every element inside of it
* `forEachRight`. Same as above, just start at the end rather than the beginning
* `map`. Map is the same idea as above except this time you actually **change** the element in the array to whatever the callback returns
* `filter`. This is the same concept except the function now only returns `true` or `false`. The filter function then returns an array of only those elements for which the callback returned true
* `reject`. the opposite of filter

### Array methods pt. 2
These ones are still things we can hard code but they take it to the next level.
* `uniq`. We should be able to loop through the array and see what's unique and what's not. The challenge on this one is trying to do it as fast as possible.
* `pluck` How do we get all the values of a certain key? If we know how to get just one how do we get all? Think about storing the output in an array and just returning that in the end.
* `reduce` This concept is the same as the callback ones above. The only difference is that we now have to do something to each value when it comes out of the callback. This one might be a little harder. Reduce is great if you need to do operations that squish an array down
* `flatten` goes inside of an array and converts any sub arrays into elements of the parent array. However, it only goes one level down.
* `flattenDeep` Is the same concept, but in this case we don't know how deep the subarrays go. This could be a perfect application of recursion. Just keep flattening infinitely until the array is only one level deep.
* `isString` The same concept as the ones in the beginning. How do you check a datatype in JavaScript?

### Clone deep
This one is a little trickier, you might want to do a little research on "pass by value" vs "pass by reference"
Why does `{ name: 'rob' } === { name: 'rob' }` return false?

* `deepClone` how do we make a copy of an object that has an unknown number of nested properties?

### Apply and Empty
Use one of the functions above and just keep passing the output of one function as the input of the other until you're through the stack.

## Extension Challenges
Complete the extension challenges located in `src/js-fundamentals.js`.
# Commerce
# Commerce
# lindy-ai-practice
# lindy-ai-practice
