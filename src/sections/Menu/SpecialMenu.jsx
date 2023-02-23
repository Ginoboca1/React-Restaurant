import images from '../../constants/images';

import './SpecialMenu.css';

 const SpecialMenu = () => (
  <div className='menu-container'>
    <div className='menu-title-container'>
      <p>Menu that fits you palatte</p>
      <img src={images.spoon} />
      <h1>Today's Special</h1>
    </div>

    <div className='menu-content'>
      <section className='menu-card'>
        <h2>Wine & Beer</h2>
      </section>

      <section className='menu-image-container'>
        <img src={images.menu} />
      </section>

      <section className='menu-card'>
        <h2>Cocktails</h2>
      </section> 
    </div>

    <button className='header-button'>View More</button>
  </div>
);

export default SpecialMenu;