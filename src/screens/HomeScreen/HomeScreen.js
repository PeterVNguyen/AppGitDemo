/**
 * @author: Nguyen Van Viet
 * @email: vietqb9779@gmail.com
 */
import React, { Component, } from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { IconAssets, } from 'src/assets';

import ModalLoading from 'src/components/ModalLoading';
import CardRepos from './CardRepos/CardRepos';
import PropTypes from 'prop-types';

export default class HomeScreen extends Component {
  static propTypes = {
    onSearchRequest: PropTypes.func.isRequired, //no change
    onSearchStringChange: PropTypes.func.isRequired, // no chane

    isLoading: PropTypes.bool.isRequired, //will change
    nameSearchChange: PropTypes.string.isRequired, //will changed
    dataApp: PropTypes.array.isRequired, //will changed
  };

  shouldComponentUpdate({ nameSearchChange, isLoading, }) {
    return (
      this.props.nameSearchChange !== nameSearchChange ||
      this.props.isLoading !== isLoading
    );
  }

  render() {
    const {
      onSearchRequest,
      onSearchStringChange,
      isLoading,
      nameSearchChange,
      dataApp,
    } = this.props;

    return (
      <View style={styles.conainter}>
        <View style={styles.containerSearch}>
          <View style={styles.wapperInput}>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textInput}
              placeholder="Enter user name on Github"
              value={nameSearchChange}
              onChangeText={onSearchStringChange}
              onSubmitEditing={onSearchRequest}
            />

            <TouchableOpacity onPress={onSearchRequest}>
              <Image
                source={IconAssets.SearchIcon}
                style={{ tintColor: '#009688', height: 30, width: 30, }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={dataApp}
            renderItem={({ item, }) => <CardRepos data_res={item} />}
            keyExtractor={(item) => item.id + ''}
            refreshing={isLoading}
            onRefresh={onSearchRequest}
          />
        </View>
        <ModalLoading visible={isLoading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conainter: {
    flex: 1,
  },
  containerSearch: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 60,

    paddingLeft: 8,
    paddingRight: 8,

    backgroundColor: '#009688',
  },
  wapperInput: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 5,
    paddingRight: 15,
    paddingLeft: 15,

    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    height: 38,

    fontSize: 16,

    marginRight: 16,
    margin: 3,

    backgroundColor: '#fff',
  },
});
