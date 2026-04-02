import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function PageFrame({ title, src }) {
  return (
    <section className="page-shell" aria-label={title}>
      <iframe title={title} src={src} className="page-frame" loading="lazy" />
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<PageFrame title="Home" src="/pages/home.html" />} />
          <Route
            path="/dashboard"
            element={<PageFrame title="Dashboard" src="/pages/dashboard.html" />}
          />
          <Route path="/profile" element={<PageFrame title="Profile" src="/pages/profile.html" />} />
          <Route path="/product" element={<PageFrame title="Product" src="/pages/product.html" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
