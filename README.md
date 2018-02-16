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

## Properties

#### CardViewWithIcon ( [Show example](#cardviewwithicon))
| Prop | Type | Default | Description | Platform |
|---|---|---|---|---|
|**`icon`**|`string`| bonfire | Card view icon name, icon list : [ionicons](https://ionicframework.com/docs/ionicons/) |iOS,Android|
|**`iconColor`**|`string`| `#FFFFFF` | Icon color - (hex, rgba, rgb) |iOS,Android|
|**`withBorder`**|`boolean`| false | Add a border to icon |iOS,Android|
|**`borderColor`**|`string`| - | Icon border color - (hex, rgba, rgb) |iOS,Android|
|**`borderWidth`**|`number`| - | Icon border width |iOS,Android|
|**`withBackground`**|`boolean`| true | Set background color for icon|iOS,Android|
|**`iconBgColor`**|`string`| `#5E35B1` | Icon background color - (hex, rgba, rgb)|iOS,Android|
|**`title`**|`string`| - | Card view title |iOS,Android|
|**`content`**|`string`| - | Card view content  |iOS,Android|
|**`elevation`**|`number`| 3 | Only for Android shadow value  |Android|
|**`shadowOffsetWidth`**|`number`| 3 | Only for iOS shadow offset width  |iOS|
|**`shadowOffsetHeight`**|`number`| 3 | Only for iOS shadow offset height  |iOS|

## Examples

##### CardViewWithIcon
<p align="center"><img width="200" height="300" src="https://s9.postimg.org/4hla2xvlb/Card_View_With_Icon.png" alt="CardViewWithIcon Example" /></p>

```jsx
<CardViewWithIcon
icon={'jet'}
iconBgColor={'#5E35B1'}
iconColor={'#FFFFFF'}
title={'LOREM IPSUM'}
content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
/>
```

## Roadmap

## Built With

* [React-Native](https://facebook.github.io/react-native/)
* [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
