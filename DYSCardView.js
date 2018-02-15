import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'

class DYSCardViewWithIcon extends React.Component {
  constructor(props) {
    super(props)
  }

  // TODO: 1: Simgeye gölge ekleme ve gölge props ayarları - waiting
  // TODO: 2: Animasyon ekleme - waiting
  // TODO: 3: Simgeye border ekleme - done ✓
  // TODO: 4: Boyut ayarları  - done ✓
  // TODO: 5: Touchable area (onPress etc.) ekleme - in process

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
      width          : (Dimensions.get('window').width / 2) - 20
    };
    const icon = {
      margin         : 15,
      borderWidth    : 0.5,
      borderColor    : this.props.iconBgColor,
      borderRadius   : 40,
      width          : 80,
      height         : 80,
      alignSelf      : 'center',
      justifyContent : 'center',
      alignItems     : 'center',
      backgroundColor: this.props.iconBgColor,
    };
    const title = {
      alignSelf   : 'center',
      fontWeight  : 'bold',
      marginBottom: 10
    };
    const plainText = {
      alignSelf   : 'center',
      marginBottom: 10,
      fontWeight  : '300',
      textAlign   : 'justify',
      paddingLeft : 10,
      paddingRight: 10,
    };

    return (
      <View style={ {
        backgroundColor: '#F5F5F5',
        paddingTop     : 40,
        height         : Dimensions.get('window').height,
        flex           : 1,
        flexDirection  : 'row',
        justifyContent : 'space-between',
        alignItems     : 'flex-start',
        alignContent   : 'flex-start',
        flexWrap       : 'wrap'
      } }>
        <View style={ container }>
          <View style={ icon }>
            <Icon
              style={ {
                textAlign: 'center',
              } }
              name={ this.props.icon }
              size={ this.props.iconSize }
              color={ this.props.iconColor }
            />
          </View>
          <Text style={ title }>LOREM IPSUM</Text>
          <Text style={ plainText }>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque fugiat
            fugit placeat repellendus.
          </Text>
        </View>
      </View>
    );
  }
}

DYSCardViewWithIcon.defaultProps = {
  elevation    : 3,
  padding      : 5,
  margin       : 10,
  borderRadius : 3,
  shadowColor  : '#000000',
  shadowOpacity: 0.15,
  shadowRadius : 3,
  bgColor      : '#ffffff',
  // ICON
  icon         : 'ios-bonfire-outline',
  iconBgColor  : '#3949AB',
  iconColor    : '#ffffff',
  iconSize     : 40
};

DYSCardViewWithIcon.propTypes = {
  elevation    : PropTypes.number,
  padding      : PropTypes.number,
  margin       : PropTypes.number,
  borderRadius : PropTypes.number,
  shadowColor  : PropTypes.string,
  shadowOpacity: PropTypes.number,
  shadowRadius : PropTypes.number,
  bgColor      : PropTypes.string,
  // ICON
  icon         : PropTypes.string,
  iconBgColor  : PropTypes.string,
  iconColor    : PropTypes.string,
  iconSize     : PropTypes.number
};

export {
  DYSCardViewWithIcon
}