import React from 'react';
import {View} from 'react-native';
import {Icon, TabBar} from '@ant-design/react-native';
import Home from '@components/business/Home';
export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
    };
    this.screens = {
      Home: Home,
    };
  }
  renderContent(screenName) {
    const Screen = this.screens[screenName];
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <Screen {...this.props} />
      </View>
    );
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="首页"
          icon={<Icon name="Home" />}
          selected={this.state.selectedTab === 'Home'}
          onPress={() => this.onChangeTab('Home')}>
          {this.renderContent('Home')}
        </TabBar.Item>
        {/* <TabBar.Item
          icon={<Icon name="ordered-list" />}
          title="发现"
          badge={2}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}>
          {this.renderContent('find')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="like" />}
          title="商城"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}>
          {this.renderContent('shop')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="我"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}>
          {this.renderContent('my')}
        </TabBar.Item> */}
      </TabBar>
    );
  }
}
