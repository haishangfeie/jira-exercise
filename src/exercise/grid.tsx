import styled from '@emotion/styled'

export const GridComponent = () => {
  return (
    <Container>
      <Header>header</Header>
      <Nav>nav</Nav>
      <Main>main</Main>
      <Aside>aside</Aside>
      <Footer>footer</Footer>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas: 'header header header' 'nav main aside' 'footer footer footer';
  height: 100vh;
`

const Header = styled.header`
  grid-area: header;
  background-color: #ccc;
  color: #fff;
`
const Nav = styled.nav`
  grid-area: nav;
  background-color: blue;
`

const Main = styled.main`
  grid-area: main;
  background-color: green;
`

const Aside = styled.aside`
  grid-area: aside;
  background-color: yellow;
`

const Footer = styled.footer`
  grid-area: footer;
  background-color: pink;
`
