import styled from 'styled-components'
import { DeepSkyBlue, MediumDarkCyanBlue, White } from '../../colors'

export const PointsTableWrapper = styled.div`
    padding: 3px 5px;
    margin: 0px 15px;
`

export const StyledTableHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    font-family: 'Open Sans Bold';
    font-size: 12px;
    text-transform: uppercase;
    border-bottom: 2px solid rgba(238, 242, 246, 0.36);
    opacity: 0.45;
`

export const StyledScoreColumnHeader = styled.div`
    text-align: right;
`

export const StyledTableRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 4fr 2fr;
    padding: 15px 0px;
    border-bottom: 1px solid rgba(112, 112, 112, 0.18);
    align-items: center;
`

export const StyledRankColumn = styled.div`
    font-family: 'Open Sans Bold';
    font-size: 16px;
    color: ${MediumDarkCyanBlue};
`

export const StyledAvatarColumn = styled.div``

export const StyledNameColumn = styled.div`
    color: ${White};
    font-size: 16px;
`

export const StyledScoreColumn = styled(StyledScoreColumnHeader)`
    color: ${DeepSkyBlue};
    font-family: 'Open Sans Bold';
`
