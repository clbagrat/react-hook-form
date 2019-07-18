import { flow, objectKeys, reduce } from '../fp';

function check(rules = {}, values = {}) {
  return flow(
    objectKeys,
    reduce((acc, name) => {
      const rule = rules[name];

      return {
        ...acc,
        [name]: rule.map(checkFn => checkFn(values[name], values)),
      };
    }, {}),
  )(rules);
}

export function createChecker(rules) {
  return function(values) {
    return check(rules, values);
  };
}
