import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  coach_id: string;
  player_id: string;
  date: any;
  created_at?: any;
  updated_at?: any;

  user_appointment_coach_idTouser?: UserInterface;
  user_appointment_player_idTouser?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  coach_id?: string;
  player_id?: string;
}
