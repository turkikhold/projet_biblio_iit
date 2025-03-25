import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export function Sliderss({ min, max, value, onChange }: SliderProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = parseInt(e.target.value);
    const newRange: [number, number] = [...value] as [number, number];
    newRange[index] = newValue;

    // Ensure min <= max
    if (index === 0 && newRange[0] > newRange[1]) {
      newRange[1] = newRange[0];
    } else if (index === 1 && newRange[1] < newRange[0]) {
      newRange[0] = newRange[1];
    }

    onChange(newRange);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <input
          type="range"
          min={min}
          max={max}
          value={value[0]}
          onChange={(e) => handleChange(e, 0)}
          className="w-full"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value[1]}
          onChange={(e) => handleChange(e, 1)}
          className="w-full"
        />
      </div>
    </div>
  );
}
