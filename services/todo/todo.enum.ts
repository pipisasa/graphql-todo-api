import { registerEnumType } from 'type-graphql';

export enum TodoType {
  TODO="todo",
  DOING="doing",
  DONE="done"
}

registerEnumType(TodoType, {
  name: 'TodoType',
  description: 'The basic product types'
});
