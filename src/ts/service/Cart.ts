import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (item.count) {
            const index = this._items.findIndex((el) => el.id === item.id);

            if (index === -1) {
                this._items.push(item);
            } else {
                this._items[index].price += item.price;
            }            
        } else {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumPrice(discount: number = 0):number {
        let total: number = 0;
        for (const iterator of this._items) {
            total += iterator.price;
        }
        return total - total * (discount / 100);
    }

    deliteId(id: number): void {
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].id === id) {
                this._items.splice(i, 1);
                break;
            }
        }                
    }
    
}
