

h1.onmouseover = function () {
    h1.style.background = "#CC99FE";
};

h1.onmouseleave = function () {
    h1.style.background = "MediumPurple";
};

window.onload = function () {
    var h1_color = document.querySelector('h1');
    h1_color.onmousemove = function () {
        this.style.color = 'White';
    };
    h1_color.onmouseout = function () {
        this.style.color = '#FFFF00';
    };
};



/*logo.onmouseover = function () {
    logo.style.background = "#CC99FE";
};

logo.onmouseleave = function () {
    logo.style.background = "MediumPurple";
};*/

