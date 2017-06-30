/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View,} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import WeiXinTabBar from './WeiXinTabBar'; //自定义底部Tabs

/*——页面——*/
import HomeScreen from './page/home/home';
import SecondScreen from './page/second/second';
import ThirdScreen from './page/third/third';
import FourthScreen from './page/fourth/fourth';
/*——页面——*/

export default  class ABC extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabNames: ['首页', '通讯录', '发现', '我'],
            tabIconNames: ['ios-paper', 'ios-albums', 'ios-paper-plane', 'ios-person-add'],
        };
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;

        return (
            <ScrollableTabView
                renderTabBar={() => <WeiXinTabBar tabNames={tabNames} tabIconNames={tabIconNames} />}
                tabBarPosition='bottom'
            >

                <View tabLabel='首页'>
                    <HomeScreen />
                </View>

                <View tabLabel='通讯录'>
                    <SecondScreen />
                </View>

                <View tabLabel='发现'>
                    <ThirdScreen />
                </View>

                <View tabLabel='我'>
                    <FourthScreen />
                </View>

            </ScrollableTabView>
        );
    }
}


AppRegistry.registerComponent('ABC', () => ABC);
