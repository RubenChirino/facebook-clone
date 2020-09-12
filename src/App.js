import React from 'react';
 
//COMPONENTS 
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import Login from './components/Login';

//PROVIDER
import { useStateValue } from './Context/StateProvider';

function App() {

  //const [{ user }, dispatch] = useStateValue();

  const user = true;

  return (
    <div className="app">
      
      {!user ? ( <Login /> ) : (<>

        <Navbar />

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>

      </>) }

      

    </div>
  );
}

export default App;
