import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { NotFoundStyled, Title } from "./styles";

const NotFound = () => {
  const navigate = useNavigate();

  const onClickBackHandler = () => {
    navigate("/");
  };

  return (
    <NotFoundStyled>
      <Button onClick={onClickBackHandler}>Back</Button>
      <Title>NotFoundPage</Title>
    </NotFoundStyled>
  );
};

export default NotFound;
