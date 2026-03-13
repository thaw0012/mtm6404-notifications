//My site http://localhost:5173/


import { useState } from 'react'
import data from './notifications'; //notification data
import Notification from '../components/Notification';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

    // const [count, setCount] = useState(0)

  const [notifications, setNotifications] = useState(data);

  //clear individual notifications
  const clearNotification = (id) => {
    const updatedList = notifications.filter(item => item.id !== id);
    setNotifications(updatedList);
  };

    //clear all notifications
  const clearAll = () => {
    setNotifications([]);
  };

return (
    <div className="container">
      {/* display number of notifications */}
      <h2>Notifications: {notifications.length}</h2>

      <div className="notifications-wrapper">
        {/* display all notifications */}
        {notifications.map((item) => (
          <Notification 
            key={item.id} 
            onClear={() => clearNotification(item.id)}
          >

            <h4>{item.name}</h4>
            <p>{item.message}</p>
          </Notification>
        ))}
      </div>

      {/* clear all notifications button*/}
      {notifications.length > 0 && (
        <button onClick={clearAll} className="clear-btn">
          Clear All
        </button>
      )}
    </div>
  );
}

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

export default App
