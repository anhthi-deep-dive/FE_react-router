import { Outlet } from "react-router-dom";

import SectionWrapper from "src/components/SectionWrapper";

const Dashboard = () => {
  return (
    <SectionWrapper title="Dashboard component">
      <Outlet />
    </SectionWrapper>
  );
};

export default Dashboard;
