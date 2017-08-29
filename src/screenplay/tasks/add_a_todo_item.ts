import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
import { Enter } from 'serenity-js/lib/screenplay-protractor';

import { protractor } from 'protractor';

import { TodoList } from '../ui/todo_list';

export class AddATodoItem implements Task {

    static called(itemName: string) {
        return new AddATodoItem(itemName);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Enter.theValue(this.itemName)                   // enter the value of the item name
                .into(TodoList.What_Needs_To_Be_Done)       // into a "What needs to be done" field
                .thenHit(protractor.Key.ENTER)              // then hit enter...
        );
    }                                                       // see? we didn't even need this explanation!

    constructor(private itemName: string) {
    }
}