import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Pages
import EmptyPage from './EmptyPage';
import SamplePage from './SamplePage';
import HeaderPage from './HeaderPage';

// 1. Stack Navigator
// const s = createStackNavigator();
// import { createStackNavigator } from '@react-navigation/stack';
// export default function Nav() {
//   return (
//     <NavigationContainer>
//       <s.Navigator>
//         <s.Screen
//           name="Home"
//           component={EmptyPage}
//           options={{ title: 'Welcome' }}
//         />
//         <s.Screen name="Profile" component={SamplePage} />
//       </s.Navigator>
//     </NavigationContainer>
//   );
// };

// 2. Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const t = createBottomTabNavigator();
const page = ["EmptyPage", "SamplePage"];
export default function Nav() {
  return (
    <NavigationContainer>
      <t.Navigator>
        <t.Screen name="EmptyPage" component={EmptyPage} />
        <t.Screen name="SamplePage" component={SamplePage} />
        <t.Screen name="HeaderPage" component={HeaderPage} />
      </t.Navigator>
    </NavigationContainer>
  );
};