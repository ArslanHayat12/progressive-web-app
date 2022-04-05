import { DetailsCardWrapper } from './Style'

type DetailsCardProps = { description: string }

const DetailsCard = (props: DetailsCardProps): JSX.Element => {
    const { description } = props

    return <DetailsCardWrapper>{description}</DetailsCardWrapper>
}

export default DetailsCard
