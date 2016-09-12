var canvas = document.getElementById('jindo-canvas');
var ctx = canvas.getContext('2d');

var COLOUR = {
    WALL:               "#990000",
    WALL_BACK:          '#450000',
    BREAKABLE_BORDER:   "#454545",
    BREAKABLE:          '#676767',
    EXIT:               "#00ff00",
    LETHAL:             "#ff0000",
    LETHAL_FADEOUT:     'rgba(255, 255, 0, 0)'
};

function DistanceFromLevelCenter(_x, _y) {
    var center = {x: getLevelWidth()/2, y: getLevelHeight()/2 };
    return {x: Math.abs(_x-center.x), y: Math.abs(center.y-_y)};
}

function drawBackWalls(walls) {
    for (i = 0; i < walls.length; i++) {
        drawBackWall(walls[i].x, walls[i].y, ctx);
    }
}

function drawWalls(walls) {
    for (i = 0; i < walls.length; i++) {
        drawWall(walls[i].x, walls[i].y, ctx);
    }
}

var drawPlayer = function(x, y, ctx) {
    drawSquare(player.x, player.y, '#ffcc00', ctx);
    drawFace(player.x, player.y, '#000000', ctx);
}

var drawBackWall = function(x, y, ctx) {
    drawSquare(x, y, COLOUR.WALL_BACK, ctx);
}

var drawWall = function(x, y, ctx) {
    var offset = DistanceFromLevelCenter(x, y);
    drawSquare(x, y, COLOUR.WALL, ctx, TILE, offset);
}

var drawHazard = function(x, y, ctx) {
    //drawSquare(x, y, COLOUR.LETHAL, ctx);
    ctx.fillStyle = '#ff6600';
    for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc((x+Math.random())*TILE, (y+Math.random())*TILE, 1, 0, 2*Math.PI);
        ctx.fill();
    }
    drawFace(x, y, '#ff6600', ctx, TILE, true);
}

var drawBreakableBlock = function(x, y, ctx) {
    drawSquare(x, y, COLOUR.BREAKABLE_BORDER, ctx);
    drawSquare(x, y, COLOUR.BREAKABLE, ctx, TILE-10);
}

var drawExit = function(x, y, ctx) {
    drawSquare(x, y, COLOUR.EXIT, ctx);
    drawSquare(x, y, '#000000', ctx, TILE-10);
    drawSquare(x, y, COLOUR.EXIT, ctx, TILE-20);
}

var tileDraw = [null, drawWall, drawBreakableBlock, drawExit, drawHazard];