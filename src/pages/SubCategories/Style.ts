import styled from 'styled-components'

export const SubCategoriesList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    margin: 20px 15px;

    @media (min-width: 811px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 810px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 300px) {
        grid-template-columns: 1fr 1fr;
    }
`
