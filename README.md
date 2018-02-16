# React Native Simple Card View

Easiest way to add a card view on your screen.

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
react-native link react-native-simple-card-view
```

#### Components

- [x] CardViewWithIcon
- [ ] CardViewWithImage
- [ ] ArticleCardView
- [ ] CardViewWithAnimation

## Attributes

#### Common Attributes
| Prop | Type | Default | Description | Platform |
|---|---|---|---|---|
|**`width`**|`300`| auto | Card view width |iOS,Android|
|**`height`**|`number`| auto | Card view height |iOS,Android|
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
| Prop | Type | Default | Description | Platform |
|---|---|---|---|---|
|**`iosIcon`**|`string`| ios-bonfire-outline | Card view icon name, icon list : [ionicons](https://ionicframework.com/docs/ionicons/) |iOS|
|**`androidIcon`**|`string`| md-bonfire | Card view icon name, icon list : [ionicons](https://ionicframework.com/docs/ionicons/) |Android|
|**`iconColor`**|`string`| `#FFFFFF` | Icon color - (hex, rgba, rgb) |iOS,Android|
|**`withBorder`**|`boolean`| false | Add a border to icon |iOS,Android|
|**`borderColor`**|`string`| - | Icon border color - (hex, rgba, rgb) |iOS,Android|
|**`borderWidth`**|`number`| - | Icon border width |iOS,Android|
|**`withBackground`**|`boolean`| true | Set background color for icon|iOS,Android|
|**`iconBgColor`**|`string`| `#5E35B1` | Icon background color - (hex, rgba, rgb)|iOS,Android|
|**`title`**|`string`| - | Card view title |iOS,Android|
|**`content`**|`string`| - | Card view content  |iOS,Android|

## Examples

##### CardViewWithIcon
<p align="center"><img width="200" height="300" src="https://s9.postimg.org/4hla2xvlb/Card_View_With_Icon.png" alt="CardViewWithIcon Example" /></p>

```jsx
            <CardViewWithIcon
              icon={ 'md-bonfire' }
              iconBgColor={ '#5E35B1' }
              iconColor={ '#FFFFFF' }
              title={ 'LOREM IPSUM' }
              width={ Dimensions.get("window").width / 2 }
              content={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
            />
```

## Roadmap

## Built With

* [React-Native](https://facebook.github.io/react-native/)
* [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
