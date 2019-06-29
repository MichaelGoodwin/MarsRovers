/* tslint:disable:variable-name */
import { PhotoCamera } from './PhotoCamera';
import { Rover } from './Rover';

export interface Photo {
  id: number;
  sol: number;
  camera: PhotoCamera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}
