document.addEventListener('DOMContentLoaded', function(){
    attachClickEvent('reindeer', 'reindeerPhoto');
    attachClickEvent('shetlandponies', 'shetlandponiesPhoto');
    attachClickEvent('gilded', 'gildedPhoto');
    attachClickEvent('scarlet-leather', 'scarletLeatherPhoto');
    attachClickEvent('dwarf', 'dwarfPhoto');
    attachClickEvent('goldTassle', 'goldTasslePhoto');
    attachClickEvent('fur', 'furPhoto');
    attachClickEvent('goldWand', 'goldWandPhoto');
    attachClickEvent('sugar', 'icingSugarPhoto');
    attachClickEvent('stern', 'sternPhoto');
});

function attachClickEvent(buttonId, photoId) {
    document.getElementById(buttonId).addEventListener('click', function(){
        hideAllImages();
        const picture = document.getElementById(photoId);
        picture.style.display = 'block';
    });
}

function hideAllImages() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {image.style.display = 'none'});
}

//french quote

