import { Link } from "react-router-dom";
import './App.scss';

function App() {
  return (
      <div>
          <h1>Main</h1>
          <nav
              style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem"
              }}
          >
              <Link to="/shop">Shop</Link> |{" "}
          </nav>
      </div>
  );
}

export default App;
