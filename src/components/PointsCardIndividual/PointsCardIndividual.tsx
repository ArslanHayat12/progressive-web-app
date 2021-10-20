import React from 'react'
import { CORRECT_ANSWERS, POINTS } from '../../constants'
import { Participant } from '../../types'
import Image from '../Image'
import Text from '../Text'
import { CardWrapper, ParticipantDetails, ResultItem, ResultWrapper } from './Style'

type PointsCardIndividualProps = {
    participant: Participant
    onClick?: (id: number) => void
}

export const PointsCardIndividual: React.FC<PointsCardIndividualProps> = ({ participant, onClick }) => {
    const { id, name, avatar, points, correctAnswers, totalQuestions } = participant

    return (
        <CardWrapper onClick={() => onClick(id)}>
            <Image type="avatar" srcUrl={avatar} size="medium" />

            <ParticipantDetails>
                <Text text={name} fontSize={16} weight={'semi-bold'} />

                <ResultWrapper>
                    <ResultItem>
                        <Text text={`${correctAnswers}/${totalQuestions}`} weight="bold" fontSize={22} />{' '}
                        <Text text={CORRECT_ANSWERS} weight="regular" fontSize={14} />
                    </ResultItem>
                    <ResultItem align="right">
                        <Text text={`${points}`} weight="bold" fontSize={22} />{' '}
                        <Text text={POINTS} weight="regular" fontSize={14} />
                    </ResultItem>
                </ResultWrapper>
            </ParticipantDetails>
        </CardWrapper>
    )
}
