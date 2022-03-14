import { FC } from 'react'
import { PlayersComponent } from '../../components/PlayersComponent/PlayersComponent'
import { StatsComponent } from '../../components/StatsComponent/StatsComponent'

export const Home: FC = () => {

    return (
        <>
            <StatsComponent />
            <PlayersComponent />
        </>
    )
}