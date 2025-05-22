import React from 'react';
import { Container, Logo, Button } from './style';
import { Link } from "react-router-dom";


const HeaderLanding: React.FC = () => {
  return (
    <Container>
      <Logo src="W1_WhiteText.png" alt="W1 Logo" />
       <Link to="/login">
          <Button>Login</Button>
       </Link>
    </Container>
  );
};

export default HeaderLanding;
