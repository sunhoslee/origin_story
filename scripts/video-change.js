video = document.getElementById('video-background');
source = document.getElementById('source');

function PlayVideo(srcVideo){
    switch(document.getElementById('video_background').src) {
        case 'videos/daniel_video_1.mp4':
            console.log("clicked here")
            document.getElementById('video_background').src = 'videos/daniel_video_4.mp4';
            break;
        case 'videos/daniel_video_2.mp4':
            document.getElementById('video_background').src = 'videos/daniel_video_1.mp4';
            break;
        case 'videos/daniel_video_3.mp4':
            document.getElementById('video_background').src = 'videos/daniel_video_2.mp4';
            break;
        case 'videos/daniel_video_4.mp4':
            document.getElementById('video_background').src = 'videos/daniel_video_3.mp4';
            break;
    }
  video.pause();
  source.src = srcVideo;
  video.load();
  video.play();
}

function StopVideo(){
  document.getElementById('video').pause();
}

document.getElementById('back-button').addEventListener('click', function() {
    console.log("on click")
    switch(document.getElementById('video_background').src) {
        case 'videos/daniel_video_1.mp4':
            console.log("clicked here")
            document.getElementById('video_background').src = 'videos/daniel_video_4.mp4';
            break;
        case 'videos/daniel_video_2.mp4':
            document.getElementById('video_background').src = 'videos/daniel_video_1.mp4';
            break;
        case 'videos/daniel_video_3.mp4':
            document.getElementById('video_background').src = 'videos/daniel_video_2.mp4';
            break;
        case 'videos/daniel_video_4.mp4':
            document.getElementById('video_background').src = 'videos/daniel_video_3.mp4';
            break;
    }
});

document.getElementById('forward-button').addEventListener('click', function() {
    switch(document.getElementById('video_background').src) {
        case 'videos/daniel_video_1.mp4':
            document.getElementById('video_background').src = 'videos/daniel_video_2.mp4';
            break;
        case 'videos/daniel_video_2.mp4':
            document.getElementById('video_background').src = 'videos/daniel_video_3.mp4';
            break;
        case 'videos/daniel_video_3.mp4':
            document.getElementById('video_background').src = 'videos/daniel_video_4.mp4';
            break;
        case 'videos/daniel_video_4.mp4':
            document.getElementById('video_background').src = 'videos/daniel_video_1.mp4';
            break;
    }
});