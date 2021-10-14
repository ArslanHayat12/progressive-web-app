import styled from 'styled-components'

export const CategoriesList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin: 20px 30px;

    @media (min-width: 1350px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`
