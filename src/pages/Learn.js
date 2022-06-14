import Word from '@/components/business/Word';
import {readBook, readPage} from '@/store/actions/user';
import {layoutStyles} from '@/styles';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {connect} from 'react-redux';

class LearnScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const params = {
      userBookId: this.props.currentBook?._id,
      bookId: this.props.route.params?.bookId,
    };
    console.log('mount learn', this.props.user._id, params);
    if (!params.userBookId) {
      this.props.readBook(this.props.user._id, params);
    }
    // else {
    //   this.props.readPage(this.props.currentBook.currentChapterPage);
    // }
    this.loadPage(this.props.currentBook.currentChapterPage);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.currentBook &&
      (this.props.currentBook.currentChapterPage !==
        prevProps.currentBook.currentChapterPage ||
        this.props.currentBook.currentChapter !==
          prevProps.currentBook.currentChapter)
    ) {
      console.log('componentDidUpdate', this.props.currentBook);
      // this.props.readPage(
      //   this.props.currentBook,
      //   this.props.currentBook.currentChapterPage,
      // );
      this.loadPage(this.props.currentBook.currentChapterPage);
    }
  }

  loadPage(currentChapterPage) {
    if (this.props.currentBook) {
      this.props.readPage(this.props.currentBook, currentChapterPage);
    }
  }

  showPage(content) {
    if (content.name) {
      return <Word {...content} />;
    }
    return null;
  }

  nextPage() {
    this.props.readPage(
      this.props.currentBook,
      this.props.currentBook.currentChapterPage + 1,
    );
  }

  render() {
    // const word = await this.showPage(
    //   this.props.currentBook,
    //   this.props.currentBook.currentChapterPage,
    // );
    const word = this.props.content;
    console.log('rend word', word);
    return (
      <View style={layoutStyles.fullBox}>
        {/* <Text>{this.props.route.params?.bookId}</Text> */}
        {this.showPage(word)}
        <Button onPress={() => this.nextPage()}>下一个单词</Button>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  currentBook: state.currentBook,
  content: state.content,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  readBook: (id, body) => dispatch(readBook(id, body)),
  readPage: (currentBook, pageIndex) =>
    dispatch(readPage(currentBook, pageIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnScreen);
