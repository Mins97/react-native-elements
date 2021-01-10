import React from 'react';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
export default function IconPage() {
  return (
    <ScrollView>
      <Ionicons name="md-home" size={32} color="green" />
      <Icon
        name='stepforward' />

      <Icon
        name='g-translate'
        color='#00aced' />

      <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
      />

      <Icon
        reverse
        name='ios-american-football'
        type='ionicon'
        color='#517fa4'
      />

      <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />
    </ScrollView>
  );
}