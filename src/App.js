import './App.css';
import Navbar from './Components/Navbar/navbar';
import Number from './Components/Numbers';
import Num from './Components/Num';
import Namee from './Components/Nameprops';
import Eventhandeler from './Components/Eventhandle';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      {/* <Num num="432"/> */}
      <Number/>
      <Namee name="rudal kunwar xoxoxo"/>
      <Eventhandeler/>
      <Footer/>
    </div>
  );
}

export default App;
