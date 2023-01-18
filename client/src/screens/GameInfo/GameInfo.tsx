import { ClampledText } from "modules";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { gameActions } from "redux/game";
import { gameDataSelector, isLoadingSelector } from "redux/game/selectors";

import {
  Btn,
  InfoBox,
  Data,
  GameInfoStyled,
  Title,
  Meta,
  MetaBlock,
  MetaTitle,
  MetaText,
  MovieBox,
  ImgWrapper,
  Img,
} from "./styles";

const GameInfo = () => {
  const dispatch = useDispatch();
  const game = useSelector(gameDataSelector);
  const isLoading = useSelector(isLoadingSelector);
  const navigate = useNavigate();
  let location = useLocation();

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
        <InfoBox>
          {!isLoading && game && (
            <>
              <Title>{game.name}</Title>
              <ImgWrapper>
                <Img src={game.background_image} display="none" />
              </ImgWrapper>
              <ClampledText text={game.description_raw} />
              <Meta>
                <MetaBlock>
                  <MetaTitle>Platforms</MetaTitle>
                  <MetaText>
                    {game?.platforms?.map(({ platform }: any) => (
                      <span key={platform.id}>{platform.name} </span>
                    ))}
                  </MetaText>
                </MetaBlock>
                <MetaBlock>
                  <MetaTitle>Metascore</MetaTitle>
                  <MetaText>{game.metacritic}</MetaText>
                </MetaBlock>
                <MetaBlock>
                  <MetaTitle>Genres</MetaTitle>
                  <MetaText>
                    {game?.genres?.map((genre: any) => (
                      <span key={genre.id}>{genre.name} </span>
                    ))}
                  </MetaText>
                </MetaBlock>
                <MetaBlock>
                  <MetaTitle>Release date</MetaTitle>
                  <MetaText>{game.released}</MetaText>
                </MetaBlock>
                <MetaBlock>
                  <MetaTitle>Age rating</MetaTitle>
                  <MetaText>{game.esrb_rating?.name}</MetaText>
                </MetaBlock>
                <MetaBlock>
                  <MetaTitle>Average playtime:</MetaTitle>
                  <MetaText>{game.playtime}h</MetaText>
                </MetaBlock>
                <MetaBlock wide={"100%"}>
                  <MetaTitle>Tags</MetaTitle>
                  <MetaText>
                    {game?.tags?.map((tag: any) => (
                      <span key={tag.id}>{tag.name}, </span>
                    ))}
                  </MetaText>
                </MetaBlock>
              </Meta>
            </>
          )}
        </InfoBox>
        <MovieBox>
          <Img src={game.background_image} />
        </MovieBox>
      </Data>
    </GameInfoStyled>
  );
};

export default GameInfo;
