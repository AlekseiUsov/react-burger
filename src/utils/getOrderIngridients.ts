import { getElement } from "./getElement";
import { ICardTypes } from "./propsType";

export const getOrderIngridients = (
  ids: Array<string | null>,
  ingridients: ICardTypes[]
): ICardTypes[] => {
  const ingridientsList = ids.reduce((acc: ICardTypes[], id) => {
    const current = getElement(id, ingridients);
    return [...acc, current];
  }, []);

  const bun = ingridientsList.filter(
    (el) => el !== undefined && el.type === "bun"
  )[0];
  const others = ingridientsList.filter(
    (el) => el !== undefined && el.type !== "bun"
  );

  const totalIngredientsList = bun ? [bun, ...others] : [...others];

  return totalIngredientsList;
};
