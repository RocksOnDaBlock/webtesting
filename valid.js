function validate() {
    var password = document.getElementById("pass");
    var length = document.getElementById("length");


    if (password.value.length >= 8){
        alert("login Successfull");
        return false;

    }
    else {
        alert("login failed");
    }


}

document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('rainbowCanvas');
  var ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var particles = [];

  function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 4 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = 'hsl(' + (Math.random() * 360) + ', 100%, 50%)';
  }

  Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) {
      this.size -= 0.1;
    }
  };

  Particle.prototype.draw = function() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };

  // Create particles and update/draw them as needed
  // (You'll need to add this part based on your specific use case)

});     
    
