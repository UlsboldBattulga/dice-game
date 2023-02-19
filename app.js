//Togloomiin buh gazar ashiglagdah global hhuvisagchdiig end zarlay

//Ali toglogch shoo shideh we gedgiig end hadgalay
var activePlayer;

//2 Toglogchiin tsugluulsan onoo
var scores;

//Idevhtei toglogchiin tsugluulj baigaa eeljiin onoo
var roundScore;

//Shoonii zurgiig uzuuleh elementiig DOM-oos haij olood end hadgalyaa
var diceDom = document.querySelector(".dice");

//Togloomiig ehluulne
initGame();

//Toglomiig shineer ehlehed beltgene.
function initGame() {
  // Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley
  activePlayer = 0;

  // Toglogchdiin tsugluulsan onoog hadgalah huvisagch
  scores = [0, 0];

  // Toglogchdiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
  roundScore = 0;

  {
    /* <div class="player-score" id="score-0">43</div> */
  }
  // window.document.querySelector("#score-0").textContent = dice;

  // document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

  //Program ehlehed beldey

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  //Toglogchdiin neriig butsaaj gargah

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  //Shoog tur alga bolgono
  diceDom.style.display = "none";
}

// Shoog shideh EventListener
document.querySelector(".btn-roll").addEventListener("click", function () {
  //1-6 dotor sanamsargui neg too gargaj avna
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //Shoonii zurgiig web deer gargaj irne
  diceDom.style.display = "block";

  //Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";

  //Buusan too n 1 ees yalgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne.
  if (diceNumber !== 1) {
    //1 ees yalgaatai too buulaa. Buusan toog toglogchid nemj ugnu
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.
    //Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono.
    switchToNextPlayer();
  }
});

//HOLD tovchnii event Listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  //Ug toglogchiin tsugluulsan eeljiin onoog global onoon deer n nemj ugnu.
  //   if (activePlayer === 0) {
  //     scores[0] = scores[0] + roundScore;
  //   } else {
  //     scores[1] = scores[1] + roundScore;
  //   }

  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Delgets deer onoog n uurchilnu
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // Ug toglogch hojson esehiig (onoo n 100-s ih eseh) shalgah
  if (scores[activePlayer] >= 10) {
    //Ylagch gesen textiig nerniih n orond gargana
    document.getElementById("name-" + activePlayer).textContent = "WINNER !!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    //Toglogchiin eeljiig solino.
    switchToNextPlayer();
  }
});

// Ene function n togloh eeljiig daraachiin toglogch ruu shiljuuldeg
function switchToNextPlayer() {
  //Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //Toglogchiin eeljiig nuguu toglogch ruu shiljuulne.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //Ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //Shoog tur alga bolgono
  diceDom.style.display = "none";
}

//New Game buyu Shine togloom ehluuleh tovchnii event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
