import logo from './logo.svg';
import './App.css';

function App() {

  // var pakistan = ["karachi", "lahore", "islamabad", "multan"]
  var pakistan = [
    {
      City: "Karachi",
      Temperature: "33C",
      Precipitation: "10%",
      Humidity: "59%"
    },
    {
      City: "Lahore",
      Temperature: "28C",
      Precipitation: "-0%",
      Humidity: "30%"
    },
    {
      City: "Islamabad",
      Temperature: "25C",
      Precipitation: "5%",
      Humidity: "35%"
    },
    {
      City: "Multan",
      Temperature: "12C",
      Precipitation: "2%",
      Humidity: "40%"
    }]


  return ( <div>
      <header>
        <h1>weather update</h1>
      </header>

      {/* {pakistan.map((citys) => {
        return <div><h1>{citys}</h1></div>
      })} */}


      {/* {[<div key="a"><h1>karachi</h1></div> ,<div key="b"><h1>islamabad</h1></div>,<div key="c"><h1>lahore</h1></div>,<div key="d"><h1>pdad</h1></div>]} */}

      {pakistan.map((city, index) => {
        return <div className="main">
          <div> <h1> {city.City} </h1>  </div> <br />
          <div> <h4>Temperature : {city.Temperature} </h4>  </div> <br />
          <div> <h4>Precipitation : {city.Precipitation} </h4>  </div> <br />
          <div> <h4>Humidity : {city.Humidity} </h4>  </div> <br />
          </div>
        })
        }




      <footer>  <h1>footer</h1></footer>
        </div> );
}

export default App;
