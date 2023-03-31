import { getElement } from "./getElement";
import { ICardTypes } from "./propsType";

export const getOrderIngridients = (numbersOfIngridients: string[], ingridients: ICardTypes[]) =>
    numbersOfIngridients.reduce((acc: ICardTypes[], ingredient) => {
        const current = getElement(ingredient, ingridients);
        return [...acc, current];
    }, []);
