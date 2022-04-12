import styled from 'styled-components';

interface Layout {
  // TODO -> check if this is right or not
  children: Partial<Element>;
}

const LayoutContainer = styled.div`
  display: flex;
`;

const ChildWrapper = styled.div`
  width: 100%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = (props: Layout) => {
  return (
    <LayoutContainer>
      <ChildWrapper>{props.children}</ChildWrapper>
    </LayoutContainer>
  );
};

export default Layout;
