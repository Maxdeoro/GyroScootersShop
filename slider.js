const slider = {
    slides: ['smart.jpg', 'cross.jpg', 'fairy.jpg'],
    frame: 0,   // initial image
    set: function(image) {
        document.getElementById("scr").style.backgroundImage = 'url("+image+")';
    },
    init: function() {
        this.set(this.slides[this.frame]);
    },
    left: function() {
        this.frame--;
        if (this.frame < 0) {
            this.frame = this.slides.lenght - 1;
            this.set(this.slides[this.frame]);
        }
    },
    right: function() {
        this.frame++;
        if (this.frame == this.slides.length) {
            this.frame = 0;
            this.set(this.slides[this.frame]);
        }
    },
};

window.onload = function() {
    slider.init();
    setInterval(function() {
        slider.right();
    }, 6000);
};