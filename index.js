let audio = new Audio("./ERES_TONTO.mp3");

const jaggerQuestion = () => {
    $("#jagger-btn").click(function(e) {
        audio.pause();

        audio = new Audio("./ERES_TONTO.mp3");
        audio.preload;
        audio.play();        
    });
}


$(document).ready(() => {
    jaggerQuestion();
});