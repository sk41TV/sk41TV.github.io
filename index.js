$(function() {
    var d = new Date();
    switch(d.getMonth()) {
        case 11, 0, 1: document.getElementById("bg").style.background = "#348cb2"; break;
        case 2, 3, 4: document.getElementById("bg").style.background = "#00CD00"; break;
        case 5, 6, 7: document.getElementById("bg").style.background = "#e7e307"; break;
        case 8, 9, 10: document.getElementById("bg").style.background = "#ebb609"; break;
        default: break;
    }
})