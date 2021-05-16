import { useEffect, useRef } from "react";
import { createFireworks } from "../utils/fireworks";
import styled from "styled-components";

const FireWorks = () => {
  const element = useRef<any>();

  useEffect(() => {
    const fireworks = createFireworks(element);
    fireworks.start();
    return () => {
      fireworks.stop();
    };
  }, []);
  return <StyledFireworksContainer ref={element}></StyledFireworksContainer>;
};

export default FireWorks;

const StyledFireworksContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
