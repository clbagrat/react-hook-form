export function flow(...funcs) {
  return arg => {
    let result = arg;

    funcs.forEach(func => {
      result = func(result);
    });

    return result;
  };
}

export function split(...funcs) {
  return arg => {
    let result = [];

    funcs.forEach(func => {
      result = [...result, func(arg)];
    });

    return result;
  };
}

export function map(mapperFunc) {
  return array => {
    return array.map(mapperFunc);
  };
}

export function some(filterFunc) {
  return array => {
    return array.some(filterFunc);
  };
}

export function reduce(reduceFunc, initValue) {
  return array => {
    return array.reduce(reduceFunc, initValue);
  };
}

export function filterOutValues(...values) {
  return array => {
    return array.filter(v => !values.includes(v));
  };
}

export function containsValues(value) {
  return array => {
    return array.includes(value);
  };
}

export function objectKeys(obj) {
  return Object.keys(obj);
}

export function objectValues(obj) {
  return Object.values(obj);
}

export function isArray(obj) {
  return Array.isArray(obj);
}

export function combineObject([keyArr, valuesArr]) {
  const result = {};

  keyArr.forEach((key, i) => {
    result[key] = valuesArr[i];
  });

  return result;
}

export function isEqualTo(...posibleValues) {
  return value => {
    return posibleValues.includes(value);
  };
}

export function get(key) {
  return value => {
    return value[key];
  };
}

export function castToArray(value) {
  return isArray(value) ? value : [value];
}
