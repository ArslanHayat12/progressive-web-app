import { NO_RECORDS_FOUND } from '../../constants'
import { NoRecordsWrapper } from './Style'

const NoRecords = (): JSX.Element => {
    return <NoRecordsWrapper>{NO_RECORDS_FOUND}</NoRecordsWrapper>
}

export default NoRecords
