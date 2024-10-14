import backgroundSrc from "./media/back.mp4";
import "./Thanks.css";

export default function ThanksPage() {
  return (
    <>
      <video
        autoPlay
        muted={true}
        loop={true}
        controls={false}
        className="backgroundVideo"
        src={backgroundSrc}
      />

      <div className="section">
        <h4>THANKS EVERYONE</h4>

        <div className="card">
          <div className="face face-front"> My Precious </div>
          <div className="face face-back"> Mam & Dad </div>
        </div>

        <div className="description">
          Thank you, everyone, for your unwavering support and encouragement.
          Your kindness and dedication have made a significant impact on our
          journey. Together, we have created a tapestry of shared experiences,
          and I am truly grateful for each one of you.
        </div>

        <div className="poem">
          <p>In the garden of life, where friendships bloom,</p>
          <p>Your kindness shines bright, dispelling all gloom.</p>
          <p>With every word spoken, and every hand lent,</p>
          <p>My heart swells with gratitude, a true testament.</p>
        </div>
      </div>

      <div className="MenuButton">Menu</div>
    </>
  );
}
