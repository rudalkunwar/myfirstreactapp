import './App.css';
import Navbar from './Components/Navbar/navbar';
import Number from './Components/Numbers';
import Num from './Components/Num';
import Namee from './Components/Nameprops';
import Eventhandeler from './Components/Eventhandle';
function App() {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Num num="432"/> */}
      <Number/>
      <Namee name="rudal kunwar xoxoxo"/>
      <Eventhandeler/>
    </div>
  );
}

export default App;
