import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import image from '../../assests/image';
import i18n from '../../assests/i18n';
import popnisfont from '../../assests/popnisfont';
import commanStyle from '../../constant/commanStyle';

//Dummy Details
const ContactDetails = [
  {
    name: 'jenny Wilson',
    isOnline: true,
    lastMessage: 'When is the Design System event?',
    isPin: true,
    messageCount: 4,
    time: '09:10 AM',
  },
  {
    name: 'Hans Watson',
    isOnline: false,
    lastMessage: 'Yes, I purchased it yesterday',
    isPin: true,
    messageCount: 4,
    isSend: true,
    isRead: false,
    time: '09:10 AM',
  },
  {
    name: 'Hans Watson',
    isOnline: false,
    lastMessage: 'Yes, I purchased it yesterday',
    isPin: true,
    messageCount: 4,
    isSend: true,
    isRead: true,
    time: '09:10 AM',
  },
];
const ChatScreen = () => {
  //state Of All Props
  const [state, setState] = useState({
    isFilter: false,
  });

  //onStatePress
  const onStatePress = (key: string, value: any) => {
    setState(prev => ({...prev, [key]: value}));
  };

  return (
    <View style={[styles.Container, {backgroundColor: 'white'}]}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.HeaderBox}>
        <HeaderOfChatScreen />
      </View>
      {/* Contact Details */}
      <View style={commanStyle.ph14}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Text style={styles.AllMessageText}>{i18n.AllMessages}</Text>
          <Pressable
            style={styles.RoundOfIConSmall}
            onPress={() => onStatePress('isFilter', !state.isFilter)}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 18, width: 20}}
                source={image.updownarraow}
              />
            </View>
          </Pressable>
        </View>
        {/* AllContacts */}
        <View style={{marginTop: 20}} />
        <FlatList
          data={ContactDetails}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <_MemorizedChatScreens index={index} item={item} key={index} />
          )}
        />

        {/* Position absulate */}
        {state.isFilter && (
          <View style={styles.FilterBox}>
            <Text style={styles.FilterText}>{i18n.Shortbydate}</Text>
            <Text style={styles.FilterText}>{i18n.ShortbyUnread}</Text>
            <Text style={styles.FilterText}>{i18n.ShortbyLatest}</Text>
            <Text style={styles.FilterText}>{i18n.ShortbyName}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

//ShowAllChats
interface ChatProps {
  item?: any;
  index?: number;
}
export const _MemorizedChatScreens = React.memo((props: ChatProps) => {
  return (
    <View key={props.index} style={styles.ChatBox}>
      <View style={{flex: 0.2}}>
        <View style={styles.Profile}></View>
        <View
          style={[
            styles.Online,
            {backgroundColor: props.item.isOnline ? '#31CC46' : '#C9C8C8'},
          ]}
        />
      </View>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.userName}>{props.item.name}</Text>
          {props.item.messageCount && (
            <View style={styles.CountRound}>
              <Text style={styles.Count}>{props.item.messageCount}</Text>
            </View>
          )}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {props.item.isSend && (
              <Image
                source={image.read}
                style={[
                  {height: 16, width: 16},
                  props.item.isRead && {tintColor: '#5A5FEA'},
                ]}
              />
            )}
            <Text style={styles.lastMessage} numberOfLines={2}>
              {props.item.lastMessage}
            </Text>
          </View>
          <Text style={styles.Time}>{props.item.time}</Text>
        </View>
      </View>
    </View>
  );
});

interface HeaderProps {}
const HeaderOfChatScreen = (props: HeaderProps) => {
  return (
    <View style={styles.HeaderView}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.RoundOfICon}>
          <Image source={image.cartoon} style={styles.icon} />
        </View>
        <Text style={styles.ShoriText}>{i18n.Shori}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Pressable>
          <Image source={image.search} style={{height: 24, width: 24}} />
        </Pressable>
        <Pressable style={{marginHorizontal: 14}}>
          <Image source={image.lock} style={{height: 24, width: 24}} />
        </Pressable>
        <Pressable>
          <Image source={image.threedots} style={{height: 24, width: 24}} />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  HeaderBox: {
    height: 140,
    paddingTop: StatusBar.currentHeight,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    backgroundColor: '#5A5FEA',
  },
  HeaderView: {
    height: 50,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  RoundOfICon: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  RoundOfIConSmall: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#5A5FEA',
    alignSelf: 'center',
  },
  Profile: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#5A5FEA',
  },
  CountRound: {
    height: 26,
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#5A5FEA',
  },
  Online: {
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  icon: {
    height: 28,
    width: 28,
    tintColor: '#5A5FEA',
  },
  ShoriText: {
    fontSize: 20,
    fontFamily: popnisfont.PoppinsMedium,
    color: 'white',
    marginLeft: 8,
    textAlignVertical: 'center',
  },
  AllMessageText: {
    fontSize: 18,
    fontFamily: popnisfont.PoppinsMedium,
    color: 'gray',
  },
  ChatBox: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
  },
  userName: {
    fontSize: 16,
    color: 'black',
    fontFamily: popnisfont.PoppinsMedium,
  },
  lastMessage: {
    fontSize: 14,
    color: '#878D99',
    fontFamily: popnisfont.PoppinsMedium,
  },
  Time: {
    fontSize: 12,
    color: '#878D99',
    fontFamily: popnisfont.PoppinsMedium,
  },
  Count: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  FilterBox: {
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: 'white',
    ...commanStyle.boxShadow,
    right: 50,
    top: StatusBar.currentHeight,
  },
  FilterText: {
    fontSize: 16,
    color: 'black',
    margin: 6,
    fontFamily: popnisfont.PoppinsRegular,
  },
});
