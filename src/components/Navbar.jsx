import { Badge } from "@material-ui/core";
import { Search, ShoppingBasketOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
 flex: 1; 
 align-items: center;
 display: flex;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid darkgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo1 = styled.h1`
  font-weight: bold;
  color: darkgray;
`;

const Logo2 = styled.h1`
  font-weight: bold;
  color: limegreen;
`;

const Right = styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

function Navbar() {
  return (
    <Container>
    <div className='navbar-container'>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input/>
                <Search style={{colour: "gray", fontSize:16}}/>
              </SearchContainer>
            </Left>
            <Center>
            
              <Logo1>Bites & </Logo1>
              <Logo2>Bytes</Logo2>
            
            </Center>
            <Right>

              <MenuItem>Register</MenuItem>
              <MenuItem>Sign In</MenuItem>
              <MenuItem>
              
                <Badge badgeContent={4} color="primary">
                  <ShoppingBasketOutlined />
                </Badge>

              </MenuItem>

            </Right>
        </Wrapper>
    </div>
    </Container>
  )
}

export default Navbar 
