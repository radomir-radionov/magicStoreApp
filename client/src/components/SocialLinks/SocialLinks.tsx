import { SocialLinksData } from "./data";
import { Container, Link, LinkItem } from "./styles";

const SocialLinks = () => {
  return (
    <Container>
      {SocialLinksData.map(({ id, href, icon }) => (
        <LinkItem key={id}>
          <Link href={href} target="_blank">
            {icon}
          </Link>
        </LinkItem>
      ))}
    </Container>
  );
};

export default SocialLinks;
