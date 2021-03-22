import React,{useEffect,useState} from 'react';
import Barchart from './Barchart';
import './App.css';
import Circle from './Circle';
import Curvedline from './Curved_Line';
// import Force from './Force';
const datas = [
  [40, 70, 80, 90,60],
  [80, 40, 60, 20, 90, 50],
  [60, 30, 40, 20, 30]
]
var i = 0;


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    changeData();
}, []);

const changeData = () => {
    setData(datas[i++]);
    if(i === datas.length) i = 0;
}
  return (
    <div className="main">
     {/* <Circle /> */}
     <br />
     {/* <Curvedline /> */}
     <br />
     <button onClick={changeData}>Change Data</button>
     <Barchart data={data}/>
     <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
          Filter data
      </button>
      <button onClick={() =>setData([...data, Math.round(Math.random()*100)])}>Add data</button>
     <br />
     {/* <Force /> */}
    </div>
  );
}

export default App;
