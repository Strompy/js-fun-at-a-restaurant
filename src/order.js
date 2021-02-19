function takeOrder(newOrder, orders) {
  if (orders.length <= 2) {
    orders.push(newOrder);
  }
}

function refundOrder(toRemove, orders) {
  const orderIndex = (order) => order.orderNumber === toRemove;
  let i = orders.findIndex(orderIndex);
  orders.splice(i, 1);
}

function listItems(orders) {
  let names = []
  const orderNames = (order) => names.push(order.item)
  orders.forEach(orderNames);
  return names.join(', ');
}

function searchOrder(orders, item) {
  let bool = false;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].item === item) {
      bool = true;
    }
  }
  return bool;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
