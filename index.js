'use strict';

//console.log('Hello world from index.js!');
function sample(){
    let Ball;

    /* ID=gamedivの要素を取得 */
    let obj = document.getElementById('canv_div');
    if( obj == null ){
    // ないよ！
        return;
    }

    /* canvasの要素を生成 */
    let canvas = document.createElement('canvas');
    canvas.id = "gamecanvas";    //ID
    canvas.height = 320;         //サイズ　縦
    canvas.width = 320;          //サイズ　横

    /* gamedivに、新しく作ったgamecanvasを追加 */
    obj.appendChild(canvas);

    //試しに文字描画
    var ctx = canvas.getContext('2d');
    ctx.fillText("test", 500, 500);

    function rand(min, max) {
      // 0-n
      // Math.floor(Math.random() * (n + 1))
      // min-max
      return min + Math.floor(Math.random() * (max - min + 1));
    }

    Ball = function(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.vx = rand(-10, 10);
      this.vy = rand(-10, 10);
      this.color = 'hsla(' + rand(50, 100) + ', ' + rand(40, 80) + '%, ' + rand(50, 60) + '%, ' + Math.random() + ')';
      this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.closePath();
        ctx.fill();
      };
      this.move = function() {
        if (this.x + this.r > canvas.width || this.x - this.r < 0) {
          this.vx *= -1;
        }
        if (this.y + this.r > canvas.height || this.y - this.r < 0) {
          this.vy *= -1;
        }
        this.x += this.vx;
        this.y += this.vy;
      }
    };

    var ball = new Ball(rand(100, 200), rand(100, 200), rand(10, 50));
    ball.draw();

    function update() {
      ctx.fillStyle = '#ecf0f1';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ball.draw();
      ball.move();
      setTimeout(function() {
        update();
      }, 30);
    }

    update();
}
console.log('Hello world from index.js!');
sample()
