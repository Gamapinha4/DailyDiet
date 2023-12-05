import {View, Text} from 'react-native'
import HighLight from '../../components/HighLight'
import Input from '../../components/Input'

import theme from '../../Styles'
import ButtonSelect from '../../components/ButtonSelect'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import AddRefeicao from '../../storage/Refeicao/Add'
import RemoveRefeicao from '../../storage/Refeicao/Remove'


type propsParams = {
  item: {
    desc: string,
    dieta: boolean,
    hora: string,
    nome: string
    convertData: string
  }
}

export default function CreateRefeicao() {

  const navigation = useNavigation()
  const routes = useRoute();
  const {item} = routes.params as propsParams

  const [focus, setFocus] = useState(item.dieta ? 'Sim' : 'Nao');

  const [nome, setNome] = useState(item.nome);
  const [desc, setDesc] = useState(item.desc);
  const [data, setData] = useState(item.convertData);
  const [hora, setHora] = useState(item.hora);
  const [dieta, setDieta] = useState(item.dieta);

  async function handleSalvar() {
   await RemoveRefeicao({item});

   if (nome === null) setNome(item.nome)
   if (desc === null) setDesc(item.desc)
   if (data === null) setData(item.convertData)
   if (hora === null) setHora(item.hora)

   await AddRefeicao({data,nome,desc,hora,dieta})
   navigation.navigate('Home')
  }

  return(
    <View style={{flex: 1, backgroundColor: theme.COLORS.GRAY_700}}>
      <HighLight title='Editar refeição'/>
      <View style={{marginLeft: 24, marginRight: 24, marginTop: 15, borderRadius: 20}}>
      <Input title='Nome' w={327} h={48} onChangeText={setNome} placeholder={item.nome} placeholderTextColor={theme.COLORS.GRAY_100}/>
      <Input title='Descrição' w={327} h={120} onChangeText={setDesc} placeholder={item.desc} placeholderTextColor={theme.COLORS.GRAY_100}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Input title='Data' w={153.5} h={48} onChangeText={setData} placeholder={item.convertData} placeholderTextColor={theme.COLORS.GRAY_100}/>
        <Input title='Hora' w={153.5} h={48} onChangeText={setHora} placeholder={item.hora} placeholderTextColor={theme.COLORS.GRAY_100}/>
        </View>

        <Text style={{color: theme.COLORS.GRAY_200, fontFamily: theme.FONT_FAMILY.BOLD, marginTop: 20}}>Está dentro da dieta?</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between', marginBottom: 128}}>
        <ButtonSelect title='Sim' type='Sim' onPress={() => {setFocus('Sim'), setDieta(true)}} focus={focus === 'Sim' ? true : false}/>
        <ButtonSelect title='Não' type='Nao' onPress={() => {setFocus('Nao'), setDieta(false)}} focus={focus === 'Nao' ? true : false}/>
        </View>

        <Button title='Salvar refeição' onClick={() => {handleSalvar()}} icon={'FIVE'}/>
      
      </View>
    </View>
  )
}