import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { WhoIAm_Background_Config } from "./WhoIAm_background_config";

const WhoIAmBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={WhoIAm_Background_Config}
    />
  );
};
export default WhoIAmBackground;
