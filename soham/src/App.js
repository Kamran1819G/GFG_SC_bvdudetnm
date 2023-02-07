import './App.css';
import Past from './Past';
import Upcoming from './Upcoming';

function App() {
  return (
    <div className="App">
      <Upcoming/>
      <div className='line'><div className='dots'>
         <span class="dot"></span><span class="dot"></span><span class="dot"></span>
         </div></div>
         <div className='announce'>
          <h2>1/February/23</h2><h2>20/March/23</h2><h2>Yet to be decided</h2>
         </div>
      <Past/>
    </div>
  );
}

export default App;
