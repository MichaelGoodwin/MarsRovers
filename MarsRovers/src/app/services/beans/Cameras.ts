// tslint:disable:max-line-length
import { CameraDescription } from './CameraDescription';

export class Cameras {
  static readonly FHAZ: CameraDescription = {name: 'FHAZ', full_name: 'Front Hazard Avoidance Camera',
    description: 'The Front Hazard Avoidance Camera (FHAZ) is used to take pictures of the path in front of the rover. The Hazard cameras are used to check for potential hazards to the rover as well as determine the safest path forwards'};
  static readonly RHAZ: CameraDescription = {name: 'RHAZ', full_name: 'Rear Hazard Avoidance Camera',
    description: 'The Rear Hazard Avoidance Camera (RHAZ) is used to take pictures of the path behind the rover. The Hazard cameras are used to check for potential hazards to the rover as well as determine the safest path backwards'};
  static readonly MAST: CameraDescription = {name: 'MAST', full_name: 'Mast Camera',
    description: 'The Mast Camera takes color images and video footage of the Martian terrain which can be stitched together to create panoramas. The images taken by this camera are used to study the Martian landscape, rocks, and soils; view frost and weather phenomena; and support the driving and sampling operations of the rover.'};
  static readonly CHEMCAM: CameraDescription = {name: 'CHEMCAM', full_name: 'Chemistry and Camera Complex',
    description: 'The Chemistry and Camera Complex (ChemCam) fires a laser and analyzes the elemental composition of vaporized materials from areas smaller than 0.04 inch (1 millimeter) on the surface of Martian rocks and soils. An on-board spectrograph analyzes the vaporized materials for specific minerals and microstructures by measuring the composition of the resulting plasma'};
  static readonly MAHLI: CameraDescription = {name: 'MAHLI', full_name: 'Mars Hand Lens Imager',
    description: 'The Mars Hand Lens Imager (MAHLI) is used to take microscopic images of minerals, textures, and structures in rocks and soil at scales smaller than the diameter of a human hair. This provides earthbound scientists with close-up views of the martian samples and helps them select samples for further investigation.'};
  static readonly MARDI: CameraDescription = {name: 'MARDI', full_name: 'Mars Descent Imager',
    description: 'The Mars Descent Imager (MARDI) took pictures during the spacecrafts descent through the Martian atmosphere at a rate of 4 frames per second. This produced a color video providing a view of the local environment near the landing site.'};
  static readonly NAVCAM: CameraDescription = {name: 'NAVCAM', full_name: 'Navigation Camera',
    description: 'The Navigation Camera (Navcam) is a stereo pair of cameras, each with a 45-degree field of view to support ground navigation planning by scientists and engineers. They work in cooperation with the Hazcams by providing a complementary view of the terrain.'};
  static readonly PANCAM: CameraDescription = {name: 'PANCAM', full_name: 'Panoramic Camera',
    description: 'The Panoramic Camera (Pancam) is actually two cameras which work together to create panoramic color images of the sun, the sky, and the martian surface. These cameras are located on a "camera bar" that sits on top of the mast of the rover.'};
  static readonly MINITES: CameraDescription = {name: 'MINITES', full_name: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    description: 'The Miniature Thermal Emission Spectrometer (Mini-TES) measures the different spectrums of infrared light, or heat, emitted from different minerals in rocks and soils. The Mini-TES is specially tuned to look for minerals formed in water.'};
}
