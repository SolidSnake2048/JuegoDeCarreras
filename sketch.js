var ball;
var database;
var gameState=0;
var playerCount;
var form;
var game;
var player;
var canvas;
var allPlayers;
var cars;
var car1;
var car2;
var car3;
var car4;
function setup(){
    database=firebase.database();
    canvas=createCanvas(displayWidth-20,displayHeight-30);
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount==4){
        game.update(1);
    }
    if(gameState==1){
        clear();
        game.play();
    }
}
//hay que ver el form

