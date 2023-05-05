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
  
  // horn image and selector
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  // audio type and volume
  const hornAudio = document.querySelector('.hidden');
  const audioVolume = document.querySelector('#volume');
  const audioImage = document.querySelector('img[alt="Volume level 2"]');
  // button
  const playButton = document.querySelector('button');
  // party horn checker
  let partyHorn = false;
  const jsConfetti = new JSConfetti();


  hornSelect.addEventListener('change', (event) => {
    // change horn image
    let hornType = event.target.value;
    switch (hornType) {
      case 'air-horn':
        hornImage.src = 'assets/images/air-horn.svg';
        hornAudio.src = "assets/audio/air-horn.mp3";
        partyHorn = false;
        break;
      case 'car-horn':
        hornImage.src = 'assets/images/car-horn.svg';
        hornAudio.src = "assets/audio/car-horn.mp3";
        partyHorn = false;
        break;
      case 'party-horn':
        hornImage.src = 'assets/images/party-horn.svg';
        hornAudio.src = "assets/audio/party-horn.mp3";
        partyHorn = true;
        break;
      default:
        hornImage.src = 'assets/images/no-image.png';
        hornAudio.src = "";
    }
  });

  //change volume
  audioVolume.addEventListener('input', (event) => {
    let volume = event.target.value;
    hornAudio.volume = volume / 100;
    switch (true) {
      case (volume == 0):
        audioImage.src = 'assets/icons/volume-level-0.svg';
        break;
      case (volume < 33):
        audioImage.src = 'assets/icons/volume-level-1.svg';
        break;
      case (volume < 67):
        audioImage.src = 'assets/icons/volume-level-2.svg';
        break;
      default:
        audioImage.src = 'assets/icons/volume-level-3.svg';
    }
  });

  //play audio
  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (partyHorn == true){
      jsConfetti.addConfetti();
    }
  });

}