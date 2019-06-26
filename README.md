Memory Game
Part 1: Setting up the visual Components
Objective
We’re going to be coding a simple memory game using ReactJS as our framework and create-react-app as the foundation. 
If you haven’t played a memory game before, the rules are quite simple. The game starts with 16 face down cards on the table. On the other side of each card is a easily recognizable symbol, and there are 8 pairs of symbols arranged randomly among the 16 cards. The player will flip 2 cards at a time, trying to flip over 2 cards with the same symbol. If the player is successful, the cards are remain flipped over. Otherwise, the cards are flipped back over. The player keeps trying to flip over pairs until all of the cards on the board are face up. The goal of the game is to match all the cards in as few flips as possible.
Your task for part 1:
For now let’s try to create a ReactJS project that displays the initial state of the game: The game header with 16 cards face down on the board.

When you are finished, you should have a game visually set up, but it won’t be interactive yet (clicking on the cards does nothing).
Let’s do it!
Step 1 - Starting a new project
Setting up an express server to server a functioning ReactJS app can be a complicated process. Fortunately for us, there’s a npm package called create-react-app that handles this for us! It provides a fresh ReactJS project with all the fancy bells and whistles like hot-reloading and Jest testing.
If you haven’t done this already, go ahead and install it with:
sudo npm install -g create-react-app
It’s a large module, so it’ll take some time to download. When it’s ready, you can create a new project. Make sure you’re in a reasonable directory, then run:
create-react-app memory-game
This will create a new folder named memory-game and populate it with boilerplate ReactJS/express code. When it’s done, cd into the directory and npm install.
cd memory-game
npm install
When it’s done installing, run the server - It should open your browser automatically and launch your new ReactJS app!
npm start
Congratulations! You’re ready to start hacking. Your project should look something like this:

Step 2 - Remove the boilerplate code
Let’s make the app header more specific to our project.
In App.js, delete the JSX react logo. While you’re at it, remove the import statement at the top that’s bringing in the logo.svg
Change the App title to “Memory Game”
Add a subtitle that says “Match cards to win”
Remove the App-intro p tag
Notice that App.css is imported at the top of App.js! This is your css styling for the App component. Let’s make some changes:
Make the App-header class have a height of 80px
Make your new subtitle a bit smaller than the title
Make the subtitle have the color #666666
Your project should look like this:


Step 3 - Create a MemoryCard component
Our app is going to make use of 16 cards. Each card will render identically, and they’ll all behave in the same way (in that they’re going to be flipping over). This kind of repetition combined with the non-trivial behavior is a sign that the cards should probably be a React Component.
To make your project code organized, a good rule-of-thumb is to have each Component defined in its own .js file. 
Create a MemoryCard.js file in the /src folder
Using App.js as a reference, define a react Component class and export it
Name the class “MemoryCard”
Make sure to include React and { Component } at the top
Make sure you include the “export default” statement at the bottom
For now, let’s make the card render as a single h1 tag that says “CARD”
Your app should look no different after this step! You’ve defined a  new Component, but you’re not using it anywhere in your application. Let’s do that!



Step 4 - Show a single MemoryCard to the screen
To show a MemoryCard, it needs to be rendered in your top level App component. We can do that using JSX.
Import your memory card at the top of App.js
“import MemoryCard from ‘./MemoryCard.js’”
Add a self-closing MemoryCard tag below the <header> tag
That’s all it takes! Your app should now look like this:

Step 5 - Make our card actually look like a card
Create a MemoryCard.css file in the /src folder
Import MemoryCard.css in MemoryCard.js (look at how they did it in App.js)
Delete the h1 tag we created in step 3
Replace it with a div tag with a class named “MemoryCard”
In MemoryCard.css, define the css for the .MemoryCard class
Give it display: inline-block (so that cards align from left to right)
Width should be 150px
Height should be 80px
Give it a margin of 3px
Border-radius should be 5px
The border should be a solid 3px border with the color “navy”
Give it “cursor: pointer;”
Give it a nice striped background
https://css-tricks.com/stripes-css/
Inside the div tag, add an image tag for the DigitalCrafts logo
https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png
Target the image tag in your CSS, give it these styles:
60px width
27px padding-top
Your card should now look something like this:




