import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentWhereInput = {
  client?: ClientWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  time?: StringNullableFilter;
};
