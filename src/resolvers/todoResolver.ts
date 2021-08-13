import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Todo, TodoInput } from "../schemas/Todo"; 


@Resolver()
export class TodoResolver {
    private todos: Todo[] = []

    @Query(()=> [Todo], {nullable: true})
    async getTodos(): Promise<Todo[]> {
        return await this.todos; //await for future ref. Context can be provided for database drivers/connectors/etc.
    }

    @Mutation((_)=> Todo)
    async addTodo(
        @Arg('todoInput') { title, description}: TodoInput
    ): Promise<Todo> {
        const todo = {
            id: Math.random()*9987654321, //pseudo-random id
            title,
            description,
            status:false
        }
 
        await this.todos.push(todo);

        return todo;
    }
}