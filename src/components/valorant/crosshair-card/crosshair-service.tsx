import ICrosshair from "../../../data/interfaces/ICrosshair";
import {crosshairColour, ICrosshairOutlines} from "../../../data/interfaces/ICrosshairConfig";
import defaultCrosshair from "../../../data/default-crosshair.json";

export const getOutlines = (outlinesConfig: ICrosshairOutlines) => {
    if (outlinesConfig.outlinesEnabled) {
        if (outlinesConfig.outline.outlineOpacity > 0 && outlinesConfig.outline.outlineThickness > 0) {
            return {
                border: `${ outlinesConfig.outline.outlineThickness }px solid rgba(0, 0, 0, ${ outlinesConfig.outline.outlineOpacity })`
            }
        }
    }
    return {};
}

export const hasNextAttribute = (root: string, context: string) => {
    if (!context.startsWith(root)) {
        return false;
    }

    const comparison = context.substring(root.length);
    return comparison.includes(";");
}

export const extractKeyValue = (key: string, config: string, isFloat: boolean = false): number | null => {
    const context = config.substring(config.indexOf(key));
    let findValue = "";
    if (hasNextAttribute(key, context)) {
        findValue = context.substring(key.length, key.length + context.substring(key.length).indexOf(";"));
    } else {
        findValue = context.substring(key.length);
    }
    return isFloat ? parseFloat(findValue) : parseInt(findValue);
}

