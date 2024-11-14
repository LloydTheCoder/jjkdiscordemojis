// Jujutsu Kaisen Button
$(".jjk").click(function() {
    var video = document.querySelector(".back-video");  // Target the <video> tag
    var source = document.getElementById("yes");        // Target the <source> tag

    source.src = "img/THIS IS 4K ANIME (Jujutsu Kaisen).mp4";   // Change the source
    video.load();                                       // Reload the video element
    video.play();                                      // Play the new video

    $(".main").css({
        "background-color": "rgba(0, 136, 255, 0.2)", 
        "border": "1px solid rgba(0, 136, 255, 0.3)",
        "filter": "drop-shadow(0 0 0.75rem rgb(0, 136, 255))"
    });
});

// Naruto Button
$(".n").click(function() {
    var video = document.querySelector(".back-video");  
    var source = document.getElementById("yes");        

    source.src = "img/THIS IS 4K ANIME (Naruto).mp4";   // Change the source
    video.load();                                      
    video.play();                                     

    $(".main").css({
        "background-color": "rgba(220, 93, 20, 0.2)", 
        "border": "1px solid rgba(220, 93, 20, 0.3)",
        "filter": "drop-shadow(0 0 0.75rem rgb(220, 93, 20))"
    });
});

// One Piece Button
$(".op").click(function() {
    var video = document.querySelector(".back-video");  
    var source = document.getElementById("yes");        

    source.src = "img/THIS IS 4K ANIME (One Piece 1015).mp4";   // Change the source
    video.load();                                      
    video.play();                                     

    $(".main").css({
        "background-color": "rgba(200, 71, 44, 0.2)", 
        "border": "1px solid rgba(200, 71, 44, 0.3)",
        "filter": "drop-shadow(0 0 0.75rem rgb(200, 71, 44))"
    });
});

// Demon Slayer Button
$(".ds").click(function() {
    var video = document.querySelector(".back-video");  
    var source = document.getElementById("yes");        

    source.src = "img/THIS IS 4K ANIME (Tanjiro Kamado).mp4";   // Change the source
    video.load();                                      
    video.play();                                     

    $(".main").css({
        "background-color": "rgba(255, 0, 0, 0.2)", 
        "border": "1px solid rgba(255, 0, 0, 0.3)",
        "filter": "drop-shadow(0 0 0.75rem rgb(255, 0, 0))"
    });
});