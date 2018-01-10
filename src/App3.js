import React, {Component} from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    DrawerLayoutAndroid,
    ProgressBarAndroid,
    ActivityIndicator,
    ScrollView,
    TouchableHighlight,
    TextInput,
    Button,
    ToastAndroid,
    ToolbarAndroid,
    Alert,BackAndroid,StatusBar
} from 'react-native';
import MoveList from './App'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
const WAWA_URL = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510299899&di=e8ce788603566b30d7561eb1850f71b6&imgtype=jpg&er=1&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201411%2F29%2F152218sdtngtzcvffdih5g.jpg';

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            position: 'unknown',
            time: new Date(),
            text: 'fuck you'
        };
    }
    componentDidMount() {
        // this.fetchData();
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        )
    }


    render() {
        let movie = this.state.movies;
        let time = this.state.time;
        let navigationView = function () {
            return (<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!
                <Text style={styles.title}>
                    now It's: {time.toLocaleTimeString()}
                </Text>
            </Text>)
        }
        return (
            <View style={{flex: 1}}>

                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={navigationView}>
                    <Text style={{fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{fontSize: 15, textAlign: 'right'}}>World!</Text>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}>
                        <Text style={styles.title}>
                            Position: {this.state.time.toLocaleTimeString()}
                        </Text>
                    </View>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</Text>
                </DrawerLayoutAndroid>
            </View>
        )

    }
}

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.onActionSelected=this.onActionSelected.bind(this)
    }

    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
        }
    }

    handleView() {
        ToastAndroid.show('点击我好疼,长时间的~', ToastAndroid.SHORT)
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigate('Profile', {name: 'Jane'})
                    }
                />
                <Button
                    title="Gasdfasfo"
                    onPress={()=>Alert.alert('I am the most beautiful women in the world')}
                />
                <Image
                    style={styles.bbb}
                    source={{uri: WAWA_URL}}
                    // onPress={this.handleView.bind(this)}
                />
                <Image
                    source={require('./img/good.jpg')}
                    style={styles.ccc}
                    // onPress={this.handleView.bind(this)}
                />
                <Button
                    title="Go to Movie List"
                    onPress={() =>
                        navigate('MovieList')
                    }
                />
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    bbb: {
        width: 400,
        height: 400,
        //backgroundColor: 'red'
    },
    ccc: {
        width: 400,
        height: 400,
        //backgroundColor: 'red'
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    row: {flexDirection: 'row', margin: 40},
    image: {width: 40, height: 40, marginRight: 10},
    text: {flex: 1, justifyContent: 'center'},
    subtitle: {fontSize: 10},
});

const App = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
    MovieList:{screen:MoveList}
},{
    initialRouteName: 'Main', // 默认显示界面
    //导航栏相关设置项
    header:{
    	    //导航栏可见
            visible : false,
            //左上角的返回键文字, 默认是上一个页面的title
            backTitle : "返回",
            //导航栏的style
            headerStyle: {
                backgroundColor: 'red'
            },
            //导航栏的title的style
            titleStyle: {
                color: 'green'
            }
    },
    // title : 'home',
    // //导航栏的style
    //  headerStyle: {
    //             backgroundColor: 'red'
    //  },
    //         //导航栏的title的style
    //  headerTitleStyle: {
    //          color: 'blue',
    //          //居中显示
    //          alignSelf : 'center',
    //      },
    //
    // //是否允许右滑返回，在iOS上默认为true，在Android上默认为false
    // cardStack: {
    //         gesturesEnabled: true,
    // },
    onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); },  // 回调
});
class Wrap extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this)
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack)
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack)
    }

    handleBack() {
        // if (navigator && navigator.getCurrentRoutes().length < 1) {
        //     navigator.pop();
        //     return true
        // }
        // return false
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='transparent'
                    barStyle='light-content'
                    translucent />
                <App/>
            </View>
        )
    }
}


export default Wrap
