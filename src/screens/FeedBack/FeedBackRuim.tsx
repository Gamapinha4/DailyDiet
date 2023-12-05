import { View, Text, Image } from 'react-native'

import fdr from '../../Image/IllustrationRuim.png'

import theme from '../../Styles'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

export default function FeedBackBom() {

  const navigation = useNavigation();


  return(
    <View style={{marginTop: 160, marginLeft: 32, marginRight: 32}}>
      <Text style={{fontFamily: theme.FONT_FAMILY.BOLD, color:theme.COLORS.RED_DARK, alignSelf: 'center', fontSize: theme.FONT_SIZE.XLL}}>Que pena!</Text>
      <Text style={{fontFamily: theme.FONT_FAMILY.REGULAR, color:theme.COLORS.GRAY_100, alignSelf: 'center', fontSize: theme.FONT_SIZE.LG, marginTop: 10, textAlign: 'center'}}>Você <Text style={{fontFamily: theme.FONT_FAMILY.BOLD, color:theme.COLORS.GRAY_100, alignSelf: 'center', fontSize: theme.FONT_SIZE.LG, marginTop: 10}}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!</Text>
      <Image source={fdr} style={{alignSelf: 'center', marginTop: 40, marginBottom: 32}} />

      <Button title='Ir para a página inicial' onClick={() => navigation.navigate('Home')} icon='FOUR'/>
    </View>
  )
}