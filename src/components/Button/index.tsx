import { TouchableOpacity, Text } from 'react-native'

import theme from '../../Styles'
import { PencilSimpleLine, Plus, Trash } from 'phosphor-react-native';

type props = {
  title: string;
  icon: string;
  onClick?:() => void;
}

export function Button( {title, icon = 'ONE', onClick} : props ) {

  return(

    <TouchableOpacity onPress={onClick} style={{height: 50, width: 327, backgroundColor: theme.COLORS.GRAY_200, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 5}}>
      {icon === 'ONE' && <Plus color='white' size={theme.FONT_SIZE.LG} style={{marginRight: 10}}/>}
      {icon === 'TWO' && <PencilSimpleLine color='white' size={theme.FONT_SIZE.LG} style={{marginRight: 10}}/>}
      {icon === 'THREE' && <Trash color='white' size={theme.FONT_SIZE.LG} style={{marginRight: 10}}/>}
      <Text style={{fontFamily: theme.FONT_FAMILY.BOLD, color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  )
}