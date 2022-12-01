import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './components/counters';
import ParentComponent from './components/parentComponent';
import Form from './components/form';
import ComponentF from './components/ComponentComsume';
import { UserProvider } from './components/userContext';
import ApiFetch from './components/ApiFetch';
import AppCount from './components/useState';
import AppEffect from './components/useEffect';
import AppMemo from './components/useMemo';
import AppRef from './components/useRef';
import AppContext from './components/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>
    <Counters />
  </React.StrictMode>*/
  //<ParentComponent/>
<App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
