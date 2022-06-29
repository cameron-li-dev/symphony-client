import ICrosshairConfig from "./ICrosshairConfig";

export interface ICrosshair {
    title: string;
    config: ICrosshairConfig;
}

export interface ICrosshairImport {
    title: string;
    config: string;
}

export default ICrosshair;
