
import React, {Component} from 'react';
import {Button} from 'antd-mobile';
// import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import Test from './compenent/dawer'
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
    TextInput
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            position:'unknown',
            time:new Date(),
            text:'fuck you'
        };
    }

    componentDidMount() {
        this.fetchData();
        // navigator.geolocation.getCurrentPosition(
        //     (position) => this.setState({position}),
        //     (error) => console.error(error)
        // );
        setInterval(()=>{
            this.setState({
                time:new Date()
            })
        },1000)
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

    renderListView(movies) {
        return (
            movies.map(function (movie, index) {
                return <View style={styles.container} key={index}>
                    <Image
                        source={{uri: movie.posters.thumbnail}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                    </View>
                </View>
            })
        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                    <Text style={styles.year}>123</Text>
                </View>
            </View>
        )
    }

    render() {
        let movie = this.state.movies;
        if (!this.state.loaded) {
            return this.renderLoadingView()
        } else {
            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie.bind(this)}
                    style={styles.listView}
                />
            )
            // return (
            //     <DrawerLayoutAndroid
            //         renderNavigationView={() => <Text>React Native</Text>}>
            //         <ActivityIndicator />
            //         <Text>what happend</Text>
            //     </DrawerLayoutAndroid>
            // );
            // return (
            //     <View style={styles.row}>
            //         <View style={styles.text}>
            //             <Text style={styles.title}>
            //                 React Native
            //             </Text>
            //             <Text style={styles.subtitle}>
            //                 Build high quality mobile apps using React plus
            //             </Text>
            //             <Text style={styles.title}>
            //                 Position: {this.state.time.toLocaleTimeString()}
            //             </Text>
            //         </View>
            //     </View>
            // )
            // return (
            //     <View style={{flex: 1}}>
            //         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
            //         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
            //         <View style={{flex: 3, backgroundColor: 'steelblue'}}>
            //             <Text style={styles.title}>
            //                  Position: {this.state.time.toLocaleTimeString()}
            //             </Text>
            //         </View>
            //         <TextInput
            //             style={{height: 40}}
            //             placeholder="Type here to translate!"
            //             onChangeText={(text) => this.setState({text})}
            //         />
            //         <Text>{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}</Text>
            //     </View>
            // )
        }

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
        width: 100,
        height: 100,
    },
    row: { flexDirection: 'row', margin: 40 },
    image: { width: 40, height: 40, marginRight: 10 },
    text: { flex: 1, justifyContent: 'center'},
    subtitle: { fontSize: 10 },
});
