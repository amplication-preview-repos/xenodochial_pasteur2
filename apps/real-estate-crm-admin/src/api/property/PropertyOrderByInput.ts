import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  address?: SortOrder;
  agent?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  size?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
