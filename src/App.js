import React from 'react';
import {Provider} from 'react-redux';
import store from './store/mystore';
import Movie from './Components/Movie';
import Test from './Components/websocket/Test';
import Message from './Components/websocket/Message';
import PusherComponent from './Components/websocket/PusherComponent';
function App () {
  return (
    <div>
      {/* <Provider store={store}>
        <Movie/>
      </Provider> */}

      {/* <Test/> */}
      {/* <Message/> */}
      <PusherComponent />
    </div>
  );
}

export default App;
