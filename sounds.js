document.addEventListener('DOMContentLoaded', function(){
    attachClickEvent('sweep', 'sweepingSound');
    attachClickEvent('jingle', 'jinglingSound');
    attachClickEvent('whip', 'whipSound');
    attachClickEvent('snow', 'windSound');
});

function attachClickEvent(buttonId, soundId) {
    document.getElementById(buttonId).addEventListener('click', function(){
        const audio = document.getElementById(soundId);
        audio.play();
    });
}
