export interface Plan {
    isActive: boolean;
    monthlyPrice: number;
    yearlyPrice: number;
}

export interface PlanType {
    Default: Plan;
    Arcade: Plan;
    Advanced: Plan;
    Pro: Plan;
}