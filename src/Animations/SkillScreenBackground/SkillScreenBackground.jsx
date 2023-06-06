import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { SkillScreenBackgroundConfig } from "./SkillScreenBackgroundConfig";

const SkillScreenBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={SkillScreenBackgroundConfig}
    />
  );
};

export default SkillScreenBackground;
