
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Counter from "./Counter";
import Library from "./Library";
import Sandwich from "./Sandwich";

const Main: React.FC = () => {
    const location = useLocation();
  
    let backgroundClass = '';
    switch (location.pathname) {
      case '/counter':
        backgroundClass = 'counter-bg';
        break;
      case '/sandwich':
        backgroundClass = 'sandwich-bg';
        break;
      case '/library':
        backgroundClass = 'library-bg';
        break;
      default:
        backgroundClass = 'white';
        break;
    }
  
    return (
      <div className={`Main ${backgroundClass}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/counter" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/sandwich" element={<Sandwich />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    );
  };

export default Main;