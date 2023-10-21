import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localKey = "videoplayer-current-time";
const stopTime = localStorage.getItem(localKey)


player.on('timeupdate', throttle(currentTime, 1000));
function currentTime(data) {
    const playingTime = data.seconds;
    localStorage.setItem(localKey, playingTime);
    // data is an object containing properties specific to that event
};

player.setCurrentTime(stopTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
