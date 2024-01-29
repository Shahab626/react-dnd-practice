import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const TextContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div<{
  $isOver: boolean;
  $containerType: "container1" | "container2";
}>`
  border: 1px solid black;
  width: 300px;
  padding: 4px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: auto;

  ${({ $isOver, $containerType }) => css`
    background-image: ${$containerType === "container1"
      ? $isOver
        ? "linear-gradient(to right, #FEC84B, #FDB022)"
        : "linear-gradient(to right, #FEF0C7, #FEDF89)"
      : $isOver
      ? "linear-gradient(to right, #12B76A, #054F31 )"
      : "linear-gradient(to right,  #D1FADF, #32D583 )"};
  `}
`;

export const Heading1 = styled.h1``;
