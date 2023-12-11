export default interface Buyable {
    readonly id: number,
    readonly name: string,
    price: number,
    readonly count: boolean,
}