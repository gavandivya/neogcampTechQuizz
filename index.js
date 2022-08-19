var readlineSync = require('readline-sync');
var chalk = require('chalk');

const right = chalk.green.bold;
const wrong = chalk.red.bold;
let score = 0;
const highscore = ["Preeti", "Dipali", "Aditya"];
console.log(chalk.underline.black.bgRgb(66, 242, 245)("Hey! Welcome to the Tech Quiz Game \n"));
console.info(chalk.magentaBright("GAME RULES"));
console.info("1) We have 5 MCQ each has 4 options,which has one right answer");
console.info("2) No Negative marking");
console.info("3) Each correct answer increases the score by +1 while the wrong answer gives you 0. \n")
username =
  readlineSync.question(chalk.yellowBright.bold("What's your name? \n"));
console.log(chalk.black.rgb(167, 66, 245)("\nWelcome " + username + "!\n"));

const game = [
  {
    question: "1024 bit is equal to how many byte?\n ",
    answer: 2,
    options:["1 Byte","128 Byte","32 Byte","64 Byte"]
  },
  {
    question: ".gif is extension of \n ",
    answer: 1,
    options:["Image file","Video file","Audio file","Word file"]  },
  {
    question: "The maximum number of rows supported by Excel 2007 spreadsheet is?\n ",
    answer: 4,
    options:["9,68,576","12,15,857","13,42,554","10,48,576"]  },
  {
    question: "Which combination is used to minimize all open windows?\n ",
    answer: 4,
    options:["Alt+M","Shift+M","Windows Key+D","CTRL+D"]  },
  {
    question: "Total number of function keys in a computer keyboard?\n",
    answer: 2,
    options:["10","12","14","8"]  }
]

 if(readlineSync.keyInYNStrict(('\nAre you ready to start the quiz challenge?\n'))){
   startGame();
  }
 else {
	console.log(
		chalk.redBright('\n Not ready? Please try playing later\n')
	);
 }

function startGame() {
  for (var i = 0; i < game.length; i++) {
    play(i + 1, chalk.blue(game[i].question), game[i].answer,game[i].options);
  } console.info(chalk.underline.bold("Final score -  " + score));
  highScore();
}

function highScore() {
  if (score == 5) {
    console.info(chalk.bold.black.bgRgb(3, 252, 252)("\nCongratulations " + username + ", you got all answers right and you are one of the highscorer.\n"));
    highscore.push(username);
  }

  console.info(chalk.bold("\nHighscores"));
  for (var i = 0; i < highscore.length; i++) {
    console.log(chalk.yellowBright.bold("\n " + highscore[i] + "\t\t\t" + "5"));
    console.info(chalk.yellowBright.bold("-----------------"));

  }
}

function play(i, ques,ans,options) {
console.info( chalk.blue("\n"+i + "." + ques));
var userAns = readlineSync.keyInSelect(options,'Choose an option: ',{cancel:false});
  
if(ans == userAns+1) 
  {
    console.log(right("\nRight!"));
    score++;
  }
  else 
  {
console.log(wrong("\nWrong!\n"));   console.info(chalk.greenBright("The   correct answer is " +game[i - 1].answer));
  } 
  console.info("Score - " + score + "\r\n");
}