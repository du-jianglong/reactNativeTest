const React = require('react');
const {ViewPropTypes} = ReactNative = require('react-native');
const {StyleSheet, Text, View, Animated,} = ReactNative;
import Button from 'react-native-scrollable-tab-view/Button';
import Icon from 'react-native-vector-icons/Ionicons';

const WeiXinTabBar = React.createClass({
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: ViewPropTypes.style,
        renderTab: React.PropTypes.func,
        underlineStyle: ViewPropTypes.style,
    },

    getDefaultProps() {
        return {
            activeTextColor: 'navy',
            inactiveTextColor: 'black',
            backgroundColor: '#eeeeee',
        };
    },

    renderTabOption(tabNames, page) {
    },

    renderTab(tabNames, page, isTabActive, onPressHandler) {
        /*
         * activeTextColor:默认选中颜色
         * inactiveTextColor：默认未选择颜色
         * textStyle：默认样式
         * 例如：const color = isTabActive ? activeTextColor : inactiveTextColor;
         * */
        const {textStyle} = this.props;
        const fontWeight = isTabActive ? 'bold' : 'normal';
        const color = isTabActive ? "#6B8E23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色

        return <Button
            style={{flex: 1,}}
            key={tabNames}
            accessible={true}
            accessibilityLabel={tabNames}
            accessibilityTraits='button'
            onPress={() => onPressHandler(page)}
        >
            <View style={[styles.tab, this.props.tabStyle]}>
                <Icon
                    name={this.props.tabIconNames[page]} // 图标
                    size={30}
                    color={color}
                />

                <Text style={[{color: color, fontWeight,}, textStyle,]}>
                    {tabNames}
                </Text>
            </View>
        </Button>;
    },

    render() {
        const containerWidth = this.props.containerWidth;
        const numberOfTabs = this.props.tabs.length;
        const tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 0, //下划线条
            backgroundColor: 'navy',
            bottom: 0,
        };

        const translateX = this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, containerWidth / numberOfTabs],
        });
        return (
            <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor,}, this.props.style,]}>
                {this.props.tabs.map((tabNames, page) => {
                    const isTabActive = this.props.activeTab === page;
                    const renderTab = this.props.renderTab || this.renderTab;
                    return renderTab(tabNames, page, isTabActive, this.props.goToPage);
                })}
                <Animated.View
                    style={[
                        tabUnderlineStyle,
                        {
                            transform: [
                                {translateX},
                            ]
                        },
                        this.props.underlineStyle,
                    ]}
                />
            </View>
        );
    },
});

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#ccc',
    },
});

module.exports = WeiXinTabBar;
