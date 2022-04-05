import { useMemo } from 'react'
import { SpecificationType } from '../../types'
import { CardTitle, SpecificationCardStyled, SpecificationsRow, SpecificationTitle, SpecificationValue } from './Style'

type SpecificationCardProps = SpecificationType

const SpecificationCard = (props: SpecificationCardProps): JSX.Element => {
    const { title, points: specifications } = props

    const renderSpecifications = useMemo(() => {
        return specifications?.map((specification) => (
            <SpecificationsRow key={specification?.key}>
                <SpecificationTitle>{specification?.key}</SpecificationTitle>
                <SpecificationValue>{specification?.value}</SpecificationValue>
            </SpecificationsRow>
        ))
    }, [])

    return (
        <SpecificationCardStyled>
            <CardTitle>{title}</CardTitle>

            {renderSpecifications}
        </SpecificationCardStyled>
    )
}

export default SpecificationCard
