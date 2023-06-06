import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { HomeScreenBackgroundConfig } from "./HomeScreenBackgroundConfig";

const HomeScreenBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={HomeScreenBackgroundConfig}
    />
  );
};

export default HomeScreenBackground;
