import { HomePage } from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <HomePage />
      <ToastContainer />
    </>
  );
};

export default App
