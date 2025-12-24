import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import V1 from './views/v1';
import V2 from './views/v2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/v1" replace />} />
        <Route path="/v1" element={<V1 />} />
        <Route path="/v2" element={<V2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
