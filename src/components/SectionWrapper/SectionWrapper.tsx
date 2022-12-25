import { FC, ReactNode } from "react";

import { Divider, Title, Wrapper } from "./SectionWrapper.styled";

interface ISectionWrapperProps {
  title: string;
  children: ReactNode;
  isLoading?: boolean;
}

const SectionWrapper: FC<ISectionWrapperProps> = ({
  title,
  children,
  isLoading,
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Divider />
      {isLoading ? <p>Loading...</p> : children}
    </Wrapper>
  );
};

export default SectionWrapper;
