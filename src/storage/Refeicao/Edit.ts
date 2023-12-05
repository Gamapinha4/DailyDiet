import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../ConfigStorage";
import GetRefeicao from "./Get";

interface Refeicao {
  title: string;
  data: Array<{
    desc: string;
    dieta: boolean;
    hora: string;
    nome: string;
    convertData: string;
  }>;
}

export async function EditRefeicao(refeicaoId: string, newData: any): Promise<void> {
  try {
    const storedGroupsString = await AsyncStorage.getItem(GROUP_COLLECTION);
    if (!storedGroupsString) {
      console.log("Erro: Nenhuma refeição encontrada para edição.");
      return;
    }
    const storedGroups: Refeicao[] = JSON.parse(storedGroupsString);
    const existingGroupIndex = storedGroups.findIndex((x) => x.title === refeicaoId);

    if (existingGroupIndex !== -1) {
      storedGroups[existingGroupIndex].data = newData;

      const storage = JSON.stringify(storedGroups);
      await AsyncStorage.setItem(GROUP_COLLECTION, storage);

      console.log("Refeição editada com sucesso!");
    } else {
      console.log("Erro: Refeição não encontrada para edição.");
    }
  } catch (error) {
    console.log("Erro ao tentar editar refeição:", error);
    throw error;
  }
}
