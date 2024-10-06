import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "location";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.location?.toString() || String(record.id);
};
