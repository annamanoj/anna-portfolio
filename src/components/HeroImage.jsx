import profile from "../assets/profile.png";
import "../styles/heroImage.css";
import { IoSettingsSharp } from "react-icons/io5";
function HeroImage() {
  return (
    <div className="hero-image-container">

      <div className="glow"></div>

      <div className="ring ring-1"></div>
      <div className="ring ring-2"></div>
      <div className="ring ring-3"></div>

      <div className="photo-circle">
        <img
          src={profile}
          alt="Anna Manoj"
          className="hero-photo"
        />
      </div>

      <div className="gear gear-top">⚙</div>
      <div className="gear gear-bottom">⚙</div>

    

    </div>
  );
}

export default HeroImage;