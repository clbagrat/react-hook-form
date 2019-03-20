import { useState } from 'react';
import {
  flow,
  split,
  combineObject,
  map,
  some,
  filterOutValues,
  objectKeys,
  objectValues,
} from '../../Helpers/fp';

const errorFilterer = flow(
  split(
    flow(objectKeys),
    flow(
      objectValues,
      map(filterOutValues(null, '', undefined)),
    ),
  ),
  combineObject,
);

export function useFormChecking(values, checkFunction) {
  const [errors, setErrors] = useState(errorFilterer(checkFunction(values)));

  function doCheck(vals) {
    setErrors(errorFilterer(checkFunction(vals)));
  }

  return [
    errors,
    doCheck,
    flow(
      objectValues,
      some(v => v.length),
    )(errors),
  ];
}