import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import V1 from './views/v1';
import V2 from './views/v2';
import V3Layout from './views/v3/V3Layout';
import V3 from './views/v3';
import V3Projects from './views/v3/projects';
import V3Ecosystem from './views/v3/ecosystem';
import V3About from './views/v3/about';
import V3Blog from './views/v3/blog';
import V3Article from './views/v3/article';
import V3TV from './views/v3/tv';
import V3Discover from './views/v3/discover';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/v3" replace />} />
        <Route path="/v1" element={<V1 />} />
        <Route path="/v2" element={<V2 />} />
        <Route path="/v3" element={<V3Layout />}>
          <Route index element={<V3 />} />
          <Route path="projects" element={<V3Projects />} />
          <Route path="ecosystem" element={<V3Ecosystem />} />
          <Route path="about" element={<V3About />} />
          <Route path="blog" element={<V3Blog />} />
          <Route path="article" element={<V3Article />} />
          <Route path="tv" element={<V3TV />} />
          <Route path="discover" element={<V3Discover />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
