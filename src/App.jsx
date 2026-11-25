import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import { views } from "./data/views.js";

// Vista temporal: se irá reemplazando por la vista real en cada commit.
function Placeholder({ name }) {
  return (
    <section className="view container">
      <h1 className="page-title">{name}</h1>
    </section>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        {views.map((view) => (
          <Route
            key={view.id}
            path={view.path}
            element={<Placeholder name={view.id} />}
          />
        ))}
        {/* Cualquier ruta desconocida vuelve al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
