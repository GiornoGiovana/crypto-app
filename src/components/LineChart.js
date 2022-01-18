import { Line } from "react-chartjs-2";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

export const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  coinHistory?.data?.history?.forEach((elem) => {
    coinPrice.push(elem.price);
    coinTimeStamp.push(new Date(elem.timestamp).toLocaleDateString());
  });

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change} %
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};
