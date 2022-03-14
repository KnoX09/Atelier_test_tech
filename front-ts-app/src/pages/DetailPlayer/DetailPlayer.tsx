import axios from "axios";
import { FC, useState } from "react";
import { Spin } from 'antd'
import 'antd/dist/antd.css'
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Error, Player } from "../../App.models";
import { DetailCardPlayerComponent } from "../../components/DetailCardPlayerComponent/DetailCardPlayerComponent";
import { Error404Component } from "../../components/Error404Component/Error404Component";

export const DetailPlayer: FC = () => {
    const { id } = useParams()
    const [err, setErr] = useState({} as Error)
    const {
        data: player,
        isLoading
    } = useQuery('player', async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/players/${id}`);
            return (result.data || {}) as Player;
        } catch (e) {
            setErr({ status: 404, message: `Sorry, we cannot find the player with id:${id}!` })
            return null
        }
    }, { refetchOnWindowFocus: false });

    console.log(player);

    return (
        <>
            {
                isLoading ?
                    <Spin size="large" /> :
                    player ?
                        <DetailCardPlayerComponent player={player} /> :
                        <Error404Component error={err} />
            }
        </>
    )
}