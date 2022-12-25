import { FC } from "react";

import { LoadingWrapper, Title } from "./GlobalLoading.styled";

interface IGlobalLoadingProps {
  type: "initializing" | "loading" | "navigating";
}

const GlobalLoading: FC<IGlobalLoadingProps> = ({ type }) => {
  return (
    <LoadingWrapper>
      <Title>{`${type}...`}</Title>
    </LoadingWrapper>
  );
};

export default GlobalLoading;
