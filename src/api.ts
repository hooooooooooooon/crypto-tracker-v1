const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  const response = await fetch(`${BASE_URL}/coins`);
  return await response.json();
}

export async function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinHistory(coinId: string) {
  const CUSTOM_API = `https://ohlcv-api.nomadcoders.workers.dev`;
  return fetch(`${CUSTOM_API}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
