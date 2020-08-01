import Todo from './todo.type';
import { plainToClass } from 'class-transformer';

export function createTodoSamples() {
  return plainToClass(Todo, [
    {
      id: "0",
      title: "Learn GraphQL",
      slug: "learn-graph-ql",
      description: "We need to learn GraphQL",
      type:"todo"
    },{
      id: "1",
      title: "Изучить хуки",
      slug: "izuchit-hooki",
      description: "Нам нужно изучить хуки",
      type:"doing"
    },{
      id: "2",
      title: "Sass/Less/StyledComponents",
      slug: "sass",
      description: "Изучить Sass",
      type:"done"
    },{
      id: "3",
      title: "NextJS",
      slug: "next-js",
      description: "Изучить NextJS",
      type:"todo"
    },{
      id: "4",
      title: "Отпиздить Кубата",
      slug: "otpizdit-kubata",
      description: "Нужно отпиздить Кубата",
      type:"doing"
    },{
      id: "5",
      title: "Проверить таски",
      slug: "proverit-taski",
      description: "Проверить таски студентов",
      type:"done"
    }
  ]);
}
