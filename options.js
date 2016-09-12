
function Checkbox (_x, _y, _label, _callback=null, _enabled=true) {
    var t = this;
    t.checkbox_size = 20;
    t.x = _x;
    t.y = _y;
    t.label = _label;
    t.enabled = _enabled;
    t.draw = function(ctx) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#000000';
        //console.log(t.x+', '+t.y+', '+t.checkbox_size);
        ctx.fillRect(t.x - t.checkbox_size/2, t.y - t.checkbox_size/2, t.checkbox_size, t.checkbox_size);
        ctx.strokeRect(t.x - t.checkbox_size/2, t.y - t.checkbox_size/2, t.checkbox_size, t.checkbox_size);
        if (t.enabled) {
            ctx.beginPath();
            ctx.moveTo(t.x - t.checkbox_size/2, t.y + t.checkbox_size/2);
            ctx.lineTo(t.x + t.checkbox_size/2, t.y - t.checkbox_size/2);
            ctx.stroke();
        }
        ctx.font = "16px Verdana";
        ctx.fillStyle = '#ffffff';
        ctx.fillText(t.label, t.x + t.checkbox_size, t.y);
    }
    t.checkForToggle = function(e) {
        console.log('checking for a click');
        var mousePos = getMousePos(e);
        if (mousePos.x > t.x - t.checkbox_size/2 && mousePos.y > t.y - t.checkbox_size/2 &&
           mousePos.x < t.x + t.checkbox_size/2 && mousePos.y < t.y + t.checkbox_size/2) {
            t.enabled = !t.enabled;
            console.log('a thing happened');
            if (_callback != null) {
                _callback(t.enabled);
            }
        }
    }
}

var checkboxToggleWaveyEffect = new Checkbox(700, 500, "Waves", function(bool) { waveyEffectEnabled = bool; });
var checkboxToggleFadeEffect = new Checkbox(700, 530, "Fades", function(bool) { fadeEffectEnabled = bool; });

var options = {
    draw: function(ctx) {
        checkboxToggleWaveyEffect.draw(ctx);
        checkboxToggleFadeEffect.draw(ctx);
    }
}