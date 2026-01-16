import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useState } from 'react';
import TodoListRedux from './components/TodoListRedux';
import TodoListZustand from './components/TodoListZustand';
import './App.css';

function App() {
  const [currentLibrary, setCurrentLibrary] = useState('redux');

  return (
    <div className="App">
      <div className="library-selector">
        <button
          className={`lib-btn ${currentLibrary === 'redux' ? 'active' : ''}`}
          onClick={() => setCurrentLibrary('redux')}
        >
          Redux Toolkit
        </button>
        <button
          className={`lib-btn ${currentLibrary === 'zustand' ? 'active' : ''}`}
          onClick={() => setCurrentLibrary('zustand')}
        >
          Zustand
        </button>
      </div>

      {currentLibrary === 'redux' ? (
        <Provider store={store}>
          <TodoListRedux />
        </Provider>
      ) : (
        <TodoListZustand />
      )}
    </div>
  );
}

export default App;
