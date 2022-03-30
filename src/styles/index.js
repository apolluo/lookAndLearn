import {StyleSheet} from 'react-native';

export const layoutStyles = StyleSheet.create({
  box: {
    width: '100%',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
export const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cover: {
    width: 66,
    height: 80,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export const homeStyles = StyleSheet.create({});
