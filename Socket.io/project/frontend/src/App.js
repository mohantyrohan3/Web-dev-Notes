import './App.css';
import {io} from 'socket.io-client';
import { useEffect , useMemo, useState } from 'react';

function App() {

  const [data , setData] = useState('');

  const socket = useMemo(
    () =>
      io("http://localhost:5000", {
        withCredentials: true,
      }),
    []
  );

  // const socket = io('http://localhost:5000');
  
  useEffect(() => {
    socket.on('connect', () => {
      console.log("Connected to server");
    });
    

    socket.on('recieved-msg' , (data) => {
      console.log(data);
    });

    socket.on('sent' , (data) => { 
      console.log(data);
    });


  }, []);

  const handleSumit = (e) => {
    e.preventDefault();

    socket.emit('message' , data);
    setData('');
  }

  return (
    <div className="App">


        <form onSubmit={handleSumit}>

            <input type="text" value={data}  onChange={(e)=>setData(e.target.value)}/>
            <br />
            <button type='submit'>

              Send
            </button>


        </form>


    </div>
  );
}

export default App;
