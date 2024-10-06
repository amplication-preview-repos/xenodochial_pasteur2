import { SortOrder } from "../../util/SortOrder";

export type AgentAssignmentOrderByInput = {
  agentName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isPrimary?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
