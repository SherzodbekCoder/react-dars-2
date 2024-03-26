import data from './data/data.json';
import Books from './Books';
import './App.css';




function App() {

  return (
    <>
      <Books data={data}></Books>
    </>
  )
}

export default App
