import { debtType, paymentPlanType, paymentType, fullDebtType } from './types';
import getNextDueDate from './utils/getNextDueDate'

const formatDebt = (
    debt: debtType,
    paymentPlans: Array<paymentPlanType>,
    allPayments: Array<paymentType>)
    : fullDebtType | undefined => {
    let result = undefined;
    try {
        const paymentPlan = paymentPlans.find((pp: paymentPlanType) => pp.debt_id === debt.id);
        const is_in_payment_plan: boolean = !!paymentPlan;

        const paymentsForDebt = paymentPlan ? allPayments.filter((ap: paymentType) => ap.payment_plan_id === paymentPlan.id) : [];
        const totalAmountPaid = paymentsForDebt.reduce((acc: number, p: paymentType) => {
            acc += p.amount;
            return acc;
        }, 0);

        const remaining_amount: number = paymentPlan ? paymentPlan.amount_to_pay - totalAmountPaid : 0;
        const hasRemainingDebt: boolean = remaining_amount > 0;

        let next_payment_due_date = hasRemainingDebt ? getNextDueDate(paymentPlan, totalAmountPaid) : null

        result = {
            ...debt,
            is_in_payment_plan,
            remaining_amount,
            next_payment_due_date
        }
    } catch (e) {
        console.log(e)
    }
    return result;
}

export default formatDebt;