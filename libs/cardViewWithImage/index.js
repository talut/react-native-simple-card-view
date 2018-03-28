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
      fontFamily   : this.props.titleFontFamily,
      marginTop    : this.props.titleMargin.top,
      marginBottom : this.props.titleMargin.bottom,
      marginRight  : this.props.titleMargin.right,
      marginLeft   : this.props.titleMargin.left,
      paddingTop   : this.props.titlePadding.top,
      paddingBottom: this.props.titlePadding.bottom,
      paddingRight : this.props.titlePadding.right,
      paddingLeft  : this.props.titlePadding.left,
      lineHeight   : this.props.titleLineHeight,
    };

    const contentStyle = {
      alignSelf    : 'center',
      fontWeight   : this.props.contentFontWeight,
      fontSize     : this.props.contentFontSize,
      fontFamily   : this.props.contentFontFamily,
      textAlign    : this.props.contentTextAlign,
      lineHeight   : this.props.contentLineHeight,
      marginTop    : this.props.contentMargin.top,
      marginBottom : this.props.contentMargin.bottom,
      marginRight  : this.props.contentMargin.right,
      marginLeft   : this.props.contentMargin.left,
      paddingTop   : this.props.contentPadding.top,
      paddingBottom: this.props.contentPadding.bottom,
      paddingRight : this.props.contentPadding.right,
      paddingLeft  : this.props.contentPadding.left,
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
  width            : 300,
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
  imageWidth       : 100,
  imageHeight      : 100,

  //TITLE
  titleTextAlign   : 'center',
  titleFontWeight  : 'bold',
  titleFontSize    : 18,
  titleFontFamily  : undefined,
  titlePadding     : {
    top   : 10,
    bottom: 10,
    left  : undefined,
    right : undefined
  },
  titleMargin      : {
    top   : undefined,
    bottom: undefined,
    left  : undefined,
    right : undefined
  },
  // CONTENT
  contentFontWeight: '400',
  contentFontSize  : 13,
  contentFontFamily: undefined,
  contentTextAlign : 'justify',
  contentPadding   : {
    top   : undefined,
    bottom: 10,
    left  : 10,
    right : 10
  },
  contentMargin    : {
    top   : undefined,
    bottom: undefined,
    left  : undefined,
    right : undefined
  },
  contentLineHeight: 18,
};
CardViewWithImage.propTypes = {
  width            : PropTypes.number,
  style            : PropTypes.object,
  // TITLE
  title            : PropTypes.string,
  titleTextAlign   : PropTypes.string,
  titleFontWeight  : PropTypes.string,
  titleFontSize    : PropTypes.number,
  titleFontFamily  : PropTypes.string,
  titlePadding     : PropTypes.object,
  titleMargin      : PropTypes.object,
  titleLineHeight  : PropTypes.number,
  // CONTENT
  content          : PropTypes.string,
  contentFontWeight: PropTypes.string,
  contentFontSize  : PropTypes.number,
  contentFontFamily: PropTypes.string,
  contentTextAlign : PropTypes.string,
  contentPadding   : PropTypes.object,
  contentMargin    : PropTypes.object,
  contentLineHeight: PropTypes.number,
  // Button
  buttonComponent  : PropTypes.object,
  // Image
  imageComponent   : PropTypes.object,
  roundedImage     : PropTypes.bool,
  roundedImageValue: PropTypes.number,
  imageMargin      : PropTypes.object,
  imageWidth       : PropTypes.number,
};

export default CardViewWithImage