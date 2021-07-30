import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native';
// import { useInjection } from 'inversify-react';
import { MainStackNavProps } from '../../components/navigationComponents/stacks/MainStack';
// import { UserService } from '../../services/UserService';
import { HomeViewModel } from '../../viewModels/HomeViewModel';

interface HomeScreenProps extends MainStackNavProps<'Home'> {
  viewModel: HomeViewModel;
}

const HomeScreen: React.FC<HomeScreenProps> = (props: HomeScreenProps) => {
  const [username, setUsername] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  // Dependency Injection hook
  // const userService = useInjection(UserService);

  useEffect(() => {
    props.viewModel.getUsername().then(name => setUsername(name));
  }, [props.viewModel, props.viewModel.getUsername]);

  useEffect(() => {
    props.viewModel
      .getConnection()
      .then(isNetworkAvailable => setIsConnected(isNetworkAvailable));
  }, [props.viewModel, props.viewModel.getConnection]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Home Screen</Text>
        <View style={styles.interViewMargin} />
        <Text style={styles.title}>Username</Text>
        <Text style={styles.subtitle}>{username}</Text>
        <Text style={styles.title}>Is Connected to Internet?</Text>
        <Text style={styles.subtitle}>{isConnected ? 'Yes' : 'No'}</Text>
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

export default HomeScreen;
