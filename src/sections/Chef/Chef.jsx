import images from "../../constants/images";
import { SubHeading } from "../../components/SubHeading/SubHeading";
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';

import "./Chef.css";
import MenuItem from "../../components/Menuitem/MenuItem";

const Chef = () => (
  <section className="chef-container">
    <div className="chef-content-container">
      <div className="chef-image">
        <img src={images.chef} />
      </div>

      <div className="chef-words">
        <div className="chef-title-container">
          <SubHeading title="Chef's Word" />
          <h2 className="chef-words-title">What We Believe In</h2>
        </div>

  
        <p>
         <ImQuotesLeft style={{fontSize: '30px'}}/> 
          sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          <br></br> Nulla scelerisque scelerisque congue ac consequat, aliquam
          molestie lectus eu.<br></br> Congue iaculis integer curabitur semper
          it nunc. 
        </p>
        

        <div className="chef-words-signature">
          <MenuItem title="Kevin Luo" tags="Chef & Founder" />
        </div>
        
      </div>
    </div>
  </section>
);

export default Chef;
