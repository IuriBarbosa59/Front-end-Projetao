import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes
,Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import AddStock from './stock/AddStock';
import EditUser from './users/EditUser';
import EditStock from './stock/EditStock';
import ViewUser from './users/ViewUser';
import ViewStock from './stock/ViewStock';

function App() {
  return (
    <div className="App">
      
       <Router>
       <Navbar />
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/addstock" element={<AddStock/>}/>
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/editstock/:id" element={<EditStock/>}/>
        <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
        <Route exact path="/viewstock/:id" element={<ViewStock/>}/>
       </Routes>
       </Router>
    </div>
  );
}

export default App;
