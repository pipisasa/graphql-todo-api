import { InputType, Field } from 'type-graphql';
import { TodoType } from './todo.enum';

@InputType()
class ProductSearchInput {
  @Field({ nullable: true })
  id?: string | number;

  @Field()
  type: TodoType;

  @Field({ defaultValue: 0 })
  offset: number;

  @Field({ defaultValue: 10 })
  limit: number;
}

export default ProductSearchInput;
