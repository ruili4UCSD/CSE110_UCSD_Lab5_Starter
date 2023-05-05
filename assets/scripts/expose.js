// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // air-hore image path: ../images/air-horn.svg
  // car-hore image path: ../images/car-horn.svg
  // party-hore image path: ../images/party-horn.svg

  // volum level 0 img : ../icons/volumn-level-0.svg
  // volum level 1 img : ../icons/volumn-level-1.svg
  // volum level 2 img : ../icons/volumn-level-2.svg
  // volum level 3 img : ../icons/volumn-level-3.svg

  // air-hore audio path: ../audio/air-horn.mp3
  // car-hore audio path: ../audio/car-horn.mp3
  // party-hore audio path: ../audio/party-horn.mp3
  
  // change img when user choose different type of horn:
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const hornSelect = document.getElementById('horn-select');

  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    switch (selectedHorn) {
      case 'air-horn':
        hornImage.src = 'assets/images/air-horn.svg';
        break;
      case 'car-horn':
        hornImage.src = 'assets/images/car-horn.svg';
        break;
      case 'party-horn':
        hornImage.src = 'assets/images/party-horn.svg';
        break;
      default:
        hornImage.src = 'assets/images/no-image.png';
    }
  });

}