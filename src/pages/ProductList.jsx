import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterContainer = styled.div`

    display: flex;
    justify-content: space-between;
    
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    margin-right: 20px;
    padding: 20px;
`

const Option = styled.option`
    
`

export const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title></Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                <Option disabled selected >
                        Category of product
                    </Option>
                    <Option>Computer Components</Option>
                    <Option>Computer Consoles</Option>
                    <Option>Pre-builds</Option>
                    <Option>Peripherals</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected >Newest</Option>
                    <Option>Price (ascending order)</Option>
                    <Option>Price (decending order)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
