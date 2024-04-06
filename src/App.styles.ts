import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const Wrapper = styled.div`
  margin: 40px;
  
  .grid-cont {
    padding-top: 50px;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
