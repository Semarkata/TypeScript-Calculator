import multiply from "./Operations/multiply";

const OPERATIONS = ['mulitply','divide','subtract', 'add'];

const calculator = (a: number, b: number, operation: string ) => {
    if (!OPERATIONS.includes(operation)){
//        switch (operation){
//            case OPERATIONS[operation]:
//                multiply(a,b);
//                break;
//        }
        console.log(multiply(a,b));
    }
    console.log('This operation cannot be found')


};

calculator(1,3,'multiply');