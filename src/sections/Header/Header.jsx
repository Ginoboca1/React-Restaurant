import { SubHeading } from '../../components/SubHeading/SubHeading';
import image from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='header-container'>
    <div className='header-text-container'>
      <SubHeading title = "Chase the new Flavour" />
      <h1>The key to Fine dining</h1>
      <p>Sit tellus lobortis sed senectus vivamus molestie. <br></br>Condimentum volutpat morbi facilisis quam scelerisque sapien. <br></br>Et, penatibus aliquam amet tellus </p>
      <button className='header-button'>
        Explore Menu
      </button>
    </div>
    <div className='header-img-container'>
      <img src={image.welcome} />
    </div>
  </div>
);

export default Header;
