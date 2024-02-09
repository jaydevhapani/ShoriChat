import {
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import commanStyle from '../../constant/commanStyle';
import {Callback} from '@react-native-async-storage/async-storage/lib/typescript/types';
import image from '../../assests/image';
import popnisfont from '../../assests/popnisfont';
import i18n from '../../assests/i18n';
import navigationservice from '../../navigation/navigationservice';
import screenname from '../../navigation/screenname';
import {Swipeable} from 'react-native-gesture-handler';
import DeleteModal from '../../component/deleteModal';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../constant';

const dummyMessage = [
  {
    message: 'When is the Design System event?',
    reaction: '😊',
    isSender: false,
    time: '09:18 AM',
    isLongPressForMessage: false,
  },
  {
    message: 'It’s on this Weekend, 12 Jan, 2024. Are you attending?',
    reaction: '😊',
    isSender: true,
    time: '09:18 AM',
    isLongPressForMessage: false,
  },
  {
    message: 'hey',
    reaction: '😊',
    isSender: false,
    time: '09:18 AM',
    isLongPressForMessage: false,
  },
];

export default function MessageScreen() {
  //State
  const [state, setState] = useState({
    messageText: '',
    isThreeDots: false,
    isMessageThreeDots: false,
    messageClickIndex: 0,
    isLongPressForMessage: false,
    messageData: dummyMessage,
    isSelectedDeleteMessage: false,
    isAllDeleteMessage: false,
    ReplayMessage: undefined,
    isReplayOrEditReset: false,
  });
  //onStatePress
  const onStatePress = (key: string, value: any) => {
    setState(prev => ({...prev, [key]: value}));
  };
  const flatListRef = useRef<FlatList<any>>(null);

  //onSelectMultiPleMessage
  const onSelectMultiPleMessage = (INDEX: number) => {
    let NewArray = [...state.messageData];
    NewArray[INDEX].isLongPressForMessage =
      NewArray[INDEX].isLongPressForMessage == true ? false : true;
    onStatePress('messageData', NewArray);
    if (NewArray.every(item => !item.isLongPressForMessage)) {
      onStatePress('isLongPressForMessage', false);
    }
  };

  //doFalseAllSelectedData
  const doFalseAllSelectedData = () => {
    let NewArray = [...state.messageData];
    NewArray.forEach(item => {
      item.isLongPressForMessage = false;
    });
    onStatePress('messageData', NewArray);
    onStatePress('isLongPressForMessage', false);
  };

  return (
    <ImageBackground style={[commanStyle.flex]} source={image.chatbackground}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.HeaderBox}>
        {!state.isLongPressForMessage && (
          <HeaderOfChatScreen
            onThreeDots={() => onStatePress('isThreeDots', !state.isThreeDots)}
          />
        )}
        {state.isLongPressForMessage && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: pixelSizeHorizontal(14),
              marginTop: heightPixel(30),
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
                  fontSize: fontPixel(18),
                  color: 'white',
                  textAlignVertical: 'center',
                  marginLeft: pixelSizeHorizontal(10),
                }}>
                {
                  state.messageData.filter(item => item.isLongPressForMessage)
                    .length
                }
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                onPress={() =>
                  onStatePress(
                    'isSelectedDeleteMessage',
                    !state.isSelectedDeleteMessage,
                  )
                }>
                <Image
                  style={{
                    height: heightPixel(24),
                    width: heightPixel(24),
                    tintColor: 'white',
                  }}
                  source={image.delete}
                />
              </Pressable>
              <Pressable style={{marginHorizontal: pixelSizeHorizontal(10)}}>
                <Image
                  style={{
                    height: heightPixel(24),
                    width: heightPixel(24),
                    tintColor: 'white',
                  }}
                  source={image.star}
                />
              </Pressable>
              <Pressable>
                <Image
                  style={{
                    height: heightPixel(24),
                    width: heightPixel(24),
                    tintColor: 'white',
                  }}
                  source={image.filemanager}
                />
              </Pressable>
            </View>
          </View>
        )}
      </View>
      <View style={commanStyle.flex}>
        <View style={{flex: 1, paddingVertical: 20}}>
          <FlatList
            data={state.messageData}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            // inverted
            renderItem={({item, index}) => (
              <_MemoRizedMessagesComponent
                item={item}
                index={index}
                onThreesDots={value => {
                  onStatePress('isMessageThreeDots', !state.isMessageThreeDots);
                  onStatePress('messageClickIndex', value.index);
                }}
                onLongPress={value => {
                  onSelectMultiPleMessage(value.index),
                    onStatePress('isLongPressForMessage', true);
                }}
                onPress={value => {
                  if (state.isLongPressForMessage) {
                    onSelectMultiPleMessage(value.index);
                  }
                }}
                onLeftSwipe={value => {
                  onStatePress('ReplayMessage', value?.message),
                    onStatePress('isReplayOrEditReset', false);
                }}
                onRightSwipe={value => {
                  onStatePress('ReplayMessage', value?.message),
                    onStatePress('isReplayOrEditReset', false);
                }}
                isReplayOrEditReset={state.isReplayOrEditReset}
              />
            )}
            ref={flatListRef}
          />
        </View>

        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.ChatBox}>
            {state.ReplayMessage && (
              <View style={styles.replayBox}>
                <Text
                  style={{
                    fontSize: fontPixel(14),
                    fontFamily: popnisfont.PoppinsRegular,
                    color: 'black',
                  }}
                  numberOfLines={4}>
                  {state.ReplayMessage}
                </Text>
                <Pressable
                  onPress={() => {
                    onStatePress('ReplayMessage', undefined),
                      onStatePress('isReplayOrEditReset', true);
                  }}>
                  <Image
                    source={image.close}
                    style={{height: heightPixel(24), width: heightPixel(24)}}
                  />
                </Pressable>
              </View>
            )}
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={state.messageText}
                onChange={e => {}}
                placeholder={'Type here...'}
                style={styles.SearchInputView}
              />
              <View style={styles.sendIcon}>
                <Image
                  style={{height: heightPixel(24), width: heightPixel(24)}}
                  source={image.sendmessage}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
      {/* Position absulate */}
      {state.isThreeDots && (
        <View style={styles.FilterBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                height: heightPixel(24),
                width: heightPixel(24),
                tintColor: 'black',
              }}
              source={image.search}
            />
            <Text style={styles.FilterText}>{i18n.Search}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                height: heightPixel(24),
                width: heightPixel(24),
                tintColor: 'black',
              }}
              source={image.star}
            />
            <Text style={styles.FilterText}>{i18n.StarredMessage}</Text>
          </View>
          <Pressable
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() =>
              onStatePress('isAllDeleteMessage', !state.isAllDeleteMessage)
            }>
            <Image
              style={{
                height: heightPixel(24),
                width: heightPixel(24),
                tintColor: 'black',
              }}
              source={image.delete}
            />
            <Text style={styles.FilterText}>{i18n.DeleteMessage}</Text>
          </Pressable>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                height: heightPixel(24),
                width: heightPixel(24),
                tintColor: 'black',
              }}
              source={image.clearclose}
            />
            <Text style={styles.FilterText}>{i18n.Clearchat}</Text>
          </View>
        </View>
      )}
      {/* {state.isMessageThreeDots && (
        <View
          style={[
            styles.ThreeDotsBox,
            {
              top: 0,
            },
          ]}>
          <Text style={styles.ThreeDotsText}>{i18n.Shortbydate}</Text>
          <Text style={styles.ThreeDotsText}>{i18n.ShortbyUnread}</Text>
          <Text style={styles.ThreeDotsText}>{i18n.ShortbyLatest}</Text>
        </View>
      )} */}
      {state.isSelectedDeleteMessage && (
        <DeleteModal
          onClosePress={() =>
            onStatePress(
              'isSelectedDeleteMessage',
              !state.isSelectedDeleteMessage,
            )
          }
          isMultipleMessage={false}
        />
      )}
      {state.isAllDeleteMessage && (
        <DeleteModal
          onClosePress={() =>
            onStatePress('isAllDeleteMessage', !state.isAllDeleteMessage)
          }
          isMultipleMessage={true}
        />
      )}
    </ImageBackground>
  );
}

