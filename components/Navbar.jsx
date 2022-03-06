import Link from 'next/link';
import styled from 'styled-components';

// Styled Components
const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledImage = styled.img`
  cursor: pointer;
  object-fit: contain;
  height: 80px;
  width: 80px;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
const NavRight = styled.div``;

const StyledLink = styled.span`
  cursor: pointer;
  font-size: 18px;
  text-align: center;
  padding-left: 20px;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLeft>
        <Link href='/' passHref>
          <StyledImage src='/bf1-logo-black.png' alt='bf-logo' />
        </Link>
        <Link href='/routeplanner' passHref>
          <StyledLink>Plan Your Route</StyledLink>
        </Link>
      </NavLeft>
      <NavRight>
        <Link href='/about' passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href='/faqs' passHref>
          <StyledLink>FAQs</StyledLink>
        </Link>
        <Link href='/contact' passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </NavRight>
    </Nav>
  );
};
export default Navbar;
