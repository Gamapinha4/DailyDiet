import { SafeAreaView, View, Text, SectionList } from "react-native";

import theme from '../../Styles'

import Header from "../../components/Header";
import ViewButton from "../../components/ViewButton";
import { Button } from "../../components/Button";
import SectionListDesign from "../../components/SectionListDesign";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import GetRefeicao from "../../storage/Refeicao/Get";
import getPorcentagemTotal from "../../storage/Porcentagem";


export default function Home() {

  const navigation = useNavigation();

  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [porcentagem, setPorcentagem] = useState(0)
  
  function handleCreateRefeicao() {
    navigation.navigate('CreateRefeicao')
  }

  useFocusEffect(useCallback(() => {
    async function getData() {
      const storaged = await GetRefeicao();
      const porcent = await getPorcentagemTotal();
      setData(storaged)
      setPorcentagem(porcent)
      setLoading(true)
    }
    getData()
  }, []));

  return(
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.WHITE}}>
      <View style={{marginLeft: 24, marginRight: 24}}>

      <Header/>

      <ViewButton title={porcentagem} subtitle="das refeições dentro da dieta" expandButton onExpandClick={() => navigation.navigate('Info')} valor={porcentagem}/>

      <Text style={{color: theme.COLORS.GRAY_100, fontFamily: theme.FONT_FAMILY.REGULAR, marginBottom: 5, fontSize: theme.FONT_SIZE.LG}}>Refeições</Text>
      <Button title="Nova refeição" icon={'ONE'} onClick={handleCreateRefeicao}/>

      { loading ? <SectionList 
      sections={data} 
      keyExtractor={(item) => item.nome}
      renderItem={({item}) => (
        <SectionListDesign horario={item.hora} namePrato={item.nome} dieta={item.dieta} onClick={() => navigation.navigate('InfoRefeicao', {item})}/>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={{marginTop: 30, fontFamily: theme.FONT_FAMILY.BOLD, fontSize: theme.FONT_SIZE.XL}}>{title}</Text>
      )}
      /> : null}

      </View>
    </SafeAreaView>
  )
}