type SelectedObjType = {
  0: boolean;
  1: boolean;
  2: boolean;
  3: boolean;
};

type SetSelectedObjType = (
  value: React.SetStateAction<SelectedObjType>
) => void;

type SetIndexType = (value: React.SetStateAction<number>) => void;


export const initialState = {
  0: true,
  1: false,
  2: false,
  3: false,
}

export const toggleAppearnce = (
  index: number,
  order: number,
  selectedObj: SelectedObjType,
  setSelectedObj: SetSelectedObjType,
  setIndex: SetIndexType
) => {
  if (selectedObj[order as keyof typeof selectedObj] === false)
    setSelectedObj({
      ...selectedObj,
      [order]: true,
      [index]: false,
    });
  setIndex(order);
};



