import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory } from "../api";

const PriceList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface PriceProps {
  coinId: string;
}

export default function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading price..."
      ) : Array.isArray(data) ? (
        <PriceList>
          <span>Open</span>
          <span>High</span>
          <span>Low</span>
          <span>Close</span>
          <span></span>
          {data
            ?.map((price) => [price.open, price.high, price.low, price.close])
            .flat(Infinity)
            .map((item) => <span>{item}</span>) ?? null}
        </PriceList>
      ) : null}
    </div>
  );
}
