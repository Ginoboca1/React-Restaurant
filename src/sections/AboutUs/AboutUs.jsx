import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
  <div className='about-container'>
    <div className='about-overlay'>
        <img src={images.G} alt = "G letter" />
    </div>

    <div className='about-content'>
        <div className='about-content-us'>
          <h1>Abour Us</h1>
          <img src={images.spoon}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button className='header-button'>
            Know more about us
          </button>
        </div>

        <div className='about-content-knife'>
          <img src={images.knife}/>
        </div>

        <div className='about-content-history'>
          <h1>Our History</h1>
          <img src={images.spoon}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button className='header-button'>
            Know more about history
          </button>
        </div>
    </div>
  </div>
);

export default AboutUs;
