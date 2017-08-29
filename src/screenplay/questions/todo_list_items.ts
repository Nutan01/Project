import { Text } from 'serenity-js/lib/screenplay-protractor';

import { TodoList } from '../ui/todo_list';

export class TodoListItems {
    static Displayed = Text.ofAll(TodoList.What_Needs_To_Be_Done);
}