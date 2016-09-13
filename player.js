var player = {
    x:                      0, 
    y:                      0, 
    dx:                     0,
    dy:                     0,
    levelScore:             0,
    score:                  0,
    highScore:              0,
    movesSinceStationary:   0,
    stop: function() { 
        this.dx = 0;
        this.dy = 0;
    },
    win: function() {
        this.score += this.levelScore;
        this.levelScore = 0;
    },
    lose: function() {
        this.levelScore = 0;
    },
    setDirection: function(dir) {
        if (this.dx == 0 && this.dy == 0) {
            this.dx = dir.x;
            this.dy = dir.y;
        }
    }
};