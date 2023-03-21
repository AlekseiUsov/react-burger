import { ICardTypes } from "./propsType";

export const getElement = (num: string, col: ICardTypes[]): ICardTypes => {
    return col.filter((el) => el._id === num)[0];
};
