import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { EditContactPage } from "./pages/EditContactPage";

function App() {
  return (
    <main className=" bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/edit/:id" element={<EditContactPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
