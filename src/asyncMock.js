import celticsJersey from './assets/celtics-jersey.jpg';
import chicagoJersey from './assets/chicago-jersey.jpg';
import miamiJersey from './assets/miami-jersey.jpg';
import pistonsJersey from './assets/pistons-jersey.jpg';
import warriorsJersey from './assets/warriors-jersey.jpg';
import memphisBuzo from './assets/memphis-buzo.jpg';
import lakersBuzo from './assets/lakers-buzo.jpg';
import warriorsBuzo from './assets/warriors-buzo.jpg';
import sunsShort from './assets/suns-short.jpg';
import blazersShort from './assets/blazers-short.jpg';
import knicksShort from './assets/knicks-short.jpg';
import magicShort from './assets/magic-short.jpg';
import raptorsShort from './assets/raptors-short.jpg';

const products = [
    {
        id: 'J01',
        name: 'Boston Celtics Jersey',
        price: 17000,
        category: 'Jersey',
        img: celticsJersey,
        stock: 12,
        description: 'Camiseta City Edition Boston Celtics 2023 - Jayson Tatum #0'
    },
    {
        id: 'J02',
        name: 'Miami Heat Jersey',
        price: 17000,
        category: 'Jersey',
        img: miamiJersey,
        stock: 10,
        description: 'Camiseta City Edition Miami Heat 2022 - Jimmy Butler #22'
    },
    {
        id: 'J03',
        name: 'Chicago Bulls retro Jersey',
        price: 19000,
        category: 'Jersey',
        img: chicagoJersey,
        stock: 12,
        description: 'Jersey Clásica Retro Chicago Bulls 90 - Michael Jordan #23'
    },
    {
        id: 'J04',
        name: 'Detroit Pistons Retro Jersey',
        price: 15000,
        category: 'Jersey',
        img: pistonsJersey,
        stock: 7,
        description: 'Jersey Detroit Pistons City Edition Retro - Dennis Rodman #10'
    },
    {
        id: 'J05',
        name: 'Golden State Warriors Jersey',
        price: 20000,
        category: 'Jersey',
        img: warriorsJersey,
        stock: 16,
        description: 'Jersey Golden State Warriors Statement Edition 2023 - Steph Curry #30'
    },
    {
        id: 'B01',
        name: 'Buzo Memphis Grizzlies',
        price: 21000,
        category: 'Buzos',
        img: memphisBuzo,
        stock: 4,
        description: 'Buzo canguro Memphis Grizzlies bordado - Negro'
    },
    {
        id: 'B02',
        name: 'Buzo Golden State Warriors',
        price: 21000,
        category: 'Buzos',
        img: warriorsBuzo,
        stock: 7,
        description: 'Buzo canguro Golden State Warriors bordado - Azul'
    },
    {
        id: 'B03',
        name: 'Buzo Los Angeles Lakers',
        price: 21000,
        category: 'Buzos',
        img: lakersBuzo,
        stock: 5,
        description: 'Buzo canguro Lakers bordado - Blanco'
    },
    {
        id: 'S01',
        name: 'Short Phoenix Suns',
        price: 19000,
        category: 'Shorts',
        img: sunsShort,
        stock: 13,
        description: 'Short Phoenix Suns 2022 bordado - Negro'
    },
    {
        id: 'S02',
        name: 'Short New York Knicks',
        price: 18000,
        category: 'Shorts',
        img: knicksShort,
        stock: 20,
        description: 'Short New York Knicks 2022 bordado - Blanco'
    },
    {
        id: 'S03',
        name: 'Short Toronto Raptors',
        price: 18000,
        category: 'Shorts',
        img: raptorsShort,
        stock: 9,
        description: 'Short Toronto Raptors bordado - Violeta'
    },
    {
        id: 'S04',
        name: 'Short Orlando Magic',
        price: 18000,
        category: 'Shorts',
        img: magicShort,
        stock: 7,
        description: 'Short Orlando Magic Clásico bordado - Azul'
    },
    {
        id: 'S05',
        name: 'Short Portland Trail Blazers',
        price: 18000,
        category: 'Shorts',
        img: blazersShort,
        stock: 12,
        description: 'Short Portland Trail Blazers 2023 bordado - Negro'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}