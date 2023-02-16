import image  from '../../constants/images';

export const SubHeading = ( {title} ) => (
  <div>
    <p>{title}</p>
    <img src={image.spoon}/>
  </div>
);

