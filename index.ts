import { debtType, paymentPlanType, paymentType, fullDebtType } from './src/types';
import formatDebt from './src/formatDebt'
const axios = require('axios');

const getData = async (): Promise<any> => {
    try {
        const debtsResp = await axios.get('https://my-json-server.typicode.com/druska/trueaccord-mock-payments-api/debts');
        const debts: Array<debtType> = debtsResp.data;

        const paymentPlansResp = await axios.get('https://my-json-server.typicode.com/druska/trueaccord-mock-payments-api/payment_plans');
        const paymentPlans: Array<paymentPlanType> = paymentPlansResp.data;

        const paymentsResp = await axios.get('https://my-json-server.typicode.com/druska/trueaccord-mock-payments-api/payments');
        const allPayments: Array<paymentType> = paymentsResp.data;

        return {
            debts, paymentPlans, allPayments
        }
    } catch (e) {
        console.log(e)
    }
}

const main = async (): Promise<Array<any> | undefined> => {
    const { debts, paymentPlans, allPayments } = await getData();
    console.log(
        JSON.stringify({ debts, paymentPlans, allPayments })
    )
    return formatDebt(debts, paymentPlans, allPayments)
}

main().then(console.log).catch(console.error);
