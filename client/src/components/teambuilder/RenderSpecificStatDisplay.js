import React from "react";
import { SpecificStatDisplay } from "./SpecificStatDisplay";
import { mode } from "./variables";

export const RenderSpecificStatDisplay = ({
    positionState,
    Stats,
    position
}) => {
    const translatePosition = position => {
        switch (position) {
            case "F":
                return "forward";
            case "F-C":
            case "C":
                return "center";
            case "G":
            case "F-G":
                return "guard";
            default:
                return null;
        }
    };

    return Object.entries(Stats).map(([k, v]) => {
        if (k in mode) {
            const key = mode[k];
            return (
                <div key={k}>
                    <SpecificStatDisplay
                        stat={k}
                        positionState={
                            positionState[translatePosition(position)]
                        }
                        values={{ k, key, v }}
                    />
                </div>
            );
        } else {
            return null;
        }
    });
};
