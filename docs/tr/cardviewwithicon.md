<h1 align="center">CardViewWithIcon</h1>

<p align="center"><img src="https://s9.postimg.org/748niqban/card_View_With_Icon.png" alt="CardViewWithImage" /></p>

 #### Öznitellikler

 | Özellik | Tip | Varsayılan | Açıklama | Platform |
  |---|---|---|---|---|
  |**`iosIcon`**|`string`| ios-bonfire-outline | IOS simge eklemek için kullanılır : [ionicons](https://ionicframework.com/docs/ionicons/) |iOS|
  |**`androidIcon`**|`string`| md-bonfire | Android simge eklemek için kullanılır : [ionicons](https://ionicframework.com/docs/ionicons/) |Android|
  |**`iconColor`**|`string`| `#FFFFFF` | Simge rengi - (hex, rgba, rgb) |iOS,Android|
  |**`withBorder`**|`boolean`| false | Simgeye kenar ekleme |iOS,Android|
  |**`roundedIconBg`**|`boolean`| true | Yuvarlatılmış simge arkaplanı  |iOS,Android|
  |**`borderColor`**|`string`| - | Simge kenarlık rengi - (hex, rgba, rgb) |iOS,Android|
  |**`borderWidth`**|`number`| - | Simge kenarlık kalınlığı |iOS,Android|
  |**`withBackground`**|`boolean`| true | Simgeye arkaplan rengi ata|iOS,Android|
  |**`iconBgColor`**|`string`| `#5E35B1` | Simgenin arkaplan rengini ayarla - (hex, rgba, rgb)|iOS,Android|
  |**`title`**|`string`| - | CardView başlığı |iOS,Android|
  |**`titleTextAlign`**|`string`| center | CardView başlığı hizalama |iOS,Android|
  |**`titleFontWeight`**|`string`| bold | CardView başlık yazı kalınlığı |iOS,Android|
  |**`titleFontSize`**|`number`| 14 | CardView başlık yazı boyutu |iOS,Android|
  |**`titlePaddingBottom`**|`number`| 10 | CardView başlık alt boşluk |iOS,Android|
  |**`titlePaddingTop`**|`number`| - | CardView başlık üst iç boşluk |iOS,Android|
  |**`titlePaddingLeft`**|`number`| - | CardView başlık sol iç boşluk |iOS,Android|
  |**`titlePaddingRight`**|`number`| - | CardView başlık sağ iç boşluk |iOS,Android|
  |**`contentFontWeight`**|`string`| 300 | CardView içerik metni yazı kalınlığı  |iOS,Android|
  |**`contentTextAlign`**|`string`| justify | CardView içerik metni hizalaması |iOS,Android|
  |**`contentFontSize`**|`number`| 12 | CardView içerik yazı boyutu |iOS,Android|
  |**`contentPaddingLeft`**|`number`| 10 | CardView içerik metni sol iç boşluk  |iOS,Android|
  |**`contentPaddingRight`**|`number`| 10 | CardView içerik metni sağ iç boşluk  |iOS,Android|
  |**`contentPaddingBottom`**|`number`| 10 | CardView içerik metni alt iç boşluk  |iOS,Android|
  |**`contentPaddingTop`**|`number`| - | CardView içerik metni üst iç boşluk   |iOS,Android|
  |**`onPress`**|`func`| - | onPress fonksiyonu (Tıklama durumunda olacaklar içindir.) |iOS,Android|


#### Examples

```jsx
import { CardViewWithIcon } from 'react-native-simple-card-view'
```

**Basit Örnek**

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

**onPress Örneği**

<p align="center"><img src="https://i.lensdump.com/i/hQdxa.gif" alt="CardViewWithIcon Example" /></p>

```jsx
    <CardViewWithIcon
        androidIcon={ 'md-jet' }
        iosIcon={ 'ios-jet-outline' }
        iconBgColor={ 'rgba(76,175,80 ,1)' }
        onPress={() => console.log("CardViewWithIcon Tıklandı")}
        iconColor={ '#FFFFFF' }
        title={ 'LOREM IPSUM' }
        content={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
    />
```