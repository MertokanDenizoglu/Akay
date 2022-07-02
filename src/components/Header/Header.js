  import React from 'react';
  import './Header.css'
  

  const Header = () => {
    function findOffset(element) {
      var top = 0, left = 0;
    
      do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
      } while(element);
    
      return {
        top: top,
        left: left
      };
    }
    
    window.onload = function () {
      var stickyDivHeader = document.getElementById('stickyDiv');
      var headerOffset = findOffset(stickyDivHeader);
      
      window.onscroll = function() {
        // body.scrollTop is deprecated and no longer available on Firefox
        var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
     
        //if scroll position is greater than stickyDiv, make div fixed at top 
        // by adding class 'fixed'
        if (bodyScrollTop > headerOffset.top) {
          stickyDivHeader.classList.add('fixed');
        } else {
          stickyDivHeader.classList.remove('fixed');
        }
      };
    };
    return (
      

      <div className='zinde'>
         <div id="MainDiv">
         
  <div id="stickyDiv" class="stickyDiv">
  <div className='logohukuk'>
  <img className='logo' src='logo.jpg' alt='...'/>
  <h6><b>AKAY</b> HUKUK <br/>BÜROSU </h6>
         </div>
    <ul id='main'>
    
      <li className='paginat'><a href='/'>Ana Sayfa</a></li>
      <li className='paginat'><a href='/about'>Hakkımızda &nbsp; &nbsp;<i class="fa-solid fa-chevron-down"></i></a>
      <ul>
        <li><a href='/about'>Hakkımızda</a></li>
        <li><a href='/vision'>Vizyonumuz</a></li>
        <li><a href='/'>Aydınlatma Metnimiz</a></li>
      </ul>
      </li>
      
      
      <li className='paginat'><a href='/since'>Avukatlarımız &nbsp; &nbsp;<i class="fa-solid fa-chevron-down"></i></a>
      <ul>
        <li><a href='/'>Av. Serdar DEĞİRMENCİ</a></li>
        <li><a href='/'>Av. Mert Okan DENİZOĞLU</a></li>
        <li><a href='/'>Av. Galip KARAMAN</a></li>
      </ul>
      
      </li>
      <li className='paginat'><a href='/'>Emsal Kararlar</a></li>
      <li className='paginat'><a href='/'>İletişim</a></li>
    </ul>
    <div className='contacts'>
              <i class="fa-solid fa-phone"></i>
              <h4 className='phone'>Müşteri Destek </h4>
              <span className='number'>+ 0555 555 55 55</span>
              </div>
  </div>
</div>
         
      </div>
    )
  }

  export default Header;




  