export const importCrosshair = (config: string) => {
    let imported: ICrosshair = JSON.parse(JSON.stringify(defaultCrosshair));
    if (config === "0") {
        return imported;
    }
    // show outlines: h;0 - turn off [default = on]
    if (config.includes(";h;0")) {
        imported.config.outlines.outlinesEnabled = false;
    } else {
        // outline opacity: o;float
        if (config.includes(";o;")) {
            const outlineOpacity = extractKeyValue(";o;", config, true);
            imported.config.outlines.outline.outlineOpacity = outlineOpacity !== null ? outlineOpacity : imported.config.outlines.outline.outlineOpacity;
        }
        // outline thickness: t;int
        if (config.includes(";t;")) {
            const outlineThickness = extractKeyValue(";t;", config);
            imported.config.outlines.outline.outlineThickness = outlineThickness !== null ? outlineThickness : imported.config.outlines.outline.outlineThickness;
        }
    }

    // colour - default none
    if (config.includes(";c;")) {
        const colour = extractKeyValue(";c;", config);
        imported.config.colour = (!!colour ? crosshairColour[colour] : imported.config.colour) as crosshairColour;
    }

    // show center dot: d;1 - turn on [default = off]
    if (config.includes(";d;1")) {
        imported.config.centerDot.dotEnabled = true;
        // center dot opacity: a;float
        if (config.includes(";a;")) {
            const centerDotOpacity = extractKeyValue(";a;", config, true);
            imported.config.centerDot.dot.centerDotOpacity = centerDotOpacity !== null ? centerDotOpacity : imported.config.centerDot.dot.centerDotOpacity
        }
        // center dot thickness: z:int
        if (config.includes(";z;")) {
            const centerDotThickness = extractKeyValue(";z;", config);
            imported.config.centerDot.dot.centerDotThickness = centerDotThickness !== null ? centerDotThickness : imported.config.centerDot.dot.centerDotThickness
        }
    }

    // override firing error offset with crosshair offset: m;1 - turn on [default = off]
    if (config.includes(";m;1")) {
        imported.config.overrideOffset = true;
    }

    // show inner line: 0b;0 - turn off [default = on]
    if (config.includes(";0b;0")) {
        imported.config.innerLines.linesEnabled = false;
    } else {
        // inner line opacity: 0a;float
        if (config.includes(";0a;")) {
            const lineOpacity = extractKeyValue(";0a;", config, true);
            imported.config.innerLines.lines.lineOpacity = lineOpacity !== null ? lineOpacity : imported.config.innerLines.lines.lineOpacity
        }
        // inner line length: 0l;int
        if (config.includes(";0l;")) {
            const lineLength = extractKeyValue(";0l;", config);
            imported.config.innerLines.lines.lineLength = lineLength !== null ? lineLength : imported.config.innerLines.lines.lineLength
        }
        // inner line thickness: 0t;int
        if (config.includes(";0t;")) {
            const lineThickness = extractKeyValue(";0t;", config);
            imported.config.innerLines.lines.lineThickness = lineThickness !== null ? lineThickness : imported.config.innerLines.lines.lineThickness
        }
        // inner line offset: 0o;int
        if (config.includes(";0o;")) {
            const lineOffset = extractKeyValue(";0o;", config);
            console.log("line offset", lineOffset);
            imported.config.innerLines.lines.lineOffset = lineOffset !== null ? lineOffset : imported.config.innerLines.lines.lineOffset
        }

        // inner line movement error: 0m;1 - turn on [default = off]
        if (config.includes(";0m;1")) {
            // inner line movement error multiplier: 0s;float
            if (config.includes(";0s;")) {
                const movementError = extractKeyValue(";0s;", config, true);
                imported.config.innerLines.lines.movementError.multiplier = movementError !== null ? movementError : imported.config.innerLines.lines.movementError.multiplier
            }
        }

        // inner line firing error: 0f;0 - turn off [default = on]
        if (config.includes(";0f;0")) {
            imported.config.innerLines.lines.firingErrorEnabled = false;
        } else {
            // inner line firing error multiplier: 0e;float
            if (config.includes(";0e;")) {
                const firingError = extractKeyValue(";0e;", config, true);
                imported.config.innerLines.lines.firingError.multiplier = firingError !== null ? firingError : imported.config.innerLines.lines.firingError.multiplier
            }
        }
    }

    // show outer line: 1b;0 - turn off [default = on]
    if (config.includes(";1b;0")) {
        imported.config.outerLines.linesEnabled = false;
    } else {
        // outer line opacity: 1a;float
        if (config.includes(";1a;")) {
            const lineOpacity = extractKeyValue(";1a;", config, true);
            imported.config.outerLines.lines.lineOpacity = lineOpacity !== null ? lineOpacity : imported.config.outerLines.lines.lineOpacity

        }
        // outer line length: 1l;int
        if (config.includes(";1l;")) {
            const lineLength = extractKeyValue(";1l;", config, true);
            imported.config.outerLines.lines.lineLength = lineLength !== null ? lineLength : imported.config.outerLines.lines.lineLength
        }
        // outer line thickness: 1t;int
        if (config.includes(";1t;")) {
            const lineThickness = extractKeyValue(";1t;", config);
            imported.config.outerLines.lines.lineThickness = lineThickness !== null ? lineThickness : imported.config.outerLines.lines.lineThickness
        }
        // outer line offset: 1o;int
        if (config.includes(";1o;")) {
            const lineOffset = extractKeyValue(";1o;", config);
            imported.config.outerLines.lines.lineOffset = lineOffset !== null ? lineOffset : imported.config.outerLines.lines.lineOffset
        }

        // outer line movement error: 1m;0 - turn off [default = on]
        if (config.includes(";1m;0")) {
            imported.config.outerLines.lines.movementErrorEnabled = false;
        } else {
            // outer line movement error multipler: 1s;float
            if (config.includes(";1s;")) {
                const movementError = extractKeyValue(";1s;", config, true);
                imported.config.outerLines.lines.movementError.multiplier = movementError !== null ? movementError : imported.config.outerLines.lines.movementError.multiplier
            }
        }

        // outer line firing error: 1f;0 - turn off [default = on]
        if (config.includes(";1f;0")) {
            imported.config.outerLines.lines.firingErrorEnabled = false;
        } else {
            // outer line firing error multiplier: 1e:float
            if (config.includes(";1e")) {
                const firingError = extractKeyValue(";1e;", config, true);
                imported.config.outerLines.lines.firingError.multiplier = firingError !== null ? firingError : imported.config.outerLines.lines.firingError.multiplier
            }
        }
    }

    return imported
}

