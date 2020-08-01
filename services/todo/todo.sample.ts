import Todo from './todo.type';
import { plainToClass } from 'class-transformer';

export function createTodoSamples() {
  return plainToClass(Todo, [
    {
      id: "0",
      title: "Hello",
      slug: "hello",
      description: "lorem ipsum",
      type:"todo"
    },{
      id: "1",
      title: "Hello",
      slug: "hello-1",
      description: "lorem ipsum",
      type:"doing"
    },{
      id: "2",
      title: "Hello",
      slug: "hello-2",
      description: "lorem ipsum",
      type:"done"
    },{
      id: "3",
      title: "Hello",
      slug: "hello-3",
      description: "lorem ipsum",
      type:"todo"
    },{
      id: "4",
      title: "Hello",
      slug: "hello-4",
      description: "lorem ipsum",
      type:"doing"
    },{
      id: "5",
      title: "Hello",
      slug: "hello-5",
      description: "lorem ipsum",
      type:"done"
    }
  ]);
}
