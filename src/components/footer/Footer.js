import React from 'react';
import './Footer.css'

const Footer = () => {
  
  
  return (
    <div className='footercontainer'>
    <div className='inputarea'>
    <img src='mail8.png' alt='...'/>
    <h6>HIZLI İLETİŞİM</h6>
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Mail Adresiniz:</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Mail Giriniz..."/>
  </div>
  <div class="form-group">
  <label for="exampleFormControlInput1">Ad Soyad:</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ad Soyad..."/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Konu:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
</form>
<button type="button" class="btn btn-outline-secondary">GÖNDER</button>
</div>
      <div className='section1'>
      <h3>LOGO</h3>
        <ul className='listlist'>
            <li> <i class="fa-solid fa-phone text-warning"></i>0555 555 555</li>
            <li><i class="fa-solid fa-envelope text-warning"></i>hukuk@info.com</li>
            <li><i class="fa-solid fa-location-dot text-warning"></i>Mahatma Gandi Cd, No:33/8
             Çankaya/Ankara / TÜRKİYE</li>
             <button type="button" class="btn btn-outline-secondary text-light">Bize Ulaşın...</button>
            
        </ul>
      </div>
      <div className='section2'>
      <h3>HİZMETLERİMİZ</h3>
        <ul className='listlist'>
            <li><i class="fa-solid fa-check text-warning"></i>CEZA HUKUKU</li>
            <li><i class="fa-solid fa-check text-warning"></i>YABANCILAR HUKUKU</li>
            <li><i class="fa-solid fa-check text-warning"></i>BORÇLAR HUKUKU</li>
            <li><i class="fa-solid fa-check text-warning"></i>AİLE HUKUKU</li>
            <li><i class="fa-solid fa-check text-warning"></i>TİCARET HUKUKU</li>
        </ul>
      </div>
      <div className='section3'>
      <h3>ÇALIŞMA SAATLERİ</h3>
        <ul className='listlist'>
            <li><i class="fa-solid fa-clock text-warning"></i>Hafta İçi  &nbsp;   : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  09:00-16:00</li>
            <li><i class="fa-solid fa-clock text-warning"></i>Hafta Sonu  &nbsp;   : &nbsp; &nbsp;  09:00-16:00</li>
            <li><i class="fa-solid fa-clock text-warning"></i>Pazar  &nbsp;   :   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp;   &nbsp;     &nbsp;              Kapalı</li>
            
        </ul>
      </div>
    </div>
  )
}

export default Footer;