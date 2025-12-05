const button = document.getElementById('light-up');
const cake = document.getElementById('cake');
const flame = document.getElementById('flame');
const bd_Banner = document.getElementById('bd-banner');
const glow = document.getElementById('light-gradient');
const balloon_l = document.getElementById('c-balloon-l');
const balloon_r = document.getElementById('c-balloon-r');
const unlockBtn = document.getElementById('unlock-btn');
const giftBox = document.getElementById('gift-box');

let isOn = false;
let audio = new Audio("assets/music.mp3");


button.onclick = function () {
    isOn = !isOn;

    if (isOn) {
        audio.play();

        cake.style.opacity = 0.8;
        flame.style.opacity = 1;
        bd_Banner.style.opacity = 0.6;
        glow.style.opacity = 0.7;
        balloon_l.style.opacity = 0.6;
        balloon_r.style.opacity = 0.6;

        setTimeout(() => {
            unlockBtn.style.display = "block";
            giftBox.style.display = "none";
        }, 10000);

    }
    else {
        audio.pause();
        audio.currentTime = 0;

        cake.style.opacity = 0.1;
        flame.style.opacity = 0;
        bd_Banner.style.opacity = 0.01;
        glow.style.opacity = 0;
        balloon_l.style.opacity = 0;
        balloon_r.style.opacity = 0;

        unlockBtn.style.display = "none";
        giftBox.style.display = "none";
    }
};


unlockBtn.onclick = function () {
    giftBox.style.display = "block";
    unlockBtn.style.display = "none";
};
