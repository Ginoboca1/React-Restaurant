import MenuItem from "../../components/Menuitem/MenuItem";
import images from "../../constants/images";
import data from "../../constants/data";



import "./SpecialMenu.css";

const SpecialMenu = () => {

  return (
    <div className="menu-container">
      <div className="menu-title-container">
        <p>Menu that fits you palatte</p>
        <img src={images.spoon} />
        <h1>Today's Special</h1>
      </div>

      <div className="menu-content">
        <section className="menu-card-wines">
          <h4>Wine & Beer</h4>
          <div className="menu-items">
          {data.wines.map((wine, index) =>
                <MenuItem key={wine.title + index} title ={wine.title} price = {wine.price} tags = {wine.tags} />
              )
            }
          </div>
        </section>

        <section className="menu-image-container">
          <img src={images.menu} />
        </section>

        <section className="menu-card-cocktails">
          <h4>Cocktails</h4>
          <div className="menu-items">
            {data.cocktails.map((cocktail, index) =>
                <MenuItem key={cocktail.title + index} title ={cocktail.title} price = {cocktail.price} tags = {cocktail.tags} />
              )
            }
          </div>
        </section>
      </div>

      <button className="header-button">View More</button>
    </div>
  );
};

export default SpecialMenu;
