import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { SocialScreenBackgroundConfig } from "./SocialScreenBackgroundConfig";

const SocialScreenBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={SocialScreenBackgroundConfig}
    />
  );
};

export default SocialScreenBackground;
