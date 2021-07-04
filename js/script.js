const video = document.querySelector('#video')
const play = document.querySelector('#play')
const pause = document.querySelector('#pause')
const backward = document.querySelector('#backward')
const forward = document.querySelector('#forward')
const progress = document.querySelector('#progress')
const fullscreen = document.querySelector('#fullscreen')

play.addEventListener('click', handlePlay)
pause.addEventListener('click', handlePause)
backward.addEventListener('click', handleBackward)
forward.addEventListener('click', handleForward)
fullscreen.addEventListener('click', handleFullscreen)
video.addEventListener('loadedmetadata', handleLoaded)
video.addEventListener('timeupdate', handleTimeUpdate)
progress.addEventListener('input', handleInput)


function handlePlay() {
    video.play()
    play.hidden = true
    pause.hidden = false
}

function handlePause() {
    video.pause()
    play.hidden = false
    pause.hidden = true
}
function handleForward() {
    video.currentTime += 10
}

function handleFullscreen() {
    video.requestFullscreen()
    video.mozRequestFullScreen()
    video.webkitRequestFullscreen()
    video.msRequestFullscreen()
}

function handleBackward() {
    video.currentTime -= 10
}

function handleLoaded() {
    progress.max = video.duration
}

function handleTimeUpdate() {
    progress.value = video.currentTime 
    fullscreen.hidden = false
}

function handleInput() {
    if( progress.value > 0){
        video.play()
    }
    video.currentTime = progress.value 
}