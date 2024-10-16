import { addOns } from "../stores/form.store";
import { atom } from 'nanostores';

const statesButton = atom({
    online: false,
    largerStorage: false,
    customProfile: false,
});

//const borderOnline = atom('1px solid hsl(229, 24%, 87%)');
//const backgroundOnline = atom('hsl(0, 0%, 100%)');

//const borderLargerStorage = atom('1px solid hsl(229, 24%, 87%)');
//const backgroundLargerStorage = atom('hsl(0, 0%, 100%)');

//const borderCustomProfile = atom('1px solid hsl(229, 24%, 87%)');
//const backgroundCustomProfile = atom('hsl(0, 0%, 100%)');


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

                //borderLargerStorage.set(addOns.get().largerStorage ? '1px solid blue' : '1px solid hsl(229, 24%, 87%)');
                //backgroundLargerStorage.set(addOns.get().largerStorage ? 'hsl(229, 100%, 96%)' : 'hsl(0, 0%, 100%)');

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

                //borderCustomProfile.set(addOns.get().customProfile ? '1px solid blue' : '1px solid hsl(229, 24%, 87%)');
                //backgroundCustomProfile.set(addOns.get().customProfile ? 'hsl(229, 100%, 96%)' : 'hsl(0, 0%, 100%)');

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
