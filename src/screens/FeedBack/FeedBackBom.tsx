import { View, Text, Image } from 'react-native'

import fdb from '../../Image/IllustrationBom.png'

import theme from '../../Styles'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

export default function FeedBackBom() {

  const navigation = useNavigation();


  return(
    <View style={{marginTop: 160, marginLeft: 32, marginRight: 32}}>
      <Text style={{fontFamily: theme.FONT_FAMILY.BOLD, color:theme.COLORS.GREEN_DARK, alignSelf: 'center', fontSize: theme.FONT_SIZE.XLL}}>Continue assim!</Text>
      <Text style={{fontFamily: theme.FONT_FAMILY.REGULAR, color:theme.COLORS.GRAY_100, alignSelf: 'center', fontSize: theme.FONT_SIZE.LG, marginTop: 10}}>Você continua <Text style={{fontFamily: theme.FONT_FAMILY.BOLD, color:theme.COLORS.GRAY_100, alignSelf: 'center', fontSize: theme.FONT_SIZE.LG, marginTop: 10}}>dentro da dieta</Text>. Muito bem!</Text>
      <Image source={fdb} style={{alignSelf: 'center', marginTop: 40, marginBottom: 32}} />

      <Button title='Ir para a página inicial' onClick={() => navigation.navigate('Home')} icon='FOUR'/>
    </View>
  )
}