import React from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'

export default class DYSCardView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const container = {
      shadowColor    : this.props.shadowColor,
      shadowOffset   : {width: this.props.elevation, height: this.props.elevation},
      shadowOpacity  : this.props.shadowOpacity,
      shadowRadius   : this.props.shadowRadius,
      backgroundColor: this.props.bgColor,
      padding        : this.props.padding,
      margin         : this.props.margin,
      borderRadius   : this.props.borderRadius,
    };
    return (
      <View style={ {backgroundColor: '#F5F5F5', paddingTop: 100, height: Dimensions.get('window').height} }>
        <View style={ container }>
          <Icon name="ios-heart" size={ 30 } color="#900"/>
        </View>
      </View>
    );
  }
}
DYSCardView.defaultProps = {
  elevation    : 3,
  padding      : 5,
  margin       : 10,
  borderRadius : 3,
  shadowColor  : '#333',
  shadowOpacity: 0.3,
  shadowRadius : 3,
  bgColor      : '#ffffff'
};

DYSCardView.propTypes = {
  elevation    : PropTypes.number,
  padding      : PropTypes.number,
  margin       : PropTypes.number,
  borderRadius : PropTypes.number,
  shadowColor  : PropTypes.string,
  shadowOpacity: PropTypes.number,
  shadowRadius : PropTypes.number,
  bgColor      : PropTypes.string
};

