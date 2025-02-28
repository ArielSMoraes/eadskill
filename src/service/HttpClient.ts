export async function ApiRequest(endPoint: string) {
  const data = await fetch(`${process.env.API_HOST}/${endPoint}`)
  const response = await data.json()

  return response;
}
