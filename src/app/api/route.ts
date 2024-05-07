require('dotenv').config()

export async function getCoins() {
  const res = await fetch("https://api.cryptorank.io/v1/currencies/1?api_key=" + process.env.BLOCKCHAIN_API_KEY, {
    headers: {
      "Accept": 'application/json',
    }
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
