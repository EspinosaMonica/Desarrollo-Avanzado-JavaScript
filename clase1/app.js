const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    // Simulando la preparación del pedido usando setTimeout dentro de una Promise
    await new Promise(resolve => {
        const preparationTime = Math.floor(Math.random() * 5000) + 1000; // tiempo aleatorio entre 1 y 5 segundos
        setTimeout(() => {
            resolve();
        }, preparationTime);
    });

    // Una vez el pedido se completa, se actualiza el estado
    updateOrderStatus(order, 'Completado');
}
