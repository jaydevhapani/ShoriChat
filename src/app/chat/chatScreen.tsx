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
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../constant';

//Dummy Details
const ContactDetails = [
  {
    name: 'jenny Wilson',
    isOnline: true,
    lastMessage: 'When is the Design System event?',
    isPin: true,
    messageCount: 1,
    time: '09:10 AM',
    isDelete: false,
    isLock: false,
  },
  {
    name: 'Hans Watson',
    isOnline: false,
    lastMessage:
      'Yes, I purchased it yesterday , so how are you , all about your job is ok?',
    isPin: true,
    messageCount: 2,
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
    messageCount: 10,
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
              <Image
                source={image.backarrow}
                style={{height: heightPixel(24), width: heightPixel(24)}}
              />
            </Pressable>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={image.search}
                style={{
                  height: heightPixel(24),
                  width: heightPixel(24),
                  tintColor: 'black',
                  marginLeft: pixelSizeHorizontal(5),
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
              paddingHorizontal: pixelSizeHorizontal(14),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Pressable onPress={() => doFalseAllSelectedData()}>
                <Image
                  style={{
                    height: heightPixel(24),
                    width: heightPixel(24),
                    tintColor: 'white',
                  }}
                  source={image.backarrow}
                />
              </Pressable>
              <Text
                style={{
                  fontSize: heightPixel(18),
                  color: 'white',
                  textAlignVertical: 'center',
                  marginLeft: pixelSizeHorizontal(10),
                }}>
                {state.ChatData.filter(item => item.isDelete).length}
              </Text>
            </View>
            <Pressable>
              <Image
                style={{
                  height: heightPixel(24),
                  width: heightPixel(24),
                  tintColor: 'white',
                }}
                source={image.delete}
              />
            </Pressable>
          </View>
        )}
      </View>
      {/* Contact Details */}
      <View style={[commanStyle.ph14, {marginTop: pixelSizeVertical(20)}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.AllMessageText}>{i18n.AllMessages}</Text>
          <Pressable
            style={styles.RoundOfIConSmall}
            onPress={() => onStatePress('isFilter', !state.isFilter)}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: heightPixel(18), width: heightPixel(19)}}
                source={image.updownarraow}
              />
            </View>
          </Pressable>
        </View>
        {/* AllContacts */}
        <FlatList
          style={{marginTop: pixelSizeVertical(24)}}
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
            <Image style={{height: heightPixel(24), width: heightPixel(24)}} source={image.setting} />
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
      <View>
        <View style={styles.Profile}>
          <Image
            style={{
              height: heightPixel(60),
              width: heightPixel(60),
              borderRadius: heightPixel(30),
            }}
            resizeMode="cover"
            source={image.profiledummy}
          />
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: pixelSizeHorizontal(6),
          }}>
          <Text style={styles.userName}>{props.item.name}</Text>
          {props.item.messageCount && (
            <View style={styles.CountRound}>
              <Text style={styles.Count}>{props.item.messageCount}</Text>
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: pixelSizeHorizontal(6),
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '86%',
            }}>
            {props.item.isSend && (
              <Image
                source={image.read}
                style={[
                  {
                    height: heightPixel(16),
                    width: heightPixel(16),
                    top: pixelSizeVertical(2),
                  },
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.RoundOfICon}>
          <Image source={image.cartoon} style={styles.icon} />
        </View>
        <Text style={styles.ShoriText}>{i18n.Shori}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable onPress={() => props.onSearchPress()}>
          <Image
            source={image.search}
            style={{height: heightPixel(24), width: heightPixel(24)}}
          />
        </Pressable>
        <Pressable
          onPress={() => props.onLockPress()}
          style={{marginHorizontal: pixelSizeHorizontal(10)}}>
          <Image
            source={image.lock}
            style={{height: heightPixel(24), width: heightPixel(24)}}
          />
        </Pressable>
        <Pressable onPress={() => props.onThreeDotsPress()}>
          <Image
            source={image.threedots}
            style={{height: heightPixel(24), width: heightPixel(24)}}
          />
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
    height: heightPixel(120),
    borderBottomRightRadius: heightPixel(20),
    borderBottomLeftRadius: heightPixel(20),
    backgroundColor: '#5A5FEA',
    paddingTop: pixelSizeVertical(50),
  },
  HeaderView: {
    ...commanStyle.ph14,
    height: heightPixel(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  RoundOfICon: {
    height: heightPixel(34),
    width: heightPixel(34),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: heightPixel(11),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  RoundOfIConSmall: {
    height: heightPixel(40),
    width: heightPixel(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: heightPixel(10),
    backgroundColor: '#5A5FEA',
    alignSelf: 'center',
  },
  Profile: {
    height: heightPixel(60),
    width: heightPixel(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: heightPixel(30),
    backgroundColor: '#5A5FEA',
  },
  CountRound: {
    height: heightPixel(26),
    width: heightPixel(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#5A5FEA',
  },
  Online: {
    height: heightPixel(20),
    width: heightPixel(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: heightPixel(25),
    borderWidth: heightPixel(3),
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  icon: {
    height: heightPixel(22),
    width: heightPixel(21),
    tintColor: '#5A5FEA',
  },
  ShoriText: {
    fontSize: heightPixel(20),
    fontFamily: popnisfont.PoppinsMedium,
    color: 'white',
    marginLeft: pixelSizeHorizontal(8),
    textAlignVertical: 'center',
  },
  AllMessageText: {
    fontSize: fontPixel(16),
    fontFamily: popnisfont.PoppinsMedium,
    color: 'gray',
  },
  ChatBox: {
    height: heightPixel(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
  },
  userName: {
    fontSize: fontPixel(16),
    color: 'black',
    fontFamily: popnisfont.PoppinsMedium,
  },
  lastMessage: {
    fontSize: fontPixel(14),
    color: '#878D99',
    fontFamily: popnisfont.PoppinsMedium,
    marginHorizontal: pixelSizeHorizontal(2),
  },
  Time: {
    fontSize: fontPixel(10),
    color: '#878D99',
    fontFamily: popnisfont.PoppinsMedium,
  },
  Count: {
    fontSize: fontPixel(14),
    color: 'white',
    fontWeight: 'bold',
  },
  FilterBox: {
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(14),
    paddingVertical: pixelSizeVertical(14),
    borderRadius: heightPixel(20),
    position: 'absolute',
    backgroundColor: 'white',
    ...commanStyle.boxShadow,
    right: pixelSizeHorizontal(40),
    top: pixelSizeVertical(20)
  },
  FilterText: {
    fontSize: fontPixel(16),
    color: 'black',
    margin: 6,
    fontFamily: popnisfont.PoppinsRegular,
  },
  SettingView: {
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(6),
    borderRadius: heightPixel(12),
    position: 'absolute',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    ...commanStyle.boxShadow,
    right: pixelSizeHorizontal(20),
    top : pixelSizeVertical(-40)
  },
  SearchView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: heightPixel(60),
    width: widthPixel(374),
    borderRadius: heightPixel(30),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#D8E0F1',
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  backRound: {
    height: heightPixel(40),
    width: heightPixel(40),
    borderRadius: heightPixel(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5FEA25',
  },
  SearchInputView: {
    height: heightPixel(40),
    width: '80%',
    paddingLeft: pixelSizeHorizontal(10),
    fontSize: fontPixel(14),
  },
});
