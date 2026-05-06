// You can edit the English messages here
const content1 = "Every effort you've made lately is truly appreciated. Whether today was a bit tiring or filled with joy, just embrace it gently.";
const content2 = "We all deserve quiet moments to listen to ourselves. Wishing you a peaceful evening and the sweetest of dreams!";

let i = 0;
let j = 0;
const speed = 50; // typing speed in milliseconds

function showNextButton() {
    document.getElementById('btn1').style.display = 'none';
    document.getElementById('btn2').style.display = 'inline-block';
}

function startTyping() {
    document.getElementById('btn2').style.display = 'none';
    document.getElementById('hidden-message').style.display = 'block';
    typeWriter1();
}

function typeWriter1() {
    if (i < content1.length) {
        document.getElementById("text-paragraph-1").innerHTML += content1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    } else {
        setTimeout(typeWriter2, 500); // Wait 0.5s before starting paragraph 2
    }
}

function typeWriter2() {
    if (j < content2.length) {
        document.getElementById("text-paragraph-2").innerHTML += content2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
}
