import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "80px 150px",
  borderColor: "black",
};

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <div style={{maginTop: '150px'}}>

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    </div>
  );
}

export default App;
