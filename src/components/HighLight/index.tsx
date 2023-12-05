import { View, TouchableOpacity, Text } from 'react-native'

import theme from '../../Styles'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'

type props = {
  title: string
  type?: string
}

export default function HighLight({title, type = 'ONE'} : props) {

  const navigation = useNavigation();

  return(
    <View style={{width: 375, height: 132, backgroundColor: type === 'ONE' ? theme.COLORS.GRAY_500 : type === 'TWO' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}}>
    <TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={() => navigation.navigate('Home')}><ArrowLeft size={theme.FONT_SIZE.XLL} color={theme.COLORS.GRAY_200} style={{marginLeft: 24, marginTop: 56}}/></TouchableOpacity>
    <Text style={{fontFamily: theme.FONT_FAMILY.BOLD, fontSize: theme.FONT_SIZE.XL, textAlign: 'center'}}>{title}</Text>

    </View>
  )
}