import Navigation from "./Component/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Adduser from "./Component/Users/Adduser";
import Edituser from "./Component/Users/Edituser";
import ViewPage from "./Pages/ViewPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route  path="/home" exact  element={<Home />} />
        <Route  path="/home/add" exact  element={<Adduser />} />
        <Route  path="/home/edit/:id" exact  element={<Edituser />} />
        <Route  path="/home/view/:id" exact  element={<ViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
