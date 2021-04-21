import { useState, useEffect } from "react";
import TagPickerInput from "../components/TagPickerInput/TagPickerInput";
import Tag from "../components/TagPickerInput/Tag";
import Switch from "../components/Switch/Switch";

import CheckboxInput from "../components/CheckboxInput";

export default function Test({

}) {

  const advancedOptions = [
    { label: 'Blue', value: 'blue' },
    { label: 'Black', value: 'black' },
    { label: 'Red', value: 'red' },
    { label: 'White', value: 'white' },
    { label: 'Green', value: 'green' },
  ];

  return (
    <div className="w-full h-full">
      <div className="bg-blue-600 container mx-auto">
        <TagPickerInput content={advancedOptions} placeholder='Select' />
      </div>

    </div>
  );
}
