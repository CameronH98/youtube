import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;


export const Announcement = () => {
  return (

<Container> Free worldwide shipping, for orders over £50! </Container>
  )
}

export default Announcement;