import {getUser, getUserInfo} from '@/store/actions/user';
import {Button, SearchBar, WhiteSpace} from '@ant-design/react-native';
import React from 'react';
import {connect} from 'react-redux';
import {View, Image, Text} from 'react-native';
import {GET_ASSETS} from '@/store/actions/book';
import {styles, layoutStyles} from '@styles';

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
  getBookCover() {
    // const url = path.resolve(
    //   __dirname,
    //   `../../assets/books/${this.props.user.crurrentBook}/cover.jpg`,
    // );
    const cover = this.props.currentBook?.cover || {
      uri: 'http://www.dzkbw.com/books/rjb/yingyu/xqds2x/coverbig.jpg',
    };
    console.log('cover', cover, this.props.currentBook);
    return cover;
  }
  render() {
    return (
      <View style={layoutStyles.box}>
        <SearchBar placeholder="查词" showCancelButton />
        <WhiteSpace size="lg" />
        <View>
          <Image source={this.getBookCover()} style={styles.cover} />
          <Text>{this.props.currentBook.title}</Text>
        </View>
        <Button
          type="primary"
          onPress={() => this.props.navigation.navigate('Learn')}>
          开始记单词吧！
        </Button>
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  currentBook: state.currentBook,
});
const mapDispathToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  getUserInfo: id => dispatch(getUserInfo(id)),
  getAssets: () => dispatch(GET_ASSETS()),
});
export default connect(mapStateToProps, mapDispathToProps)(Home);
