import "./AboutUs.css";
import images from "../../constants/images";

const AboutUs = ({ setShowModal, setMessage }) => (
  <div className="about-container">
    <div className="about-overlay">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="about-content">
      <div className="about-content-us">
        <h2>About Us</h2>
        <img src={images.spoon} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button
          className="header-button"
          onClick={() => {
            setShowModal(true);
            setMessage("This section is currently unavailable.");
          }}
        >
          Know more about us
        </button>
      </div>

      <div className="about-content-knife">
        <img src={images.knife} />
      </div>

      <div className="about-content-history">
        <h2>Our History</h2>
        <img src={images.spoon} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button
          className="header-button"
          onClick={() => {
            setShowModal(true);
            setMessage("This section is currently unavailable.");
          }}
        >
          Know more about history
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
