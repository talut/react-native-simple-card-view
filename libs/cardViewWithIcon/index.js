import React from 'react';
import { View, Dimensions, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'

class CardViewWithIcon extends React.Component {
  constructor(props) {
    super(props)
  }

  // TODO: 1: Simgeye gölge ekleme ve gölge props ayarları - waiting
  // TODO: 2: Animasyon ekleme - waiting
  // TODO: 5: Touchable area (onPress etc.) ekleme - waiting
  render() {
    const container = {
      shadowColor    : this.props.shadowColor,
      shadowOffset   : {
        width : Platform.OS === "ios" ? this.props.shadowOffsetWidth : 0,
        height: Platform.OS === "ios" ? this.props.shadowOffsetHeight : 0,
      },
      shadowOpacity  : this.props.shadowOpacity,
      shadowRadius   : this.props.shadowRadius,
      backgroundColor: this.props.bgColor,
      padding        : this.props.padding,
      margin         : this.props.margin,
      borderRadius   : this.props.borderRadius,
      width          : this.props.width,
      elevation      : Platform.OS === "android" ? this.props.elevation : 0,
    };
    const icon = {
      margin         : this.props.iconMargin,
      borderWidth    : this.props.iconBorderWidth,
      borderColor    : this.props.iconBgColor,
      borderRadius   : this.props.iconBorderRadius,
      width          : this.props.iconWidth,
      height         : this.props.iconHeight,
      alignSelf      : 'center',
      justifyContent : 'center',
      alignItems     : 'center',
      backgroundColor: this.props.iconBgColor,
    };
    const title = {
      alignSelf    : 'center',
      fontWeight   : this.props.titleFontWeight,
      fontSize     : this.props.titleFontSize,
      paddingBottom: this.props.titlePaddingBottom,
      paddingTop   : this.props.titlePaddingTop,
      paddingLeft  : this.props.titlePaddingLeft,
      paddingRight : this.props.titlePaddingRight,
    };
    const plainText = {
      alignSelf    : 'center',
      fontWeight   : this.props.contentFontWeight,
      fontSize     : this.props.contentFontSize,
      textAlign    : this.props.contentTextAlign,
      paddingLeft  : this.props.contentPaddingLeft,
      paddingRight : this.props.contentPaddingRight,
      paddingBottom: this.props.contentPaddingBottom,
      paddingTop   : this.props.contentPaddingTop,
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
          { this.props.title !== undefined ? <Text style={ title }>{ this.props.title }</Text> : undefined }
          { this.props.content !== undefined ? <Text style={ plainText }>{ this.props.content }</Text> : undefined }
        </View>
      </View>
    );
  }
}

CardViewWithIcon.defaultProps = {
  width               : '100%',
  elevation           : 3,
  padding             : 5,
  margin              : 10,
  borderRadius        : 3,
  shadowColor         : '#000000',
  shadowOpacity       : 0.3,
  shadowRadius        : 3,
  bgColor             : '#ffffff',
  shadowOffsetWidth   : 3,
  shadowOffsetHeight  : 3,
  // ICON
  icon                : 'ios-bonfire-outline',
  iconBgColor         : '#3949AB',
  iconColor           : '#ffffff',
  iconSize            : 40,
  iconMargin          : 15,
  iconWidth           : 80,
  iconHeight          : 80,
  iconBorderRadius    : 40,
  iconBorderWidth     : 0.5,
  //TITLE
  titleTextAlign      : 'center',
  titleFontWeight     : 'bold',
  titleFontSize       : 14,
  titlePaddingBottom  : 10,
  titlePaddingTop     : 0,
  titlePaddingLeft    : 0,
  titlePaddingRight   : 0,
  // CONTENT
  contentFontWeight   : '300',
  contentFontSize     : 12,
  contentTextAlign    : 'center',
  contentPaddingLeft  : 10,
  contentPaddingRight : 10,
  contentPaddingBottom: 10,
  contentPaddingTop   : 0,
};
CardViewWithIcon.propTypes = {
  width               : PropTypes.number,
  elevation           : PropTypes.number,
  padding             : PropTypes.number,
  margin              : PropTypes.number,
  borderRadius        : PropTypes.number,
  shadowColor         : PropTypes.string,
  shadowOpacity       : PropTypes.number,
  shadowRadius        : PropTypes.number,
  shadowOffsetWidth   : PropTypes.number,
  shadowOffsetHeight  : PropTypes.number,
  bgColor             : PropTypes.string,
  // ICON
  icon                : PropTypes.string,
  iconBgColor         : PropTypes.string,
  iconColor           : PropTypes.string,
  iconSize            : PropTypes.number,
  iconMargin          : PropTypes.number,
  iconWidth           : PropTypes.number,
  iconHeight          : PropTypes.number,
  iconBorderRadius    : PropTypes.number,
  iconBorderWidth     : PropTypes.number,
  // TITLE
  title               : PropTypes.string,
  titleTextAlign      : PropTypes.string,
  titleFontWeight     : PropTypes.string,
  titleFontSize       : PropTypes.number,
  titlePaddingBottom  : PropTypes.number,
  titlePaddingTop     : PropTypes.number,
  titlePaddingLeft    : PropTypes.number,
  titlePaddingRight   : PropTypes.number,
  // CONTENT
  content             : PropTypes.string,
  contentFontWeight   : PropTypes.string,
  contentFontSize     : PropTypes.number,
  contentTextAlign    : PropTypes.string,
  contentPaddingLeft  : PropTypes.number,
  contentPaddingRight : PropTypes.number,
  contentPaddingBottom: PropTypes.number,
  contentPaddingTop   : PropTypes.number,
};

export default CardViewWithIcon