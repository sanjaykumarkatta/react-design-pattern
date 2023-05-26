import { SetStateAction, useRef, useState } from 'react';
import { useBetween } from 'use-between';

function usePreserveData() {
  const [data, setData] = useState(1)

  const getData = () => {
    return data;
  };

  const updateData = (newData: SetStateAction<number>) => {
    setData(newData);
  };

  return { getData, updateData };
}

const useData = () => useBetween(usePreserveData);
export default useData;
