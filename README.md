# reactNativeTest

------------------------------------------------------------------------------------------------------------------------

## react-native demo

------------------------------------------------------------------------------------------------------------------------

## 1、安装插件： 

执行： 

    npm install

------------------------------------------------------------------------------------------------------------------------

## 2、底部Tabs导航栏：

执行：

    npm install react-native-scrollable-tab-view --save

具体文件请看： WeiXinTabBar.js

------------------------------------------------------------------------------------------------------------------------

## 3、第三方字体图标库：

执行： 

    npm install react-native-vector-icons --save

------------------------------------------------------------------------------------------------------------------------

## 当出现如下错误：

    ERROR  A non-recoverable condition has triggered.  Watchman needs your help!
    The triggering condition was at timestamp=1453555797: inotify-add-watch(/home/yottanami/src/chikare/node_modules/react-native/node_modules/babel-plugin-syntax-async-functions/node_modules/babel-runtime/node_modules/core-js/library/es6) -> The user limit on the total number of inotify watches was reached; increase the fs.inotify.max_user_watches sysctl
    All requests will continue to fail with this message until you resolve
    the underlying problem.  You will find more information on fixing this at
    https://facebook.github.io/watchman/docs/troubleshooting.html#poison-inotify-add-watch

	{"watchmanResponse":{"version":"4.1.0","error":"A non-recoverable condition has triggered.  Watchman needs your help!\nThe triggering condition was at timestamp=1453555797: inotify-add-watch(/home/yottanami/src/chikare/node_modules/react-native/node_modules/babel-plugin-syntax-async-functions/node_modules/babel-runtime/node_modules/core-js/library/es6) -> The user limit on the total number of inotify watches was reached; increase the fs.inotify.max_user_watches sysctl\nAll requests will continue to fail with this message until you resolve\nthe underlying problem.  You will find more information on fixing this at\nhttps://facebook.github.io/watchman/docs/troubleshooting.html#poison-inotify-add-watch\n"}}
	Error: A non-recoverable condition has triggered.  Watchman needs your help!
	The triggering condition was at timestamp=1453555797: inotify-add-watch(/home/yottanami/src/chikare/node_modules/react-native/node_modules/babel-plugin-syntax-async-functions/node_modules/babel-runtime/node_modules/core-js/library/es6) -> The user limit on the total number of inotify watches was reached; increase the fs.inotify.max_user_watches sysctl
	All requests will continue to fail with this message until you resolve
	the underlying problem.  You will find more information on fixing this at
	https://facebook.github.io/watchman/docs/troubleshooting.html#poison-inotify-add-watch
	
执行如下命令：

    echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches && echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_instances && watchman shutdown-server
    
------------------------------------------------------------------------------------------------------------------------

## 生成离线的jsbundle文件：(可解决部分红屏报错问题)

执行：

    react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

------------------------------------------------------------------------------------------------------------------------

## ReactCurrentOwner of undefined

运行react-native start：移动端红屏显示 cannot read property ReactCurrentOwner of undefined

package.json  文件中  -->  dependencies { react版本至少为：16.0.0-alpha.12 }

重新执行命令：

    npm install react --save

------------------------------------------------------------------------------------------------------------------------

## 本地代码调试

1、手机摇一摇 --> Dev Settings --> Debug server host & port for device --> 本机IP:8081

2、电脑打开终端，输入： sudo ufw allow 8081

3、项目根目录下终端中输入：react-native start

4、重新打开应用

5、谷歌浏览器中输入：http://localhost:8081/debugger-ui --> 即可调试程序源码

------------------------------------------------------------------------------------------------------------------------

