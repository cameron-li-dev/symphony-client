export enum crosshairColour {
    "White",
    "Green",
    "Yellow Green",
    "Green Yellow",
    "Yellow",
    "Cyan",
    "Pink",
    "Red"
}

export interface ICrosshairOutlines {
    outlinesEnabled: boolean;
    outline: {
        outlineOpacity: number;
        outlineThickness: number;
    }
}

export interface ICrosshairCenterDot {
    dotEnabled: boolean;
    dot: {
        centerDotOpacity: number;
        centerDotThickness: number;
    }
}

export interface ICrosshairLines {
    linesEnabled: boolean;
    lines: {
        lineOpacity: number;
        lineLength: number;
        lineThickness: number;
        lineOffset: number;
        movementErrorEnabled: boolean;
        movementError: {
            multiplier: number;
        }
        firingErrorEnabled: boolean;
        firingError: {
            multiplier: number;
        }
    }
}

export interface ICrosshairConfig {
    colour: string;
    outlines: ICrosshairOutlines;
    overrideOffset: boolean;
    centerDot: ICrosshairCenterDot;
    innerLines: ICrosshairLines;
    outerLines: ICrosshairLines;
}
export default ICrosshairConfig;
