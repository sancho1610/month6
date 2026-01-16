import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import UserListRedux from './components/UserListRedux'
import UserListZustand from './components/UserListZustand'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('redux')

  return (
    <Provider store={store}>
      <div className="app-container">
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === 'redux' ? 'active' : ''}`}
            onClick={() => setActiveTab('redux')}
          >
            Redux Toolkit
          </button>
          <button
            className={`tab-btn ${activeTab === 'zustand' ? 'active' : ''}`}
            onClick={() => setActiveTab('zustand')}
          >
            Zustand
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'redux' && <UserListRedux />}
          {activeTab === 'zustand' && <UserListZustand />}
        </div>
      </div>
    </Provider>
  )
}

export default App
