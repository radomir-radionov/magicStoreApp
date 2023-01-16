import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { gameActions } from "redux/game";
import { gameDataSelector } from "redux/game/selectors";
import {
  Btn,
  Content,
  Data,
  GameInfoStyled,
  Header,
  Description,
  Title,
} from "./styles";

const GameInfo = () => {
  const dispatch = useDispatch();
  const game = useSelector(gameDataSelector);
  const navigate = useNavigate();
  let location = useLocation();

  const { name, description_raw } = game;
  console.log(game);

  const pathData = location.pathname.split("/");
  const gameId = pathData[2];
  const gameName = pathData[3];

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(gameActions.getGameData({ gameId, gameName }));
  }, [dispatch, gameId, gameName]);

  return (
    <GameInfoStyled>
      <Btn onClick={handleClick}>Back</Btn>
      <Data>
        <Header>
          <Title>{name}</Title>
        </Header>
        <Content>
          <Description>{description_raw}</Description>
        </Content>
      </Data>
    </GameInfoStyled>
  );
};

export default GameInfo;
