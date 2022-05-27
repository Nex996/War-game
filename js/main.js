let hobbitInfo = document.querySelector(".hobbit-info");
let orcInfo = document.querySelector(".orc-info");
let divHobbitsArmy = document.querySelector(".hobbit-army");
let divOrcsArmy = document.querySelector(".orcs-army");
let startBtn = document.querySelector(".startBtn");
let prepareBtn = document.querySelector(".prepareBtn");
let info = document.querySelector(".info");
let battleBattleground = document.querySelector(".battleground");
let round;
let firstAttack = 0;

prepareBtn.addEventListener("click", () => {
  hobbitInfo.innerHTML = `<div class="d-flex flex-column justify-content-center align-items-center"><h1>Hobbits army: ${hobbitsArmy.length}</h1><h3>Hover character for more info</h3></div>`;
  orcInfo.innerHTML = `<div class="d-flex flex-column justify-content-center align-items-center"><h1>Orcs army: ${orcsArmy.length}</h1><h3>Hover character for more info</h3></div>`;
  info.style.display = "flex";
  prepareBtn.style.display = "none";
  Hobbit.displayHobbits(hobbitsArmy);
  Orc.displayOrcs(orcsArmy);
  startBtn.style.display = "block";
});

startBtn.onclick = startGame;

function startGame() {

  battleBattleground.classList.add("hide");
  round = setInterval(startRound, 1000);
}

function startRound() {
  //Pick random Hobbit and his div
  let randHobbit = Math.floor(Math.random() * hobbitsArmy.length);
  let currentHobbit = hobbitsArmy[randHobbit];
  let currentHobbitDiv = document.querySelector(
    `[data-hobbit-id="${currentHobbit.id}"]`
  );

  //Pick random Orc and his div
  let randOrc = Math.floor(Math.random() * orcsArmy.length);
  let currentOrc = orcsArmy[randOrc];
  let currentOrcDiv = document.querySelector(
    `[data-orc-id="${currentOrc.id}"]`
  );

  //Display info for current Hobbit before battle
  currentHobbit.displayInfo(currentHobbit);
  //Display info for current Orc before battle
  currentOrc.displayInfo(currentOrc);

  
  //Who is first attack

  if ((firstAttack == 0)) {
    firstAttack = 1;
    currentHobbit.health -= currentOrc.attack;
    if(currentHobbit.health>0){
        currentOrc.health -= currentHobbit.attack;
    }
    
  } else {

    firstAttack = 0;
    currentOrc.health -= currentHobbit.attack;
    if(currentOrc.health>0){
        currentHobbit.health -= currentOrc.attack;
    }
  }

  //Check health
  if (currentHobbit.health <= 0) {
    currentHobbitDiv.style.background = "tomato";
    hobbitsArmy.splice(randHobbit, 1);
  } else {
    currentHobbitDiv.style.background = "green";
  }

  if (currentOrc.health <= 0) {
    currentOrcDiv.style.background = "tomato";
    orcsArmy.splice(randOrc, 1);
  } else {
    currentOrcDiv.style.background = "green";
  }

//check winner
checkWinner();

}


function checkWinner(){
    if(hobbitsArmy.length==0){
        clearInterval(round);
        info.style.color="white"
        info.style.backgroundImage="url(img/orcs/orcs-bg.jpg)"
        info.innerHTML=`<div class="col-12 d-flex justify-content-center align-items-center"><h1>Orcs are Winner</h1></div>`
    }else if(orcsArmy.length==0){
        clearInterval(round);
        info.style.color="white"
        info.style.backgroundImage="url(img/hobbits/hobbit-bg.jpg)"
        info.innerHTML=`<div class="col-12 d-flex justify-content-center align-items-center"><h1>Hobbits are Winner</h1></div>`

    }
}