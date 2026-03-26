$("#circle")
    // Move DOWN, then change color after finishing
    .animate({ top: "500px", opacity: 0.6 }, 5000, function() {
        $(this).css("background-color", "blue");
    })

    .delay(800)

    // Move RIGHT, then change color
    .animate({ left: "500px", opacity: 0.8 }, 5000, function() {
        $(this).css("background-color", "hotpink");
    })

    .delay(800)

    // Move UP, then change color
    .animate({ top: "0px", opacity: 1 }, 5000, function() {
        $(this).css("background-color", "pink");
    })

    .delay(800)

    // Move LEFT, then change color
    .animate({ left: "0px", opacity: 0.8 }, 5000, function() {
        $(this).css("background-color", "deeppink");
    });