import { View, Text } from 'react-native'

import theme from '../../Styles'

type props = {
  title: string | number
  subtitle: string
  type?: string;
}

export default function Container( {title, subtitle, type = 'ONE'} : props ) {


  return(
    <View style={{height: type === 'ONE' ? 89 : 107, width: type === 'ONE' ? 327 : 157.5, borderRadius: 5,marginBottom: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: type === 'ONE' ? theme.COLORS.GRAY_600 : type === 'TWO' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}}>
      <Text style={{fontSize: theme.FONT_SIZE.XLL, fontFamily: theme.FONT_FAMILY.BOLD, textAlign: 'center'}}>{title}</Text>
      <Text style={{fontSize: theme.FONT_SIZE.SM, fontFamily: theme.FONT_FAMILY.REGULAR, textAlign: 'center'}}>{subtitle}</Text>
    </View>

  )
}