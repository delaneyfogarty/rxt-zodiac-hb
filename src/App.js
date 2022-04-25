import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

import { zodiac } from './data.js';
import Main from './Main/Main';
{/* import the zodiac array */}

function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      <Header name='Delaney' />
      {/* the Footer component needs a year passed in as the `year` prop */}
      <Main
        zodiac={zodiac}/>

      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Footer year="2022" />
    </div>
  );
}

export default App;
