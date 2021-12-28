
import './App.css';
import Effect from './UseEffect/Effect';
import Reducer from './UseReducer/Reducer';
import StateTutorial from './UseState/StateTutorial';
import Ref from './UseRef/Ref';
import LayoutEffect from './UseLayoutEffect/LayoutEffect';
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle';
import Context from './UseContext/Context';
import Memo from './UseMemo/Memo';
import CallBack from './UseCallback/Callback';

function App() {
  return (
    <div className="App">
     <StateTutorial/>
     <Reducer/>
     <Effect/>
     <Ref/>
     <LayoutEffect/>
     <ImperativeHandle/>
     <Context/>
     <Memo/>
     <CallBack/> 
    </div>
  );
}

export default App;
