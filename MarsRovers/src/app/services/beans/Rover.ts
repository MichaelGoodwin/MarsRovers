/* tslint:disable:variable-name */
import { RoverCamera } from './RoverCamera';

export class Rover {
  constructor(
    private id: number,
    private name: string,
    private landing_date: string,
    private launch_date: string,
    private status: string,
    private max_sol: number,
    private max_date: string,
    private total_photos: number,
    private cameras: RoverCamera[]
  ) { }
}
