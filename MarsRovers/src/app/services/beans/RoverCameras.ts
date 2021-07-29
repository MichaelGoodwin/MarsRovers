import { Cameras } from './Cameras';

export const RoverCameras = {
  CURIOSITY: [Cameras.FHAZ, Cameras.RHAZ, Cameras.MAST, Cameras.CHEMCAM, Cameras.MAHLI, Cameras.MARDI, Cameras.NAVCAM],
  OPPORTUNITY: [Cameras.FHAZ, Cameras.RHAZ, Cameras.NAVCAM, Cameras.PANCAM, Cameras.MINITES],
  SPIRIT: [Cameras.FHAZ, Cameras.RHAZ, Cameras.NAVCAM, Cameras.PANCAM, Cameras.MINITES],
  PERSEVERANCE: [Cameras.EDL_RUCAM, Cameras.EDL_RDCAM, Cameras.EDL_DDCAM, Cameras.EDL_PUCAM1, Cameras.EDL_PUCAM2,
    Cameras.NAVCAM_LEFT, Cameras.NAVCAM_RIGHT, Cameras.MCZ_RIGHT, Cameras.MCZ_LEFT, Cameras.FRONT_HAZCAM_LEFT_A,
    Cameras.FRONT_HAZCAM_RIGHT_A, Cameras.REAR_HAZCAM_LEFT, Cameras.REAR_HAZCAM_RIGHT, Cameras.SKYCAM,
    Cameras.SHERLOC_WATSON, Cameras.SUPERCAM_RMI]
};
