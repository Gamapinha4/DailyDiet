import { Image, View } from 'react-native'

import logo from '../../Image/Logo.png'
import foto from '../../Image/Foto.png'

export default function Header() {

  return(
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 33}}>
      <Image source={logo} style={{ width: 82, height: 37, marginTop: 66}}/>
      <Image source={foto} style={{width: 40, height: 40, borderRadius: 40, borderWidth: 2, marginTop: 64}}/>
    </View>
  )
}