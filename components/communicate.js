import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Component } from 'react/cjs/react.production.min';

class Communicate extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Creative Communicators</Text>
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default Communicate;