import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Hero,
  Navbar,
} from "./components";

const App = () => {
  const [animationDelays, setAnimationDelays] = useState([]);
  const [animationPositions, setAnimationPositions] = useState([]);

  const getRandomDelay = () => Math.floor(Math.random() * 8) + 5;

  const getRandomLeft = () => Math.floor(Math.random() * 101);

  const getRandomBottom = () => Math.floor(Math.random() * 141) - 20;

  const getRandomTransform = () =>
    `translateX(${Math.random() * 100}px) translateY(${Math.random() * 100}px)`;

  useEffect(() => {
    const numElements = 1800;
    const delays = Array.from({ length: numElements }, () => getRandomDelay());
    const positions = Array.from({ length: numElements }, () => ({
      left: getRandomLeft(),
      bottom: getRandomBottom(),
    }));
    setAnimationDelays(delays);
    setAnimationPositions(positions);
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <Hero />
          <About />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;