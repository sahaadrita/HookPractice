
import './App.css';
import Effect from './UseEffect/Effect';
import Reducer from './UseReducer/Reducer';
import StateTutorial from './UseState/StateTutorial';
import Ref from './UseRef/Ref';
import LayoutEffect from './UseLayoutEffect/LayoutEffect';

function App() {
  return (
    <div className="App">
     <StateTutorial/>
     <Reducer/>
     <Effect/>
     <Ref/>
     <LayoutEffect/>
    </div>
  );
}

export default App;
