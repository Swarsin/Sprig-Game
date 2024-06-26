/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Fight against COVID
@author: Swaraj Singh
@tags: []
@addedOn: 2024-00-00
*/

const player = "p";
const covid = "c";
const bullet = "b";
const refill = "r";

setLegend(
  [ player, bitmap`
................
................
...000..........
...060..........
..0660..........
..06660.........
..03630.........
..06660055557...
..03630.55557...
..03330055......
.066660.55......
.06660..........
..000...........
..0.0...........
.00.00..........
................` ],
  [ covid, bitmap`
D4.....4D4....4D
DD4....DDD...DDD
.4D4...4D...DD4.
..4DD4..D4.D4D..
....DDD.D.DDD...
.....DD4DD4D....
4.44.DDDDDDD4.4.
DDDDDD4D4DDDDDDD
.4.D4DDDDD4D.4.4
.....DD4D4DD....
....4DDDDDDDD...
....D4.4D..DD4..
..4DDD..4D.4DD4.
.DDD4..DD4..4DD.
D4DD....D....DDD
4D.....44D....4D`],
  [ bullet, bitmap`
................
................
................
................
................
.......7........
...777777.......
...7333337......
...73444337.....
...7333337......
...777777.......
.......7........
................
................
................
................`],
  [ refill,bitmap`
................
...7777777777...
...7666666667...
...7666666667...
...7666666667...
...7666666667...
...7666676667...
...7677777667...
...7673343767...
...7677777667...
...7666676667...
...7666666667...
...7666666667...
...7666666667...
...7777777777...
................` ]
);

setSolids([player, covid, refill])

let level = 0
const levels = [
  map`
........
........
........
........
p.......`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

var gameRunning = true;

function SpawnBullet() {
  let x = 0;
  let y = getFirst(player).y;
  addSprite(x, y, bullet);
}

function SpawnCovid() {
  let x = 8;
  let y = Math.floor(Math.random() * 5) + 1;
  addSprite(x, y, covid);
}

onInput("s", () => {
  getFirst(player).y += 1
})

onInput("w", () => {
  getFirst(player).y -= 1
})

onInput("i", () => {
  SpawnBullet()
})

function MoveBullets() {
  let bullets = getAll(bullet);
  for (let i = 0; i < bullets.length; i++){
    bullets[i].x += 1;
  }
}

afterInput(() => {
  
})

var gameLoop = setInterval(() => {
  // Step 4 - Add all game functions
  MoveBullets()
  // if (checkHit()) {
  //   clearInterval(gameLoop);
  //   gameRunning = false;
  //   addText("Game Over!", {
  //     x: 5,
  //     y: 6,
  //     color: color`3`
  //   });
  // }

}, 100);


