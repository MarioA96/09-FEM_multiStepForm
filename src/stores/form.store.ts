import { atom } from 'nanostores';
import type { PlanType } from '../interfaces/PlanType.interface';


class PersonalInfo {
    constructor(
        public username: string,
        public email: string,
        public phoneNumber: string
    ) {}
}

let personalInfo = new PersonalInfo('', '', '');

export const formPersonalInfo = atom(personalInfo);


export const formNumProcess = atom(1);
export const planBilling = atom('monthly');

export const planType = atom<PlanType>({
    Default: {
        isActive: true,
        monthlyPrice: 0.0,
        yearlyPrice: 0.0,
    },
    Arcade: {
        isActive: false,
        monthlyPrice: 9.0,
        yearlyPrice: 90.0,
    },
    Advanced: {
        isActive: false,
        monthlyPrice: 12.0,
        yearlyPrice: 120.0,
    },
    Pro: {
        isActive: false,
        monthlyPrice: 15.0,
        yearlyPrice: 150.0,
    },
});

export const addOns = atom({
    online: {
        isActive: false,
        priceMonthly: 1.0,
        priceYearly: 10.0
    },
    largerStorage: {
        isActive: false,
        priceMonthly: 2.0,
        priceYearly: 20.0
    },
    customProfile: {
        isActive: false,
        priceMonthly: 2.0,
        priceYearly: 20.0
    },
});