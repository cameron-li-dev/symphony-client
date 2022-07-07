import * as React from 'react';
import { styled, alpha, Box } from '@mui/system';
import SliderUnstyled, { sliderUnstyledClasses } from '@mui/base/SliderUnstyled';
import {useCallback} from "react";

const StyledSlider = styled(SliderUnstyled)(
    ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? '#1976d2' : '#90caf9'};
  height: 4px;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }

  &.${sliderUnstyledClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: #bdbdbd; 
  }

  & .${sliderUnstyledClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    opacity: 0.38;
  }

  & .${sliderUnstyledClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
  }

  & .${sliderUnstyledClasses.thumb} {
    position: absolute;
    width: 14px;
    height: 14px;
    margin-left: -6px;
    margin-top: -5px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 2px solid currentColor;
    background-color: #fff;

    :hover,
    &.${sliderUnstyledClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
        0.15,
    )};
    }

    &.${sliderUnstyledClasses.active} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
        0.3,
    )};
    }
  }
`,
);

export const Slider = (props: { min: number, max: number, step?: number, defaultValue: number, disabled: boolean, updateValue: (newValue: number) => void }) => {
    const {min, max, step, defaultValue, disabled, updateValue} = props;
    const [value, setValue] = React.useState<number>(defaultValue);

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
            updateValue(newValue);
        }
    };

    if (disabled) {
        return (
            <div>
                <StyledSlider
                    step={step}
                    marks={true}
                    min={min}
                    max={max}
                    value={value}
                    disabled
                />
            </div>
        )
    }
    return (
        <div>
            <StyledSlider
                step={step}
                marks={true}
                min={min}
                max={max}
                value={value}
                onChange={(e, newValue) => handleChange(e, newValue)}/>
        </div>
    );
}