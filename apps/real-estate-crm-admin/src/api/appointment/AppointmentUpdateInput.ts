import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type AppointmentUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  location?: string | null;
  time?: string | null;
};
