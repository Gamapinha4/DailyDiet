import { SafeAreaView, View, Text } from "react-native";

import theme from '../../Styles'
import ViewButton from "../../components/ViewButton";
import { ArrowLeft } from "phosphor-react-native";
import HeaderFull from "../../components/HeaderFull";
import Container from "../../components/Container";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getDentroDieta, getForaDieta, getRefeicoesRegistradas, getSequencia } from "../../storage/Count";
import getPorcentagemTotal from "../../storage/Porcentagem";

export default function Info() {

  const [countSequencia, setCountSequencia] = useState(0);
  const [countRefRegistrada, setRefRegistrada] = useState(0);
  const [countDieta, setCountDieta] = useState(0);
  const [countForaDieta, setCountForaDieta] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0)

  useFocusEffect(useCallback(() => {
    async function Await() {
      const sequencia = await getSequencia();
      const refRegistrada = await getRefeicoesRegistradas();
      const dentroDieta = await getDentroDieta();
      const foraDieta = await getForaDieta();
      const porcent = await getPorcentagemTotal();

      setCountSequencia(parseInt(JSON.stringify(sequencia)))
      setRefRegistrada(parseInt(JSON.parse(refRegistrada)))
      setCountDieta(parseInt(JSON.stringify(dentroDieta)))
      setCountForaDieta(parseInt(JSON.stringify(foraDieta)))
      setPorcentagem(porcent)
    }
    Await()
  }, []));

  return(
    <SafeAreaView style={{flex: 1}}>

      <HeaderFull title={porcentagem} subtitle="das refeições dentro da dieta" valor={porcentagem}/>

      <View style={{flex: 1, borderRadius: 20, backgroundColor: theme.COLORS.GRAY_700}}>
        <Text style={{alignSelf: 'center', marginTop: 20,marginBottom:20, fontSize: theme.FONT_SIZE.MD, fontFamily: theme.FONT_FAMILY.BOLD}}>Estatisticas gerais</Text>
        <View style={{alignSelf: 'center'}}>
          <Container title={countSequencia} subtitle="melhor sequência de pratos dentro da dieta"/>
          <Container title={countRefRegistrada} subtitle="refeições registradas"/>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Container title={countDieta} subtitle="refeições dentro da dieta" type="TWO"/>
            <Container title={countForaDieta} subtitle="refeições fora da dieta" type="THREE"/>
            </View>
        </View>
      </View>

    </SafeAreaView>
  )
}