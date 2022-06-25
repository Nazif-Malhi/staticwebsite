import './App.css';
import Description from './Component/Pages/Description';
import Footer from './Component/Pages/Footer';
import Navbar from './Component/Pages/Navbar';
import ShowCase from './Component/Pages/ShowCase';
import Testimonial from './Component/Pages/Testimonial';

function App() {
  return (<>
    <div className="App">
      <Navbar/>
       <ShowCase/>
      <Description/>
      <Testimonial/>
      <Footer/>
    </div>
    </>);
}

export default App;
