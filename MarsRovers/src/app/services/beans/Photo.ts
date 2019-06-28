/* tslint:disable:variable-name */
import { PhotoCamera } from './PhotoCamera';
import { Rover } from './Rover';

export class Photo {
  constructor(
    private id: number,
    private sol: number,
    private camera: PhotoCamera,
    private img_src: string,
    private earth_date: string,
    private rover: Rover
  ) { }
}
