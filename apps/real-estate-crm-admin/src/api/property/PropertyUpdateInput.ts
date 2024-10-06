import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agent?: string | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
  price?: number | null;
  size?: number | null;
  typeField?: "Option1" | null;
};
