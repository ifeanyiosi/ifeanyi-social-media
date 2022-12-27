import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Homepage, Login, Profile } from "Views";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
