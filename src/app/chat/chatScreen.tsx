import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import image from '../../assests/image';
import i18n from '../../assests/i18n';
import popnisfont from '../../assests/popnisfont';
import commanStyle from '../../constant/commanStyle';
import {Callback} from '@react-native-async-storage/async-storage/lib/typescript/types';
import LockModal from '../../component/lockModal';
import navigationservice from '../../navigation/navigationservice';
import screenname from '../../navigation/screenname';

//Dummy Details
const ContactDetails = [
  {
    name: 'jenny Wilson',
    isOnline: true,
    lastMessage: 'When is the Design System event?',
    isPin: true,
    messageCount: 4,
    time: '09:10 AM',
    isDelete: false,
    isLock: false,
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
    isDelete: false,
    isLock: true,
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
    isDelete: false,
    isLock: false,
  },
];
const ChatScreen = () => {
  //state Of All Props
  const [state, setState] = useState({
    ChatData: ContactDetails,
    isFilter: false,
    isThreeDots: false,
    isSearch: false,
    searchText: '',
    isLongPressForDelete: false,
    isLockModal: false,
    isLockChat: false,
  });

  //onStatePress
  const onStatePress = (key: string, value: any) => {
    setState(prev => ({...prev, [key]: value}));
  };
  //onDeleteChat
  const onDeleteChat = (INDEX: number) => {
    let NewArray = [...state.ChatData];
    NewArray[INDEX].isDelete = NewArray[INDEX].isDelete == true ? false : true;
    onStatePress('ChatData', NewArray);
    if (NewArray.every(item => !item.isDelete)) {
      onStatePress('isLongPressForDelete', false);
    }
  };

  //doFalseAllSelectedData
  const doFalseAllSelectedData = () => {
    let NewArray = [...state.ChatData];
    NewArray.forEach(item => {
      item.isDelete = false;
    });
    onStatePress('ChatData', NewArray);
    onStatePress('isLongPressForDelete', false);
  };

  return (
    <View style={[styles.Container, {backgroundColor: 'white'}]}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.HeaderBox}>
        {!state.isSearch && !state.isLongPressForDelete && (
          <HeaderOfChatScreen
            onThreeDotsPress={() =>
              onStatePress('isThreeDots', !state.isThreeDots)
            }
            onLockPress={() => onStatePress('isLockChat', true)}
            onSearchPress={() => onStatePress('isSearch', !state.isSearch)}
          />
        )}
        {state.isSearch && (
          <View style={styles.SearchView}>
            <Pressable
              style={styles.backRound}
              onPress={() => onStatePress('isSearch', !state.isSearch)}>
              <Image source={image.backarrow} style={{height: 24, width: 24}} />
            </Pressable>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.search}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: 'black',
                  marginLeft: 5,
                }}
              />
              <TextInput
                value={state.searchText}
                onChange={e => onStatePress('searchText', e.nativeEvent.text)}
                placeholder={i18n.Search}
                style={styles.SearchInputView}
              />
            </View>
          </View>
        )}
        {state.isLongPressForDelete && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 14,
              marginTop: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Pressable onPress={() => doFalseAllSelectedData()}>
                <Image
                  style={{height: 24, width: 24, tintColor: 'white'}}
                  source={image.backarrow}
                />
              </Pressable>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  textAlignVertical: 'center',
                  marginLeft: 10,
                }}>
                {state.ChatData.filter(item => item.isDelete).length}
              </Text>
            </View>
            <Pressable>
              <Image
                style={{height: 24, width: 24, tintColor: 'white'}}
                source={image.delete}
              />
            </Pressable>
          </View>
        )}
      </View>
      {/* Contact Details */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            alignItems: 'center',
            marginHorizontal: 14,
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
          data={state.ChatData}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <_MemorizedChatScreens
              index={index}
              item={item}
              key={index}
              onLongPress={INDEX => {
                onDeleteChat(INDEX), onStatePress('isLongPressForDelete', true);
              }}
              onPress={ITEM => {
                console.log(ITEM);

                if (state.isLongPressForDelete) {
                  onDeleteChat(ITEM?.index);
                } else if (ITEM?.isLock) {
                  onStatePress('isLockModal', true);
                } else if (!ITEM?.isLock) {
                  navigationservice.navigate(screenname.MessageScreen);
                }
              }}
            />
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
        {/* Position Setting */}
        {state.isThreeDots && (
          <Pressable
            style={styles.SettingView}
            onPress={() => navigationservice.navigate(screenname.ChatSetting)}>
            <Image style={{height: 24, width: 24}} source={image.setting} />
            <Text style={styles.FilterText}>{i18n.Setting}</Text>
          </Pressable>
        )}
      </View>
      {state.isLockModal && (
        <LockModal
          onClosePress={() => onStatePress('isLockModal', false)}
          isLockingChat={false}
        />
      )}
      {state.isLockChat && (
        <LockModal
          onClosePress={() => onStatePress('isLockChat', false)}
          isLockingChat={true}
        />
      )}
    </View>
  );
};

//ShowAllChats
interface ChatProps {
  item: any;
  index: number;
  onLongPress(index: number): void;
  onPress(item: any): void;
}
export const _MemorizedChatScreens = React.memo((props: ChatProps) => {
  return (
    <Pressable
      key={props.index}
      style={[
        styles.ChatBox,
        props.item.isDelete && {backgroundColor: '#F0F1F4'},
      ]}
      onLongPress={() => props.onLongPress(props.index)}
      onPress={() =>
        props.onPress({isLock: props.item.isLock, index: props.index})
      }>
      <View style={{flex: 0.2}}>
        <View style={styles.Profile}>
          {props.item.isDelete && (
            <View>
              <Image source={image.rightMark} style={{height: 30, width: 30}} />
            </View>
          )}
        </View>
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
    </Pressable>
  );
});

interface HeaderProps {
  onThreeDotsPress: Callback;
  onSearchPress: Callback;
  onLockPress: Callback;
}
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
        <Pressable onPress={() => props.onSearchPress()}>
          <Image source={image.search} style={{height: 24, width: 24}} />
        </Pressable>
        <Pressable
          onPress={() => props.onLockPress()}
          style={{marginHorizontal: 10}}>
          <Image source={image.lock} style={{height: 24, width: 24}} />
        </Pressable>
        <Pressable onPress={() => props.onThreeDotsPress()}>
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
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 40,
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
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
    paddingHorizontal: 14,
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
    top: Platform.OS == 'android' ? StatusBar.currentHeight : 40,
  },
  FilterText: {
    fontSize: 16,
    color: 'black',
    margin: 6,
    fontFamily: popnisfont.PoppinsRegular,
  },
  SettingView: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    position: 'absolute',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    ...commanStyle.boxShadow,
    right: 20,
    top: -30,
  },
  SearchView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '90%',
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#D8E0F1',
    paddingHorizontal: 10,
  },
  backRound: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5FEA25',
  },
  SearchInputView: {
    height: 40,
    width: '80%',
    paddingLeft: 10,
    fontSize: 14,
  },
});
