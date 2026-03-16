
export const testBox= {
    boxId: '1',
    typeOfCrime: 'Modular',
    title: "This is a test! Here is the title about TruthBox, which directly conveys the key information, allowing others to quickly understand this TruthBox.",
    nftImage: "ipfs://bafkreianmtw7x22zb3iawia3rcmfm67iiupytrxj3ytljxojlichfaictm",
    boxImage: "bafkreiccjb4uhzhze2pyehnoo7qwkk73yhjl6k6scbzxss6idqkhghznom",
    country: 'United States',
    state: 'California',
    description: 'This is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box, which is a test box',
    createDate: '2021-01-01',
    eventDate: '2021-01-01',
    timestamp: 1714531200,
    label: ['Test'],
    price: '5000',
    tokenSymbol: 'USDT',
    tokenDecimals: 6,
    precision: 2,
    deadline: 1714531200,
    status: 'Storing',

}

export const baseBox= {
    boxId: '1',
    //-----------
    typeOfCrime: 'Modular',
    title: "This is a test! Here is the title about TruthBox, which directly conveys the key information, allowing others to quickly understand this TruthBox.",
    nftImage: "/nft/nft-light-2.jpg",
    boxImage: "/nft/boxImage.png",
    country: 'United States',
    state: 'California',
    description: 'This is a test box',
    createDate: '2021-01-01',
    eventDate: '2021-01-01',
    timestamp: 1714531200,
    label: ['Test'],
    price: '1800',
    tokenSymbol: 'USDT',
    tokenDecimals: 6,
    precision: 2,
    deadline: 1714531200,
    status: 'Selling',
}

export const testBox2= baseBox;

export const testBox2List: any[] = [
    ...Array.from({ length: 20 }, (_, i) => ({
        ...baseBox,
        boxId: i.toString(),
    })),
]


export const testBoxProfile = baseBox;

export const testBoxProfileList: (any)[] = [
    ...Array.from({ length: 20 }, (_, i) => ({
        ...testBoxProfile,
        boxId: i.toString(),
    })),
]
