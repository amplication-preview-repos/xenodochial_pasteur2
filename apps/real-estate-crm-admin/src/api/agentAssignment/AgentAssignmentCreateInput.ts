import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentCreateInput = {
  agentName?: string | null;
  isPrimary?: boolean | null;
  property?: PropertyWhereUniqueInput | null;
};
