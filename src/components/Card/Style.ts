import styled from 'styled-components'

type CardStyleProps = {
    zindex: number
    cardbackground?: string
    cardtextcolor?: string
}

export const CardWrapper = styled.div<CardStyleProps>`
    min-height: 450px;
    max-height: 450px;
    width: 100%;
    margin: 10px 0px;
    transition: transform 0.5s, margin-top 0.5s;
    overflow: hidden;
    ${({ cardbackground, cardtextcolor, zindex }) => `
		background: ${cardbackground !== undefined ? cardbackground : '#353535'};
		color: ${cardtextcolor !== undefined ? cardtextcolor : 'white'};
		z-index: ${zindex};
	`}

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 360px) {
        min-height: 400px;
        max-height: 420px;
    }
    @media (max-height: 700px) {
        min-height: 400px;
        max-height: 420px;
    }
    @media (max-height: 650px) {
        min-height: 380px;
        max-height: 400px;
    }

    &:hover,
    :active {
        cursor: pointer;
    }
`

export const ContentWrapper = styled.div`
    max-height: inherit;
    overflow: hidden;
`
