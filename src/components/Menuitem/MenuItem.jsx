import './MenuItem.css';



const MenuItem = ({title, price, tags}) => {
  return(
    <div className='menu-item-container'>
      <div className='menu-item-head'>
        <p>{title}</p>
        <div className='menu-item-dash'></div>
        <p>{price}</p>
      </div>

      <div className='menu-item-tags'>
        <p>{tags}</p>
      </div>
    </div>
  )
}

export default MenuItem;
