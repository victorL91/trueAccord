import formatDebt from '../src/formatDebt'
import debts from './data/debts.json';
import paymentPlans from './data/paymentPlans.json';
import payments from './data/payments.json';

const formattedDebts = formatDebt(debts, paymentPlans, payments);
const formattedDebt = formattedDebts && formattedDebts.length > 0 ? formattedDebts[0] : undefined;

describe('remaining amount', () => {
    test('remaining amount to be equal to zero if non in payment plan.', () => {
        if (!formattedDebt.is_in_payment_plan) {
            expect(formattedDebt.remaining_amount).toEqual(0);
        }
    });

    test('remaining amount to be less that the total amount', () => {
        expect(formattedDebt.remaining_amount).toBeLessThanOrEqual(formattedDebt.amount);
    });
});

describe('next payment due date', () => {
    test('is null if no payment plan is found', () => {
        if (!formattedDebt.is_in_payment_plan) {
            expect(formattedDebt.next_payment_due_date).toBeNull();
        }
    });

    test('is null if debt is paid', () => {
        const totalPaid = formattedDebt.amount - formattedDebt.remaining_amount;
        if (totalPaid <= 0) {
            expect(formattedDebt.next_payment_due_date).toBeNull();
        }
    });

    test('next due date is set if there is debt remaining', () => {
        if (formattedDebt.remaining_amount > 0) {
            expect(formattedDebt.next_payment_due_date).not.toBeNull();
        }
    });

});