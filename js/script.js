window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        document.getElementById('toTop1').style.display = "block";
    } else {
        document.getElementById('toTop1').style.display = "none";
    }
});

var menuBtn = document.getElementById('menuBtn');
console.log(menuBtn)
var nav = document.getElementById('mainNav');
menuBtn.addEventListener('click', function (e) {
    console.log(e.target)
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
});
