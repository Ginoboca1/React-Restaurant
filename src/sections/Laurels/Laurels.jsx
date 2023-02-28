import "./Laurels.css";
import { SubHeading } from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

const Laurels = () => {
  return (
    <div className="laurels-section">
      <div className="laurels-text-container">
        <SubHeading title="Awards & recognition" id="laurels-subheading" />
        <h2>Our Laurels</h2>

        <div className="laurels-container">
          <div className="laurel">
            <img src={images.award02} />
            <div className="laurel-text">
              <h5>Bib Gourmond</h5>
              <p>
                Lorem ipsum dolor sit <br></br>amet, consectetur.
              </p>
            </div>
          </div>

          <div className="laurel">
            <img src={images.award01} />
            <div className="laurel-text">
              <h5>Rising Star</h5>
              <p>
                Lorem ipsum dolor sit <br></br>amet, consectetur.
              </p>
            </div>
          </div>

          <div className="laurel">
            <img src={images.award03} />
            <div className="laurel-text">
              <h5>Outstanding Chef</h5>
              <p>
                Lorem ipsum dolor sit <br></br>amet, consectetur.
              </p>
            </div>
          </div>

          <div className="laurel">
            <img src={images.award05} />
            <div className="laurel-text">
              <h5>AA Hospitality </h5>
              <p>
                Lorem ipsum dolor sit <br></br>amet, consectetur.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="laurels-image">
        <img src={images.laurels} />
      </div>

    </div>
  );
};

export default Laurels;
