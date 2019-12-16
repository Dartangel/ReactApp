import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import ImageCard from '../components/imageCard'

let url = 'http://api.tvmaze.com/search/shows?q='


export default class TryCatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Welcome",
      data: [],
      ssilka: '',

    }
  }
  componentDidMount() {
    this.reguestUrl(url)
  }

  reguestUrl = async (URL) => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      console.log("URL is wrong")
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  createurl = (searchTerm) => {
    const ssilka = url + searchTerm;
    this.setState({ ssilka })
    this.reguestUrl(ssilka)
  }
  render() {
    const { data } = this.state
    return (
      <View style={styles.container} >
        <ScrollView >
          <View style={styles.searchText}>
            <View style={{ backgroundColor: 'black', flex: 4}}>
              <TextInput style={{fontSize:20,height: 60,color:'red' }}
                onChangeText={(term) => { this.searchUpdated(term) }}
              ></TextInput>
            </View>
            <View style={{ backgroundColor: 'black', flex: 2 }}>
              <TouchableOpacity
                onPress={() => this.createurl(this.state.searchTerm)}>
                <Text style={{ fontSize: 30, color: 'green',alignContent: 'center' }}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchResult}>
            {data.map(item => (
              <ImageCard data={item} key={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    )

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },

  searchText: {
    flex: 2,  
    color: 'blue',
    fontSize: 200,
    borderWidth: 1,
    flexDirection: 'row'

  },
  searchResult: {
    flex: 7,

  }


})