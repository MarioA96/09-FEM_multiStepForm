import { atom } from 'nanostores';
import type { PlanType } from '../interfaces/PlanType.interface';


class Formulary {
    constructor(
        public personalInfo: PersonalInfo,
        public plan: Plan
    ) {}
}

class PersonalInfo {
    constructor(
        public name: string,
        public email: string,
        public phone: string
    ) {}
}


export const formNumProcess = atom(1);
export const planBilling = atom('monthly');

export const planType = atom<PlanType>({
    Default: {
        active: true,
        monthlyPrice: 0.0,
        yearlyPrice: 0.0,
    },
    Arcade: {
        active: false,
        monthlyPrice: 9.0,
        yearlyPrice: 90.0,
    },
    Advanced: {
        active: false,
        monthlyPrice: 12.0,
        yearlyPrice: 120.0,
    },
    Pro: {
        active: false,
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