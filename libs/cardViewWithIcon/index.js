import React from 'react';
import { View, Dimensions, Text, Platform, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'

class CardViewWithIcon extends React.Component {
  constructor(props) {
    super(props)
  }

  // TODO : Add shadow properties to icon - in process ♨

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
    const icon = {
      margin         : this.props.iconMargin,
      borderWidth    : this.props.withBorder ? this.props.iconBorderWidth : undefined,
      borderColor    : this.props.withBorder ? this.props.iconBgColor : undefined,
      borderRadius   : this.props.roundedIconBg ? this.props.iconBorderRadius : undefined,
      width          : this.props.iconWidth,
      height         : this.props.iconHeight,
      alignSelf      : 'center',
      justifyContent : 'center',
      alignItems     : 'center',
      backgroundColor: this.props.withBackground ? this.props.iconBgColor : undefined,
    };
    const title = {
      alignSelf    : 'center',
      fontWeight   : this.props.titleFontWeight,
      fontSize     : this.props.titleFontSize,
      fontFamily   : this.props.titleFontFamily,
      paddingBottom: this.props.titlePaddingBottom,
      paddingTop   : this.props.titlePaddingTop,
      paddingLeft  : this.props.titlePaddingLeft,
      paddingRight : this.props.titlePaddingRight,
    };
    const plainText = {
      alignSelf    : 'center',
      fontWeight   : this.props.contentFontWeight,
      fontSize     : this.props.contentFontSize,
      fontFamily   : this.props.contentFontFamily,
      textAlign    : this.props.contentTextAlign,
      paddingLeft  : this.props.contentPaddingLeft,
      paddingRight : this.props.contentPaddingRight,
      paddingBottom: this.props.contentPaddingBottom,
      paddingTop   : this.props.contentPaddingTop,
    };

    const cardContent = <View>
      <View style={ icon }>
        <Icon
          style={ {textAlign: 'center'} }
          name={ Platform.OS === "android" ? this.props.androidIcon : this.props.iosIcon }
          size={ this.props.iconSize }
          color={ this.props.iconColor }
        />
      </View>
      { this.props.title !== undefined ? <Text style={ title }>{ this.props.title }</Text> : undefined }
      { this.props.content !== undefined ? <Text style={ plainText }>{ this.props.content }</Text> : undefined }
    </View>;

    if (this.props.onPress !== undefined) {
      return (
        <View style={ container }>
          <TouchableOpacity onPress={ this.props.onPress }>
            { cardContent }
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={ container }>
          { cardContent }
        </View>
      );
    }

  }
}


CardViewWithIcon.defaultProps = {
  style               : {
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
  // ICON
  iosIcon             : 'ios-bonfire-outline',
  androidIcon         : 'md-bonfire',
  iconBgColor         : '#b13757',
  iconColor           : '#ffffff',
  roundedIconBg       : true,
  iconSize            : 40,
  iconMargin          : 15,
  iconWidth           : 80,
  iconHeight          : 80,
  iconBorderRadius    : 40,
  iconBorderWidth     : 0.5,
  withBackground      : true,
  withBorder          : false,
  //TITLE
  titleTextAlign      : 'center',
  titleFontWeight     : 'bold',
  titleFontSize       : 14,
  titleFontFamily     : undefined,
  titlePaddingBottom  : 10,
  titlePaddingTop     : 0,
  titlePaddingLeft    : 0,
  titlePaddingRight   : 0,
  // CONTENT
  contentFontWeight   : '300',
  contentFontSize     : 12,
  contentFontFamily   : undefined,
  contentTextAlign    : 'center',
  contentPaddingLeft  : 10,
  contentPaddingRight : 10,
  contentPaddingBottom: 10,
  contentPaddingTop   : 0,
};
CardViewWithIcon.propTypes = {
  onPress             : PropTypes.func,
  style               : PropTypes.object,
  width               : PropTypes.number,
  height              : PropTypes.number,
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
  iosIcon             : PropTypes.string,
  androidIcon         : PropTypes.string,
  iconBgColor         : PropTypes.string,
  iconColor           : PropTypes.string,
  iconSize            : PropTypes.number,
  iconMargin          : PropTypes.number,
  iconWidth           : PropTypes.number,
  iconHeight          : PropTypes.number,
  iconBorderRadius    : PropTypes.number,
  iconBorderWidth     : PropTypes.number,
  withBackground      : PropTypes.bool,
  withBorder          : PropTypes.bool,
  roundedIconBg       : PropTypes.bool,
  // TITLE
  title               : PropTypes.string,
  titleTextAlign      : PropTypes.string,
  titleFontWeight     : PropTypes.string,
  titleFontSize       : PropTypes.number,
  titleFontFamily     : PropTypes.string,
  titlePaddingBottom  : PropTypes.number,
  titlePaddingTop     : PropTypes.number,
  titlePaddingLeft    : PropTypes.number,
  titlePaddingRight   : PropTypes.number,
  // CONTENT
  content             : PropTypes.string,
  contentFontWeight   : PropTypes.string,
  contentFontSize     : PropTypes.number,
  contentFontFamily   : PropTypes.string,
  contentTextAlign    : PropTypes.string,
  contentPaddingLeft  : PropTypes.number,
  contentPaddingRight : PropTypes.number,
  contentPaddingBottom: PropTypes.number,
  contentPaddingTop   : PropTypes.number,
};

export default CardViewWithIcon