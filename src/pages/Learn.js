import {readBook} from '@/store/actions/user';
import {layoutStyles} from '@/styles';
import React from 'react';
import {Text, View} from 'react-native';
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
  }
  render() {
    return (
      <View style={layoutStyles.box}>
        <Text>{this.props.route.params?.bookId}</Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  currentBook: state.currentBook,
});
const mapDispatchToProps = dispatch => ({
  readBook: (id, body) => dispatch(readBook(id, body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnScreen);
