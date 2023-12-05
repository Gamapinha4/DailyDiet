import { View, Text, TouchableOpacity } from "react-native";

import theme from '../../Styles'

type props = {
  horario: string
  namePrato: string
  dieta: boolean
  onClick: () => void
}

export default function SectionListDesign({ horario, namePrato, dieta = false, onClick } : props) {

  return(

    <TouchableOpacity onPress={onClick} style={{marginTop: 5, marginBottom: 5, width: 327, height: 49, borderWidth: 1, borderColor: theme.COLORS.GRAY_500, flexDirection: 'row', alignItems: 'center' , justifyContent: 'center', borderRadius: 5}}>
      <Text style={{marginLeft: 12, fontFamily: theme.FONT_FAMILY.BOLD}}>{horario}</Text>
      <Text style={{marginLeft: 5, color: theme.COLORS.GRAY_400 ,fontFamily: theme.FONT_FAMILY.REGULAR}}> | </Text>
      <Text style={{marginLeft: 5, fontFamily: theme.FONT_FAMILY.REGULAR, flex: 1}}>{namePrato}</Text>
      <Text style={{height: 14, width: 14, borderRadius: 14, backgroundColor: dieta ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID, marginRight: 12}}></Text>
      

    </TouchableOpacity>

  )
}