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

document.addEventListener('DOMContentLoaded', 
    function() { 
        var canvas = 
document.getElementById('rainbowCanvas');
        var ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var particles = [];
    function Particle(x,y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = 'hsl('+ Math.random() * 360 +', 100%, 50%)';
    }
        
    
