import logo from './logo.svg';
import './App.css';
import ComponentF from './components/ComponentComsume';
import { UserProvider } from './components/userContext';
import AppuseState from './components/example';
function App() {
  return (
    <div className="App">
    <UserProvider value="abhinav">
      <AppuseState/>
    </UserProvider>
</div>

  );
}

export default App;
