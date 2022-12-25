import { useRouteError } from "react-router-dom";

import SectionHeader from "src/components/SectionWrapper";

const DashboardChildError = () => {
  const dataError = useRouteError() as { message: string };

  return (
    <>
      <SectionHeader title="DashboardChildError component">
        <p>Error Detail: {JSON.stringify(dataError.message)}</p>
      </SectionHeader>
    </>
  );
};

export default DashboardChildError;
