import React, { Component } from 'react'
import { View, Dimensions, Text, Platform, TouchableOpacity, Image, Button } from 'react-native';
import PropTypes from 'prop-types'

class CardViewWithImage extends Component {

  // TODO: button olayını geliştir
  render() {
    const container = {
      overflow    : 'hidden',
      borderRadius: this.props.style.borderRadius,
    };
    const titleStyle = {
      alignSelf    : 'center',
      fontWeight   : this.props.titleFontWeight,
      fontSize     : this.props.titleFontSize,
      paddingBottom: this.props.titlePaddingBottom,
      paddingTop   : this.props.titlePaddingTop,
      paddingLeft  : this.props.titlePaddingLeft,
      paddingRight : this.props.titlePaddingRight,
    };

    const contentStyle = {
      alignSelf    : 'center',
      fontWeight   : this.props.contentFontWeight,
      fontSize     : this.props.contentFontSize,
      textAlign    : this.props.contentTextAlign,
      paddingLeft  : this.props.contentPaddingLeft,
      paddingRight : this.props.contentPaddingRight,
      paddingBottom: this.props.contentPaddingBottom,
      paddingTop   : this.props.contentPaddingTop,
      lineHeight   : this.props.contentLineHeight,
    };
    const content = <View style={ container }>
      { this.props.imageComponent === undefined ? <Image
        resizeMode={ 'cover' }
        style={ {
          width       : this.props.imageWidth,
          height      : this.props.imageHeight,
          borderRadius: this.props.roundedImage ? this.props.roundedImageValue : undefined,
          alignSelf   : 'center',
          marginTop   : this.props.imageMargin.top,
          marginBottom: this.props.imageMargin.bottom,
          marginRight : this.props.imageMargin.right,
          marginLeft  : this.props.imageMargin.left,
        } }
        source={ this.props.source }
      /> : this.props.imageComponent }
      { this.props.title !== undefined ? <Text style={ titleStyle }>{ this.props.title }</Text> : undefined }
      { this.props.content !== undefined ? <Text style={ contentStyle }>{ this.props.content }</Text> : undefined }
      { this.props.buttonComponent }
    </View>;

    return (
      <View style={ {
        margin         : this.props.style.margin,
        width          : this.props.width,
        height         : this.props.style.height,
        padding        : this.props.style.padding,
        shadowOffset   : {
          width : Platform.OS === "ios" ? this.props.style.shadowOffsetWidth : 0,
          height: Platform.OS === "ios" ? this.props.style.shadowOffsetWidth : 0,
        },
        backgroundColor: this.props.style.bgColor,
        shadowColor    : this.props.style.shadowColor,
        shadowOpacity  : this.props.style.shadowOpacity,
        shadowRadius   : this.props.style.shadowRadius,
        elevation      : Platform.OS === "android" ? this.props.style.elevation : 0,
        borderRadius   : this.props.style.borderRadius,
      } }>
        { this.props.onPress !== undefined ?
          <TouchableOpacity onPress={ this.props.onPress }>{ content }</TouchableOpacity> : content }
      </View>
    )
  }
}

CardViewWithImage.defaultProps = {
  style            : {
    shadowColor       : '#000000',
    shadowOffsetWidth : 3,
    shadowOffsetHeight: 3,
    shadowOpacity     : 0.1,
    shadowRadius      : 3,
    bgColor           : '#ffffff',
    borderRadius      : 3,
    elevation         : 3,
    margin            : 10
  },
  roundedImage     : true,
  roundedImageValue: 50,
  imageMargin      : {
    top   : undefined,
    bottom: undefined,
    left  : undefined,
    right : undefined
  },
  imageWidth       : '100%',

  //TITLE
  titleTextAlign      : 'center',
  titleFontWeight     : 'bold',
  titleFontSize       : 18,
  titlePaddingBottom  : 10,
  titlePaddingTop     : 10,
  titlePaddingLeft    : 0,
  titlePaddingRight   : 0,
  // CONTENT
  contentFontWeight   : '400',
  contentFontSize     : 13,
  contentTextAlign    : 'justify',
  contentPaddingLeft  : 10,
  contentPaddingRight : 10,
  contentPaddingBottom: 10,
  contentPaddingTop   : 0,
  contentLineHeight   : 18,
};
CardViewWithImage.propTypes = {
  style               : PropTypes.object,
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
  contentLineHeight   : PropTypes.number,
  // Button
  buttonComponent     : PropTypes.object,
  // Image
  imageComponent      : PropTypes.object,
  roundedImage        : PropTypes.bool,
  roundedImageValue   : PropTypes.number,
  imageShadow         : PropTypes.bool,
  imageMargin         : PropTypes.object
};

export default CardViewWithImage