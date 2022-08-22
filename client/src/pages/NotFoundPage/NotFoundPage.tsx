import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { NotFoundPageStyled, Title } from "./styles";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const onClickBackHandler = () => {
    navigate("/");
  };

  return (
    <NotFoundPageStyled>
      <Button onClick={onClickBackHandler}>Back</Button>
      <Title>NotFoundPage</Title>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