interface HeaderProps {
  onThreeDots: Callback;
}
const HeaderOfChatScreen = (props: HeaderProps) => {
  return (
    <View style={styles.HeaderView}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Pressable onPress={() => navigationservice.goBack()}>
          <Image
            source={image.backarrow}
            style={{
              height: heightPixel(26),
              width: heightPixel(26),
              tintColor: 'white',
            }}
          />
        </Pressable>
      </View>
      <View style={{flex: 6, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            style={styles.HeaderProfile}
            onPress={() =>
              navigationservice.navigate(screenname.ChatUserDetails)
            }>
            <Image
              source={image.profiledummy}
              style={{
                height: heightPixel(50),
                width: heightPixel(50),
                borderRadius: heightPixel(50),
              }}
            />
          </Pressable>
          <View style={{marginLeft: pixelSizeHorizontal(10)}}>
            <Text style={styles.UserName}>Jenny Wilson</Text>
            <Text style={styles.Online}>Online</Text>
          </View>
        </View>
        <View>
          <Text style={styles.Time}>9:18PM</Text>
          <Text style={styles.TimeStemp}>In USA</Text>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Pressable onPress={() => props.onThreeDots()}>
          <Image
            source={image.threedots}
            style={{
              height: heightPixel(26),
              width: heightPixel(26),
              tintColor: 'white',
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

//_MemoRized All Messages
interface MessageProps {
  onRightSwipe?(value: any): void;
  onLeftSwipe?(value: any): void;
  onPress?(value: any): void;
  onLongPress?(value: any): void;
  onThreesDots?(value: any): void;
  onEditClick?(value: any): void;
  item: any;
  index: number;
  onLayOut?(value: any): void;
  isReplayOrEditReset?: boolean;
}
const _MemoRizedMessagesComponent = React.memo((data: MessageProps) => {
  //reset swipple
  const swipeableRef = useRef<Swipeable>(null);
  useEffect(() => {
    if (data.isReplayOrEditReset) {
      swipeableRef.current && swipeableRef.current.close();
    }
  }, [data.isReplayOrEditReset]);
  return (
    <Swipeable
      ref={swipeableRef}
      onSwipeableOpen={direction => {
        if (direction == 'right') {
          data.onRightSwipe &&
            data.onRightSwipe({...data.item, index: data.index});
        }
        if (direction == 'left') {
          data.onLeftSwipe &&
            data.onLeftSwipe({...data.item, index: data.index});
        }
      }}
      renderRightActions={() => (
        <View>
          <Text style={{color: 'transparent'}}>ok</Text>
        </View>
      )}
      renderLeftActions={() => (
        <View>
          <Text style={{color: 'transparent'}}>ok</Text>
        </View>
      )}>
      <Pressable
        onLayout={event =>
          data.onLayOut && data.onLayOut({...event, index: data.index})
        }
        style={[
          data.item.isSender
            ? styles.MessageViewStyleSender
            : styles.MessageViewStyleReceiver,
          data.item.reaction && {
            paddingBottom: pixelSizeVertical(10),
          },
          data.item.isLongPressForMessage && {
            backgroundColor: '#00000020',
          },
        ]}
        onLongPress={() =>
          data.onLongPress &&
          data.onLongPress({...data.item, index: data.index})
        }
        onPress={() => {
          swipeableRef.current && swipeableRef.current.close(),
            data.onPress && data.onPress({...data.item, index: data.index});
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {data.item.isSender && (
            <Pressable
              onPress={() =>
                data.onThreesDots &&
                data.onThreesDots({...data.item, index: data.index})
              }>
              <Image
                source={image.threedots}
                style={{
                  height: heightPixel(20),
                  width: heightPixel(20),
                  tintColor: '#5A5FEA',
                }}
              />
            </Pressable>
          )}
          <View
            style={[
              data.item.isSender
                ? styles.MessageSenderChildView
                : styles.MessageReceiverChildView,
            ]}>
            <Text
              style={[
                data.item.isSender
                  ? styles.SenderMessageText
                  : styles.ReceiverMessageText,
              ]}>
              {data.item.message}
            </Text>
            <Text
              style={[
                {
                  alignSelf: 'flex-end',
                  fontSize: fontPixel(10),
                  fontFamily: popnisfont.PoppinsRegular,
                  color: 'black',
                },
                data.item.reaction &&
                  data.item.isSender && {marginBottom: pixelSizeVertical(4)},
              ]}>
              {data.item.time}
            </Text>
          </View>
          {!data.item.isSender && (
            <Pressable
              onPress={() =>
                data.onThreesDots &&
                data.onThreesDots({...data.item, index: data.index})
              }>
              <Image
                source={image.threedots}
                style={{
                  height: heightPixel(20),
                  width: heightPixel(20),
                  tintColor: '#5A5FEA',
                }}
              />
            </Pressable>
          )}
        </View>
        {data.item.reaction && (
          <View
            style={[
              styles.ReactionRound,
              data.item.isSender
                ? {
                    right: pixelSizeHorizontal(20),
                    bottom: heightPixel(-6),
                  }
                : {
                    left: pixelSizeHorizontal(20),
                    bottom: heightPixel(-6),
                  },
            ]}>
            <Text style={{color: 'pink', fontSize: fontPixel(16)}}>
              {data.item.reaction}
            </Text>
          </View>
        )}
      </Pressable>
    </Swipeable>
  );
});

const styles = StyleSheet.create({
  HeaderBox: {
    height: heightPixel(120),
    borderBottomRightRadius: heightPixel(20),
    borderBottomLeftRadius: heightPixel(20),
    backgroundColor: '#5A5FEA',
    paddingTop: pixelSizeVertical(50),
  },
  HeaderView: {
    height: heightPixel(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  replayBox: {
    height: heightPixel(64),
    paddingVertical: pixelSizeVertical(20),
    marginVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(10),
    borderRadius: heightPixel(50),
    width: widthPixel(365),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#B0B0B025',
  },
  HeaderProfile: {
    height: heightPixel(50),
    width: heightPixel(50),
    borderRadius: heightPixel(50),
    borderWidth: heightPixel(3),
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5FEA25',
  },
  Time: {
    color: 'white',
    fontFamily: popnisfont.PoppinsMedium,
    fontSize: fontPixel(14),
  },
  TimeStemp: {
    color: 'white',
    fontFamily: popnisfont.PoppinsRegular,
    fontSize: fontPixel(10),
    textAlign: 'right',
  },
  UserName: {
    color: 'white',
    fontFamily: popnisfont.PoppinsMedium,
    fontSize: fontPixel(18),
  },
  Online: {
    color: 'white',
    fontFamily: popnisfont.PoppinsRegular,
    fontSize: fontPixel(12),
  },
  ChatBox: {
    // height: heightPixel(64),
    paddingVertical: 6,
    width: widthPixel(390),
    borderWidth: heightPixel(1),
    borderRadius: heightPixel(32),
    borderColor: '#D8E0F1',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: heightPixel(30),
    paddingHorizontal: pixelSizeHorizontal(6),
  },
  SearchInputView: {
    height: heightPixel(40),
    flex: 1,
    paddingLeft: pixelSizeHorizontal(14),
    fontSize: fontPixel(14),
  },
  sendIcon: {
    height: heightPixel(44),
    width: heightPixel(44),
    borderRadius: heightPixel(32),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5FEA25',
  },
  FilterBox: {
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(14),
    paddingVertical: pixelSizeVertical(14),
    borderRadius: heightPixel(20),
    position: 'absolute',
    backgroundColor: 'white',
    ...commanStyle.boxShadow,
    right: pixelSizeHorizontal(20),
    top: pixelSizeVertical(100),
  },
  ThreeDotsBox: {
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    position: 'absolute',
    backgroundColor: 'white',
    ...commanStyle.boxShadow,
    zIndex: 99999,
  },
  ThreeDotsText: {
    fontSize: fontPixel(10),
    color: 'black',
    margin: 2,
    fontFamily: popnisfont.PoppinsRegular,
  },
  FilterText: {
    fontSize: heightPixel(16),
    color: 'black',
    margin: 6,
    fontFamily: popnisfont.PoppinsRegular,
  },
  MessageViewStyleSender: {
    paddingHorizontal: pixelSizeHorizontal(14),
    marginVertical: pixelSizeVertical(10),
    alignItems: 'flex-end',
  },
  MessageViewStyleReceiver: {
    paddingHorizontal: pixelSizeHorizontal(14),
    marginVertical: pixelSizeVertical(10),
    alignItems: 'flex-start',
  },
  MessageSenderChildView: {
    backgroundColor: '#246BFD50',
    borderTopLeftRadius: pixelSizeHorizontal(16),
    borderBottomLeftRadius: heightPixel(16),
    borderBottomRightRadius: heightPixel(16),
    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(20),
    maxWidth: widthPixel(310),
  },
  MessageReceiverChildView: {
    backgroundColor: 'white',
    borderTopRightRadius: pixelSizeHorizontal(16),
    borderBottomLeftRadius: heightPixel(16),
    borderBottomRightRadius: heightPixel(16),
    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(20),
    maxWidth: widthPixel(310),
  },
  SenderMessageText: {
    fontFamily: popnisfont.PoppinsRegular,
    fontSize: fontPixel(16),
    color: 'black',
  },
  ReceiverMessageText: {
    fontFamily: popnisfont.PoppinsRegular,
    fontSize: fontPixel(16),
    color: 'black',
  },
  ReactionRound: {
    height: heightPixel(30),
    width: heightPixel(30),
    borderRadius: heightPixel(15),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: heightPixel(2)},
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: heightPixel(4),
      },
    }),
  },
});
