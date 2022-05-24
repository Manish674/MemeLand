import React from 'react';
import styled from 'styled-components';
import titleImg from '../public/title.png';
import headerImgLg from '../public/headerImgLGScreen.png';
// import headerImgSm from '../public/headerImg.png';

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

interface Wrapper {
  middle?: boolean;
}
const Wrapper = styled.div<Wrapper>`
  height: 100vh;
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: ${(props) => (props.middle ? 'center' : '')};
`;

const Container = styled.div``;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  height: 99vh;
`;
const HeaderImg = styled.img``;

const Layout = (props: Layout) => {
  return (
    <LayoutContainer>
      <Wrapper>
        <Container>
          <ImgWrapper>
            <Img src={headerImgLg.src} />
            {/* <Img src={headerImgSm.src} /> */}
          </ImgWrapper>
        </Container>
      </Wrapper>

      <Wrapper middle={true}>
        <Container>
          <ImgWrapper>
            <HeaderImg src={titleImg.src} />
          </ImgWrapper>
          <ChildWrapper>{props.children}</ChildWrapper>
        </Container>
      </Wrapper>
    </LayoutContainer>
  );
};

export default Layout;
