import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css"




const Header = () => {
  return (
    <div className='color'>
      <h1>Chocolate Squares Yummy Yummy</h1>
    </div>
  );
}

const Navbar = () => {
    return(
        <div>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="">Nutrition</a></li>
            <li><a href="">kellogs</a></li>
            <li><a href="p">Help</a></li>
          </ul>
    </div>
    );
}

const Banner = () => {
    return (
       <div >
          <img src="https://m.media-amazon.com/images/I/61E7sJByiYL._AC_SL1000_.jpg" alt="Chocolate" />
       </div>
    );
 };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div><Header /><Navbar /><Banner /></div>);

