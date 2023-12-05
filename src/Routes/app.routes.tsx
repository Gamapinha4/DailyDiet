import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home'
import Info from '../screens/Info';
import CreateRefeicao from '../screens/CreateRefeicao';
import FeedBackBom from '../screens/FeedBack/FeedBackBom';
import FeedBackRuim from '../screens/FeedBack/FeedBackRuim';
import InfoRefeicao from '../screens/InfoRefeicao';
import EditarRefeicao from '../screens/EditarRefeicao';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Info" component={Info} />
      <Screen name="CreateRefeicao" component={CreateRefeicao} />
      <Screen name="FeedBackBom" component={FeedBackBom} />
      <Screen name="FeedBackRuim" component={FeedBackRuim} />
      <Screen name="InfoRefeicao" component={InfoRefeicao} />
      <Screen name="EditarRefeicao" component={EditarRefeicao} />
    </Navigator>
  );
}