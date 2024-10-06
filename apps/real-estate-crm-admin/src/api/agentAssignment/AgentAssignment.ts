import { Property } from "../property/Property";

export type AgentAssignment = {
  agentName: string | null;
  createdAt: Date;
  id: string;
  isPrimary: boolean | null;
  property?: Property | null;
  updatedAt: Date;
};
