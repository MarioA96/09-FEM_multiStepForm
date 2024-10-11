import { atom } from 'nanostores';
import type { PlanType } from '../interfaces/PlanType.interface';


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
    online: false,
    largerStorage: false,
    customProfile: false,
});