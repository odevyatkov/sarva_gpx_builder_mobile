import FieldName from '../types/FieldName';

export default interface GeneratorFormState extends Record<FieldName, string> {
  errors: Record<FieldName, string>;
}
