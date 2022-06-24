type Style = {
  style: string;
  imgurl: string;
};

export const stylesList: Style[] = [
  {
    style: 'Men',
    imgurl:
      'https://images.vexels.com/media/users/3/234044/isolated/lists/9be4690cfd9b8031c9aff0f37136954d-low-top-sneaker-side-view.png',
  },
  {
    style: 'Women',
    imgurl:
      'https://images.vexels.com/media/users/3/237081/isolated/lists/ea611813b3f2e05ec2127b89b1b0add4-flat-pair-of-high-heels.png',
  },
  {
    style: 'Kids',
    imgurl: 'https://img.icons8.com/emoji/256/backpack-emoji.png',
  },
  {
    style: 'Babies',
    imgurl: 'https://cdn-icons-png.flaticon.com/128/375/375208.png',
  },
];

export type Category = {
  name: string;
  imgurl: string;
};

export const CategoriesList: Category[] = [
  {
    name: 'Shirts',
    imgurl:
      'https://www.seekpng.com/png/detail/397-3977847_how-to-set-use-grey-t-shirt-icon.png',
  },
  {
    name: 'Pants',
    imgurl:
      'https://cdn.shopify.com/s/files/1/0381/8153/5876/products/easy-alvin-khaki-120229-2934-nudie-jeans-danali-mens-pants-978524_256x.jpg?v=1653785180',
  },
  {
    name: 'Shoes',
    imgurl:
      'https://cdn.shopify.com/s/files/1/0316/8249/4604/products/30601986_02_01_256x.jpg?v=1649142213',
  },
  {
    name: 'Accessories',
    imgurl:
      'https://altsha-public.s3.us-east-2.amazonaws.com/products/natural-chromexcel-belt/NaturalChromexcelBelt1-sm.jpg',
  },
  {
    name: 'Bags',
    imgurl:
      'https://cdn.shopify.com/s/files/1/0316/8249/4604/products/20502620_04_02_256x.jpg?v=1654760671',
  },
  {
    name: 'Jewelry',
    imgurl:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISERgSEhUREhEREREREhQSEhESERERGBgZGhgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGDQkGCExMTQ0MTQ0NDQxNDQxNDQxNDQxNDQ0NDQ0NDQ0NDE0ND8/ND80NDQ0ND8/NDQxPzQ0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAACAgEBBAgEBQIDBwUAAAABAgADEQQFEiExBhMiMkFRYXEHgZGhQlJicrEU0SPw8TNTgqKzwdIVQ3OSsv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgIDAAMBAQAAAAAAAAABAhEDMRIhQQRRYRMy/9oADAMBAAIRAxEAPwD2aEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIkBYQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhASEa7gDJIA8ycCZer6RaWrv2pw8iIWS3prQnGaz4iaKvusXP6QT/AJ+swtX8U1/9upj6tuj+8z5RucWd+PUI1nA5kD3M8W1fxI1bd0Kn1MxNT0s1lnetYft4R5x0n4+V7e+W7QpTvOo+cy9V0u0NfeuTh4Agn6TwK7X22d93b3YmQFpnzdJ+LPte1ar4l6JO4LLD6LgfeY2q+K3+7oHu7f2nluYmZPKuk/HwjutV8Tda/cFdY9FyfvMm/pttF+eoceihV/gTm8wzJ5VucWE+Ok0XTPaFbhhqLHwclXwyn0IM9m6L7dTXacWrhWHZsTPFH8fl5T52BnSdC+kbaHUhzk0vhLVH5PzAeY5y45fty5uGWbxnt9AQkVViuoZSGVgGBHIg8QRJZ1eEQhCAQhCAQhCAQhCAQhCAQhCAk5rpr0oTZ1AfAa6wlakJwCRzY+gyPqJ0s8N+KutN20GQHs6dErA/Ue033I+kzldR04sZllq9MPanSvWapibLXweSKdxAPQCZTWE8SSfcyvHKZy2+jMZJ6iXMTMbmGYaOzCNzBTk4HE+Q4mEOhmWadnXv3a3PuN0feX6ejWobnuJ+5sn6CNVm54TuseJOop6I/wC8tPsiAfck/wATRo6MaZeau5/W5P2GBL4Vzv5GEcNmTVaWx+4jt7KcT0SjZtVfcRF9lGZZCATXg55flfqPP69h6lvwbv72AlPa1LaULvlWZjwVSf5InpFgAE8q6V6zrdUwHdr7A9/GXxjn/vlldR7B8G+kr6mmzSuDnTBGRs5HVuT2fkQfrPTJ5j8ENkdVo7NUww2ps3V4Y/w04D7ljPTpqdOGXZYQhKghCEAhCEAhCEAhCEAhCEBljhVLHkASfYT5u23qjdqLbTx6yx2+RJx9sT3npfreo0F9mcEVMq/ubsj7mfPTTGT0cE7qpYJLo9JZacVoz45kDgPcybTaXrbFrH4mGfQeM9D0OlStAiAKqjAAmZjt2y5vGanbj6Oi97d9kT5lj9poU9Eq/wAdjt5hQqj75M6nEMTfjHC8+d+sijo9pk/AGI/OWf8Ak4mhVpa04Kqr7KBJ4ZjUc7nle6bux4EZvRQZWUgEUCNBi70IWIxgWkTvKM7bmtFVLufwqfrPJqK3tsCqN6y1wqjxZ3bAH1M7Dp5r+ytQPFjlvYSz8HNjf1G0RawymkU2+nWHsp9OJ+QkrePrde77E2cul01WnTu01omfMgcT8zk/OaEISsCEIQCEIQCEIQCEIQCEIQCEIQOA+Lms3NGlQPG64E/sQZP/ADFJ48Z3/wAW9Xv6tK/CmnJ/c5yfsFnn7Tnl29fFNYtjoxTvWs35FwPc/wCk7VeU5rorTist+dyfkOA/gzpAZqdOHJd5UsImYxmlczi0YWiFowvCpMwDSEvE34FgPHb0rCyL1kCZnla+3AJg7zF6Qa3q6HbxwQPfwgcJt/V9dqXbmqndX5c/vme7fB3Y/wDT7NFpGH1TG0nx3BwT7DPzng+wtmvqtVVp0zvX2KmfEAntN8lyflPrHS6ZKq1rrAVK0WtAOSqoAA+giLfU0nhCErIhCEAhCEAhCEAhCEAhEhAWETMq7R1IqpssPKut3PyUmB4P0y1nXbQvfmOsKD2Ts/8AaYLSW1yzFjzYlj7k5MXSpvWIvmw+g4zl3XtnrF2OyatytV8lAmjvSrRwEl350eSpS0YzSNnkT2QiRnkTWSF7ZXa2FWzZG9ZKhsidZAuiyO6yURZFNsItPZOK6Za3eZagf1N7eH+fSdNddgEzzraOo6y5n8M4H7RwELHpfwO2L1mps1bDs0J1dZI4dY/P5hf5nuc5P4bbH/o9mU1sMWWL19gPMO/aAPsu6PlOqzETK7p0ImYZlQ6ESEBYRIsAhCEAhCEBuYmY3MTMB2Zy/wARdZ1WzbPO0rSP+I8f+UNOlzPPPi7qf8Kir81j2H/hXdH/AOzJemsJvKPK2l7YiZt3vyL9z/oZQaa+wUwrN+ZvsOH95jHt6eS6xdEr8IjWSuzyF7pt5Vl7ZXe2VmukL2wJ3tkLWyu9sge4QbXDbAWTNfVqPGVrNqoviPrA3OtideJzb7Yz3QzewjRrLm5KB+4/2hZja1Nta7cqbB4sMD5zN6C7G/rdoU0EZTe6y3/4k7TA+/AfORvobLiN9sY5ADgJ6f8ABnZFdLX2Mytcd1EUd4VYyWwfM8OHlG1uNk29XB+kdmRgxcysH5i5jMxcwH5i5keYuYD4sbmGYQ6LGxYUsIkIEGYExpMQmA7M4H4raBrKK714il2R/RXxg/UY+c7ktKuv06XVPVYMpYhQ/PxkrWN1dvnh5t6DsVqPTj7zP21om01z1WcCj4JPIr4H5iQ3bcrQY3sn04yYx15ctyNx75Ut1QHjMM626wbyId3wZjgH2ldtPe3efd9FEu3OY5X417doKPGUbtsIORz7cZUGzh+Is37jJV0ijkB9JNtTiqGzart3VY+/ASBrrW8Qo+pl5tPj58ohrk8m5xRn9Qx7zMfniSV6VR4S2EjgsbamEhqVYlta8Y8iMj1EiUTT0Giewc1SsE9pyAMnhw8+OJFuoirE0dBqrKnWytijqchh/niPSOu2SUHB98+ikA+2Y6rQsRkMBzzvZGPc8hJtfLGvVei/SZNWm4+E1Cjtr+F/1J6enhOhDTw1OsqcMCyOhBVlPEHzBE9K6MdJ11IFdu6moA8OC2jzXyPmJuZOOfHr3OnVAxwMgDR4aacUmYuYwNFBgPzFBjMxcwH5i5jMxcwHZhG5iwKxMYWgxjGaAM0jZ4jtIXeB5/8AFjYTXUf1NSlrK8LaqjJascmx6fxPG9PTvOqngCwz7T6D6ZWH+guAON5AvDyJAM8P1Gm8uBHKYt074Y+UdZUilAAAAAAAOWJUvowZR2TtE9x+DD7zaOGEy9UksZLJI2WXL6yDKjQzYK62sIrVSx3uGASRnn8pLfse9O+m6TxwSN76Tc0gFeKwbFGf8TcrOXAALdvH2Ene9GbCgISA4UKxfd/KWbJ8+Ubee53fpzH/AKXcRkI7D9IzKbKQcEEHyIwZ3S2ENwJrB4LlFZG5HI4c8Z5YkOp0wvDByjkHsscgDPJcjJU8+cbWcn7cYDOm05VWXdRG6tVYEud7BXI7OMYyDxmNtDZzV5IDFQcHeByvz5EesuaDWsybi7gtVcKXXO8PkRBl7m42HZ7DvMjHs75ffDIr+QB5Ss+sFbFnRXB47osZQw8FYYOB7Rro+U4DJX8JdFDHvEqoxz9ZaOxrbGyHA7agjIsAXGSw8vQSObY2caNVQABuEMqb4IILBQeO8CTw4TK1WlNbZRu65wyNyweBBHI8o/omtdVl63oQawbhk5TC+ITwbPKaP9VRqFRajZRvEblJSta7GBO+uSMk4ycA44iI3jlZf409hdMyuK9YeHALeB9nHh+6duloYAggqRkEHII8wZ4zqatx2rPHdOPljP8ABlzY3SC/QtgZt0pParY8U9UPh7cp0mTWfDv3i9eDxwaZOydr1aqvrKnDD8Q5Mh8mHhNFWmnns12sBo4GQBo8NCJQYAxgMcDCHZhEzCFVWkbGSNImgRuZXsaTPK1kgwOlpzo7R+gH6ETySxcz17pCm9prF8TW38TyNpnJ6OG+lKyrjkcGHEGamzNdnstwIlVhmQMnHI4EcjMPTHUOgYTO1FBEXZ+sz2W5zQdAwhqzcPGoUJ1wDNkAWKp7rjhkjw95ObnL7gDOCpBU1ku/4mwwwCN0Hh6TJw9ZyvsQeKsPIiW9HbZZZisKHC/iJDA+DJjicegzDyZYXGl1FVllibtTWL1mFaux1y6A5DKeHAeMuUjPJurUDfKsVLgZYEE8ez5YPDE0tXqbgjmusvwVVewLZgnvljxGOGccDMDRqtjslz5ttTcdK1Cqiqc47PBeHgIc1p6lO6AUuQkb7Fu0FfskjA8R8uE5rWaY1WvXkgo5GfHhyM6rZ2xxW6XAvVp6t5nWwOrWYzhsN+EZPHGOPCc5tK/rb3sHddyV/byH2ErrxTd/gXWs2FsJIBxvrwdR4nHImbzlLa0WnVdXuIK9xsrvqSSd8ZGTk85ziJJVrh0vFL06ro3p7NK+9mhkcrvuVsNgrHMKMY4njNHaO0aN/rLNx3rdjTuZ3wp5ZGcZx4kDE4laB5D6SdKoScN3u1YsvLuztzdixxyGfASRTngZGlJPhLHU7oyxCjzYgD7ybd5ip1226SwXUOyEc8cseTDkR6T0box0vq1WK7MV38t0nsOf0nz9J5/br6FGN7f9FGR9ZgPqVDEg7vHI48R5SzLTGfDMn0SrSUGcd8P9s2avSE2Heemw1FjzZd0MpPrg4+U6xTOku3hyx8bpODHgyFTJFlZPzCJCEQNImkrSJoVC8q2S08gsEisvWjKH2M8s23s1qnLAdgkn2nrOoTgfac/r9GtikEZzJY1jlca8xjWE1NrbMaliQOx/EzJix6sct9I+XuJsbP1m92W4H+ZksIgP1kdca6eyvIlOzTxmg2iOCWcPAN4fOarVgyNWbUqtbfX3XY45b3aI9m5j6ycbc1I4hj/9rP8Ayitp4q6MmXbH+WN+KOs1d13B3JUkEqOCkjkT4t8yZXXTmadnU1991B8h2m+glW3bFKdxGb1bCj+8m2phISvSk+EtJoTzPAeZ4THv2/YeClUH6Rk/UzMv2gz94s37iT9o21qOoe6ivvOpI8E7R+3CVrdtVr3Ez6uQPsJzDXsYzJMG429Rt6w8AwUfoGPvM23WMxyck+bEkyrFzBs5rGPjEWJmKsJa9b+ExxpLfXUD/prPQEacB8L1xo2P5r3P0VR/2nd1mdcenzuT/qramPUyJZIs0wkhEhAjYSJhJiIxhAgYSFllphIbBwgZ15mZYk07VlZ65GmHrtGtikEA5nBbX2Y1Lkgdgnh6T0+yuZuv0S2KQRmSxrHLxry+IRNTa+y2pYkA7hPD0mXMWPTjlv2aHxzl3SbTasYBDL+VuIHt5TNv5Sg3OZrvjdunu6RP+EIvsMn7zM1G1rH5u5+eB9BMyLDVqZtQx9JGWJ5xuYZhnZQIRMwhC5iZiRRx5RpLZBCXdNsu+zuIx9SMCbei6GXP/tGCjyHEzUxrGXLjPrlxLWk0dljBUUnPpwnoWg6G0pgsC59Z0ui2TXX3UA+U1MXLLnvyJOhmzuo0iV5yRlmOMZZjkzqa0lXQ04UTQRZp5rd0qiSKIKI8CVBiEXEIEbCNIkpEYVgRESN14ScrGssDLsTjIWSXrk4yApIqhZXKtlc1WrkFlUK57XaFbFIIzOC2xslqWJHFD9p6pZTMvX7PFikEZks21jl415JqOUoNznT7f2K9RJUEp/E5ZxxnOx7OPOWHZhFRCeQJPoJoabYuos7qHHmeESLlnjPrOhOt0fQqxv8AaNujyHOdBoehlCcWBc+bTXjXLLmnx5vVQ7nCqzewM1tH0Y1Nn4dwebc/pPUNNsitBhUUewE0K9IPKamMcrzZV59ougw52OW9AMCdFoejNFfJBnzIzOnTTSZKI053K3usqnQKOQA+UuJpZdWqSqkqbVU08nSqTqkkRIE+nTsiWFEStMCSASsgCPAgBFAhBiEWEBMRpEfEIgMKxhWS4iYhVO5JXKy9akrlJBAUjGrlrdgUlGe9EifS5moUjDXIrE1Gy0sGGAIMxbuhelY724MztOridXC7clpujNNfdRR8per2cByAm8aonVQMpNJ6SVdNNDq4BIFRaY9apZFceEhFcVxwSWAksJSIFNa5KlEthBHhZU2rJRJUrElxFxAaBHARcRQIQgEUQxHAQpMQjoQGQhCEJCEIEdkrtCEKQRYQhCRDCEKbCEJGhCEICRRCEAEdCEJSrLKcoQlQ+EIQhRCEICwEIQHCLCEKIQhA/9k=',
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
    description: 'Fur Boots with soft touch of leather',
    imgurl:
      'https://image.shutterstock.com/image-photo/ankle-boot-nubuck-leather-isolated-260nw-1162044976.jpg',
    price: 300,
    reviews: 3,
    stars: 5,
    discount: 50,
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with    ',
  },
  {
    id: '2',
    description: 'Grey Shirt with red stripes',
    imgurl:
      'https://www.whiteflag.in/uploads/product/thumbs/1654963158-_MG_0631.jpg',
    price: 200,
    reviews: 5,
    stars: 4,
    discount: 0,
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with    ',
  },
  {
    id: '3',
    description: 'Black Shirt with Grey Stripes',
    imgurl:
      'https://www.whiteflag.in/uploads/product/thumbs/1654963158-_MG_0631.jpg',
    price: 150,
    reviews: 4,
    stars: 3,
    discount: 10,
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with    ',
  },
];
