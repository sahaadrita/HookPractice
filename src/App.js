
import './App.css';
import Effect from './UseEffect/Effect';
import Reducer from './UseReducer/Reducer';
import StateTutorial from './UseState/StateTutorial';
import Ref from './UseRef/Ref';

function App() {
  return (
    <div className="App">
     <StateTutorial/>
     <Reducer/>
     <Effect/>
     <Ref/>
    </div>
  );
}

export default App;
