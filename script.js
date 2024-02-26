let allcolors = ["red","green","yellow","blue"];
let start = false;
let level = 0;
let h2 = document.querySelector('h2');
let score = document.querySelector(".scoreno");
score.innerHTML = `0`;
let hscore = document.querySelector(".highscoreno");
let h = 0;
hscore.innerHTML = `0`;
let gameseq = [];
let userseq = [];

document.addEventListener('keypress',()=>{
    if(start === false){
        start = true;
        levelup();    
    }
})

function levelup(){
    score.innerHTML = `${level}`;
    if(level < h){
        hscore.innerHTML = `${h}`;
    }
    else{
        hscore.innerHTML = `${level}`;
    }
    h = parseInt(hscore.innerHTML);
    console.log("h=",h);
    ++level;
    h2.innerText = `level  ${level}`;
    userseq = [];
    rancolor();
}

function gameflash(selcol){
    console.log("gameflash")
    selcol.classList.add("flash");
    setTimeout(() => {
    selcol.classList.remove("flash");
    }, 250);
}


function userflash(ele){
    ele.classList.add("userflash")
    setTimeout(() => {
        ele.classList.remove("userflash");
    }, 250);
    console.log("userflash");
}

function rancolor(){
    let pickedcolor = allcolors[Math.floor(Math.random()*4)];
    let selcol = document.querySelector(`.${pickedcolor}`);
    //generated random color will flash for while
    console.log("rancolor")
    gameflash(selcol);
    gameseq.push(pickedcolor);
    console.log("gameseq ="+gameseq);
    console.log("userseq ="+userseq)
}

let allcol = document.querySelectorAll('.color');
for(el of allcol){
    el.addEventListener('click', btnpress);
}

function btnpress(){
    userflash(this);
    userseq.push(this.id);
    console.log("btnpress");
    console.log("userseq ="+userseq)
    console.log("gameseq ="+gameseq);
    check(userseq.length-1);
}

function check(idx){
    if(gameseq[idx] == userseq[idx]){
        console.log("outter");
        if(gameseq.length == userseq.length){
            console.log("inner");
            setTimeout( levelup, 1000);
        }
    }
    else{
        h2.innerText = "Game Over! Press any key to Restart";
        restart();
    }
}

function restart(){
    start = false;
    level = 0;
    h2.innerHTML = "Press key any to start the game";
    hscore.innerHTML = `${h}`; 
}