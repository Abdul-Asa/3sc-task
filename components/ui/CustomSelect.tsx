"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export interface CustomSelectProps {
  options: { nominee_id: string; first_name: string; last_name: string }[];
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options }) => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select Option" />
      </SelectTrigger>
      <SelectContent position="item-aligned">
        {options.map((option) => (
          <SelectItem key={option.nominee_id} value={option.nominee_id}>
            <>
              {option.first_name} {option.last_name}
            </>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
