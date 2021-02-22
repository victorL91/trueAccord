import { paymentPlanType } from '../types';

const getNextDueDate = (paymentPlan: paymentPlanType | undefined, totalPaid: number) => {
    let next_payment_due_date = null;

    if (!paymentPlan) return null;
    const { start_date, installment_frequency, installment_amount } = paymentPlan;
    let intermDate = new Date(start_date);
    const numberInstallements = totalPaid / installment_amount;
    const daysDelay = installment_frequency === "WEEKLY" ? 7 : installment_frequency === "BI_WEEKLY" ? 3.5 : 0;
    intermDate.setDate(intermDate.getDate() + (numberInstallements + 1) * daysDelay - 1);
    next_payment_due_date = intermDate.toISOString();
    return next_payment_due_date;
}

export default getNextDueDate 