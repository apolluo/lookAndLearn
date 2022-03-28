import React from 'react';
import {Text, View, Image} from 'react-native';
import {layoutStyles, styles} from '@styles';
import {getBookStore, readBook} from '@/store/actions/book';
import {connect} from 'react-redux';
import {Button} from '@ant-design/react-native';

class BookStore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBookStore();
  }
  getBookCover(item) {
    const cover = item?.cover || {
      uri: 'http://www.dzkbw.com/books/rjb/yingyu/xqds2x/coverbig.jpg',
    };
    console.log('cover', cover, this.props.currentBook);
    return cover;
  }
  readBook(bookId) {
    console.log('readBook', bookId);
    this.props.navigation.navigate('Learn', {bookId});
  }
  showBookList() {
    console.log('bookStore', this.props.bookStore);
    if (!this.props.bookStore.docs) {
      return <Text>加载中。。。</Text>;
    }
    return this.props.bookStore.docs.map((item, index) => (
      <View style={styles.listItem} key={index}>
        <Image source={this.getBookCover(item)} style={styles.cover} />
        <Text>{item.title}</Text>
        <Button
          style={styles.listItem}
          type="primary"
          onPress={() => this.readBook(item._id)}>
          阅读
        </Button>
      </View>
    ));
  }
  render() {
    return (
      <View style={layoutStyles.box}>
        {this.showBookList()}
        <Text />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  bookStore: state.bookStore,
});
const mapDispathToProps = dispatch => ({
  // getUser: id => dispatch(getUser(id)),
  // getUserInfo: id => dispatch(getUserInfo(id)),
  // getAssets: () => dispatch(GET_ASSETS()),
  // loadBook: id => dispatch(loadBook(id)),
  getBookStore: () => dispatch(getBookStore()),
  readBook: id => dispatch(readBook(id)),
});
export default connect(mapStateToProps, mapDispathToProps)(BookStore);
