import {
  IProductAttributes,
  IProductSResponse,
} from "../../data/interface/product.interface";
import { server } from "../server";

export const bulkUpdateProducts = (input: IProductAttributes[]) => {
  return server.put<IProductSResponse>("/api/products", input);
};
