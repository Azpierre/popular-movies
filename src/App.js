import "./style/app.scss";

// Navigation Route
import { BrowserRouter as Router } from "react-router-dom";

//Components

import Pages from "./Pages/Pages";

function App() {
  return (
    <div className="app">
      <Router>
        <Pages />
      </Router>
    </div>
  );
}

export default App;
