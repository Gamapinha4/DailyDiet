import AsyncStorage from "@react-native-async-storage/async-storage";
import GetRefeicao from "./Get";
import { GROUP_COLLECTION } from "../ConfigStorage";
import { removerCountDentroDieta, removerCountForaDieta, removerRefeicoesRegistradas } from "../Count";

interface Group {
  title: string;
  data: Array<{
    desc: string;
    dieta: boolean;
    hora: string;
    nome: string;
  }>;
}

type Props = {
  item: {
    desc: string;
    dieta: boolean;
    hora: string;
    nome: string;
    convertData: string;
  };
};

export default async function RemoveRefeicao({ item }: Props) {
  try {
    const convertData = item.convertData.replace("/", ".").replace("-", ".").replace(" ", ".");
    const storedGroups = (await GetRefeicao()) as unknown as Group[];

    if (!Array.isArray(storedGroups) || storedGroups.length === 0) {
      console.log("Erro: 'storedGroups' não é um array ou está vazio.");
      return;
    }

    const existingGroupIndex = storedGroups.findIndex((x) => x.title === convertData);

    if (existingGroupIndex !== -1) {
      const newDataArray = storedGroups[existingGroupIndex].data.filter(
        (dataItem) => dataItem.desc !== item.desc
      );
      storedGroups[existingGroupIndex].data = newDataArray;
      if (newDataArray.length === 0) {
        storedGroups.splice(existingGroupIndex, 1);
      }
      const storage = JSON.stringify(storedGroups);
      await AsyncStorage.setItem(GROUP_COLLECTION, storage);
      
    } else {
      console.log("Grupo não encontrado.");
    }


    if (item.dieta) {
      removerCountDentroDieta()
     }else {
      removerCountForaDieta()
     }
     removerRefeicoesRegistradas();
  } catch (error) {
    console.log("Erro ao tentar remover item:", error);
  }
}
