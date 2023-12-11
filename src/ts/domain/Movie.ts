import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
		readonly id: number,
		readonly name: string,
		readonly price: number,
        readonly год: number,
        readonly страна: string,
        readonly слоган: string,
        readonly жанр: Array<any>,
        readonly время: string,
		readonly count: boolean
        ) {
    }
}
