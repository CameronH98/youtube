import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.349),
      rgba(255, 255, 255, 0.5)
    ),
      url("https://i.ibb.co/0F9Mc8J/Artboard-1-Register.jpg")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  background-color: linear-gradient(
      rgba(255, 255, 255, 0.349),
      rgba(255, 255, 255, 0.5)
    ),
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

export const Register = () => {
  return (
    <Container>
       <Wrapper>
         <Title>Create an account</Title>
         <Form>
           <Input placeholder ="first name's"/>
           <Input placeholder ="last name"/>
           <Input placeholder ="email"/>
           <Input placeholder ="username"/>
           <Input placeholder ="password"/>
           <Input placeholder ="confirm password"/>
           
           <Agreement>
              By registering an account with Bites and Bytes, I consent to the management of my personal information
              being used by the platform as in accordance with the '<b>User Privacy Policy</b>'
           </Agreement>
           <Button>Create account</Button>
         </Form>
         </Wrapper> 
    </Container>
  )
}

export default Register;