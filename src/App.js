import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { RouterConfig } from "./navigation/RouterConfig";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
