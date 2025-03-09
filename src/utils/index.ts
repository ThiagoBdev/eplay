import { Game } from '../pages/Home'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.prices.current || 0)
  }, 0)
}
