import IResponse from "./response.interfacae";

export interface IProductAttributes {
  code: string;
  name: string;
  quantity: number;
  description: string;
  is_active: number;
}

export interface IProductCreationAttributes
  extends Omit<IProductAttributes, "is_active"> {
  is_active: boolean;
}
export interface IProductUpdateAttributes extends Partial<IProductAttributes> {}
export interface IProductSResponse extends IResponse<IProductAttributes[]> {}
