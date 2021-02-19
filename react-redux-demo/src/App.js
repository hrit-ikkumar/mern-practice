import './App.css';
import CakeComponent from './component/CakeComponent';
import {Provider} from 'react-redux';
import store from './redux/store'; 
import HooksCakeComponent from './component/HooksCakeComponent';
import IceCreamComponent from './component/IceCreamComponent';
import NewCakeComponent from './component/NewCakeComponent';
import ItemsComponent from './component/ItemsComponent';
import UserComponent from './component/UserComponent'; 
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserComponent />

        <ItemsComponent />
        <ItemsComponent cake />
        <HooksCakeComponent />
        <CakeComponent /> 
        <IceCreamComponent />
        <NewCakeComponent />
      </div>
    </Provider>

  );
}



export default App;
