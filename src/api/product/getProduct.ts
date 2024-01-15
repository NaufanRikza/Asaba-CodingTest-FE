import { IProductSResponse } from "../../data/interface/product.interface";
import { server } from "../server";

export const getProducts = () => {
  return server.get<IProductSResponse>("/api/products");
};
