import { TextInput, TextInputProps, Text, View } from "react-native"

import theme from '../../Styles'

type props = TextInputProps & {
  title: string
  w: number
  h: number
}
export default function Input( {title, h, w, ...rest} : props) {


  return(
    <View style={{marginTop: 20}}>
    <Text style={{color: theme.COLORS.GRAY_200, fontFamily: theme.FONT_FAMILY.BOLD}}>{title}</Text>
    <TextInput multiline style={{width: w, height: h, borderWidth: 1, borderColor: theme.COLORS.GRAY_500, borderRadius: 8, paddingLeft: 10, paddingRight: 10, color: theme.COLORS.GRAY_100,textAlignVertical: 'top', paddingTop: 15}} {...rest}/>
    </View>
  )
}