import {
  IProductCreationAttributes,
  IProductSResponse,
} from "../../data/interface/product.interface";
import { server } from "../server";

export const bulkCreateProducts = (input: IProductCreationAttributes[]) => {
  return server.post<IProductSResponse>("/api/products", input);
};
