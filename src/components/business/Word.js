import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {layoutStyles} from '@styles';
import {styles} from '@/styles';
// import {Button} from '@ant-design/react-native';

export default class Word extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.getBookStore();
  }

  showImages() {}

  showComponents() {
    const components = [];

    if (this.props.components) {
      const lastIndex =
        this.props.components.length > 0 ? this.props.components.length - 1 : 0;
      this.props.components.forEach((component, index) => {
        if (component.image) {
          components.push(
            <View>
              <Image source={component.image} key={component.name} />
              <View key={component.name}>
                <Text>{component.name}</Text>
                <Text>{component.association}</Text>
              </View>
            </View>,
          );
        } else {
          components.push(
            <View style={[styles.border, styles.padding5]}>
              <View key={component.name} style={layoutStyles.center}>
                <Text>{component.name}</Text>
                <Text>{component.association}</Text>
              </View>
            </View>,
          );
        }

        if (index < lastIndex) {
          components.push(<Text> + </Text>);
        }
      });
    }

    return components;
  }

  sentences() {
    const sentences = [];
    this.props.sentences.forEach((item, index) => {
      sentences.push(
        <View key={index}>
          <Text>{item.content}</Text>
          <Text>{item.comment}</Text>
        </View>,
      );
    });
    return sentences;
  }

  render() {
    const components = this.showComponents();
    return (
      <ScrollView style={layoutStyles.content}>
        <Text style={styles.titleLg}>{this.props.name}</Text>
        <Text>{this.props.pronunciation}</Text>
        <Text>{this.props.comment}</Text>
        <View style={[layoutStyles.flexRow, layoutStyles.center]}>
          {components}
        </View>
        <Text style={styles.title}>记忆分析：</Text>
        <Text>{this.props.association}</Text>
        <Text style={styles.title}>例句：</Text>
        {this.sentences()}
      </ScrollView>
    );
  }
}
