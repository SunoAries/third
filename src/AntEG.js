import { Tabs, WhiteSpace, Badge, WingBlank, Button} from 'antd-mobile';

import React, {Component} from 'react';
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
    Vibration,
    Alert
} from 'react-native';

const PlaceHolder = props => (
    <Text
        style={{
            backgroundColor: '#ebebef',
            color: '#bbb',
            textAlign: 'center',
            height: 30,
            lineHeight: 30,
            width: '100%',
        }}
        {...props}
    >Block</Text>
);

const WingBlankExample = () => (
    <ScrollView>
        <WingBlank><Button>default</Button><WhiteSpace />
            <Button disabled>default disabled</Button><WhiteSpace />

            <Button type="primary" onClick={()=>Vibration.vibrate()}>primary</Button><WhiteSpace />
            <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

            <Button type="warning" onClick={()=>Alert.alert('are you ok?')}>warning</Button><WhiteSpace />
            <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

            <Button loading>loading button</Button><WhiteSpace />

             <Button activeStyle={false}>无点击反馈</Button><WhiteSpace />
             <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace />

            <WhiteSpace />
            <Button type="primary" inline style={{ marginRight: 4 }}>inline primary</Button>
            {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
            <Button type="ghost" inline style={{ marginRight: 4 }} className="am-button-borderfix">inline ghost</Button>

            <WhiteSpace />
            <Button type="primary" inline size="small" style={{ marginRight: 4 }}>primary</Button>
            <Button type="primary" inline size="small" disabled>primary disabled</Button>
            <WhiteSpace />
            <Button type="ghost" inline size="small" style={{ marginRight: 4}}>ghost</Button>
            {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
            <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>ghost disabled</Button></WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="md"><PlaceHolder /></WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="sm"><PlaceHolder /></WingBlank>
    </ScrollView>
);
export default WingBlankExample