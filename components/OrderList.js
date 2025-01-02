export function OrderList({ pedidos }) {
  return (
    <ul className="space-y-6">
      {pedidos.map((pedido) => (
        <li key={pedido.id} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold">{pedido.nome}</h2>
          <p className="text-gray-600">Quantidade: {pedido.quantidade}</p>
        </li>
      ))}
    </ul>
  );
}
