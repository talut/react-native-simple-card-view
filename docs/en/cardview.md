<h1 align="center">CardView</h1>

<p>Simple, empty CardView component. You can fill inside with anything you want</p>

<p align="center">
<a href="https://s7.postimg.org/77al94x63/Simulator_Screen_Shot_-_i_Phone_7_Plus_-_2018-03-28_at_10.59.24.png">
<img src="https://s7.postimg.org/reo11imyj/Simulator_Screen_Shot_-_i_Phone_7_Plus_-_2018-03-28_at_10.59.24.png" alt="CardView Example" />
</a>
</p>

#### Attributes

  | Prop | Type | Default | Description | Platform | Required |
  |---|---|---|---|---|---|
  |**`width`**|`number or string`| `300` | CardView width (for full width you should set `'100%'`) |iOS,Android| Yes |
  |**`onPress`**|`func`| - | onPress function |iOS,Android| No |

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