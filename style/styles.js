
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({

container: {
    flex: 1
},

resultText: {
    fontSize: 50,
    alignItems: 'flex-end',
    color: 'white'
},


row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
},

result: {
    flex: 2,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'flex-end'
},

calculation: {
    flex: 1,
    backgroundColor: 'grey'
},

buttons: {
    flex: 7,
    flexDirection: 'row'
},

numbers: {
    flex: 3,
    backgroundColor: 'black'
},

operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red'
},



}
)