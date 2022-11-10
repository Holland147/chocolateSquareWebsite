import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css"




const Header = () => {
  return (
    <div className='color'>
      <h1>Chocolate Squares Yummy</h1>
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
       <div className='image-container'>
          <img src="https://m.media-amazon.com/images/I/61E7sJByiYL._AC_SL1000_.jpg" alt="Chocolate" />
       </div>
    );
 };

 class Clock extends Component {

  constructor() {
    super()
this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }
  componentDidMount()
  {
setInterval(()=>this.currentTime(),1000)
  }


  render() {

    return (
      <div className='image-container'>
      <h1>
        {this.state.time.toLocaleTimeString()}
      </h1>
      </div>
    )
  }
}

const Tableview = () =>{
  return(
    <div className='image-container'>
    <table>
        <tr>
            <th></th>
            <th>Per 100g</th>
            <th>Per serving</th>
        </tr>
        <tr>
            <td>Fiber</td>
            <td>1.5g</td>
            <td>0.5g</td>
        </tr>
        <tr>
            <td>Protein</td>
            <td>4.4</td>
            <td>1.6</td>
        </tr>
        
    </table>
    </div>
  )
  
}

function WinChocolate(){
  alert("YOU WON BIG TIME")
}

const Buttonclick = () =>{
  return(
    <div className='image-container'>
      <button onClick={WinChocolate}>
        Click to Win BIG  
      </button>
    </div>
  )
}




const Changetext = () => {
  return(
    <div>
    <p id="test" class="center">Below you will see A video of a man eating a very bad Square</p>
    <button className='center' onclick={WinChocolate}>
      Change
      </button>
    <button class="center" onclick="document.getElementById('test').innerHTML = 'Below you will see A video of a man eating a very bad Square'">Change back</button>
    </div>
  )
}

const Videosquare = () =>{
  return(
    <div>
      <iframe class="center" width="250" height="250" src="https://www.youtube.com/embed/rj3OIlRn__E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div><Header /><Navbar /><Clock /><Banner /><Tableview /><Buttonclick /><Changetext /><Videosquare /></div>);

