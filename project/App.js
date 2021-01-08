/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
<<<<<<< HEAD
 * @flow strict-local
 */

import React from 'react';
=======
 * @flow
 */

import React, {Fragment} from 'react';
>>>>>>> 9c1beb0d91392624c3a91035b13498fcda4b3058
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

<<<<<<< HEAD
const App: () => React$Node = () => {
  return (
    <>
=======
const App = () => {
  return (
    <Fragment>
>>>>>>> 9c1beb0d91392624c3a91035b13498fcda4b3058
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
<<<<<<< HEAD
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
=======
>>>>>>> 9c1beb0d91392624c3a91035b13498fcda4b3058
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
<<<<<<< HEAD
    </>
=======
    </Fragment>
>>>>>>> 9c1beb0d91392624c3a91035b13498fcda4b3058
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
<<<<<<< HEAD
  engine: {
    position: 'absolute',
    right: 0,
  },
=======
>>>>>>> 9c1beb0d91392624c3a91035b13498fcda4b3058
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
<<<<<<< HEAD
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
=======
>>>>>>> 9c1beb0d91392624c3a91035b13498fcda4b3058
});

export default App;
