# React Native Simple Card View

Easiest way to adding a card view on your screen.

- *Hey, v0.2.0 is now released. You can use new component : CardViewWithImage*

<p align="center"><a href="https://www.npmjs.com/package/react-native-simple-card-view" target="_blank"><img src="https://nodei.co/npm/react-native-simple-card-view.png?downloads=true&downloadRank=true&stars=true" alt="package info" /></a></p>

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

#### CardViewWithIcon

[Go to the CardViewWithIcon documentation and examples](/docs/cardviewwithicon.md)

#### CardViewWithImage

[Go to the CardViewWithImage documentation and examples](/docs/cardviewwithimage.md)

## v0.2.0 Features

- CardViewWithImage component added
- Some unnecessary codes deleted

## Built With

* [React-Native](https://facebook.github.io/react-native/)
* [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
