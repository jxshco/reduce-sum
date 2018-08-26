import reduceSum from '../src'

test('Basic Example Sums Key', () => {
  expect(reduceSum([{ a: 139, c: 22 }, { a: 233, b: 'hi' }, { a: 112, b: 18 }], 'a')).toBe(484)
})

test('Missing Key Doesnt Throw', () => {
  expect(reduceSum([{ a: 139, c: 22 }, { a: 233, b: 'hi' }, { b: 18 }], 'a')).toBe(372)
})

test('Cart Example', () => {
  let cart = [{ name: 'Jeans', quantity: 1 }, { name: 'Socks', quantity: 3 }, { name: 'T-Shirt', quantity: 6 }]
  let totalItems = reduceSum(cart, 'quantity')
  expect(totalItems).toEqual(10)
})

test('Cart Example Empty doesnt throw', () => {
  let cart = []
  let totalItems = reduceSum(cart, 'quantity')
  expect(totalItems).toEqual(0)
})
