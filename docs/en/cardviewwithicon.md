<h1 align="center">CardViewWithIcon</h1>

<p align="center"><img src="https://s9.postimg.org/748niqban/card_View_With_Icon.png" alt="CardViewWithImage" /></p>

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
  |**`titleFontFamily`**|`string`| - | Card view title font family |iOS,Android|
  |**`contentFontWeight`**|`string`| 300 | Card view content font weight  |iOS,Android|
  |**`contentTextAlign`**|`string`| justify | Card view content text align |iOS,Android|
  |**`contentFontSize`**|`number`| 12 | Card view content font size |iOS,Android|
  |**`contentPaddingLeft`**|`number`| 10 | Card view content padding left  |iOS,Android|
  |**`contentPaddingRight`**|`number`| 10 | Card view content padding right  |iOS,Android|
  |**`contentPaddingBottom`**|`number`| 10 | Card view content padding bottom  |iOS,Android|
  |**`contentPaddingTop`**|`number`| - | Card view content padding top props  |iOS,Android|
  |**`contentFontFamily`**|`string`| - | Card view content font family |iOS,Android|
  |**`onPress`**|`func`| - | onPress function |iOS,Android|


#### Examples

```jsx
import { CardViewWithIcon } from 'react-native-simple-card-view'
```

**Simple Example**

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

**onPress Example**

<p align="center"><img src="https://i.lensdump.com/i/hQdxa.gif" alt="CardViewWithIcon Example" /></p>

```jsx
    <CardViewWithIcon
        androidIcon={ 'md-jet' }
        iosIcon={ 'ios-jet-outline' }
        iconBgColor={ 'rgba(76,175,80 ,1)' }
        onPress={() => console.log("CardViewWithIcon Clicked")}
        iconColor={ '#FFFFFF' }
        title={ 'LOREM IPSUM' }
        content={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
    />
```