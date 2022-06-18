import './App.css';
import Item from "./components/Item";

function App(props) {
  return (
    <div className="app">
        <p className="app__question">Ты сегодня покормил кота?</p>
        <Item state={ props.state.product } />
    </div>
  );
}

export default App;
