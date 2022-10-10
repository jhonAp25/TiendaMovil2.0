import { Circle, Link ,View ,Text,Icon,Box } from 'native-base';
import React from 'react'; 
import {  StyleSheet, TouchableOpacity} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function TabCustom({ state, descriptors, navigation }) {
    return (
      <View style={{ 
      elevation: 1, 
      position:'relative',
      
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#050F16',
      padding: 8
      
     
    }}>
        {/************** MAP de los Stacks ***********************/}
        {state.routes.map((route, index) => {
 
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          if(label==='Venta'){
            return(
              <TouchableOpacity key='venta' onPress ={onPress} >
              <Link
              key={index}
              bottom='80%'
              accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
               
                onLongPress={onLongPress}>
                 
                <Circle 
                 bg='#FF4C29'  width='70px' height='70px' borderWidth='6px' borderRadius='35px' borderColor='#10212D'>
                 <AntDesign name="plus" size={24}   color='#fff' />
                </Circle>
               
              </Link>
              </TouchableOpacity>
            )
            
          }
  
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ 
              justifyContent : 'center',
              alignItems: 'center',            
             }}
            > 
            <Box style={ isFocused? {flexDirection: 'row',alignContent: 'center', justifyContent : 'center', backgroundColor: '#081620',padding: 7,borderRadius: 10,
              paddingLeft: 12,
              paddingRight: 12 ,
              shadowOpacity: 0.10,
              shadowRadius: 3.65, 
              elevation: 3,
              shadowOffset: {
                width: 0,
                height: 3,
              }}  : '' }>

            {label==='Inicio'
                        ? isFocused ? <AntDesign name="tag" color='#fff' size={23} />   :  < AntDesign name="tago" color='#fff' size={23} />
                        :label==='Gastos' 
                        ? isFocused ?<FontAwesome5 name="money-bill" color='#fff'  size={23}/>   : <FontAwesome5 name="money-bill-alt" color='#fff'   size={23}/>
                        :label==='Perfil' 
                        ? isFocused ?<AntDesign name="heart" color='#fff'   size={23} /> : <AntDesign name="hearto" color='#fff'  size={23} /> : null}


              
              {isFocused 
              ? <Text style={{ color: isFocused ? '#F3F2C9' : '#CBCBCB'  ,marginLeft: 10 }}>
                    {label}
                </Text> 
              : null}
            </Box>
              
             
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  
  