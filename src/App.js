import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import highOrder from './components/highOrder'
import WrappedCom1 from './components/WrappedComp1'
import WrappedCom2 from './components/WrappedComp2'
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);

    return () => {
      setLoading(true)
    }
  }, [])
  const func = () => {
    console.log("Tony likes React")
    setLoading(true)
    console.log("yes")
  }
  const something = (<p>Tony</p>)
  const First = highOrder(WrappedCom1)

  const Second = highOrder(WrappedCom2)
  return (
    <div className="App">
      <Button color="red" onClick={func}>Tony trying</Button><br />
      <Button color="yellow">Tony trying</Button><br />
      <Button color="green">Tony trying</Button>
      <div className="loading">
        {loading && <p>loading ...{!loading}</p>}

      </div>
      {something}

      <br />
      <First>Tonton</First>
      <Second />

    </div>


  );
}

export default App;
