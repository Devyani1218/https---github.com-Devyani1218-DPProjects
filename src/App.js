import "./App.css"
import MyForm from "./login";
import Mysignup from "./signup";
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'

function App() {


  return (
    
    <BrowserRouter>
    <Routes> 
      <Route path="/MyForm" element={<MyForm />} />
      <Route path="/Mysignup" element={<Mysignup />} />

    </Routes>
    </BrowserRouter> 
  );
}

export default App;
