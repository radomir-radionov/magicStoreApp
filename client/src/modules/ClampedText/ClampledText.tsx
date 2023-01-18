import { useState } from "react";
import { useClampText } from "use-clamp-text";
import { Title, Btn, ClampedTextStyled, Description } from "./styles";

interface IClampedTextProps {
  text: string;
}

const ClampedText = ({ text }: IClampedTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const [ref, { clampedText, key }] = useClampText({
    text: text,
    lines: 5,
    expanded,
  });

  const toggleExpanded = () => setExpanded((state) => !state);

  return (
    <ClampedTextStyled>
      <Title>About</Title>
      <Description ref={ref} key={key}>
        {clampedText}
      </Description>
      <Btn onClick={toggleExpanded}>{expanded ? "Show less" : "Read more"}</Btn>
    </ClampedTextStyled>
  );
};

export default ClampedText;
