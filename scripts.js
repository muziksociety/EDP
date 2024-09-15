// Overlay Menu Toggle
var menuIcon = document.getElementById('menu-icon');
var overlayMenu = document.getElementById('overlay-menu');
var closeBtn = document.getElementById('close-btn');
var menuLinks = overlayMenu.querySelectorAll('a'); // Get all menu links

menuIcon.addEventListener('click', function() {
    overlayMenu.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    overlayMenu.style.display = 'none';
});

// Close menu when clicking outside or on a link
window.addEventListener('click', function(event) {
    if (event.target === overlayMenu) {
        overlayMenu.style.display = 'none';
    }
});

// Close menu when a menu link is clicked
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        overlayMenu.style.display = 'none';
    });
});

// Instrumentales Audio Player
var audioPlayer = document.getElementById('audio-player');
var audioSource = document.getElementById('audio-source');
var playlistItems = document.querySelectorAll('#playlist li');
var currentSongElement = null;

function resetSongLabels() {
    playlistItems.forEach(function(song) {
        song.classList.remove('visualizer-active-text');
    });
}

audioPlayer.addEventListener('play', function() {
    resetSongLabels();
    audioPlayer.classList.add('visualizer-active');

    playlistItems.forEach(function(song) {
        if (audioSource.src === song.getAttribute('data-src')) {
            song.classList.add('visualizer-active-text');
            currentSongElement = song;
        }
    });
});

audioPlayer.addEventListener('pause', function() {
    resetSongLabels();
    audioPlayer.classList.remove('visualizer-active');
});

audioPlayer.addEventListener('ended', function() {
    resetSongLabels();
    audioPlayer.classList.remove('visualizer-active');
});

playlistItems.forEach(function(song) {
    song.addEventListener('click', function() {
        if (currentSongElement) currentSongElement.classList.remove('visualizer-active-text');
        audioSource.src = song.getAttribute('data-src');
        audioPlayer.load();
        audioPlayer.play();
    });
});

// Masters Audio Player
var mastersAudioPlayer = document.getElementById('masters-audio-player');
var mastersAudioSource = document.getElementById('masters-audio-source');
var masterSongs = document.querySelectorAll('#masters-playlist li');
var currentMasterSongElement = null;

function resetMastersLabels() {
    masterSongs.forEach(function(song) {
        song.classList.remove('visualizer-active-text');
    });
}

mastersAudioPlayer.addEventListener('play', function() {
    resetMastersLabels();
    mastersAudioPlayer.classList.add('visualizer-active');

    masterSongs.forEach(function(song) {
        if (mastersAudioSource.src === song.getAttribute('data-src')) {
            song.classList.add('visualizer-active-text');
            currentMasterSongElement = song;
        }
    });
});

mastersAudioPlayer.addEventListener('pause', function() {
    resetMastersLabels();
    mastersAudioPlayer.classList.remove('visualizer-active');
});

mastersAudioPlayer.addEventListener('ended', function() {
    resetMastersLabels();
    mastersAudioPlayer.classList.remove('visualizer-active');
});

masterSongs.forEach(function(song) {
    song.addEventListener('click', function() {
        if (currentMasterSongElement) currentMasterSongElement.classList.remove('visualizer-active-text');
        mastersAudioSource.src = song.getAttribute('data-src');
        mastersAudioPlayer.load();
        mastersAudioPlayer.play();
    });
});
