# React Native Simple Card View

Easiest way to adding a card view on your screen.

- *Hey, v0.2.0 is now released. You can use new component : CardViewWithImage*

<p align="center"><img src="https://nodei.co/npm/react-native-simple-card-view.png?downloads=true&downloadRank=true&stars=true" alt="package info" /></p>

[![GitHub stars](https://img.shields.io/github/stars/talut/react-native-simple-card-view.svg?style=social&label=Stars&style=flat-square)](https://github.com/talut/react-native-simple-card-view)

## Getting Started

**via Yarn**

```
yarn add react-native-simple-card-view
```

**via NPM**

```
npm install react-native-simple-card-view
```

**React-Native Link**

```
react-native link

```

#### Components

- [x] CardViewWithIcon
- [x] CardViewWithImage
- [ ] CardView (Place your component to inside of CardView)
- [ ] CardViewWithAnimation or Adding animation support to CardViewWithIcon, CardViewWithImage, ArticleCardView

## Attributes

#### Styling card view

You can create an object, who has the card view styles.
Then you can give that object to style props. Card view style object can have the following attributes

| Prop | Type | Default | Description | Platform |
|---|---|---|---|---|
|**`width`**|`number`| 300 | Card view width |iOS,Android|
|**`height`**|`number`| - | Card view height |iOS,Android|
|**`padding`**|`number`| 5 | Card view padding |iOS,Android|
|**`margin`**|`number`| 10 | Card view margin |iOS,Android|
|**`borderRadius`**|`number`| 3 | Card view border radius|iOS,Android|
|**`shadowColor`**|`string`| `'#000000' | Card view shadow color |iOS,Android|
|**`shadowOpacity`**|`number`| 0.3 | Card view shadow opacity |iOS,Android|
|**`shadowRadius`**|`number`| 3 | Card view shadow radius |iOS,Android|
|**`bgColor`**|`string`| `'#ffffff'` | Card view background color |iOS,Android|
|**`elevation`**|`number`| 3 | Only for Android shadow value  |Android|
|**`shadowOffsetWidth`**|`number`| 3 | Only for iOS shadow offset width  |iOS|
|**`shadowOffsetHeight`**|`number`| 3 | Only for iOS shadow offset height  |iOS|

#### CardViewWithIcon ( [Show example](#cardviewwithicon))

This component has a icon, title and content.

<details>
  <summary>Show CardViewWithIcon Attributes</summary>

  | Prop | Type | Default | Description | Platform |
  |---|---|---|---|---|
  |**`iosIcon`**|`string`| ios-bonfire-outline | Card view icon name, icon list : [ionicons](https://ionicframework.com/docs/ionicons/) |iOS|
  |**`androidIcon`**|`string`| md-bonfire | Card view icon name, icon list : [ionicons](https://ionicframework.com/docs/ionicons/) |Android|
  |**`iconColor`**|`string`| `#FFFFFF` | Icon color - (hex, rgba, rgb) |iOS,Android|
  |**`withBorder`**|`boolean`| false | Add a border to icon |iOS,Android|
  |**`roundedIconBg`**|`boolean`| true | For making rounded background  |iOS,Android|
  |**`borderColor`**|`string`| - | Icon border color - (hex, rgba, rgb) |iOS,Android|
  |**`borderWidth`**|`number`| - | Icon border width |iOS,Android|
  |**`withBackground`**|`boolean`| true | Set background color for icon|iOS,Android|
  |**`iconBgColor`**|`string`| `#5E35B1` | Icon background color - (hex, rgba, rgb)|iOS,Android|
  |**`title`**|`string`| - | Card view title |iOS,Android|
  |**`titleTextAlign`**|`string`| center | Card view title text align |iOS,Android|
  |**`titleFontWeight`**|`string`| bold | Card view title font weight |iOS,Android|
  |**`titleFontSize`**|`number`| 14 | Card view title font size |iOS,Android|
  |**`titlePaddingBottom`**|`number`| 10 | Card view title padding bottom|iOS,Android|
  |**`titlePaddingTop`**|`number`| - | Card view title padding top |iOS,Android|
  |**`titlePaddingLeft`**|`number`| - | Card view title padding left |iOS,Android|
  |**`titlePaddingRight`**|`number`| - | Card view title padding right |iOS,Android|
  |**`contentFontWeight`**|`string`| 300 | Card view content font weight  |iOS,Android|
  |**`contentTextAlign`**|`string`| justify | Card view content text align |iOS,Android|
  |**`contentFontSize`**|`number`| 12 | Card view content font size |iOS,Android|
  |**`contentPaddingLeft`**|`number`| 10 | Card view content padding left  |iOS,Android|
  |**`contentPaddingRight`**|`number`| 10 | Card view content padding right  |iOS,Android|
  |**`contentPaddingBottom`**|`number`| 10 | Card view content padding bottom  |iOS,Android|
  |**`contentPaddingTop`**|`number`| - | Card view content padding top props  |iOS,Android|
  |**`onPress`**|`func`| - | onPress function |iOS,Android|

</details>


#### CardViewWithImage ( [Show example](#cardviewwithimage))

This component has an image, title and content. Also image can be rounded, full width.

<details>
  <summary>Show CardViewWithImage Attributes</summary>

  | Prop | Type | Default | Description | Platform |
  |---|---|---|---|---|
  |**`onPress`**|`func`| - | onPress function |iOS,Android|

</details>


## Examples

<details><summary><b>CardViewWithIcon</b></summary>

<p align="center"><img width="300" height="400" src="https://s9.postimg.org/748niqban/card_View_With_Icon.png" alt="CardViewWithIcon Example" /><img width="400" height="700" src="https://i.lensdump.com/i/hQdxa.gif" alt="CardViewWithIcon Example" /></p>

```jsx
import { CardViewWithIcon } from 'react-native-simple-card-view'
```

```jsx
            <CardViewWithIcon
              androidIcon={ 'md-bonfire' }
              iosIcon={ 'ios-bonfire-outline' }
              iconBgColor={ '#b13757' }
              iconColor={ '#FFFFFF' }
              title={ 'LOREM IPSUM' }
              content={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
            />
```

</details>

<details><summary><b>CardViewWithImage</b></summary>

<p align="center">

[![CardViewWithImage Example](https://s9.postimg.org/pxvdia4rj/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png)](https://s9.postimg.org/qxh30azpb/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png)

</p>
```jsx
import { CardViewWithImage } from 'react-native-simple-card-view'
```

```jsx
          <CardViewWithImage
            width={ (Dimensions.get('window').width / 2) - 20 }
            source={ {uri: 'https://placeimg.com/640/480/nature'} }
            content={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!' }
            title={ 'React Nature :D' }
            imageWidth={ '100%' }
            imageHeight={ 100 }
            roundedImage={ false }
          />
          <CardViewWithImage
            width={ (Dimensions.get('window').width / 2) - 20 }
            content={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!' }
            source={ {uri: 'https://placeimg.com/640/480/tech'} }
            title={ 'Hello World!' }
            imageWidth={ 100 }
            imageHeight={ 100 }
            roundedImage={ true }
            roundedImageValue={ 50 }
            imageShadow={ true }
            imageMargin={ {top: 10} }
          />
          <CardViewWithImage
            width={ Dimensions.get('window').width - 20 }
            source={ {uri: 'https://placeimg.com/640/480/people'} }
            content={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in !' }
            title={ 'Hello World!' }
            imageHeight={ 200 }
            roundedImage={ false }
            imageShadow={ true }
          />
```

</details>

## v0.1.3 Features

- Touchable area (onPress) for CardViewWithIcon - done ☑
- Icon shadow for CardViewWithIcon - done ☑

## TODO's

  - CardViewWithImage - in process ♨

## Built With

* [React-Native](https://facebook.github.io/react-native/)
* [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
