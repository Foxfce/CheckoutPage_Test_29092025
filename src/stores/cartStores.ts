import { create } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

type CartPersist = (
    set: (newState: Partial<CartState>) => void,
    get: () => CartState
) => CartState;

interface CartState {
    productsInCart: any[];
    productAmount : number;
    addProductToCart: (product: any) => void;
    removeProductFromCart: (product: any) => void;
}

export const useCartStore = create<CartState>()(
    persist<CartState>(
        (set, get) => ({
            productsInCart: [],
            productAmount : 0,
            addProductToCart:() => set(() => ({productAmount : get().productAmount+1})),
            removeProductFromCart: () => set(() => ({productAmount : 0}))
        }), {
            name: 'cartState',
            storage: createJSONStorage(() => localStorage)
        } as PersistOptions<CartState, CartState>

    )
)