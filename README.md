# Rock, Paper, Scissors game 👊✋✌️

This is a simple interactive game where a player competes against a computer to reach 10 points. The game includes visual feedback, a victory popup, sound effects, and a reset function.

## How to play
1. Select a move from a dropdown menu (`Rock`, `Paper`, or `Scissors`).
2. Click the **Play** button to challenge the computer. The computer's move is randomly generated and displayed alongside the result.
3. The game will display the machine's move and the result of the turn.
4. The first player to reach 10 points wins the round.
5. When the round is over, a popup will appear with the result and a button to restart.

## Features
### Game Results and Scoring  
Each round updates the score dynamically for both the human player and the computer.
A message appears to indicate if the round was won, lost, or tied.

### Win Popup  
Once a player reaches 10 points, a popup appears in the center of the screen with a custom message indicating the winner. A button allows the user to restart the game.

### Sound Effects  
Sound effects are triggered on win, lose, or draw events to enhance feedback and interactivity. Sounds are stored in the `public/audio` directory.

🔊 Sound Credits: Pixabay.

### Game Reset  
Clicking the **Restart** button resets the score, clears the selections and messages, and hides the popup, allowing a new game to start.

## Technologies

- **JavaScript**: For logic, DOM manipulation, and event handling
- **HTML**: For structuring the interface
- **CSS/SASS**: For layout, responsive design, and popup animations
- **Vite**

## Installation and Use

If you’re using [Vite](https://vitejs.dev/) for development:

```bash
git clone https://github.com/radiofiambre/piedra-papel-y-tijera.git
cd rock-paper-scissors-game
npm install
npm run dev