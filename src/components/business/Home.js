import {getUser, getUserInfo} from '@/store/actions/user';
import {Button, SearchBar, WhiteSpace} from '@ant-design/react-native';
import React from 'react';
import {connect} from 'react-redux';
// import {View} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.getUserInfo('6232effc81f06039e0d5f175').then(res => {
      console.log('componentDidMount', res);
    });
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
const mapStateToProps = (state, ownProps) => ({
  user: state.user,
});
const mapDispathToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  getUserInfo: id => dispatch(getUserInfo(id)),
});
export default connect(mapStateToProps, mapDispathToProps)(Home);
