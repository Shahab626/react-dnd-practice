import styled, { css } from "styled-components";

export const Item = styled.div<{
  $isDraggable: boolean;
  $type: string;
}>`
  background: yellow;
  color: black;
  padding: 4px;
  min-height: 50px;
  border-radius: 8px;

  ${({ $isDraggable, $type }) => css`
    background: ${$type === "container1"
      ? $isDraggable
        ? "#FDB022"
        : "#FEDF89"
      : $isDraggable
      ? "#039855"
      : "#32D583"};

    color: ${$isDraggable ? "white" : "black"};
  `}
`;
