import { useState } from "react";
import "./App.css";
import brickBackground from "./assets/brick.png";
import Button from "./components/Button";
import Header from "./components/Header";
import Throw from "./components/Throw";
import Result from "./components/Result";

function App() {
  const [firstThrow, setFirstThrow] = useState("");
  const [secondThrow, setSecondThrow] = useState("");
  const [result, setResult] = useState("");

  const deg2rad = (degrees: number) => {
    return degrees * (Math.PI / 180);
  };

  const getStronghold_X = (x1: number, z1: number, angle1: number, x2: number, z2: number, angle2: number) => {
    const r1 = Math.tan(deg2rad(angle1));
    const r2 = Math.tan(deg2rad(angle2));
    
    const c1 = z1 - r1 * x1;
    const c2 = z2 - r2 * x2;
    
    return (c2 - c1) / (r1 - r2);
  };
  
  const getStronghold_Z = (x: number, x1: number, z1: number, angle1: number) => {
    const r = Math.tan(deg2rad(angle1));
    return r * (x - x1) + z1;
  };

  const calculateStronghold = () => {
    const regex = /-?\d+\.\d+/g;

    const matches1 = firstThrow.match(regex);
    const matches2 = secondThrow.match(regex);

    if (!matches1 || matches1.length < 3 || !matches2 || matches2.length < 3) {
      setResult("Error: Invalid input format");
      return;
    }

    const throw1 = {
      x: parseFloat(matches1[0]),
      z: parseFloat(matches1[2]),
      angle: parseFloat(matches1[3])
    };

    const throw2 = {
      x: parseFloat(matches2[0]),
      z: parseFloat(matches2[2]),
      angle: parseFloat(matches2[3])
    };

    if (isNaN(throw1.x) || isNaN(throw1.z) || isNaN(throw1.angle) || isNaN(throw2.x) || isNaN(throw2.z) || isNaN(throw2.angle)) {
      setResult("Error: Invalid input values");
      return;
    }

    const res_X = getStronghold_X(throw1.x, throw1.z, throw1.angle - 90, throw2.x, throw2.z, throw2.angle - 90);
    const res_Z = getStronghold_Z(res_X, throw1.x, throw1.z, throw1.angle - 90);

    setResult(`STRONGHOLD COORDINATES: X=${res_X.toFixed(1)}, Z=${res_Z.toFixed(1)}`);
  };

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
            <Throw description="FIRST THROW" command={firstThrow} setCommand={setFirstThrow} />
            <Throw description="SECOND THROW" command={secondThrow} setCommand={setSecondThrow} />
          </div>
          <Button onClick={calculateStronghold} />
          {result && <Result message={result} />}
        </div>
      </div>
    </>
  );
}

export default App;