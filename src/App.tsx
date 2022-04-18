import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from "./Pages/Home";
import { NewRoom } from "./Pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
