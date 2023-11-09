import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AllRoute } from './AllRoutes/AllRoute';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;

