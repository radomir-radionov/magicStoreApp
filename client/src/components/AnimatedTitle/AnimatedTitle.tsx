import { useSelector } from "react-redux";
import userSelector from "redux/user/selectors";
import { AnimatedTitleStyled, Br, Letter, Box } from "./styles";

const AnimatedTitle = () => {
  const userName = useSelector(userSelector.name);

  return (
    <AnimatedTitleStyled>
      <Box>
        <Letter>H</Letter>
        <Letter>i</Letter>
        <Letter>,</Letter>
      </Box>
      <Br />
      {userName?.length ? (
        <Letter>{userName}</Letter>
      ) : (
        <>
          <Box>
            <Letter>u</Letter>
            <Letter>s</Letter>
            <Letter>e</Letter>
            <Letter>r</Letter>
          </Box>
        </>
      )}
      <Letter>,</Letter>
      <Br />
      <Box>
        <Letter>w</Letter>
        <Letter>e</Letter>
        <Letter>l</Letter>
        <Letter>c</Letter>
        <Letter>o</Letter>
        <Letter>m</Letter>
        <Letter>e </Letter>
      </Box>
      <Box>
        <Letter>t</Letter>
        <Letter>o</Letter>
      </Box>
      <Br />
      <Box>
        <Letter>t</Letter>
        <Letter>h</Letter>
        <Letter>e</Letter>
      </Box>
      <Box>
        <Letter>M</Letter>
        <Letter>a</Letter>
        <Letter>g</Letter>
        <Letter>i</Letter>
        <Letter>c</Letter>
      </Box>
      <Box>
        <Letter>S</Letter>
        <Letter>t</Letter>
        <Letter>o</Letter>
        <Letter>r</Letter>
        <Letter>e</Letter>
      </Box>
    </AnimatedTitleStyled>
  );
};

export default AnimatedTitle;
