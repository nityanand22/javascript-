/**********************Javascript Execution Context**************************
* [{}] => Global execution Context => this(represents the window object which is considered as global envoirnment)
*
* 1 => Global Execution Context (imp)
* 2 => Function Execution Context (imp)
* 3 => Eval Execution Context (mongodb)
*
*[{}] is executed in two phase
* 1st phase => Memory Creation Phase ==>>  In memory creation phase the memory is allocated to all the variables, function declartion.
* 2nd phase => Execution Phase  ==>> in execution phase all the code is executed
* 
* all the code is executed in global execution environment 
*
*  in memory creation phase the value of all variables is set as undefined
*  in the case of function , the definition (the code) of function is save in the function named variable
*
*  exampple ==>> 
*  Memory creation Phase
*
*   val1 = undefined                                                     let val1 = 10
*   val2 = undefined                                                     let val2 = 5
*   addnum = definition ({code})                                         function addnum(num1, num2){
*                                                                        let total = num1 + num2
*                                                                            return total
*                                                                          }
*   result1 = undefined                                                  let result1 = addnum(val1, val2)
*   result2 = undefined                                                  let result2 = addnum(10, 2)
*
*
* Execution Phase ==>>
*
* val1 = 10
* val2 = 5
* addnum =>  for this a new execution context will be created which is called as function execution context, that means a memory execution phase and code execution phase
* will created in function execution phase during the function execution .. After the execution this envoirnment automatically deleted.
*      
*              Memory creation phase              Execution Phase
*                val1 = undefined                   val1 = 10
*                val2 = undefined                   val2 = 5
*                total = undefined                  total = 15
*
* ** Call Stack **
*    |                |
*    |                |
*    |                |
*    |                |
*    |    three()     |     last come first out
*    |   two()        |
*    |  one()         |
*    | Golbal Exec    |
*    ^^^^^^^^^^^^^^^^^^
*
*
*
*
*
*
*
*
*/