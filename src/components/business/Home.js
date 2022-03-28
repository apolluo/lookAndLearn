import {getUser, getUserInfo} from '@/store/actions/user';
import {loadBook, readBook} from '@/store/actions/book';
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
  readBook() {
    const currentBookId = '';
    let currentBook;
    if (currentBookId) {
      currentBook = this.props.currentBook;
    } else if (this.user.books && this.user.books[0]) {
      currentBook = this.user.books[0];
    }
    if (currentBook) {
      this.props.navigation.navigate('Learn', {currentBook});
    }
  }
  render() {
    return (
      <View style={layoutStyles.box}>
        <SearchBar placeholder="查词" showCancelButton />
        {/* 你还没有添加任何书籍，去添加吧 */}
        <WhiteSpace size="lg" />
        <View>
          <Image source={this.getBookCover()} style={styles.cover} />
          <Text>{this.props.currentBook.title}</Text>
        </View>
        <Button type="primary" onPress={readBook}>
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
  loadBook: id => dispatch(loadBook(id)),
  readBook: id => dispatch(readBook(id)),
});
export default connect(mapStateToProps, mapDispathToProps)(Home);
