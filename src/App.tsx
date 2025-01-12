import "./App.css";
import brickBackground from "./assets/brick.png";

function App() {
  return (
    <>
      <div
        className="Component-Bg"
        style={{
          backgroundImage: `url(${brickBackground})`,
          backgroundSize: "75px",
          backgroundPosition: "center center",
          backgroundRepeat: "repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1 className="text-black font-extrabold text-center pt-10">find your closest stronghold</h1>
      </div>
    </>
  );
}

export default App;
