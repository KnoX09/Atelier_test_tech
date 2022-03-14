import { Card, Col, Image, Layout, Row } from "antd";
import { FC } from "react";
import { Player } from "../../App.models";

const { Sider, Header, Content } = Layout;

// const HearderDetail: FC<{ player: Player | undefined }> = ({ player }) => {
//     return (
//         <>
//             <Header style={{ background: "white", height: '100px' }}>
//                 <Row>
//                     <Col span={12}>{player?.firstname} {player?.lastname}</Col>
//                     <Col span={12}>
//                         <Image preview={false} height={'70px'} src={player?.country.picture} />
//                         {player?.country.code}
//                     </Col>
//                 </Row>
//             </Header>
//         </>
//     )
// }

const ContentDetail: FC<{ player: Player }> = ({ player }) => {
    return (
        <>
            < Content style={{ background: "white" }}>
                <Row gutter={[5, 50]}>
                    <Col span={12}>{player?.firstname} {player?.lastname}</Col>
                    <Col span={12}>
                        <Image preview={false} height={'70px'} src={player?.country.picture} />
                        {player?.country.code}
                    </Col>

                    <Col span={8}>Rank: {player?.data.rank}</Col>
                    <Col span={8}>Points: {player?.data.points}</Col>
                    <Col span={8}>Country: {player?.country.code}</Col>

                    <Col span={8}>Age: {player?.data.age}</Col>
                    <Col span={8}>Weight: {player?.data.weight / 1000}kg</Col>
                    <Col span={8}>Height: {player?.data.height}cm</Col>
                </Row>
            </Content >
        </>
    )
}

export const DetailCardPlayerComponent: FC<{player: Player}> = ({player}) => {
    return(
        <>
            <Card style={{ width: '100%' }} >
                <Layout>
                    <Sider theme="light">
                        <Image preview={false} width={'100%'} src={player?.picture} />
                    </Sider>
                    <Layout>
                        {/* <HearderDetail player={player} /> */}
                        <ContentDetail player={player} />
                    </Layout >
                </Layout >
            </Card >
        </>
    )
}