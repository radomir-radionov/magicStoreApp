import { TestStyled } from "./styles";
import { useClampText } from "use-clamp-text";

const longText =
  "Spicy jalapeno bacon ipsum dolor amet drumstick sirloin chuck shankle. Flank ribeye pancetta andouille ham hock. Turkey cow tenderloin landjaeger filet mignon hamburger. Pig tail strip steak pastrami t-bone venison bresaola biltong corned beef drumstick pork hamburger tri-tip. Tongue ham hock corned beef tri-tip meatball t-bone fatback andouille sirloin chuck jowl biltong pastrami. Ham hock ground round landjaeger tail strip steak. Ham sirloin pork loin salami spare ribs. Jerky cow short ribs ground round. Hamburger porchetta shankle meatloaf shank.";

const Test = () => {
  const [ref, { noClamp, clampedText }] = useClampText({
    text: longText,
    ellipsis: "...",
    expanded: true,
  });
  console.log(noClamp, clampedText);

  return (
    <TestStyled>
      <h1>{noClamp ? "Not truncated" : "Truncated"}</h1>
      <div>{clampedText}</div>
    </TestStyled>
  );
};

export default Test;
