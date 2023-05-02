import React, { useMemo } from 'react'
import { computeOptions } from './utils'

const useOptions = (title: string) => {
  const options = useMemo(() => {
    return computeOptions({
      title
    });
  }, []);

  return options;
}

export default useOptions