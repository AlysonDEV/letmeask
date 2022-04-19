import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';

import { Home } from "./Pages/Home";
import { NewRoom } from "./Pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
