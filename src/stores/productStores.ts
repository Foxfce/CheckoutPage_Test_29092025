import { create } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

type ProductPersist = (
    set: (newState: Partial<ProductState>) => void,
    get: () => ProductState
) => ProductState;

type ProductSize = {
    label: string;
    available : boolean;
    focus: boolean;
    fullPrice: number;
    actualPrice: number;
}

type ProductFlavor = {
    label: string;
    stock: number;
}

interface ProductState {
    products: any[];
    productDetail: {
        id: number,
        name: string,
        picture: any[],
        size: ProductSize[],
        flavor: ProductFlavor[],
        stock: number,
        description: {
            overview: any,
            benefit: any,
            direction: any,
            storageMethod: any,
            cautions: any,
            QnA: any,
        },
    };
    addProduct: (product: any) => void;
    removeProduct: (product: any) => void;
}

export const useProductStore = create<ProductState>()(
    persist<ProductState>(
        (set, get) => ({
            products: [
                {
                    id: 1,
                    name: "Baam My Whey Protien one two sentences dfsdf dfsf",
                    picture: ["assets/img/product-mock3.png"],
                    size: [
                        { label: "Sample", focus: false,available : false, fullPrice: 2000, actualPrice: 1600},
                        { label: "250g", focus: false,available : true, fullPrice: 2500, actualPrice: 2000 },
                        { label: "1lb", focus: true,available : true, fullPrice: 3000, actualPrice: 2700 },
                        { label: "3lb", focus: true,available : true, fullPrice: 4000, actualPrice: 3500 },
                        { label: "5lb", focus: false,available : true, fullPrice: 5000, actualPrice: 4200 },
                        { label: "10lb", focus: false,available : true, fullPrice: 6000, actualPrice: 5100 },
                        { label: "12lb", focus: false,available : false, fullPrice: 7000, actualPrice: 6000 },
                    ],
                    flavor: [
                        { label: 'Chocolate', stock: 5 },
                        { label: 'Matcha Green Tea', stock: 5 },
                        { label: 'Vanilla', stock: 5 },
                        { label: 'Super', stock: 5 },
                        { label: 'Cafe Mocha', stock: 0 },
                        { label: 'Super Yummy Japanese Home Made Orange Yuzu', stock: 5 },
                    ],
                    stock: 5,
                    description: {
                        overview: "Short description two sentence Lorem ipsum Short description two",
                        benefit: 2,
                        direction: 3,
                        storageMethod: 4,
                        cautions: 5,
                        QnA: 6,
                    },
                },
                {
                    id: 2,
                    name: "Baam Mass V1",
                    picture: ["assets/img/place-holder3"],
                    size: [
                        { label: "Mega Mass 5lb",available : true, fullPrice: 5000, actualPrice: 4200 },
                    ],
                    flavor: [
                        { label: 'Rich Chocolate', stock: 5 },
                        { label: "Cookie&Cream", stock: 5 },
                        { label: 'Vanilla', stock: 5 },
                        { label: 'Banana', stock: 0 },
                    ],
                    stock: 5,
                    description: {
                        overview: "Short description two sentence Lorem ipsum Short description two",
                        benefit: 2,
                        direction: 3,
                        storageMethod: 4,
                        cautions: 5,
                        QnA: 6,
                    },
                },
            ],
            productDetail: {
                id: 1,
                name: 'Baam 100% My Whey',
                picture: ["assets/img/place-holder0.png", "assets/img/place-holder0-1.png"],
                size: [
                        { label: "Sample", focus: false,available : false, fullPrice: 2000, actualPrice: 1600},
                        { label: "250g", focus: false,available : true, fullPrice: 2500, actualPrice: 2000 },
                        { label: "1lb", focus: true,available : true, fullPrice: 3000, actualPrice: 2700 },
                        { label: "3lb", focus: true,available : true, fullPrice: 4000, actualPrice: 3500 },
                        { label: "5lb", focus: false,available : true, fullPrice: 5000, actualPrice: 4200 },
                        { label: "10lb", focus: false,available : true, fullPrice: 6000, actualPrice: 5100 },
                        { label: "12lb", focus: false,available : false, fullPrice: 7000, actualPrice: 6000 },
                ],
                flavor: [
                    { label: 'Chocolate', stock: 5 },
                    { label: 'Matcha Green Tea', stock: 5 },
                    { label: 'Vanilla', stock: 5 },
                    { label: 'Super', stock: 5 },
                    { label: 'Cafe Mocha', stock: 0 },
                    { label: 'Super Yummy Japanese Home Made Orange Yuzu', stock: 5 },
                ],
                stock: 1,
                description: {
                    overview: 1,
                    benefit: 2,
                    direction: 3,
                    storageMethod: 4,
                    cautions: 5,
                    QnA: 6,
                },
            },
            addProduct: (product) => set({ products: [...get().products, product] }),
            removeProduct: (product) => set({ products: [] }),
        }), {
            name: 'productState',
            storage: createJSONStorage(() => localStorage)
        } as PersistOptions<ProductState, ProductState>

    )
)