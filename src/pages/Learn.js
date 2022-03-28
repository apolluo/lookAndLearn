import {layoutStyles} from '@/styles';
import React from 'react';
import {Text, View} from 'react-native';

export default class LearnScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mount learn', this.props);
  }
  render() {
    return (
      <View style={layoutStyles.box}>
        <Text>{this.props.route.params.bookId}</Text>
      </View>
    );
  }
}
