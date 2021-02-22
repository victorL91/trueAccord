# trueAccord
True Accord - Take home 

Pre-requesite:

- The latest version of Node installed on your machine. 
node version >= 12

- Typescript installed globally
`npm install -g typescript`

- Jest install globally for easier use
`npm install -g jest`


Commands:

1) Installation
- `yarn install`

2) Run script
- `yarn run`

3) Test
- `yarn test`


Assumptions:

context: A payment plan is associated to one debt at a time but `payment_plans.amount_to_pay` is different `debt.amount`;
which can mean either than `payment_plans.amount_to_pay` get updated as the payments go through or that a payment plan would help pay back a partial debt.

assumtion: payment plans table field `amount_to_pay` is not updated by another script and remains the same until the payment plan is over or the debt is paid. Thus I can assume that:
        `remaining_amout = payment_plans.amount_to_pay - sum(payments)`;


- #2 Even if a payment is due weekly or bi-weekly, if a user pays in advance, this gives him/her additional time to pay. 


How I spent my time? 

1) setting up typescript & jest
2) spending time defining types
3) writing the script insion next payment due and think of all the asumptions I made.
4) writing some tests.


Process & approach:

The first step was trying to understand the problem and properly understand the underlying assumptions I was making. 
My goal was first to have a working script tackling the more cases I could, then wrtie some proper tests and then refine my code, structuring it better, cleaning my code.


Next steps:

If I had more time, I could have improved my testing:
1) make it more thorough, I am testing one debt at a time but I could have tested a few using jest-each
2) I could have made it more precise
example: - check if next_payment_due_date if of type date instead of not null if there is some debt remaining
3) refactoring: 
example: - line 11 in src/formatDebt.ts I could have made it an external function to have my code look cleaner.
4) I could have defined types for the expected result. 



