import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  agent?: string | null;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
  price?: number | null;
  size?: number | null;
  typeField?: "Option1" | null;
};
