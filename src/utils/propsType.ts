export interface ICardTypes {
    _id: string;
    type: 'bun' | 'main' | 'sauce';
    name: string;
    image: string;
    image_large: string;
    image_mobile: string;
    proteins: number;
    calories: number;
    fat: number;
    carbohydrates: number;
    price: number;
}
