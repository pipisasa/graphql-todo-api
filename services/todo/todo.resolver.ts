import { Resolver, Query, Arg, Int } from 'type-graphql';
import { createTodoSamples } from './todo.sample';
import Todo, { TodoResponse } from './todo.type';
import { filterItems } from '../../helpers/filter';

@Resolver()
export class TodoResolver {
  private readonly items: Todo[] = createTodoSamples();

  @Query({ description: 'Get all the products' })
  todos(
    @Arg('limit', (type) => Int, { defaultValue: 10 }) limit: number,
    @Arg('offset', (type) => Int, { defaultValue: 0 }) offset: number,
    @Arg('type', { nullable: true }) type?: string,
    @Arg('text', { nullable: true }) text?: string,
  ): TodoResponse {
    const total = this.items.length;
    const filteredData = filterItems(
      this.items,
      limit,
      offset,
      text,
      type,
    );
    return new TodoResponse({
      total: total,
      ...filteredData,
    });
  }

  @Query(() => Todo)
  async todo(
    @Arg('slug', (type) => String) slug: string
  ): Promise<Todo | undefined> {
    return await this.items.find((item) => item.slug === slug);
  }
}
