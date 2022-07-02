import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div className='teamcontainer'>
    <h1 className='title'><strong> - Avukatlarımız</strong> -</h1>
       <div class="card-deck">
  <div class="card">
    <img className='imger' src="Hukuk.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">İsim</h5>
      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, tempora.</p>
      <ul className='teamicons'>
        <li><i class="fa-brands fa-instagram"/></li>
        <li><i class="fa-brands fa-twitter"/></li>
        <li><i class="fa-brands fa-facebook-f"/></li>
      </ul>
     
    </div>
  </div>
  <div class="card ">
    <img className='imger' src="Hukuk.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">İsim</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, atque?</p>
      <ul className='teamicons'>
        <li><i class="fa-brands fa-instagram"/></li>
        <li><i class="fa-brands fa-twitter"/></li>
        <li><i class="fa-brands fa-facebook-f"/></li>
      </ul>
      
    </div>
  </div>
  <div class="card ">
    <img className='imger' src="Hukuk.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title ">İsim</h5>
      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit!</p>
      <ul className='teamicons'>
        <li><i class="fa-brands fa-instagram"/></li>
        <li><i class="fa-brands fa-twitter"/></li>
        <li><i class="fa-brands fa-facebook-f"/></li>
      </ul>
    </div>
  </div>
</div> 
    </div>
  )
}

export default Team;