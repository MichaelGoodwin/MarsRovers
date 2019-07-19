import { RoverCamera } from '../services/beans/RoverCamera';


export class RoverPage {

  constructor(
    public name: string,
    public image: string,
    public wikiLink: string,
    public cameras: RoverCamera[],
    public descripition: string
  ) { }
}
