import { getDentroDieta, getForaDieta } from "../Count";


export default async function getPorcentagemTotal() {

  const stringDentroDieta = await getDentroDieta();
  const stringForaDieta = await getForaDieta();

  const numDentroDieta = parseInt(JSON.stringify(stringDentroDieta))
  const numForaDieta = parseInt(JSON.stringify(stringForaDieta))

  const result = (numDentroDieta / (numDentroDieta + numForaDieta)) * 100

  return result
}