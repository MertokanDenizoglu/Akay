import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className='map'>
       <iframe title='mappp' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1578.4017856757364!2d30.49868270417857!3d39.76355604430936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1656374048352!5m2!1str!2str" width="100%" height="450"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map;