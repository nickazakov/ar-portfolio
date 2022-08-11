document.getElementById("gradient-canvas2").animate(
    {
      filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
    },
    {
      duration: 2500,
      iterations: Infinity
    }
);

function portfolio() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
}

function blog() {
    // REDIRECT TO BLOG
}

function about() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
}

function resources() {
    $('html, body').animate({
        scrollTop: $("#resources").offset().top
    }, 2000);
}

function recognition() {
    $('html, body').animate({
        scrollTop: $("#recognition").offset().top
    }, 2000);
}

function ctaclick() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}
  
const obj = document.getElementById("views");
animateValue(obj, 0, 300, 5000);

const obj1 = document.getElementById("plays");
animateValue(obj1, 0, 150, 5000);

const obj2 = document.getElementById("playtime");
animateValue(obj2, 0, 3, 5000);