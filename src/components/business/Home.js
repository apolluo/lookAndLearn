import {Button, SearchBar, WhiteSpace} from '@ant-design/react-native';
import React from 'react';
// import {View} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <>
        <SearchBar placeholder="查词" showCancelButton />
        <WhiteSpace size="lg" />
        <Button
          type="primary"
          onPress={() => this.props.navigation.navigate('Learn')}>
          开始记单词吧！
        </Button>
      </>
    );
  }
}
