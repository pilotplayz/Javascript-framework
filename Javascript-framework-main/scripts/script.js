$(function () {
    console.log("document is ready!");

    //make the image draggable
    $("#Porsche-pic").draggable({
        containment: "#containment-wrapper",
        scroll: false,
        drag: function () {
            calculateWow();
        },
        stop: function () {
            calculateWow();
        }
    });

   
    function calculateWow() {
        var pos = $("#Porsche-pic").position();

        // Score based on Porsche position
        var score = Math.floor(pos.top + pos.left);

        // Debug output
        if (score < 500) {
            $("#wow-output").html('<h2>not much speed (' + score + ')</h2>');
        } else {
            $("#wow-output").html('<h2>so much speed (' + score + ')!!</h2>');
        }


        // Score text
        $("#score-display").text(score);

        // Progress bar (max 1000)
        var percent = Math.min((score / 1000) * 100, 100);
        $("#score-progress").css("width", percent + "%");

        // Status messages
        if (score < 0) {
            $("#status-message").text("Porsche is confused... Not fast enough!");
        }
        else if (score < 300) {
            $("#status-message").text("Porsche's oil is warming up...");
        }
        else if (score < 600) {
            $("#status-message").text("Wow! Porsche is gaining speed!");
        }
        else if (score < 900) {
            $("#status-message").text("So Much Speed! Porsche is flying!");
        }
        else {
            $("#status-message").text("Porsche achieved MAX SPEED! Incredible!");
        }
    }
});
