
(function(){





var sprites = {};
var spriteId = 0;

var fps = 60;


this.Sprite = function(callback){
  var id = spriteId++;
  var that = new callback();

  that.x = that.x || 0;
  that.y = that.y || 0;
  that.ax = that.ax || 0;
  that.ay = that.ax || 0;

  that.autoAnimator = function(){
    that.ay++;
    that.x += that.ax;
    that.y += that.ay;

    if(that.y > 400){
      that.y = 400;
      that.ay = 0;
    }
  };
  that.draw = function(){
    sprites[id] = that;
  };
  that.dead = function(){
    delete sprites[id];
  };
  return that;
};


// animate
setInterval(function(){
  for(var i in sprites){
    sprites[i].autoAnimator();
    sprites[i].animator();
  }
}, 10);
// draw
setInterval(function(){
  ctx.fillStyle = "rgba(255,255,255,100)";
  ctx.fill();
  for(var i in sprites){
    sprites[i].renderer();
  }
}, 1000/fps);






})();