export const exportCrosshair = (config: ICrosshair) => {
    const base: ICrosshair = JSON.parse(JSON.stringify(defaultCrosshair));
    let exportedString = "0";
    if (isCrosshairsEqual(config, base)) {
        return exportedString;
    }
    exportedString = exportedString + ";P;";

    // show outlines: h;0 - turn off [default = on]
    if (!config.config.outlines.outlinesEnabled) {
        exportedString = exportedString + "h;0;"
    } else {
        // outline opacity: o;float
        if (config.config.outlines.outline.outlineOpacity !== base.config.outlines.outline.outlineOpacity) {
            exportedString = exportedString + "o;" + config.config.outlines.outline.outlineOpacity + ";";
        }
        // outline thickness: t;int
        if (config.config.outlines.outline.outlineThickness !== base.config.outlines.outline.outlineThickness) {
            exportedString = exportedString + "t;" + config.config.outlines.outline.outlineThickness + ";";
        }
    }

    // colour - default none ;c;int
    if (config.config.colour !== base.config.colour) {
        exportedString = exportedString + "c;" + config.config.colour + ";";
    }

    // show center dot: d;1 - turn on [default = off]
    if (config.config.centerDot.dotEnabled) {
        exportedString = exportedString + "d;1;";

        // center dot opacity: a;float
        if (config.config.centerDot.dot.centerDotOpacity !== base.config.centerDot.dot.centerDotOpacity) {
            exportedString = exportedString + "a;" + config.config.centerDot.dot.centerDotOpacity + ";";
        }
        // center dot thickness: z:int
        if (config.config.centerDot.dot.centerDotThickness !== base.config.centerDot.dot.centerDotThickness) {
            exportedString = exportedString + "z;" + config.config.centerDot.dot.centerDotThickness + ";";
        }
    }

    // override firing error offset with crosshair offset: m;1 - turn on [default = off]
    if (config.config.overrideOffset) {
        exportedString = exportedString + "m;1;";
    }

    // show inner line: 0b;0 - turn off [default = on]
    if (!config.config.innerLines.linesEnabled) {
        exportedString = exportedString + "0b;0;";
    } else {
        // inner line opacity: 0a;float
        if (config.config.innerLines.lines.lineOpacity !== base.config.innerLines.lines.lineOpacity) {
            exportedString = exportedString + "0a;" + config.config.innerLines.lines.lineOpacity + ";";
        }
        // inner line length: 0l;int
        if (config.config.innerLines.lines.lineLength !== base.config.innerLines.lines.lineLength) {
            exportedString = exportedString + "0l;" + config.config.innerLines.lines.lineLength + ";";
        }
        // inner line thickness: 0t;int
        if (config.config.innerLines.lines.lineThickness !== base.config.innerLines.lines.lineThickness) {
            exportedString = exportedString + "0t;" + config.config.innerLines.lines.lineThickness + ";";
        }
        // inner line offset: 0o;int
        if (config.config.innerLines.lines.lineOffset !== base.config.innerLines.lines.lineOffset) {
            exportedString = exportedString + "0o;" + config.config.innerLines.lines.lineOffset + ";";
        }

        // inner line movement error: 0m;1 - turn on [default = off]
        if (config.config.innerLines.lines.movementErrorEnabled) {
            exportedString = exportedString + "0m;1;"
            // inner line movement error multiplier: 0s;float
            if (config.config.innerLines.lines.movementError.multiplier !== base.config.innerLines.lines.movementError.multiplier) {
                exportedString = exportedString + "0s;" + config.config.innerLines.lines.movementError.multiplier + ";";
            }
        }

        // inner line firing error: 0f;0 - turn off [default = on]
        if (!config.config.innerLines.lines.firingErrorEnabled) {
            exportedString = exportedString + "0f;0;"
            // inner line movement error multiplier: 0s;float
            if (config.config.innerLines.lines.firingError.multiplier !== base.config.innerLines.lines.firingError.multiplier) {
                exportedString = exportedString + "0e;" + config.config.innerLines.lines.firingError.multiplier + ";";
            }
        }
    }

    // show inner line: 1b;0 - turn off [default = on]
    if (!config.config.innerLines.linesEnabled) {
        exportedString = exportedString + "1b;0;";
    } else {
        // inner line opacity: 1a;float
        if (config.config.outerLines.lines.lineOpacity !== base.config.outerLines.lines.lineOpacity) {
            exportedString = exportedString + "1a;" + config.config.outerLines.lines.lineOpacity + ";";
        }
        // inner line length: 1l;int
        if (config.config.outerLines.lines.lineLength !== base.config.outerLines.lines.lineLength) {
            exportedString = exportedString + "1l;" + config.config.outerLines.lines.lineLength + ";";
        }
        // inner line thickness: 1t;int
        if (config.config.outerLines.lines.lineThickness !== base.config.outerLines.lines.lineThickness) {
            exportedString = exportedString + "1t;" + config.config.outerLines.lines.lineThickness + ";";
        }
        // inner line offset: 1o;int
        if (config.config.outerLines.lines.lineOffset !== base.config.outerLines.lines.lineOffset) {
            exportedString = exportedString + "1o;" + config.config.outerLines.lines.lineOffset + ";";
        }

        // inner line movement error: 1m;1 - turn on [default = off]
        if (config.config.outerLines.lines.movementErrorEnabled) {
            exportedString = exportedString + "1m;1;"
            // inner line movement error multiplier: 1s;float
            if (config.config.outerLines.lines.movementError.multiplier !== base.config.outerLines.lines.movementError.multiplier) {
                exportedString = exportedString + "1s;" + config.config.outerLines.lines.movementError.multiplier + ";";
            }
        }

        // inner line firing error: 1f;0 - turn off [default = on]
        if (!config.config.outerLines.lines.firingErrorEnabled) {
            exportedString = exportedString + "1f;0;"
            // inner line movement error multiplier: 1s;float
            if (config.config.outerLines.lines.firingError.multiplier !== base.config.outerLines.lines.firingError.multiplier) {
                exportedString = exportedString + "1e;" + config.config.outerLines.lines.firingError.multiplier + ";";
            }
        }
    }

    return exportedString;
}

