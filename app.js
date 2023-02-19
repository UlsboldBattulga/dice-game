// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley
var activePlayer = 0;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchdiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ugnu.

{
  /* <div class="player-score" id="score-0">43</div> */
}
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

//Program ehlehed beldey

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

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
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    //Toglogchiin eeljiig nuguu toglogch ruu shiljuulne.
    //Herev idevhtei toglogch n 0 baiwal idevhtei toglogchiig 1 bolgo.
    //Ugui bol idevhtei toglogchiig 0 bolgo.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //Ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //Shoog tur alga bolgono
    diceDom.style.display = "none";

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
