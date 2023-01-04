import styled from "styled-components";
import SVG from "react-inlinesvg";
import { colors, device } from "styles";

interface IPaginationWrapperProps {
  display: number;
}

export const PaginationWrapper = styled.section`
  display: ${({ display }: IPaginationWrapperProps) =>
    display ? "flex" : "none"};
  flex-direction: column;
  flex: 1;
  width: 100%;
  text-align: left;

  @media (max-width: 548px) {
    text-align: center;
  }
`;

export const RightArrowStyled = styled(SVG)`
  transform: scaleX(-1);

  &:hover path {
    fill: ${colors.BG_ORANGE};
  }
`;

export const LeftArrowStyled = styled(SVG)`
  margin-right: 1rem;
  &:hover path {
    fill: ${colors.BG_ORANGE};
  }
`;

export const Page = styled.li`
  cursor: pointer;
`;

export const PaginationText = styled.p`
  padding: 2px;
  color: ${colors.TEXT_1};
`;

export const PaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 6rem;
  font-size: 1.6rem;

  .pagination {
    display: flex;
    list-style: none;
  }

  .pagination__page {
    padding: 1rem;
    margin-left: 1.6rem;
    color: ${colors.TEXT_1};
    border-radius: 8px;
  }

  .break {
    margin-left: 1.6rem;
  }

  .page-item {
    padding-top: 1rem;
    margin-left: 2.6rem;
  }

  .active {
    background-color: ${colors.BG_RED};
    color: ${colors.TEXT_1};
  }

  a {
    cursor: pointer;
  }

  .disabled a {
    cursor: not-allowed;
  }

  .disabled a svg path {
    fill: ${colors.BG_LIGHT_GRAY};
    cursor: not-allowed;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
`;
