import React from "react"
import styled from 'styled-components';
import Sidebar from './Sidebar';

interface Layout {
  // TODO -> check if this is right or not
  children: Partial<Element>;
}

const LayoutContainer = styled.div`
  display: flex;
`;

const ChildWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = (props: Layout) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <ChildWrapper>{props.children}</ChildWrapper>
    </LayoutContainer>
  );
};

export default Layout;
