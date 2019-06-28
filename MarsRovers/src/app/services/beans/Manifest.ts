/* tslint:disable:variable-name */
import { ManifestPhoto } from './ManifestPhoto';

export class Manifest {
  constructor(
    private name: string,
    private landing_date: string,
    private launch_date: string,
    private status: string,
    private max_sol: number,
    private max_date: string,
    private total_photos: number,
    private photos: ManifestPhoto[]
  ) { }
}
