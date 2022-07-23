import { useSelector } from "react-redux";
import { userNameSelector } from "redux/user/selectors";
import { AnimatedTitleStyled, Br, SpanStyled } from "./styles";

const AnimatedTitle = () => {
  const userName = useSelector(userNameSelector);

  return (
    <AnimatedTitleStyled>
      <SpanStyled>H</SpanStyled>
      <SpanStyled>i</SpanStyled>
      <SpanStyled>,</SpanStyled>
      <Br />
      {userName?.length ? (
        <SpanStyled>{userName}</SpanStyled>
      ) : (
        <>
          <SpanStyled>u</SpanStyled>
          <SpanStyled>s</SpanStyled>
          <SpanStyled>e</SpanStyled>
          <SpanStyled>r</SpanStyled>
        </>
      )}
      <SpanStyled>,</SpanStyled>
      <Br />
      <SpanStyled>w</SpanStyled>
      <SpanStyled>e</SpanStyled>
      <SpanStyled>l</SpanStyled>
      <SpanStyled>c</SpanStyled>
      <SpanStyled>o</SpanStyled>
      <SpanStyled>m</SpanStyled>
      <SpanStyled>e</SpanStyled> <SpanStyled>t</SpanStyled>
      <SpanStyled>o</SpanStyled>
      <Br />
      <SpanStyled>t</SpanStyled>
      <SpanStyled>h</SpanStyled>
      <SpanStyled>e</SpanStyled> <SpanStyled>M</SpanStyled>
      <SpanStyled>a</SpanStyled>
      <SpanStyled>g</SpanStyled>
      <SpanStyled>i</SpanStyled>
      <SpanStyled>c</SpanStyled> <SpanStyled>s</SpanStyled>
      <SpanStyled>t</SpanStyled>
      <SpanStyled>o</SpanStyled>
      <SpanStyled>r</SpanStyled>
      <SpanStyled>e</SpanStyled>
    </AnimatedTitleStyled>
  );
};

export default AnimatedTitle;
