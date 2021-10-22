import styled from 'styled-components'
import { DarkCyanBlue, DeepSkyBlue, DullBlack, White } from '../../colors'

type ImageWrapperProps = { imageUrl: string }

export const CardWrapper = styled.div`
    background: ${DarkCyanBlue};
    display: grid;
    grid-template-rows: 1fr 0.94fr;
    border-radius: 5px;
    box-shadow: 0 0 6px 0 ${DullBlack(0.16)};

    &:hover,
    :active {
        cursor: pointer;
    }

    @media (max-width: 810px) {
        grid-template-rows: 1fr 0.54fr;
    }
    @media (max-width: 580px) {
        grid-template-rows: 1fr 0.94fr;
    }
`

export const ImageWrapper = styled.div<ImageWrapperProps>`
    background: url(${(props) => props.imageUrl}) no-repeat center center;
    background-size: cover;
    border-radius: 5px;
    height: 100px;
    display: flex;
    align-items: end;

    @media (max-width: 810px) {
        height: 150px;
    }
    @media (max-width: 580px) {
        height: 100px;
    }
`

export const RankStyle = styled.p`
    margin: 0px 0px 5px 10px;
    font-size: 16px;
    font-weight: 700;
    text-shadow: 0px 0px 3px ${DullBlack(0.16)};
`

export const DetailsWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 8px 10px;
    align-items: center;
`

export const NameStyle = styled.p`
    margin: 0px;
    font-size: 14px;
    font-weight: 600;
`

export const PointsDetailCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 6px;
    align-items: end;
`

export const PointsLabel = styled.p`
    color: ${White};
    opacity: 0.65;
    margin: 0px;
    font-size: 15px;
    margin-bottom: 1px;
`

export const PointsStyle = styled.p`
    color: ${DeepSkyBlue};
    margin: 0px;
    font-weight: 700;
    font-size: 16px;
`
