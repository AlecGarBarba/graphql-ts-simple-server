import { Field, ObjectType, InputType} from 'type-graphql';

@ObjectType() //create a new object or schema
export class Todo {
    @Field()
    id:number;

    @Field()
    title: string;

    @Field()
    description: string;

    @Field()
    status: boolean;
}

@InputType() //Expexted data to create a new todo.
export class TodoInput implements Partial<Todo>{
    @Field()
    title: string;

    @Field()
    description: string;
}