import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import CounterApp from './src/CounterApp'
import TryCatch from './list/lists'



class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
      };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Store"
                    onPress={() => this.props.navigation.openDrawer()}
                />
            </View>
        );
    }
}
class CalculatorScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Calculator',
      };
    render() {
        return (
            <CounterApp/>
        );
    }
}
class ListScreen extends Component{
    static navigationOptions= {
        drawerLabel: 'List'
    }
    render(){
        return(
            <TryCatch/>
        );
    }
}




const Myroute = createDrawerNavigator(
    {
        Home: HomeScreen,
        Calculator: CalculatorScreen,
        List: ListScreen
    },
    {
        initialRouteName: 'Home',
    },
);

const AppContainer = createAppContainer(Myroute);
export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}


