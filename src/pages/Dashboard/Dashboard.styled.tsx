import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MenuWrapper = styled.div`
  width: 300px;
  border-right: 1px solid #ccc;
  height: 100vh;
`;

export const MenuItem = styled(Link)<{ isActive: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
  padding-left: 16px;
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: #c91f37;
          color: #fff;
        `
      : css`
          background-color: transparent;
          color: #c91f37;
        `}
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 8px 12px;
`;