Step 6 - Render 16 cards to the screen
Now that our card is styled, we should show the whole deck to the screen
Back in App.js, render 15 more cards
To get them to line up in a 4 by 4 grid, group the Card tags using <div> tags
And we’re done! Our app should look like this now: 

--------------------------------------------------------------------------------------------


Memory Game
Part 2: Setting up click events
Objective
We’re going to be coding a simple memory game using ReactJS as our framework and create-react-app as the foundation. 
If you haven’t played a memory game before, the rules are quite simple. The game starts with 16 face down cards on the table. On the other side of each card is a easily recognizable symbol, and there are 8 pairs of symbols arranged randomly among the 16 cards. The player will flip 2 cards at a time, trying to flip over 2 cards with the same symbol. If the player is successful, the cards are remain flipped over. Otherwise, the cards are flipped back over. The player keeps trying to flip over pairs until all of the cards on the board are face up. The goal of the game is to match all the cards in as few flips as possible.
Your task for part 2:
If you finished part 1, you should have an app that renders something like this:

When you finish part two, these cards will flip over when clicked, revealing a symbol on the reverse side.  
Let’s do it!
Step 1 - CSS3 Card Flipping
Our cards look pretty neat, but they’re only one sided. We need to make them have a reverse side that gets revealed with CSS3 animations. To do this, we’re going to implement the card flipping implemented here:
https://codepen.io/colebemis/pen/IlgFx?q=simple+card&limit=all&type=type-pens
There’s a lot of CSS to write, so I encourage you to save often and observe the effect of each style you write!
What we’ve implemented so far is the back of the memory card, so let’s change the CSS class name to .MemoryCardBack instead of .MemoryCard (update all references to .MemoryCard in MemoryCard.js and MemoryCard.css)
In MemoryCard.js, wrap the MemoryCardBack div with another div with class “MemoryCard”
Inside of this new MemoryCard div and after the MemoryCardBack div, insert a new div with class “MemoryCardFront”
Inside of the new MemoryCardFront div, insert the character ∆ inside of it (on mac, ∆ can be typed by pressing option+j, on windows hold down alt and type  “30”)
Wrap MemoryCardFront and MemoryCardBack with a div called MemoryCardInner
In MemoryCard.css, create new CSS blocks for .MemoryCard, .MemoryCardInner, and .MemoryCardFront
Let’s fix up our CSS for .MemoryCard
Display should be inline-block
Width 150, height 80,
Margin 5px
Cursor pointer
Position relative
Here’s a new one! Perspective: 800px
Now let’s move on to .MemoryCardInner
Width 100% height 100%
Position absolute
transform-style: preserve-3d;
transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
Border-radius 5px
Border 3px solid navy
box-shadow: 0 6px 16px rgba(0,0,0,0.15);
Add a new css block that targets BOTH .MemoryCardFront and .MemoryCardBack
Make them position absolute
Width 100%, height 100%
backface-visibility: hidden;
Remove all the styling that is currently written for MemoryCardBack except for the striped background style
Let’s write some styles specific to .MemoryCardFront
Font-size: 30px
Padding-top 20px
transform: rotateY(180deg);
Finally, create a CSS block that targets .MemoryCardInner tags that also have the class .flipped
Give this block transform: rotateY(180deg);
Whew, that was a lot! If everything was written correctly, your app should render the same way as before (16 face down cards in a 4x4) grid. The CSS we just wrote makes the front of the cards hidden.
CSS3 is going to handle the flipping animation for us. We can see the flipping in action using the Chrome inspector! Right click one of the cards and select “inspect element”. In the HTML viewer, double click on the MemoryCardInner class and add the class “flipped”:


