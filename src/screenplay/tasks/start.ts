// import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
// import { AddATodoItem } from './add_a_todo_item';
// import { Open } from 'serenity-js/lib/screenplay-protractor';

// export class Login implements Task {


//     performAs(actor: PerformsTasks) {

//         // The Login Task is composed of three Interactions:

//         // return actor.attemptsTo(
//         //     Enter.theValue('James').into(LoginForm.Username_Field),
//         //     Enter.theValue('correct-horse-battery-staple').into(LoginForm.Password_Field),
//         //     Click.on(LoginForm.Submit_Button)
//         // );
//     }
// }


//     static withATodoListContaining(items: string[]) {       // static method to improve the readability
//         return new Login(items);
//     }

//     performAs(actor: PerformsTasks): PromiseLike<void> {    // required by the Task interface
//         return actor.attemptsTo(                            // delegates the work to lower-level tasks
//             // todo: add each item to the Todo List
//             Open.browserOn('/examples/angularjs/'),
//             ...this.addAll(this.items)      
//         );
//     }

//     constructor(private items: string[]) {                  // constructor assigning the list of items
//     }   
//     private addAll(items: string[]): Task[] {                   // transforms a list of item names
//         return items.map(item => AddATodoItem.called(item));    // into a list of Tasks
//     }                                                    // to a private field
// }