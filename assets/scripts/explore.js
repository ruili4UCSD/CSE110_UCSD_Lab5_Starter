// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // default smile image: assets/images/smiling.png
  // 张嘴的笑脸图片：assets/images/smiling-open.png
  // 语音：https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
  
  // just get from example of the speech synthesis website
  const synth = window.speechSynthesis;
  const inputTxt = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const pressToTalk = document.querySelector('button');
  // get FaceImage
  const smileFaceImage = document.querySelector('img[alt="Smiling face"]');

  let voices = [];

  function populateVoiceList() {

    // 读取voice的list，开始添加。
    // 直接从example复制
    voices = synth.getVoices();

    for(let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // here, define the action after we click the button
  pressToTalk.addEventListener('click', (event) => {
    event.preventDefault();
    const utterance = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }

    // deal with the image
    // 把image放在这里，变化更及时
    smileFaceImage.src = 'assets/images/smiling-open.png';
    
    // start speak
    synth.speak(utterance);
    
    // image end
    utterance.addEventListener('end', () => {
      smileFaceImage.src = 'assets/images/smiling.png';
    });
  });

}