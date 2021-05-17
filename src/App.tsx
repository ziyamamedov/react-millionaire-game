import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Quiz from "./components/Quiz";

import Logo from "./components/Logo";
//import ProgressBar from "./components/ProgressBar";
import StartMenu from "./components/StartMenu";
import { RootState } from "./redux/reducers";
import Menu from "./components/Menu";
import Button from "./components/Button";
import { openMenu } from "./redux/reducers/gameReducer";
import Audios from "./components/Audios";
import mainBg from "./images/main-bg.webp";

function App() {
  const gameState = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  return (
    <StyledApp>
      <Logo />
      {/* {<ProgressBar />} */}
      {(gameState.isMenu || gameState.isStarted) && (
        <StyledMenuButton>
          <Button
            onClick={() => {
              dispatch(openMenu());
            }}
          >
            Menu
          </Button>
        </StyledMenuButton>
      )}
      {gameState.isStarted ? <Quiz /> : <StartMenu />}
      {gameState.isMenu && <Menu />}
      {gameState.isPending && <StyledPendingModal />}
      {/* {gameState.audio.isPlaying && <Sounds url={gameState.audio.url} />} */}
      <Audios audioName={gameState.audio.url} />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  background: url(${mainBg}) center/ cover no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 3rem;
`;

const StyledMenuButton = styled.div`
  margin-bottom: 1rem;
`;

const StyledPendingModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;
