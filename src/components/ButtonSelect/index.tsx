import { TouchableOpacity, TouchableOpacityProps ,Text, View } from 'react-native'

import theme from '../../Styles'

type props = TouchableOpacityProps & {
  title: string
  type: string
  focus?: boolean
}

export default function ButtonSelect({title, type, focus, ...rest} : props) {


  return(
    <TouchableOpacity style={{width: 159, height: 50,borderRadius: 5, backgroundColor: focus ? type === 'Sim' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10}} {...rest}>
      <View style={{width: 8, height: 8, backgroundColor: type === 'Sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK, marginRight: 5, borderRadius: 8}}/>
      <Text style={{fontSize: theme.FONT_SIZE.MD, fontFamily: theme.FONT_FAMILY.BOLD}}>{title}</Text>
    </TouchableOpacity>
  )
}