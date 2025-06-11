'use strict';
import '../scss/main.scss';


// SOUNDS
const base = import.meta.env.BASE_URL;
const winSound = new Audio(`${base}audio/win.mp3`);
const gameOverSound = new Audio(`${base}audio/game-over.mp3`);
const popSound = new Audio(`${base}audio/pop.mp3`);


// HTML ELEMENTS
const humanSelection = document.querySelector('.js-humanSelection');
const machineSelectionDisplay = document.querySelector('.js-machineSelectionDisplay');
const playButton = document.querySelector('.js-playButton');
const gameResults = document.querySelector('.js-gameResults');
const humanGlobals = document.querySelector('.js-humanGlobals');
const machineGlobals = document.querySelector('.js-machineGlobals');
const popup = document.querySelector('.popup');
const popupMessage = document.querySelector('.popupMessage');
const restartButton = document.querySelector('.js-restartButton');


// NEW ELEMENTS
let machineSelection;
let machineMark = 0;
let humanMark = 0;
let machineSelectionText = "..."


// FUNCTIONS

// Selección de la máquina
function generateMachineSelection() {
  const randomNumber = Math.ceil(Math.random() * 9);

  if (randomNumber <= 3) {
    machineSelection = 'Piedra';
    machineSelectionText = 'Piedra 👊';

  } else if (randomNumber <= 6) {
    machineSelection = 'Papel';
    machineSelectionText = 'Papel ✋';
  } else {
    machineSelection = 'Tijera';
    machineSelectionText = 'Tijera ✌️';
  }

  machineSelectionDisplay.innerHTML = machineSelectionText;
}


// Crear resultados del juego
function handleClick(event) {
  event.preventDefault();
  popSound.play();

  generateMachineSelection();

  const selectedMovement = humanSelection.value;
  let resultText = '';

  if (machineSelection === selectedMovement) {
      resultText = '¡Empate! 🤭 Juega de nuevo.';
    } else if (
      (machineSelection === 'Piedra' && selectedMovement === 'Papel') ||
      (machineSelection === 'Papel' && selectedMovement === 'Tijera') ||
      (machineSelection === 'Tijera' && selectedMovement === 'Piedra')
    ) {
      resultText = `¡Has ganado! 😄 ${selectedMovement} gana a ${machineSelection}.`;
      humanMark++;
    } else {
      resultText = `${machineSelection} gana a ${selectedMovement}. 😔 Has perdido.`;
      machineMark++;
  }

  gameResults.innerHTML = resultText;
  humanGlobals.innerHTML = humanMark;
  machineGlobals.innerHTML = machineMark;

  if (humanMark === 10 || machineMark === 10) {
    popup.style.display = 'flex';

    if (humanMark === 10) {
      popupMessage.innerHTML = 'Has ganado esta ronda! 🥳';
      winSound.play();
    } else {
      popupMessage.innerHTML = '¡Oh, no! La máquina ha ganado la ronda 😭';
      gameOverSound.play();
    }
  }
}

// Resetear el juego
function handleRestart() {
  humanSelection.value = 'Piedra';
  machineSelectionDisplay.innerHTML = '...';
  gameResults.innerHTML = '';
  humanMark = 0;
  machineMark = 0;
  humanGlobals.innerHTML = '0';
  machineGlobals.innerHTML = '0';
  popup.style.display = 'none';
}

// EVENTS
playButton.addEventListener('click', handleClick);
restartButton.addEventListener('click', handleRestart);