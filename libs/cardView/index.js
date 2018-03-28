import React from 'react';
import { Dimensions, Platform, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

class CardView extends React.Component {
  constructor(props) {
    super(props)
  }

  // TODO : Add shadow properties to icon - in process ♨

  render() {
    const container = {
      shadowOffset : {
        width : Platform.OS === "ios" ? this.props.style.shadowOffsetWidth : 0,
        height: Platform.OS === "ios" ? this.props.style.shadowOffsetWidth : 0,
      },
      width        : this.props.style.width,
      margin       : this.props.style.margin,
      shadowColor  : this.props.style.shadowColor,
      shadowOpacity: this.props.style.shadowOpacity,
      shadowRadius : this.props.style.shadowRadius,
      elevation    : Platform.OS === "android" ? this.props.elevation : undefined,
    };

    return (
      <View style={ container }>
        <View style={ {
          backgroundColor: this.props.style.bgColor,
          overflow       : 'hidden',
          padding        : this.props.style.padding,
          width          : this.props.style.width,
          borderRadius   : this.props.borderRadius,
        } }>
          <TouchableOpacity onPress={ this.props.onPress }>
            { this.props.children }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


CardView.defaultProps = {
  style: {
    shadowColor       : '#000000',
    shadowOffsetWidth : 3,
    shadowOffsetHeight: 3,
    shadowOpacity     : 0.1,
    shadowRadius      : 3,
    bgColor           : '#ffffff',
    padding           : 5,
    margin            : 10,
    borderRadius      : 3,
    width             : 300,
    elevation         : 3,
  },
};
CardView.propTypes = {
  style       : PropTypes.object,
  onPress     : PropTypes.func,
};

export default CardView