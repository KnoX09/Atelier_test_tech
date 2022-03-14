import { Spin } from "antd";
import axios from "axios";
import { FC } from "react";
import { useQuery } from "react-query";
import { Stats } from "../../App.models";
import { StatsCardComponent } from '../StatsCardComponent/StatsCardComponent'

export const StatsComponent: FC = () => {
    const {
        data: stats,
        isLoading
    } = useQuery('stats', async () => {
        const result = await axios.get(`http://localhost:8080/api/stats`);
        return (result.data || {}) as Stats;
    }, { refetchOnWindowFocus: false });

    console.log(stats);


    return (
        <>
            <h1>Global Stats</h1>
            {
                isLoading ?
                    <Spin size="large" /> :
                    stats ? 
                        <StatsCardComponent stats={stats} key='Stats' /> :
                        null
            }

        </>
    )
}