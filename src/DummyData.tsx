type Style = {
    style: string;
    imgurl: string;
};

export const stylesList: Style[] = [
    {
        style: 'Men',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
    },
    {
        style: 'Women',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
    },
    {
        style: 'Kids',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
    },
    {
        style: 'Babies',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
    },
];

export type Category = {
    name: string;
    imgurl: string;
};

export const CategoriesList: Category[] = [
    {
        name: 'Shirts',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
    },
    {
        name: 'Pants',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
    },
    {
        name: 'Shoes',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
    },
    {
        name: 'Accessories',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
    },
    {
        name: 'Bags',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
    },
    {
        name: 'Jewelry',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
    },
];

export type Product = {
    id: string;
    description: string;
    imgurl: string;
    price: number;
    reviews: number;
    stars: number;
    discount: number;
    details: string;
};

export const ProductsList: Product[] = [
    {
        id: '1',
        description: 'Grey Shirt with red stripes',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
        price: 200,
        reviews: 5,
        stars: 4,
        discount: 10,
        details:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        id: '2',
        description: 'Black Shirt with Grey Stripes',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
        price: 150,
        reviews: 4,
        stars: 3,
        discount: 0,
        details:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        id: '3',
        description: 'Fur Boots with soft touch of leather',
        imgurl: 'https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png',
        price: 300,
        reviews: 3,
        stars: 5,
        discount: 50,
        details:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
];
