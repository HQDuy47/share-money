import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./index.scss";

function DefaultLayout({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
