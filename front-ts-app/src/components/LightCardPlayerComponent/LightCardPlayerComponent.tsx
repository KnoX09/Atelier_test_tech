import { FC } from "react";
import { Card, Image, Layout, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import { Player } from "../../App.models";

const { Sider, Header, Content } = Layout;

export const LightCardPlayerComponent: FC<{ player: Player }> = ({ player }) => {

    const url = `/players/${player.id}`;

    return (
        <>
            <a href={url}>
                <Card
                    style={{ width: '75%' }}
                >
                    <Layout>
                        <Sider theme="light">
                            <Image preview={false} width={'100%'} src={player.picture} />
                        </Sider>
                        <Layout>
                            <Header style={{ background: "white" }}>
                                {player.firstname} {player.lastname}
                            </Header>
                            <Content style={{ background: "white" }}>
                                <Row>
                                    <Col span={8}>Rank: {player.data.rank}</Col>
                                    <Col span={8}>Points: {player.data.points}</Col>
                                    <Col span={8}>Country: {player.country.code}</Col>
                                </Row>
                            </Content>
                        </Layout>
                    </Layout>
                </Card>
            </a>
        </>
    )
}