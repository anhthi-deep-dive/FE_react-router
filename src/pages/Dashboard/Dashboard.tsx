import { Outlet } from "react-router-dom";

import { Routes } from "src/common/constants";

import {
  ContentWrapper,
  DashboardWrapper,
  MenuItem,
  MenuWrapper,
} from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <MenuWrapper>
        <MenuItem to={Routes.Dashboard.Product.path}>
          {Routes.Dashboard.Product.name}
        </MenuItem>
        <MenuItem to={Routes.Dashboard.ThrowError.path}>
          {Routes.Dashboard.ThrowError.name}
        </MenuItem>
      </MenuWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
