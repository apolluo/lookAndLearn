import {StyleSheet} from 'react-native';

export const layoutStyles = StyleSheet.create({
  fullBox: {
    width: '100%',
  },
  content: {
    width: '100%',
    padding: 5,
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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  border: {
    borderWidth: 1,
  },
  titleLg: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  padding5: {
    padding: 5,
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
