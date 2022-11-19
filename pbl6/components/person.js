import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const PersonPage = () => {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'data:image/png;base64,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',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Anh Tuan</Title>
            <Caption style={styles.caption}>@Hades154</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Da Nang, Viet Nam</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+84 974107348</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>anhtuan@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>140 500 000đ</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Orders</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple >
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="cog-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default PersonPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});