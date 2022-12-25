import { Outlet, useLocation, useNavigation } from "react-router-dom";

import { Routes } from "src/common/constants";

import {
  ContentWrapper,
  DashboardWrapper,
  MenuItem,
  MenuWrapper,
} from "./Dashboard.styled";

const Dashboard = () => {
  const location = useLocation();
  const navigation = useNavigation();

  console.log(navigation);

  const renderMenuItems = () => {
    const menuItems = [Routes.Dashboard.Product, Routes.Dashboard.ThrowError];

    return menuItems.map((item) => (
      <MenuItem
        key={item.path}
        to={item.path}
        isActive={location.pathname.includes(item.path)}
      >
        {item.name}
      </MenuItem>
    ));
  };

  return (
    <DashboardWrapper>
      <MenuWrapper>{renderMenuItems()}</MenuWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
