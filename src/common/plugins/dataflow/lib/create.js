import { merge, camelCase, upperFirst, flow } from 'lodash';

const pascalCase = flow(camelCase, upperFirst);

function build(classes = {}, targetClasses = {}, dataflow, isNew) {
  const out = {};

  for (let className in classes) {
    if (targetClasses[pascalCase(className)]) {
      throw new Error(
        `Dataflow Error: class ${className} is already being used, please try another name!`
      );
    }

    out[pascalCase(className)] = classes[className];
    out[camelCase(className)] = classes[className].get({
      isNew,
      dataflow
    });
  }

  return out;
}

function packAll({ models = {}, dao = {}, services = {} }, dataflow, isNew) {
  return {
    models,

    dao: build(dao, dataflow.dao, dataflow, isNew),

    services: build(services, dataflow.services, dataflow, isNew)
  };
}

export default function(source = [], options = {}) {
  const { isNew = false } = options;
  const dataflow = {
    models: {},
    dao: {},
    services: {}
  };

  source.forEach(mod => {
    merge(dataflow, packAll(mod, dataflow, isNew));
  });

  return dataflow;
}
