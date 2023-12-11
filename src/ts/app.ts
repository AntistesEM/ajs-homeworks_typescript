import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Phone from './domain/Phone';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false));
cart.add(new Movie(10, 'Мстители', 100, 2008, 'Россия', 'Что-то', ['боевик', 'комедия'], '137 мин. / 02:17', false));
cart.add(new Phone(200, 'iphone6', 5000, true));
cart.add(new Phone(200, 'iphone6', 5000, true));
cart.add(new Phone(202, 'iphone7', 7000, true));

console.log(cart.items);
console.log(cart.sumPrice());
console.log(cart.sumPrice(25));
cart.deliteId(1008);
console.log(cart.items);
