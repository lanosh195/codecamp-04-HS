import { ChangeEvent } from "react";

export interface IBoardWirteProps {
  isEdit: boolean;
  data?: any; //?
}

export interface IMyVariables {
  number: number;
  writer?: string; //? << 있을수도 없을수도 있는 값
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  aaa: (event: ChangeEvent<HTMLInputElement>) => void;
  bbb: () => void;
  ccc: (event: ChangeEvent<HTMLInputElement>) => void;
  ddd: (event: ChangeEvent<HTMLInputElement>) => void;
  fff: boolean;
  isEdit: boolean;
  xxx: () => void;
  data: any;
}

export interface IProps {
  xxx: boolean;
}
