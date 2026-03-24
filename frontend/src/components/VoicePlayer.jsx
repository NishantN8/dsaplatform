export default function VoicePlayer({ text }) {

  const speak = () => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  };

  return (
    <button onClick={speak}>
      🔊 Listen
    </button>
  );
}