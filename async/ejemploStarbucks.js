let pedido1 = {
    nombre: 'Caffe Vanilla',
    tipo: 'Bebida Caliente',
    cliente: 'Robert'    
};

let pedido2 = {
    nombre: 'Cold Brew',
    tipo: 'Bebida Fria',
    cliente: 'Pablo'
};

function pedidosStarbucks(pedido, callbackCliente){
    switch (pedido.nombre) {
        case 'Caffe Vanilla':
            setTimeout(() => {
                callbackCliente(pedido)
            }, 4 * 1000);
            break;        
        case 'Cold Brew':
            setTimeout(() => {
                callbackCliente(pedido)
            }, 2 * 1000);
            break;    
        default:
            break;
    }
}

pedidosStarbucks(pedido1, function(pedido) {
    console.log(`${pedido.nombre} finalizado llamar a: ${pedido.cliente}`);
});

pedidosStarbucks(pedido2, pedido => {
    console.log(`${pedido.nombre} finalizado llamar a: ${pedido.cliente}`);
});



