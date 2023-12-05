import { useNavigation, useRoute } from "@react-navigation/native"
import HighLight from "../../components/HighLight"
import {Text, View} from 'react-native'

import theme from '../../Styles'
import { Button } from "../../components/Button"
import RemoveRefeicao from "../../storage/Refeicao/Remove"
import { EditRefeicao } from "../../storage/Refeicao/Edit"


type props = {
  item: {
    desc: string,
    dieta: boolean,
    hora: string,
    nome: string
    convertData: string
  }
}

export default function InfoRefeicao() {

  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params as props

  async function remove() {
    await RemoveRefeicao({item})
    navigation.navigate('Home')
  }

  async function edit() {
    navigation.navigate('EditarRefeicao', {item})
  }


  return(
    <View>
      <HighLight title="Refeição" type={item.dieta ? 'TWO' : 'THREE'}/>

      <View style={{marginLeft: 24, marginTop: 24}}>
      <Text style={{fontSize: theme.FONT_SIZE.XL, fontFamily: theme.FONT_FAMILY.BOLD}}>{item.nome}</Text>
      <Text style={{fontSize: theme.FONT_SIZE.MD, fontFamily: theme.FONT_FAMILY.REGULAR, marginTop: 10}}>{item.desc}</Text>

      <Text style={{fontSize: theme.FONT_SIZE.MD, fontFamily: theme.FONT_FAMILY.REGULAR, marginTop: 30}}>Data e hora</Text>
      <Text style={{fontSize: theme.FONT_SIZE.LG, fontFamily: theme.FONT_FAMILY.REGULAR, marginTop: 10}}>{item.convertData} ás {item.hora}</Text>

      <View style={{marginTop: 324}}>
      <Button title="Editar refeição" icon={'TWO'} onClick={() => edit()}/>
      <View style={{marginTop: 10}}/>
      <Button title="Excluir refeição" icon={'THREE'} onClick={() => remove()}/>
      </View>
      </View>

    </View>
  )

}