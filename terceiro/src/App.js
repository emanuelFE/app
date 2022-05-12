import{useState} from "react";
function App() {
  
  const[numero,setNUmero] = useState(1);

  return (
    <div>
      <p>o número atual é {numero}</p>
      <p>
        <button title="clique" onClick={() =>setNUmero(numero+1)}> clique Aqui</button>
      </p>
    </div>
  );
}

export default App;
