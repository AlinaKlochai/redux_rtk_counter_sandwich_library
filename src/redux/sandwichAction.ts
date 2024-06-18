//actions для add или remove ингредиентов
type SandwichAction =
  | { type: 'sandwich/add', payload: string }
  | { type: 'sandwich/remove' }

export default SandwichAction;
