<h1 align="center">CardViewWithImage</h1>

<p align="center">
<a href="https://s9.postimg.org/qxh30azpb/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png">
<img src="https://s9.postimg.org/pxvdia4rj/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png" alt="CardViewWithImage Example" />
</a>
</p>

#### Attributes

  | Özellik | Tip | Varsayılan | Açıklama | Platform | Gerekli mi? |
  |---|---|---|---|---|---|
  |**`width`**|`number ya da string`| `300` | CardView genişliği (Tam genişlik için `'100%'` olarak ayarlamalısınız) |iOS,Android| Hayır |
  |**`imageWidth`**|`number ya da string`| `100` | Görsel genişliği (Tam genişlik için `'100%'` olarak ayarlamalısınız) |iOS,Android| Hayır |
  |**`imageHeight`**|`number ya da string`| `100` | Image height (Tam yükseklik için `'100%'` olarak ayarlamalısınız) |iOS,Android| Hayır |
  |**`roundedImage`**|`bool`| `true` | Eğer `false` yaparsanız görsel kare olur. |iOS,Android| Hayır |
  |**`roundedImageValue`**|`number`| `50` | Eğer görseli oval dairesel istiyorsanız ilk olarak `roundedImage` özelliğini `true` yapmalısınız. Daha sonra istediğiniz bir değeri girerek görsele ovallik verebilirsiniz. |iOS,Android| Hayır|
  |**`imageMargin`**|`object`| - | Görsel **margin** vermek için. Bu obje `top`,  `bottom`, `right`, `left` bu key:değer'e sahip olmalı |iOS,Android| Hayır|
  |**`source`**|`object`| - | You can add your source like [React_Native Image Component Documents](https://facebook.github.io/react-native/docs/image.html#source). Also, if you use imageComponent you can remove this |iOS,Android| If you're not using imageComponent |
  |**`buttonComponent`**|`object`| - | You can place your own button component for showing a button |iOS,Android| No|
  |**`imageComponent`**|`object`| - | You can place your own image component (Fast-image etc.) but if you use this, our embedded styling not work. |iOS,Android| No|
  |**`title`**|`string`| - | Component title |iOS,Android| No|
  |**`titleTextAlign`**|`string`| - | Component title text align |iOS,Android| No|
  |**`titleFontWeight`**|`string`| - | Component title font weight |iOS,Android| No|
  |**`titleFontSize`**|`number`| - | Component title font size|iOS,Android| No|
  |**`titlePadding`**|`object`| - | You can set title **padding** with this object. This object requires `top`,  `bottom`, `right`, `left`|iOS,Android| No|
  |**`titleMargin`**|`object`| - | You can set title **margin** with this object. This object requires `top`,  `bottom`, `right`, `left`|iOS,Android| No|
  |**`titleLineHeight`**|`number`| - | Component title text line height |iOS,Android| No|
  |**`content`**|`string`| - | Content text |iOS,Android| No|
  |**`contentFontWeight`**|`string`| - | Component content font weight |iOS,Android| No|
  |**`contentFontSize`**|`string`| - | Component content font size |iOS,Android| No|
  |**`contentTextAlign`**|`string`| - | Component content text align |iOS,Android| No|
  |**`contentPadding`**|`object`| - | You can set content **padding** with this object. This object requires `top`,  `bottom`, `right`, `left`|iOS,Android| No|
  |**`contentMargin`**|`object`| - | You can set content **margin** with this object. This object requires `top`,  `bottom`, `right`, `left`|iOS,Android| No|
  |**`contentLineHeight`**|`number`| - | Component content text line height |iOS,Android| No|


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

**onPress Example**

```jsx
    <CardViewWithImage
        width={ (300}
        content={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!' }
        source={ {uri: 'https://placeimg.com/640/480/tech'} }
        title={ 'Hello World!' }
        imageWidth={ 100 }
        imageHeight={ 100 }
        onPress={() => console.log("CardViewWithImage Clicked!")}
        roundedImage={ true }
        roundedImageValue={ 50 }
        imageMargin={ {top: 10} }
    />
```