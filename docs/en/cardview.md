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
  |**`onPress`**|`func`| - | onPress function |iOS,Android| No |

#### Examples

```jsx
import { CardViewWithImage } from 'react-native-simple-card-view'
```

**Simple Example**

```jsx
    <CardView>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis dolores eos ipsam nulla
            numquam officia provident repellat suscipit. Impedit itaque natus obcaecati odit quas recusandae. Deserunt
            ipsam iusto molestiae!
        </Text>
    </CardView>
```

**onPress Example**

```jsx
    <CardView onPress={ () => console.log("Clicked!") }>
        <Image source={ {uri: "https://placeimg.com/640/480/cars"} } style={ {width: 100, height: 100, alignSelf: 'center'} }/>
        <Text
            style={ {
                marginVertical : 15,
                textAlign      : 'center',
                backgroundColor: '#673AB7',
                color          : '#FFFFFF',
                padding        : 10,
            } }>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis dolores eos ipsam nulla
            numquam officia provident repellat suscipit. Impedit itaque natus obcaecati odit quas recusandae. Deserunt
            ipsam iusto molestiae!
        </Text>
    </CardView>
```