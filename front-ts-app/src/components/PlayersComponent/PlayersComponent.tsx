import { Spin } from "antd";
import axios from "axios";
import { FC } from "react";
import { useQuery } from "react-query";
import { Player } from "../../App.models";
import { LightCardPlayerComponent } from "../LightCardPlayerComponent/LightCardPlayerComponent";

export const PlayersComponent: FC = () => {
    const {
        data: players,
        isLoading
    } = useQuery('players', async () => {
        const result = await axios.get(`http://localhost:8080/api/players`);
        return (result.data || []) as Player[];
    }, { refetchOnWindowFocus: false });

    console.log(players);


    return (
        <>
            <h1>Players</h1>
            {
                isLoading ?
                    <Spin size="large" /> :
                    players?.map((p) => <LightCardPlayerComponent player={p} key={p.id} />)
            }

        </>
    )
}