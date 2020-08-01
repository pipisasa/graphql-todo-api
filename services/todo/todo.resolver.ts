import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';
import { createTodoSamples } from './todo.sample';
import Todo, { TodoResponse, AddTodoInput } from './todo.type';
import { filterItems } from '../../helpers/filter';
import { plainToClass } from 'class-transformer';
import { slugify } from '../../helpers/slugify';

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

  // @Mutation(()=>Todo, {description: "add new Todo"})
  // async addTodo(
  //   @Arg('todo') todo: AddTodoInput
  // ): Promise<Todo | undefined> {
  //   console.log(todo, 'add todo');
  //   const {title, description, type} = todo;
  //   const newTodo:Todo = plainToClass(Todo, {
  //     type,
  //     title,
  //     description,
  //     id: Date.now().toString(),
  //     slug: slugify(title),
  //     createdAt: new Date(),
  //   });
  //   this.items.push(newTodo);
  //   return await this.items.find((item:Todo)=> item.slug === newTodo.slug);
  // }

  // @Mutation(() => Todo, { description: 'Create Category' })
  // async createProduct(
  //   @Arg('todo') todo: AddTodoInput
  // ): Promise<Todo> {
  //   console.log(todo, 'product');

  //   return await todo;
  // }'
  @Query(() => Todo)
  async addTodo(
    @Arg('todo', (type) => String) todo: Todo
  ): Promise<Todo | undefined> {
    return await todo;
  }
}
