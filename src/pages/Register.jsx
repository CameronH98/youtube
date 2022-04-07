import styled from "styled-components"


const Container = styled.div`
    width: 100px;
    height: 100px;
    background: url("")
`;

const Wrapper = styled.div`
  
`;

const Agreement = styled.span`
  
`;

const Form = styled.form`
  
`;

const Title = styled.h1`
  
`;

const Input = styled.input`
  
`;

const Button = styled.button`
  
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
              being used by the platform as in accordance with the <b>User Privacy Policy</b>
           </Agreement>
           <Button>Create account</Button>
         </Form>
         </Wrapper> 
    </Container>
  )
}

export default Register;