You should see the card flip over to show the triangle symbol.
Step 2- Setting up the click handler
Let’s close MemoryCard.css and come back to MemoryCard.js. We’re going to make these cards clickable using the “onClick” attribute. “onClick” is going to trigger a function that we’ll write in our MemoryCard class, so our task is twofold: 1) write the function, and 2) map onClick to that function.
Add a new function in your MemoryCard class called clickHandler()
Make the clickHandler function call alert(“card clicked”); for now
Easy-peasy, right? Now, let’s look at the JSX in the render function.
Find the div tag that has className=”MemoryCard”
In this tag, add another attribute called onClick
Set the onClick attribute equal to this.clickHandler
Look at the JSX cheat sheet if you’re unsure about the syntax
Hint: Since you’re using basic Javascript inside of JSX, you need to use curly braces to wrap your javascript
Now your cards should be alerting whenever you click them! Let’s move on…
Step 3- Giving your component a brain
Right now, your MemoryCard component is pretty dumb. It only knows how to be rendered to the screen, and that’s it. But now we’re in a position where the card has two ways it can be rendered: either face down (no .flipped class on the MemoryCardInner), or face up (.flipped class added to MemoryCardInner). Not only that, but it has to remember whether it’s currently flipped over or not, so that it can flip to the correct side when clicked.
Basically, our card needs to remember whether it’s flipped or not. We can add this kind of memory with something called state. The state should be initialized when the component is first created, i.e. in the constructor.
Add a new function in your MemoryCard class called constructor()
The first line in the constructor should be super();
FYI- Our memory card class extends the React.Component class i.e. Our memory card has all the behaviors of a React Component. super() is used to call the constructor of whatever class you’re extending. If we don’t call super(), our class won’t know how to correctly behave like a React Component.
The next line should initialize the state of our card:
this.state = { isFlipped: false };
This makes it so that a brand new MemoryCard will know that it’s not flipped over right off the bat.
Now let’s look at the clickHandler() function we wrote earlier:
Instead of calling alert(‘card flipped’);, we need to just update the isFlipped key in our state object
Changing properties in a Component’s state can be accomplished by calling this.setState();
setState() accepts one parameter: an object with all the key/value pairs you want to change
That means we need to pass in an object like { isFlipped: ??? }. We’ll figure out what the ???s should be in a second
Remember how boolean toggling works?
It’s as simple as booleanValue = !booleanValue
The boolean we’re toggling lives in this.state.isFlipped
Therefore, the ??? you see above should be !this.state.isFlipped
All of the information ^^^ should be enough to complete the clickHandler() function. It’s just a call to this.setState(), passing in the object above
Now our MemoryCard component is smart! Every time we click the card, it’s updating its internal state back and forth between {isFlipped: true} and {isFlipped: false}
But visually, we don’t actually see the cards flipping over! We’ll fix this inside the render() function.
Step 4- Rendering MemoryCard based on the current state
Remember - the way we animate the flipping is by adding a “flipped” class to MemoryCardInner. But right now, the className of that div is hard-coded to “MemoryCardInner”. We need to be able to toggle it to “MemoryCardInner flipped”
Inside the render function, before the return statement, create a variable called memoryCardInnerClass. Set it equal to the string “memoryCardInner”.
this.state.isFlipped will tell us whether or not this card should be flipped over. Create an if-block that checks this.state.isFlipped as the condition
If isFlipped is true, append the string “ flipped” to the memoryCardInnerClass variable
Notice that we created the memoryCardInnerClass variable outside of the return statment beneath it. 
That means when can use this variable in our JSX
Replace className=”MemoryCardInner” with className={memoryCardInnerClass}
That’s all it takes! React is constantly listening to every Components’ this.state. If the state ever changes, React will automatically call render() for you.
What happens when you click on a card?
Step 5- ERROR: Cannot read property ‘setState’ of undefined
Oops, looks like our card component isn’t as smart as we thought. You’ll see an error like this when you click on a card.

Let’s break this error down. The sentence “Cannot read property ‘setState’ of undefined” implies that Javascript thinks that ‘this’ is undefined. It seems that our MemoryCard has forgotten who it is! Even though we wrote clickHandler() inside of the MemoryCard class, javascript thinks that it’s not attached to any class in particular.


The issue can be tracked down to our JSX:

To recap, we set an onClick property on the outer div, and we pointed it to this class’s clickHandler function. 
Here’s one unfortunate thing about onClick: any function we call from onClick will lose its binding, i.e. its this value. Fortunately we can fix that with a call to .bind()
In the line above, change this.clickHandler to this.clickHandler.bind(this)
This is just a gentle reminder to Javascript to pass down the correct this binding
Ok, NOW that’s it! The card flipping should be working beautifully!

