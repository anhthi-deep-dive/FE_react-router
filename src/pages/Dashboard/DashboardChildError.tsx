import { useRouteError } from "react-router-dom";

import SectionHeader from "src/components/SectionWrapper";

const DashboardChildError = () => {
  const dataError = useRouteError();

  return (
    <>
      <SectionHeader title="DashboardChildError component">
        <p>Error Detail: {JSON.stringify(dataError)}</p>
      </SectionHeader>
    </>
  );
};

export default DashboardChildError;
