import { FC, ReactNode } from "react";

import { Divider, Title, Wrapper } from "./SectionWrapper.styled";

interface ISectionWrapperProps {
  title: string;
  children: ReactNode;
}

const SectionWrapper: FC<ISectionWrapperProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Divider />
      {children}
    </Wrapper>
  );
};

export default SectionWrapper;
