import { addOns } from "../stores/form.store";
import { atom } from 'nanostores';

const statesButton = atom({
    online: false,
    largerStorage: false,
    customProfile: false,
});


export const useCardAddOns = () => {
    
    const handleSelectAddOn = (addOn: 'online' | 'largerStorage' | 'customProfile'): void => {
        
        switch (addOn) {
            case 'online':
                addOns.set({
                    ...addOns.get(),
                    online: {
                        ...addOns.get().online,
                        isActive: !statesButton.get().online ? true : false
                    },
                });
                statesButton.get().online = !statesButton.get().online ? true : false;
                
                //borderOnline.set(addOns.get().online ? '1px solid blue' : '1px solid hsl(229, 24%, 87%)');
                //backgroundOnline.set(addOns.get().online ? 'hsl(229, 100%, 96%)' : 'hsl(0, 0%, 100%)');

                break;
            case 'largerStorage':
                addOns.set({
                    ...addOns.get(),
                    largerStorage: {
                        ...addOns.get().largerStorage,
                        isActive: !statesButton.get().largerStorage ? true : false
                    },
                });
                statesButton.get().largerStorage = !statesButton.get().largerStorage ? true : false;
                
                break;
            case 'customProfile':
                addOns.set({
                    ...addOns.get(),
                    customProfile: {
                        ...addOns.get().customProfile,
                        isActive: !statesButton.get().customProfile ? true : false
                    },
                });
                statesButton.get().customProfile = !statesButton.get().customProfile ? true : false;

                break;
        
            default:
                break;
        }
    }

    return {
        //atributes
        //borderOnline,
        //backgroundOnline,
        //borderLargerStorage,
        //backgroundLargerStorage,
        //borderCustomProfile,
        //backgroundCustomProfile,
        //methods
        handleSelectAddOn,
    }
}
