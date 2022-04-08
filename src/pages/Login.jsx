import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.349),
      rgba(255, 255, 255, 0.5)
    ),
      url("https://i.ibb.co/WfVQP5d/Artboard-1.jpg")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  margin: 10px 0px;
  padding: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Login = () => {
  return (
    <Container>
 <Wrapper>
         <Title>Login to an exsisting account</Title>
         <Form>
           <Input placeholder ="username"/>
           <Input placeholder ="password"/>

           <Button>Login</Button>
           <Link>Forgotten your password?</Link>
           <Link>Register a new account</Link>
         </Form>
         </Wrapper> 

    </Container>
  )
}

export default Login;
