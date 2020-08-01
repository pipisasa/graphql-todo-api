import Todo from './todo.type';
import { plainToClass } from 'class-transformer';

export function createTodoSamples() {
  return plainToClass(Todo, [
    {
      id: "0",
      title: "Hello",
      slug: "hello",
      decription: "lorem ipsum",
      type:"todo"
    },{
      id: "1",
      title: "Hello",
      slug: "hello",
      decription: "lorem ipsum",
      type:"doing"
    },{
      id: "2",
      title: "Hello",
      slug: "hello",
      decription: "lorem ipsum",
      type:"done"
    },{
      id: "3",
      title: "Hello",
      slug: "hello",
      decription: "lorem ipsum",
      type:"todo"
    },{
      id: "4",
      title: "Hello",
      slug: "hello",
      decription: "lorem ipsum",
      type:"doing"
    },{
      id: "5",
      title: "Hello",
      slug: "hello",
      decription: "lorem ipsum",
      type:"done"
    }
  ]);
}