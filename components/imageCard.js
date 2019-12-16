import React from 'react'
import { Dimensions, Image, View, Text, StyleSheet } from 'react-native'

const size=Dimensions.get('window')
const w=size.width
const h=size.height

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10,

  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'black',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
    
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  }
})

const ImageCard = ({ data }) => {
  const { container, sub, h1, cover } = styles
  const image = data.show.image.medium
  const name = data.show.name
  console.log(data.show)
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{ uri:image }} />
      </View>
      <Text style={h1}>{name}</Text>
    </View>
  )
}

export default ImageCard