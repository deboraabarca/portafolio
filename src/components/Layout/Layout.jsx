import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  );
}
