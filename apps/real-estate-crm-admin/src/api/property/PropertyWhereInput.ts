import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agent?: StringNullableFilter;
  agentAssignments?: AgentAssignmentListRelationFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  size?: IntNullableFilter;
  typeField?: "Option1";
};
