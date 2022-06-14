export type crosshairColour = "White"|"Green"|"Yellow Green"|"Green Yellow"|"Yellow"|"Cyan"|"Pink"|"Red";

export interface ICrosshairOutlines {
    outlineOpacity: number;
    outlineThickness: number;
}

export interface ICrosshairCenterDot {
    centerDotOpacity: number;
    centerDotThickness: number;
}

export interface ICrosshairLines {
    lineOpacity: number;
    lineLength: number;
    lineThickness: number;
    lineOffset: number;
}

export interface ICrosshairConfig {
    colour: crosshairColour;
    outlines: ICrosshairOutlines;
    centerDot: ICrosshairCenterDot;
    innerLines: ICrosshairLines;
    outerLines: ICrosshairLines;
}
export default ICrosshairConfig;