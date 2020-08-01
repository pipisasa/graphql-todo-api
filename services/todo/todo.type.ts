import { ObjectType, Field, ID } from 'type-graphql';
import { TodoType } from './todo.enum';
import PaginatedResponse from '../../helpers/paginated-response';

@ObjectType()
export default class Todo {
  @Field(()=>ID)
  id: string;

  @Field()
  slug: string;

  @Field()
  title: string;

  @Field(() => TodoType)
  type: TodoType;

  @Field()
  description: string;

  @Field()
  createdAt: Date;
}

// TODO: Need to change this in next update

// we need to create a temporary class for the abstract, generic class "instance"
@ObjectType()
export class TodoResponse extends PaginatedResponse(Todo) {
  // simple helper for creating new instances easily
  constructor(todoResponse: TodoResponse) {
    super();
    Object.assign(this, todoResponse);
  }

  // you can add more fields here if you need
}
