var iframe = document.getElementById('vimeo-player');
    var player = new Vimeo.Player(iframe);

    player.setLoop(true);  // Ensure looping is enabled
    player.play(); // Force play