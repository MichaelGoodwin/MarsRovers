/* tslint:disable:variable-name */
import { RoverCamera } from './RoverCamera';

export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: RoverCamera[];
}
