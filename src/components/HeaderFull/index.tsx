import { ArrowLeft } from "phosphor-react-native";
import { View, Text, TouchableOpacity } from "react-native";

import theme from '../../Styles'
import { useNavigation } from "@react-navigation/native";

type props = {
  title: number
  subtitle: string
  valor: number
}

export default function HeaderFull( {title, subtitle, valor} : props ) {

  const navigation = useNavigation();

  return(
    <View style={{height: 200, width: 385, backgroundColor: valor >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}><ArrowLeft size={theme.FONT_SIZE.XLL} color={theme.COLORS.GREEN_DARK} style={{marginLeft: 24, marginTop: 56}}/></TouchableOpacity>
    <Text style={{alignSelf: 'center', justifyContent: 'center', fontFamily: theme.FONT_FAMILY.BOLD, fontSize: theme.FONT_SIZE.XVL}}>{title.toFixed(2)}%</Text>
    <Text style={{alignSelf: 'center', justifyContent: 'center', fontFamily: theme.FONT_FAMILY.REGULAR}}>{subtitle}</Text>
    </View>
  )
}