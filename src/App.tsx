import "./App.css";
import brickBackground from "./assets/brick.png";
import Header from "./components/Header";
import Throw from "./components/Throw";

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
        <div className="m-auto min-h-screen max-w-4xl border-x border-neutral-700 px-0 py-1 backdrop-blur-md backdrop-brightness-75">
          <Header />
          <div className="flex space-x-5 px-10">
            <Throw description="FIRST THROW" />
            <Throw description="SECOND THROW" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