export const isCrosshairsEqual = (first: ICrosshair, second: ICrosshair) => {
    const firstConfig = first.config;
    const secondConfig = second.config;

    if (firstConfig.colour !== secondConfig.colour) return false;
    if (firstConfig.overrideOffset !== secondConfig.overrideOffset) return false;

    const firstOutlines = firstConfig.outlines;
    const secondOutlines = secondConfig.outlines;
    if (firstOutlines.outlinesEnabled !== secondOutlines.outlinesEnabled) return false;
    if (firstOutlines.outline.outlineThickness !== secondOutlines.outline.outlineThickness) return false;
    if (firstOutlines.outline.outlineOpacity !== secondOutlines.outline.outlineOpacity) return false;

    const firstDot = firstConfig.centerDot;
    const secondDot = secondConfig.centerDot;
    if (firstDot.dotEnabled !== secondDot.dotEnabled) return false;
    if (firstDot.dot.centerDotThickness !== secondDot.dot.centerDotThickness) return false;
    if (firstDot.dot.centerDotOpacity !== secondDot.dot.centerDotOpacity) return false;

    const firstInner = firstConfig.innerLines;
    const secondInner = secondConfig.innerLines;
    if (firstInner.linesEnabled !== secondInner.linesEnabled) return false;
    if (firstInner.lines.lineLength !== secondInner.lines.lineLength) return false;
    if (firstInner.lines.lineOffset !== secondInner.lines.lineOffset) return false;
    if (firstInner.lines.lineOpacity !== secondInner.lines.lineOpacity) return false;
    if (firstInner.lines.lineThickness !== secondInner.lines.lineThickness) return false;
    if (firstInner.lines.firingErrorEnabled !== secondInner.lines.firingErrorEnabled) return false;
    if (firstInner.lines.firingError.multiplier !== secondInner.lines.firingError.multiplier) return false;
    if (firstInner.lines.movementErrorEnabled !== secondInner.lines.movementErrorEnabled) return false;
    if (firstInner.lines.movementError.multiplier !== secondInner.lines.movementError.multiplier) return false;

    const firstOuter = firstConfig.outerLines;
    const secondOuter = secondConfig.outerLines;
    if (firstOuter.linesEnabled !== secondOuter.linesEnabled) return false;
    if (firstOuter.lines.lineLength !== secondOuter.lines.lineLength) return false;
    if (firstOuter.lines.lineOffset !== secondOuter.lines.lineOffset) return false;
    if (firstOuter.lines.lineOpacity !== secondOuter.lines.lineOpacity) return false;
    if (firstOuter.lines.lineThickness !== secondOuter.lines.lineThickness) return false;
    if (firstOuter.lines.firingErrorEnabled !== secondOuter.lines.firingErrorEnabled) return false;
    if (firstOuter.lines.firingError.multiplier !== secondOuter.lines.firingError.multiplier) return false;
    if (firstOuter.lines.movementErrorEnabled !== secondOuter.lines.movementErrorEnabled) return false;
    if (firstOuter.lines.movementError.multiplier !== secondOuter.lines.movementError.multiplier) return false;

    return true;
}
