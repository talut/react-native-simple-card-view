<h1 align="center">CardViewWithImage</h1>

<p align="center">
<a href="https://s9.postimg.org/qxh30azpb/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png">
<img src="https://s9.postimg.org/pxvdia4rj/Simulator_Screen_Shot_-_i_Phone_8_-_2018-02-21_at_17.49.43.png" alt="CardViewWithImage Örneği" />
</a>
</p>

#### Öznitellikler

  | Özellik | Tip | Varsayılan | Açıklama | Platform | Gerekli mi? |
  |---|---|---|---|---|---|
  |**`width`**|`number ya da string`| `300` | CardView genişliği (Tam genişlik için `'100%'` olarak ayarlamalısınız) |iOS,Android| Hayır |
  |**`imageWidth`**|`number ya da string`| `100` | Görsel genişliği (Tam genişlik için `'100%'` olarak ayarlamalısınız) |iOS,Android| Hayır |
  |**`imageHeight`**|`number ya da string`| `100` | Görsel  yüksekliği (Tam yükseklik için `'100%'` olarak ayarlamalısınız) |iOS,Android| Hayır |
  |**`roundedImage`**|`bool`| `true` | Eğer `false` yaparsanız görsel kare olur. |iOS,Android| Hayır |
  |**`roundedImageValue`**|`number`| `50` | Eğer görseli oval dairesel istiyorsanız ilk olarak `roundedImage` özelliğini `true` yapmalısınız. Daha sonra istediğiniz bir değeri girerek görsele ovallik verebilirsiniz. |iOS,Android| Hayır|
  |**`imageMargin`**|`object`| - | Görsel **margin** vermek için. Bu obje `top`,  `bottom`, `right`, `left` bu key:değer'e sahip olmalı |iOS,Android| Hayır|
  |**`source`**|`object`| - | Görsel kaynağınnı React Native dokümantasyonunda ki gibi ekleyebilirsiniz. [React Native Görsel Bileşen Dokümantasyonu](https://facebook.github.io/react-native/docs/image.html#source). Ayrıca, eğer kendi görsel bilşeninizi kullanıyorsanız bunu silebilirsiniz. |iOS,Android| imageComponent kullanılmadığında |
  |**`buttonComponent`**|`object`| - | Kendi buton bileşenizi ekleyebilirsiniz. |iOS,Android| Hayır|
  |**`imageComponent`**|`object`| - | Kendi görsel bilşeninizi ekleyebilirsiniz (Fast-image vs.) fakat eğer bunu kullanırsanız, varsayılan görsel sitllendirmesi kaybolur. |iOS,Android| Hayır|
  |**`title`**|`string`| - | CardView başlığı |iOS,Android|
  |**`titleTextAlign`**|`string`| center | CardView başlığı hizalama |iOS,Android|
  |**`titleFontWeight`**|`string`| bold | CardView başlık yazı kalınlığı |iOS,Android|
  |**`titleFontSize`**|`number`| 14 | CardView başlık yazı boyutu |iOS,Android|
  |**`titleFontFamily`**|`string`| - | CardView başlık yazı tipi ailesi |iOS,Android| Hayır|
  |**`titlePadding`**|`object`| - | Başlık **padding** değer objesi. Bu obje `top`,  `bottom`, `right`, `left` key'lerine sahip değerler içermelidir.|iOS,Android| Hayır|
  |**`titleMargin`**|`object`| - | Başlık **margin** değer objesi. Bu obje `top`,  `bottom`, `right`, `left` key'lerine sahip değerler içermelidir.|iOS,Android| Hayır|
  |**`titleLineHeight`**|`number`| - | Bileşen başlığı satır yüksekliği |iOS,Android| Hayır|
  |**`content`**|`string`| - | CardView içerik metni. |iOS,Android| Hayır|
  |**`contentFontWeight`**|`string`| 300 | CardView içerik metni yazı kalınlığı  |iOS,Android| Hayır|
  |**`contentFontSize`**|`number`| 12 | CardView içerik yazı boyutu |iOS,Android|Hayır|
  |**`contentTextAlign`**|`string`| justify | CardView içerik metni hizalaması |iOS,Android| Hayır|
  |**`contentPadding`**|`object`| - | İçerik **padding** değer objesi. Bu obje `top`,  `bottom`, `right`, `left` key'lerine sahip değerler içermelidir.|iOS,Android| Hayır|
  |**`contentMargin`**|`object`| - | İçerik **margin** değer objesi. Bu obje `top`,  `bottom`, `right`, `left` key'lerine sahip değerler içermelidir.|iOS,Android| Hayır|
  |**`contentLineHeight`**|`number`| - | Bileşen içeriği satır yüksekliği |iOS,Android| Hayır|
  |**`onPress`**|`func`| - | onPress fonksiyonu (Tıklama durumunda olacaklar içindir.) |iOS,Android| Hayır|
  |**`contentFontFamily`**|`string`| - | Card view içerik yazı tipi ailesi |iOS,Android| Hayır|





#### Örnekler

```jsx
import { CardViewWithImage } from 'react-native-simple-card-view'
```

**Örnek tam genişliğe sahip görsel kartı**

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

**Dairesel Görsel Örneği**

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

**onPress Fonksiyon Örneği**

```jsx
    <CardViewWithImage
        width={ (300}
        content={ 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!' }
        source={ {uri: 'https://placeimg.com/640/480/tech'} }
        title={ 'Hello World!' }
        imageWidth={ 100 }
        imageHeight={ 100 }
        onPress={() => console.log("CardViewWithImage Tıklandı!")}
        roundedImage={ true }
        roundedImageValue={ 50 }
        imageMargin={ {top: 10} }
    />
```