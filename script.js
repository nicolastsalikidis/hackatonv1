let previousAIMove = null;
let correctStreak = 0;
let lossCount = 0;

function play(playerMove) {
  const moves = ['rock', 'paper', 'scissors'];

 
  let aiMove;
  if (playerMove === 'rock') aiMove = 'paper';
  else if (playerMove === 'paper') aiMove = 'scissors';
  else aiMove = 'rock';

  let result;


  if (previousAIMove && playerMove === previousAIMove) {
    correctStreak++;
  } else {
    correctStreak = 0;
  }


  if (correctStreak >= 3) {
    result = "💥 You Outsmarted us! You win!";
    correctStreak = 0;
    lossCount = 0; 
    document.getElementById("game-tip").style.display = "none"; 

    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  } else {
    if (playerMove === aiMove) {
      result = "Gelijkspel!";
    } else {
      result = "Je verliest!";
      lossCount++;


      if (lossCount >= 5) {
        document.getElementById("game-tip").style.display = "block";
      }
    }
  }


  document.getElementById('player-move').textContent = `Jij koos: ${emoji(playerMove)}`;
  document.getElementById('ai-move').textContent = `AI koos: ${emoji(aiMove)}`;
  document.getElementById('outcome').textContent = ` ${result}`;


  previousAIMove = aiMove;
}

function emoji(move) {
  return move === 'rock' ? '🪨' : move === 'paper' ? '📄' : '✂️';
}
