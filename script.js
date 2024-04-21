const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textarea.value;

  if (!synth.speaking && text) {
    const utternace = new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
  }

  if (text.length > 50) {
    if (synth.speaking && isSpeaking) {
      button.innerText = "Пауза";
      synth.resume();
      isSpeaking = false;
    } else {
      button.innerText = "Продолжить";
      synth.pause();
      isSpeaking = true;
    }
  } else {
    isSpeaking = false;
    button.innerText = "Говорить";
  }

  setInterval(() => {
    if (!synth.speaking && !isSpeaking) {
      isSpeaking = true;
      button.innerText = "Озвучить";
    }
  });
};

button.addEventListener("click", textToSpeech);
