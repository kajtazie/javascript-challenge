import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { EditContactPage } from './pages/EditContactPage';

function App() {
  return (
    <main>
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
