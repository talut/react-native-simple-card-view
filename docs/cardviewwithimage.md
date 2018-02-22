<h1 align="center">CardViewWithImage</h1>

<p align="center">
<a href="https://s9.postimg.org/qxh30azpb/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png">
<img src="https://s9.postimg.org/pxvdia4rj/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png" alt="CardViewWithImage Example" />
</a>
</p>

#### Attributes

  | Prop | Type | Default | Description | Platform | Required |
  |---|---|---|---|---|---|
  |**`title`**|`string`| - | Component title |iOS,Android| No|
  |**`titleTextAlign`**|`string`| - | Component title text align |iOS,Android| No|
  |**`titleFontWeight`**|`string`| - | Component title font weight |iOS,Android| No|
  |**`titleFontSize`**|`number`| - | Component title  font size|iOS,Android| No|
  |**`titlePaddingBottom`**|`number`| - | Component title padding bottom |iOS,Android| No|
  |**`titlePaddingTop`**|`number`| - | onPress function |iOS,Android| No|
  |**`titlePaddingLeft`**|`number`| - | onPress function |iOS,Android| No|
  |**`titlePaddingRight`**|`number`| - | onPress function |iOS,Android| No|
  |**`content`**|`number`| - | onPress function |iOS,Android| No|
  |**`contentFontWeight`**|`string`| - | onPress function |iOS,Android| No|
  |**`contentFontSize`**|`string`| - | onPress function |iOS,Android| No|
  |**`contentTextAlign`**|`string`| - | onPress function |iOS,Android| No|
  |**`contentPaddingLeft`**|`number`| - | onPress function |iOS,Android| No|
  |**`contentPaddingRight`**|`number`| - | onPress function |iOS,Android| No|
  |**`contentPaddingBottom`**|`number`| - | onPress function |iOS,Android| No|
  |**`contentPaddingTop`**|`number`| - | onPress function |iOS,Android| No|
  |**`contentLineHeight`**|`number`| - | onPress function |iOS,Android| No|
  |**`buttonComponent`**|`object`| - | onPress function |iOS,Android| No|
  |**`imageComponent`**|`object`| - | onPress function |iOS,Android| No|
  |**`roundedImage`**|`bool`| - | onPress function |iOS,Android| No|
  |**`roundedImageValue`**|`number`| - | onPress function |iOS,Android| No|
  |**`imageMargin`**|`object`| - | onPress function |iOS,Android| No|


#### Examples

```jsx
import { CardViewWithImage } from 'react-native-simple-card-view'
```

**Simple Full Width Image Example**

```jsx
    <CardViewWithImage
        width={ (200}
        source={ {uri: 'https://placeimg.com/640/480/nature'} }
        content={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!' }
        title={ 'React Nature :D' }
        imageWidth={ '100%' }
        imageHeight={ 100 }
        roundedImage={ false }
    />
```

**Rounded Image Example**

```jsx
    <CardViewWithImage
        width={ (300}
        content={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!' }
        source={ {uri: 'https://placeimg.com/640/480/tech'} }
        title={ 'Hello World!' }
        imageWidth={ 100 }
        imageHeight={ 100 }
        roundedImage={ true }
        roundedImageValue={ 50 }
        imageMargin={ {top: 10} }
    />
```