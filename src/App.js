import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          TO DO LIST with React
        </h1>
        <button className='btn btn-primary'>Click me</button>
      </header>
    </div>
  );
}

export default App;
