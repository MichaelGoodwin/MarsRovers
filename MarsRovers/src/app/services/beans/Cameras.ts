// tslint:disable:max-line-length
import { CameraDescription } from './CameraDescription';

export class Cameras {
  static readonly FHAZ: CameraDescription = {name: 'FHAZ', full_name: 'Front Hazard Avoidance Camera',
    description: 'The Front Hazard Avoidance Camera (FHAZ) is used to take pictures of the path in front of the rover. The Hazard cameras are used to check for potential hazards to the rover as well as determine the safest path forwards.'};
  static readonly RHAZ: CameraDescription = {name: 'RHAZ', full_name: 'Rear Hazard Avoidance Camera',
    description: 'The Rear Hazard Avoidance Camera (RHAZ) is used to take pictures of the path behind the rover. The Hazard cameras are used to check for potential hazards to the rover as well as determine the safest path backwards.'};
  static readonly MAST: CameraDescription = {name: 'MAST', full_name: 'Mast Camera',
    description: 'The Mast Camera takes color images and video footage of the Martian terrain which can be stitched together to create panoramas. The images taken by this camera are used to study the Martian landscape, rocks, and soils; view frost and weather phenomena; and support the driving and sampling operations of the rover.'};
  static readonly CHEMCAM: CameraDescription = {name: 'CHEMCAM', full_name: 'Chemistry and Camera Complex',
    description: 'The Chemistry and Camera Complex (ChemCam) fires a laser and analyzes the elemental composition of vaporized materials from areas smaller than 0.04 inch (1 millimeter) on the surface of Martian rocks and soils. An on-board spectrograph analyzes the vaporized materials for specific minerals and microstructures by measuring the composition of the resulting plasma.'};
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
// Perseverance Cameras
  static readonly EDL_RUCAM: CameraDescription = {name: 'EDL_RUCAM', full_name: 'Rover Up-Look Camera',
    description: 'The Entry, Descent, and Landing - Rover Up-Look Camera (EDL_RUCAM) is mounted on top of the rover and looks up at the descent stage.'};
  static readonly EDL_RDCAM: CameraDescription = {name: 'EDL_RDCAM', full_name: 'Rover Down-Look Camera',
    description: 'The Entry, Descent, and Landing - Rover Down-Look Camera (EDL_RDCAM) is mounted on the bottom of the rover and looks down at the surface.'};
  static readonly EDL_DDCAM: CameraDescription = {name: 'EDL_DDCAM', full_name: 'Descent Stage Down-Look Camera',
    description: 'The Entry, Descent, and Landing - Descent Stage Down-Look Camera (EDL_DDCAM) is mounted on the bottom of the descent stage and looks at the rover.'};
  static readonly EDL_PUCAM1: CameraDescription = {name: 'EDL_PUCAM1', full_name: 'Parachute Up-Look Camera A',
    description: 'The Entry, Descent, and Landing - Parachute Up-Look Camera A (EDL_PUCAM1) is mounted on the spacecraft\'s backshell and looks up at the parachute.'};
  static readonly EDL_PUCAM2: CameraDescription = {name: 'EDL_PUCAM2', full_name: 'Parachute Up-Look Camera B',
    description: 'The Entry, Descent, and Landing - Parachute Up-Look Camera B (EDL_PUCAM2) is mounted on the spacecraft\'s backshell and looks up at the parachute.'};
  static readonly NAVCAM_LEFT: CameraDescription = {name: 'NAVCAM_LEFT', full_name: 'Navigation Camera - Left',
    description: 'The Navigation Camera - Left (NAVCAM_LEFT) is a color stereo navigation camera mounted on the rover\'s mast and is used by scientists and engineers to safely navigate the martian terrain. The two NAVCAMs works in cooperation with the Hazcams by providing a complementary view of the terrain.'};
  static readonly NAVCAM_RIGHT: CameraDescription = {name: 'NAVCAM_RIGHT', full_name: 'Navigation Camera - Right',
    description: 'The Navigation Camera - Right (NAVCAM_RIGHT) is a color stereo navigation camera mounted on the rover\'s mast and is used by scientists and engineers to safely navigate the martian terrain. The two NAVCAMs works in cooperation with the Hazcams by providing a complementary view of the terrain.'};
  static readonly MCZ_RIGHT: CameraDescription = {name: 'MCZ_RIGHT', full_name: 'Mast Camera Zoom - Right',
    description: 'The Mast Camera Zoom - Right (MCZ_RIGHT) is mounted on the mast that stands up from the rover deck and takes color images, three-dimensional stereo images, and color video footage of the martian terrain and has a powerful zoom lens.'};
  static readonly MCZ_LEFT: CameraDescription = {name: 'MCZ_LEFT', full_name: 'Mast Camera Zoom - Left',
    description: 'The Mast Camera Zoom - Left (MCZ_LEFT) is mounted on the mast that stands up from the rover deck and takes color images, three-dimensional stereo images, and color video footage of the martian terrain and has a powerful zoom lens.'};
  static readonly FRONT_HAZCAM_LEFT_A: CameraDescription = {name: 'FRONT_HAZCAM_LEFT_A', full_name: 'Front Hazard Avoidance Camera - Left',
    description: 'The Front Hazard Avoidance Camera - Left (FRONT_HAZCAM_LEFT_A) is mounted to the front of the rover and is used to check for potential hazards to the rover as well as determine the safest path forwards. Engineers also use the array of Front Hazard Avoidance Cameras to see where to move the robotic arm to take measurements, photos, and collect rock and soil samples.'};
  static readonly FRONT_HAZCAM_RIGHT_A: CameraDescription = {name: 'FRONT_HAZCAM_RIGHT_A', full_name: 'Front Hazard Avoidance Camera - Right',
    description: 'The Front Hazard Avoidance Camera - Right (FRONT_HAZCAM_RIGHT_A) is mounted to the front of the rover and is used to check for potential hazards to the rover as well as determine the safest path forwards. Engineers also use the array of Front Hazard Avoidance Cameras to see where to move the robotic arm to take measurements, photos, and collect rock and soil samples.'};
  static readonly REAR_HAZCAM_LEFT: CameraDescription = {name: 'REAR_HAZCAM_LEFT', full_name: 'Rear Hazard Avoidance Camera - Left',
    description: 'The Rear Hazard Avoidance Camera - Left (REAR_HAZCAM_LEFT) is mounted to the back of the rover and is used to check for potential hazards to the rover as well as determine the safest path backwards.'};
  static readonly REAR_HAZCAM_RIGHT: CameraDescription = {name: 'REAR_HAZCAM_RIGHT', full_name: 'Rear Hazard Avoidance Camera - Right',
    description: 'The Rear Hazard Avoidance Camera - Right (REAR_HAZCAM_RIGHT) is mounted to the back of the rover and is used to check for potential hazards to the rover as well as determine the safest path backwards.'};
  static readonly SKYCAM: CameraDescription = {name: 'SKYCAM', full_name: 'MEDA Skycam',
    description: 'The Mars Environmental Dynamics Analyzer (MEDA) SkyCam is a sky-facing camera located on the top deck of the rover that is used for taking images and videos of clouds passing in the martian sky.'};
  static readonly SHERLOC_WATSON: CameraDescription = {name: 'SHERLOC_WATSON', full_name: 'SHERLOC WATSON Camera',
    description: 'The SHERLOC WATSON Camera (SHERLOC_WATSON) are two cameras that are mounted on the rover\'s robotic arm. The Scanning Habitable Environments with Raman & Luminesence for Organics and Chemicals (SHERLOC) is used to search for organics and minerals that have been altered by watery environments and may be signs of past microboial life. WATSON is a color camera that is used for taking close-up images of rock grains and surface textures.'};
  static readonly SUPERCAM_RMI: CameraDescription = {name: 'SUPERCAM_RMI', full_name: 'SuperCam Remote Micro-Imager',
    description: 'The SuperCam Remote Micro-Imager (SUPERCAM_RMI) is located at the top of the rover\'s mast and is used to examine rocks and soils with a camera, laser and spectrometers to seek organic compounds that could be related to past life on Mars. It can identify the chemical and mineral makeup of targets as small as a pencil point from a distance of more than 20 feet (7 meters).'};
}
