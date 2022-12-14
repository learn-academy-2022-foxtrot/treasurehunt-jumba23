# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.
  - branch: board-game
  - mapped over the array in state to dynamically render 9 squares
  - used flexboxbox to position the squares
  - passed the value of the array in state
  - styled the square
- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
  - branch: index-position
  - added an onCLick to the square div
  - added a handleClick method to the handleClick
  - passed index to square and to handleClick
  - created handleGamePlay to square to index through functional props
- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
  - branch: tree-emoji
  - made a copy of the board
  - updated the value at the particular index to be a tree emoji
  - emoji keyboard is control + command + spacebar
- As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.
  - branch: treasure-bomb
  - added random location for bomb and treasure into state
  - added a conditional in the handleGamePlay method to produce different outcomes
- As a user, I can click on a “Play Again” button that will restart the game.
  - branch: game-reset
  - added a button element on main page
  - added functionality that resets all of the initial states to their initial values
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.
  - branch: counter
  - added ned div element right after h1 on main page (App.js)
  - created new state - counter and set the initial value at 5
  - created a new function that handles counter's logic and calls on reset when no attempts left or just subtract every non bomb or treasure click
  - added runCounter function call to handleGamePlay at the very last catch all part.
  - added counter setState method to the reset button's function
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
  - branch: you-win
  - added
  - created new state and set it to an empty string
  - added added setState method to hadnlePlayGame function in the part where a player clicks on a treasure.
  - added conditional rendering in to runs when the newly created state is changed and display the winning message over the counter message
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
  - branch: you-lost
  - changed name of our most recent state addition to youWinLose so we can assign both values
  - added setYouWinLose to handlePlayGame function in the part where a player clicks on bomb
- As a user, I cannot continue to play the game after I win or lose.
  - branch: game-over
  - added another boolean state for game over message
  - initial value is set to false
  - the state is updated at two places in handlePlayGame function and changed to true
  - this state value will be sent to our square component
  - the new value will be sent to handleClick and create a ternary operator to check the value
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).
  - branch: no-more-clicks
  - updated runCounter app
  - added one more function call in our conditional statement to set true value to our gameOver variable.

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
