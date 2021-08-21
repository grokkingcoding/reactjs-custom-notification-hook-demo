import React, { useReducer } from 'react';
import { StoreContext } from './store';
import { reducer, INITIAL_STATE} from './store/reducer';
import { Layout } from './components/Layout';
import { Profile } from './components/Profile';

const App = () => {
  return (
      <div className="App">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',            
            marginTop: '3rem',
            border: '2px solid blue',
            padding: '3rem',
            background: 'linear-gradient(to top, #f77062 0%, #fe5196 100%)'            
          }}
        >
          <h3>
            After pressing the button, wait for a moment for image to load...
          </h3>
        <Layout />
        <Profile />
        </div>
      </div>
  );
};

const AppWithStore = () => {
  const [globalState, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <StoreContext.Provider value={[globalState, dispatch]}>
      <App />
    </StoreContext.Provider>
  );
};

export { App };

export default AppWithStore;
