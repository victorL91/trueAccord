export type debtType = {
    id: number
    amount: number
};

enum installmentFrequency {
    WEEKLY = "WEEKLY",
    BI_WEEKLY = "BI_WEEKLY"
}

export type paymentPlanType = {
    id: number,
    debt_id: number,
    amount_to_pay: number,
    installment_frequency: string | installmentFrequency,
    installment_amount: number,
    start_date: string
}

export type paymentType = {
    payment_plan_id: number,
    amount: number,
    date: string
}

export type fullDebtType = debtType & {
    is_in_payment_plan: boolean,
    remaining_amount: number,
    next_payment_due_date: string | null
}