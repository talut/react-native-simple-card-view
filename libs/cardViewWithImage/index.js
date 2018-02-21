import React, { Component } from 'react'
import { View, Dimensions, Text, Platform, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'

class CardViewWithImage extends Component {

  render() {
    return (
      <View>
        <Text>CardViewWithImage</Text>
      </View>
    )
  }
}

CardViewWithImage.defaultProps = {};
CardViewWithImage.propTypes = {
  style: PropTypes.object,
};

export default CardViewWithImage