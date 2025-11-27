import Ajv from "ajv";

export function validateSchema(schema, data) {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  return validate(data);
}
