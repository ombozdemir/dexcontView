require('dotenv').config()

export async function getCoin() {
  console.log(process.env)
  const res = await fetch("https://api.cryptorank.io/v1/currencies/1?api_key=" + process.env.BLOCKCHAIN_API_KEY, {
    headers: { 'Cache-Control': 'no-cache', }
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
