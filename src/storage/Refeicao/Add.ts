import AsyncStorage from "@react-native-async-storage/async-storage";
import GetRefeicao from "./Get";
import { GROUP_COLLECTION } from "../ConfigStorage";
import { addCountDentroDieta, addCountForaDieta, addRefeicoesRegistradas, addSequencia } from "../Count";

type props = {
  data: string
  nome: string
  desc: string
  hora: string
  dieta: boolean
}

export default async function AddRefeicao({ data, nome, desc, hora, dieta }: props) {
  try {
    const convertData = data.replace('/', '.').replace('-', '.').replace(' ', '.');

    const storedGroups = await GetRefeicao();
    const existingGroupIndex = storedGroups.findIndex((x: any) => x.title === convertData);
    if (existingGroupIndex !== -1) {
      (storedGroups[existingGroupIndex] as any).data.unshift({ nome, desc, hora, dieta, convertData });
    } else {
      storedGroups.unshift({ title: convertData, data: [{ nome, desc, hora, dieta, convertData }] } as any);
    }
    const storage = JSON.stringify(storedGroups);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    if (dieta) {
      addCountDentroDieta()
     }else {
      addCountForaDieta()
     }
  
     addSequencia(dieta)
     addRefeicoesRegistradas();
  } catch (error) {
    throw error;
  }
}