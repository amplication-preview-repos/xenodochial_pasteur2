import { AgentAssignment } from "../agentAssignment/AgentAssignment";

export type Property = {
  address: string | null;
  agent: string | null;
  agentAssignments?: Array<AgentAssignment>;
  createdAt: Date;
  id: string;
  price: number | null;
  size: number | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
