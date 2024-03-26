import logo from './logo.svg';
import './App.css';
import Frontpage from './components/formpage/frontpage';
import Sidepage from './components/sidepage/sidepage';




function App() {
  return (
    <div >
      
        <Sidepage></Sidepage>
        
          <Frontpage></Frontpage> 
        
        {/* <Bottompage></Bottompage>  */}

        
      
    </div>
  );
}

export default App;
