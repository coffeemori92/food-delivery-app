import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import EachOrder from '../components/EachOrder';
import {Order} from '../slices/orderSlice';
import {RootState} from '../store/reducer';

function Orders() {
  const orders = useSelector((state: RootState) => state.order.orders);
  const renderItem = useCallback(({item}: {item: Order}) => {
    return <EachOrder item={item} />;
  }, []);

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={item => item.orderId}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Orders;
