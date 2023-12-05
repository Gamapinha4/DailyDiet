import {View, Text} from 'react-native'
import HighLight from '../../components/HighLight'
import Input from '../../components/Input'

import theme from '../../Styles'
import ButtonSelect from '../../components/ButtonSelect'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import AddRefeicao from '../../storage/Refeicao/Add'
import { addCountDentroDieta, addCountForaDieta, addRefeicoesRegistradas, addSequencia } from '../../storage/Count'


export default function CreateRefeicao() {

  const [focus, setFocus] = useState('');

  const [nome, setNome] = useState('');
  const [desc, setDesc] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [dieta, setDieta] = useState(false);
  

  const navigation = useNavigation();

  async function handleCreate() {
   await AddRefeicao({data,nome,desc,hora,dieta}) 
  }

  return(
    <View style={{flex: 1, backgroundColor: theme.COLORS.GRAY_700}}>
      <HighLight title='Nova refeição'/>
      <View style={{marginLeft: 24, marginRight: 24, marginTop: 15, borderRadius: 20}}>
      <Input title='Nome' w={327} h={48} onChangeText={setNome}/>
      <Input title='Descrição' w={327} h={120} onChangeText={setDesc}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Input title='Data' w={153.5} h={48} onChangeText={setData}/>
        <Input title='Hora' w={153.5} h={48} onChangeText={setHora}/>
        </View>

        <Text style={{color: theme.COLORS.GRAY_200, fontFamily: theme.FONT_FAMILY.BOLD, marginTop: 20}}>Está dentro da dieta?</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-between', marginBottom: 128}}>
        <ButtonSelect title='Sim' type='Sim' onPress={() => {setFocus('Sim'), setDieta(true)}} focus={focus === 'Sim' ? true : false}/>
        <ButtonSelect title='Não' type='Nao' onPress={() => {setFocus('Nao'), setDieta(false)}} focus={focus === 'Nao' ? true : false}/>
        </View>

        <Button title='Cadastrar refeição' onClick={() => {handleCreate(), focus === 'Sim' ? navigation.navigate('FeedBackBom') : navigation.navigate('FeedBackRuim')}} icon={'ONE'}/>
      
      </View>
    </View>
  )
}