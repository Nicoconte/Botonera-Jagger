let audio = new Audio("./ERES_TONTO.mp3");

const jaggerQuestion = () => {
    $("#jagger-btn").click(function(e) {
        audio.pause();
        audio = new Audio("./ERES_TONTO.mp3");
        audio.preload;
        audio.play();        
    });
}

$(document).ready(function() {
    let darkMode = false;

    $("#background-btn").click(function() {
        darkMode = !darkMode;
        if (darkMode) {
            $("body").css("background-color", "#404040");
            $("#background-btn").text("☀️ Light Mode");
        } else {
            $("body").css("background-color", "#FFFFFF");
            $("#background-btn").text("🌙 Dark Mode");
        }
    });
});

$(document).ready(() => {
    jaggerQuestion();
});
