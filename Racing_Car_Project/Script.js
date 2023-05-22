const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
//console.log(gameArea);
score.classList.add('hide');

startScreen.addEventListener('click' ,start);

let player = {speed:5,score: 0};

let keys = {ArrowUp: false,ArrowDown:false,ArrowRight:false,ArrowLeft:false}

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(e){
     e.preventDefault();
//console.log(e.key);
     keys[e.key] = true;
     console.log(keys);
}

function keyUp(e){
    e.preventDefault();
   // console.log(e.key);
    keys[e.key] = false;
    //console.log(keys);
}

function isCollide(a,b){
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();

    return !((aRect.top > bRect.bottom) || (aRect.bottom < bRect.top) ||
             (aRect.right < bRect.left) || (aRect.left > bRect.right))
}

function moveLines(){
    let lines = document.querySelectorAll('.lines');
    
    lines.forEach(function(item) {

        if(item.y >= 690)
        {
            item.y -= 750;
        }

        item.y += player.speed;
        item.style.top = item.y + "px";
    })
}
function endGame()
{
    player.start = false;
    startScreen.classList.remove('hide');
    startScreen.innerHTML = "Game Over <br> Your Final Score is "
                            + (player.score + 1) + "<br> Press here to restart the game";
}

function moveenmy(car){
    let enemy = document.querySelectorAll('.enemy');
    
    enemy.forEach(function(item){

        if(isCollide(car, item))
        {
            //console.log("Is Done");
            endGame();
        }

        if(item.y >= 690)
        {
            item.y  = -300;
            item.style.left  = Math.floor(Math.random() * 350) + "px";
        }

        item.y += player.speed;
        item.style.top = item.y + "px";
    })
}


function gamePlay(){
   // console.log("Game Is Straing");

    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();
   
    // console.log(road);

    if(player.start == true)
    {
        moveLines();
        moveenmy(car);

        if(keys.ArrowUp && player.y > 80){player.y -= player.speed}
        if(keys.ArrowDown && player.y < (road.bottom -150)){player.y += player.speed}
        if(keys.ArrowLeft && player.x > 0){player.x -= player.speed}
        if(keys.ArrowRight && player.x < (road.width - 60)){player.x += player.speed}

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";

        window.requestAnimationFrame(gamePlay);
        //console.log(player.score++);

        player.score++;
        score.innerText = "Score " + player.score;

    }
   
}
function start(){
    
    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');
    score.classList.remove('hide');
    gameArea.innerHTML = "";
    

    player.start = true;
    player.score = 0;
    window.requestAnimationFrame(gamePlay);

    for(let i = 0; i < 5;i++)
    {
        let lines = document.createElement('div');
        lines.setAttribute('class','lines');
        lines.y = (i * 170);
        lines.style.top = lines.y + "px";
        gameArea.appendChild(lines);
    }
    let car = document.createElement('div');
    car.setAttribute('class','car');
    // car.innerText = "I am Car";
    gameArea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;

    // console.log("Top Postion " + car.offsetLeft);
    // console.log("Top Postion " + car.offsetTop);

    for(let i = 0; i < 3;i++)
    {
        let enemyCar = document.createElement('div');
        enemyCar.setAttribute('class','enemy');
        enemyCar.y = ((i + 1) * 350) * -1;
        enemyCar.style.top = enemyCar.y + "px";
       // enemyCar.style.backgroundColor = "blue";
        enemyCar.style.left  = Math.floor(Math.random() * 350) + "px";
        gameArea.appendChild(enemyCar);
    }
    
}

function randomColor(){

}