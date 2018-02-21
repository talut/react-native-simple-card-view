import React, { Component } from 'react'
import { View, Dimensions, Text, Platform, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types'

class CardViewWithImage extends Component {

  render() {
    const container = {
      shadowOffset   : {
        width : Platform.OS === "ios" ? this.props.style.shadowOffsetWidth : 0,
        height: Platform.OS === "ios" ? this.props.style.shadowOffsetWidth : 0,
      },
      backgroundColor: this.props.style.bgColor,
      width          : this.props.style.width,
      padding        : this.props.style.padding,
      margin         : this.props.style.margin,
      borderRadius   : this.props.style.borderRadius,
      shadowColor    : this.props.style.shadowColor,
      shadowOpacity  : this.props.style.shadowOpacity,
      shadowRadius   : this.props.style.shadowRadius,
      elevation      : Platform.OS === "android" ? this.props.style.elevation : 0,
    };
    return (
      <View style={ container }>
        <TouchableOpacity onPress={ this.props.onPress }>
          <Image style={ {
            width : 100,
            height: 100
          } } source={ {uri: 'https://placeimg.com/640/480/animals'} }/>
        </TouchableOpacity>
      </View>
    )
  }
}

CardViewWithImage.defaultProps = {
  style: {
    shadowColor       : '#000000',
    shadowOffsetWidth : 3,
    shadowOffsetHeight: 3,
    shadowOpacity     : 0.3,
    shadowRadius      : 3,
    bgColor           : '#ffffff',
    padding           : 5,
    margin            : 10,
    borderRadius      : 3,
    width             : 300,
    elevation         : 3,
  },
};
CardViewWithImage.propTypes = {
  style: PropTypes.object,
};

export default CardViewWithImage