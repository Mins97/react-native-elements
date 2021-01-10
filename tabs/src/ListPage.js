import React from 'react';
import { FlatList, View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';

export default function ListPage({ navigation }) {
  return (
    <FlatList data={list} renderItem={({ item, index }) =>
      <Button
        disabled={index == 0 ? true : false}
        onPress={() => { navigation.navigate(item) }}
        color={index % 2 ? "#1e90ff" : "#1090f0"}
        title={item} />
    } keyExtractor={(item, index) => index} />
  );
}
const list =
  ["React Native Elements : 3.1.0 version."
    , "Avatar"
    , "Badge"
    , "Bottom Sheet"
    , "Button"
    , "ButtonGroup"
    , "Card"
    , "CheckBox"
    , "Divider"
    , "Header"
    , "Icon"
    , "Image"
    , "Input"
    , "ListItem"
    , "Overlay"
    , "Pricing"
    , "Rating"
    , "SearchBar"
    , "Slider"
    , "SocialIcon"
    , "Text"
    , "Tile"
    , "Tooltip"]