import { Card, Col, Row } from "antd";
import { FC } from "react";
import { Stats } from "../../App.models";

export const StatsCardComponent: FC<{stats: Stats}> = ({stats}) => {
    return(
        <>
            <Card style={{ width: '100%', textAlign: 'center' }} >
                <Row>
                    <Col span={8}>
                        {
                            stats.ratioCountry.map(ratio => <p key={ratio.country}>{ratio.country} : {ratio.ratio}%</p>)
                        }
                    </Col>
                    <Col span={8}>Average IMC : {stats.IMC.averageIMC}</Col>
                    <Col span={8}>Height median : {stats.height.median}cm</Col>
                </Row>
            </Card>
        </>
    )
}