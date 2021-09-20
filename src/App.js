import ULList from './components/ULList'
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      {/* <Route path='/' component={ULList}/> */}
      <ULList/>
    </div>
    </Router>
  );
}

export default App;
