import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  tabBoard: {
  	flexDirection: 'row',
  	height: 35,
  	backgroundColor: '#fff',
  	borderBottomColor: '#ddd'
  },
  tabItem: {
  	justifyContent: 'center',
  	alignItems: 'center',
  	width: 100,
  	height: 35,
  	borderBottomColor: 'transparent',
  	borderBottomWidth: 3
  },
  tabItemCurrent: {
    borderBottomColor: '#23b8ff',
    borderBottomWidth: 3
  },
  tabItemText: {
  	fontSize: 14
  },
  tabItemTextCurrent: {
  	color: '#23b8ff'
  }
});


export default styles;