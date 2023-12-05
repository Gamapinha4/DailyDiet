import { View, Text, TouchableOpacity, TouchableOpacityProps, ViewProps } from "react-native"

import theme from '../../Styles'
import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native'

type props = ViewProps & {
  title: number
  subtitle: string
  onExpandClick?: () => void
  expandButton?: boolean
  flex?: boolean
  valor: number
}

export default function ViewButton({title, subtitle, onExpandClick, expandButton, valor, ...rest} : props ) {

  return(
    <TouchableOpacity onPress={onExpandClick} style={{backgroundColor: valor >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT, borderRadius: 5, height: 102, width: 327, marginBottom: 40, justifyContent: 'center'}} {...rest}>
      {expandButton && <View style={{flex: 1}}><ArrowUpRight size={theme.FONT_SIZE.XVL} color={theme.COLORS.GREEN_DARK} style={{alignSelf: 'flex-end', marginRight: 8, marginTop: 8}}/></View>}

      <View style={{padding: 20}}>
      <Text style={{alignSelf: 'center', color: theme.COLORS.GRAY_100, fontSize: theme.FONT_SIZE.XVL, fontFamily: theme.FONT_FAMILY.BOLD}}>{title.toFixed(2)}%</Text>
      <Text style={{alignSelf: 'center', color: theme.COLORS.GRAY_100, fontSize: theme.FONT_SIZE.MD, fontFamily: theme.FONT_FAMILY.REGULAR, marginTop: 5}}>{subtitle}</Text>
      </View>

    </TouchableOpacity>
  )
}