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
    uniqid?: string;
}

export interface IOrderTypes {
    _id: string;
    name: string;
    ingredients: Array<string>;
    number: number;
    status: string;
    visibleStatus?: boolean;
    updatedAt: string;
    createdAt: string;
}

