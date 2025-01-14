import "./App.css";
import brickBackground from "./assets/brick.png";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${brickBackground})`,
          backgroundSize: "75px",
          backgroundPosition: "center center",
          backgroundRepeat: "repeat",
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <div className="border-x border-neutral-700 m-auto min-h-screen max-w-4xl px-0 py-1 backdrop-blur-md backdrop-brightness-75">
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
