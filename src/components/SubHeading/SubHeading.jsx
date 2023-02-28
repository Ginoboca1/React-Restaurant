import image  from '../../constants/images';

export const SubHeading = ( {title} ) => (
  <div>
    <p className='p__title'>{title}</p>
    <img src={image.spoon}/>
  </div>
);

