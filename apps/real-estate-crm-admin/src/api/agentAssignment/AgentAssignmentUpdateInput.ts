import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agentName?: string | null;
  isPrimary?: boolean | null;
  property?: PropertyWhereUniqueInput | null;
};
