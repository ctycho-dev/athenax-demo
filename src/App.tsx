import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import V1 from './views/v1';
import V2 from './views/v2';
import V3 from './views/v3';
import V3Projects from './views/v3/projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/v3" replace />} />
        <Route path="/v1" element={<V1 />} />
        <Route path="/v2" element={<V2 />} />
        <Route path="/v3" element={<V3 />} />
        <Route path="/v3/projects" element={<V3Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
