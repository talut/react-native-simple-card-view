# React Native Simple Card View

Easiest way to adding a card view on your screen.

- *Hey, v0.3.0 is now released. You can use new component : CardView [See v0.3.0 Features](#v030-features)*

<p align="center">
<a href="https://s9.postimg.org/qxh30azpb/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png">
<img src="https://s9.postimg.org/pxvdia4rj/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png" alt="CardViewWithImage Example" />
</a>
<img src="https://s9.postimg.org/748niqban/card_View_With_Icon.png" alt="CardViewWithImage" />
</p>

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

- [x] CardViewWithIcon ([See documentation of usage](/docs/en/cardviewwithicon.md))
- [x] CardViewWithImage ([See documentation of usage](/docs/en/cardviewwithimage.md))
- [x] CardView (Place your component to inside of CardView)
- [ ] CardViewWithAnimation or Adding animation support to CardViewWithIcon, CardViewWithImage, ArticleCardView

## Styling card view

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
|**`shadowOpacity`**|`number`| 0.3 | Card vie`w shadow opacity |iOS,Android|
|**`shadowRadius`**|`number`| 3 | Card view shadow radius |iOS,Android|
|**`bgColor`**|`string`| `'#ffffff'` | Card view background color |iOS,Android|
|**`elevation`**|`number`| 3 | Only for Android shadow value  |Android|
|**`shadowOffsetWidth`**|`number`| 3 |  Shadow offset width only for iOS |iOS|
|**`shadowOffsetHeight`**|`number`| 3 | Shadow offset height only for iOS  |iOS|

## Components & Examples

#### CardView

[![English](https://img.shields.io/badge/EN-English-blue.svg)](/docs/en/cardview.md)
[![Turkish](https://img.shields.io/badge/TR-T%C3%BCrk%C3%A7e-red.svg)](/docs/tr/cardview.md)

#### CardViewWithIcon

[![English](https://img.shields.io/badge/EN-English-blue.svg)](/docs/en/cardviewwithicon.md)  [![Turkish](https://img.shields.io/badge/TR-T%C3%BCrk%C3%A7e-red.svg)](/docs/tr/cardviewwithicon.md)

#### CardViewWithImage

[![English](https://img.shields.io/badge/EN-English-blue.svg)](/docs/en/cardviewwithimage.md)
[![Turkish](https://img.shields.io/badge/TR-T%C3%BCrk%C3%A7e-red.svg)](/docs/tr/cardviewwithimage.md)


## v0.3.0 Features

- CardView component added. (This component can be used for everything you can fill inside)
- Some unnecessary codes deleted
- Custom font feature
- Turkish documentation support

## Contributors (Thank you all)

- **[David Halewood : @haletothewood](https://github.com/haletothewood)**

## Built With

* [React-Native](https://facebook.github.io/react-native/)
* [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
