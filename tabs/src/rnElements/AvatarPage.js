import React from 'react';
import { Avatar } from "react-native-elements";
import { View } from 'react-native';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default function AvatarPage() {
  return (
    <ScrollView>
      <Avatar
        size="small"
        rounded
        title="small"
        onPress={() => console.log("Works!")}
        activeOpacity={0.1}
      />
      <Avatar
        size="medium"
        title="medium"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <Avatar
        size="large"
        title="large"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <Avatar
        size="xlarge"
        rounded
        title="xlarge"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <Avatar
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
      />
      <Avatar
        size="small"
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
      />
      <Avatar
        size="medium"
        overlayContainerStyle={{ backgroundColor: 'blue' }}
        icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{ flex: 3, marginTop: 100 }}
      />
      <Avatar
        size="large"
        icon={{ name: 'rocket', color: 'orange', type: 'font-awesome' }}
        overlayContainerStyle={{ backgroundColor: 'white' }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{ flex: 4, marginTop: 75 }}
      />
      <Avatar
        size="xlarge"
        rounded
        icon={{ name: 'home', type: 'font-awesome' }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{ flex: 5, marginRight: 60 }}
      />
      <Avatar
        size={200}
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
      />
    </ScrollView>
  );
}

// // Standard Avatar
// <Avatar
//   rounded
//   source={{
//     uri:
//       'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//   }}
// />

// // Avatar with Title
// <Avatar rounded title="MD" />

// // Avatar with Icon
// <Avatar rounded icon={{ name: 'home' }} />

// // Standard Avatar with accessory
// <Avatar
//   source={{
//     uri:
//       'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//   }}
//   >
//   <Avatar.Accessory {...accessoryProps} />
// </Avatar>