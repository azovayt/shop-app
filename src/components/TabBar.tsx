import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type TabScreenOptions = {
  name: string;
  title: string;
  iconName: string;
  headerShown?: boolean;
};

type TabBarIconProps = {
  color: string;
  size: number;
  focused: boolean;
};

export const getTabScreenOptions = ({ name, title, iconName, headerShown = true }: TabScreenOptions) => ({
  title: title,
  header: headerShown
    ? () => (
        <View style={{ height: 60, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>{title}</Text>
        </View>
      )
    : undefined,
  headerShown: headerShown,
  tabBarIcon: ({ color, size, focused }: TabBarIconProps) => {
    return <Icon name={focused ? iconName : `${iconName}-outline`} color={color} size={size} />;
  },
});