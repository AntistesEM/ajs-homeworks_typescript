import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Phone from '../domain/Phone';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Проверяем add дублей', () => {
  const cart = new Cart();
  
  cart.add(new Phone(200, 'iphone6', 5000, true));
  cart.add(new Phone(200, 'iphone6', 5000, true));
  cart.add(new Phone(202, 'iphone7', 7000, true));

  expect(cart.items.length).toBe(2);
})

test('Проверяем deliteId', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false));
  cart.add(new Movie(10, 'Мстители', 100, 2008, 'Россия', 'Что-то', ['боевик', 'комедия'], '137 мин. / 02:17', false));

  cart.deliteId(1008);

  expect(cart.items.length).toBe(2);
})

test.each([
  [undefined, 3000],
  [25, 2250]
])('Проверяем суммирование', (discount, result) => {  
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false));
  cart.add(new Movie(10, 'Мстители', 100, 2008, 'Россия', 'Что-то', ['боевик', 'комедия'], '137 мин. / 02:17', false));

  expect(cart.sumPrice(discount)).toBe(result);
})