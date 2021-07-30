import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { MainStackNavProps } from '../../components/navigationComponents/stacks/MainStack';
import {
  UserInfoObserver,
  UserInfoViewModel,
} from '../../viewModels/UserInfoViewModel';

interface UserInfoScreenProps extends MainStackNavProps<'UserInfo'> {
  viewModel: UserInfoViewModel;
}

const UserInfoScreen: React.FC<UserInfoScreenProps> = (
  props: UserInfoScreenProps,
) => {
  const [address, setAddress] = useState<string>('');

  //Initialise UserInfoObserver with update method as a listener method
  const observer: UserInfoObserver = {
    update(observable) {
      if (observable instanceof UserInfoViewModel) {
        if (props.viewModel.address.length > 0) {
          setAddress(props.viewModel.address);
        }
      }
    },
  };

  useEffect(() => {
    // Subscribe on mount
    props.viewModel.subscribe(observer);

    // Unsubscribe on unmount
    return () => props.viewModel.unsubscribe(observer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>User Info Screen</Text>
        <View style={styles.interViewMargin} />
        <Text style={styles.title}>Address</Text>
        <Text style={styles.subtitle}>{address}</Text>
        <View style={styles.interViewMargin} />
        <Button
          title={'Update Address'}
          onPress={() => props.viewModel.updateAddress('Gemas')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  subtitle: {
    fontWeight: '300',
    fontSize: 14,
  },
  interViewMargin: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default UserInfoScreen;
