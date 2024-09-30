import { Product } from './AppTypes.tsx'
import kurthi from '../asserts/kurthies.png'
import silksaree from '../asserts/silk-saree.png'
import tshirt from '../asserts/tshirt.png'
import jeans from '../asserts/jeans.png'
import dhothies from '../asserts/dhothies.png'
import csaree from '../asserts/cotton-saree.png'
import trouser from '../asserts/trouser.png'
import cargo from '../asserts/cargo.png'
import wtops from '../asserts/westerntops.png'
import tracks from '../asserts/tracks.png'

export const products: Product[] = [
    {
        id: 1,
        name: "Kurthi",
        price: 399,
        count: 0,
        image: kurthi
    },
    {
        id: 2,
        name: "Western Tops",
        price: 499,
        count: 0,
        image: wtops
    },
    {
        id: 3,
        name: "Silk Sarees",
        price: 1999,
        count: 0,
        image: silksaree
    }, {
        id: 4,
        name: "Cargos",
        price: 799,
        count: 0,
        image: cargo
    },
    {
        id: 5,
        name: "T-Shirt",
        price: 299,
        count: 0,
        image: tshirt
    },
    {
        id: 6,
        name: "Jeans",
        price: 699,
        count: 0,
        image: jeans
    }, {
        id: 7,
        name: "Dhothies",
        price: 599,
        count: 0,
        image: dhothies
    },
    {
        id: 8,
        name: "Trousers",
        price: 199,
        count: 0,
        image: trouser
    },
    {
        id: 9,
        name: "Cotton Sarees",
        price: 299,
        count: 0,
        image: csaree
    },
    {
        id: 10,
        name: "Tracks Pant",
        price: 399,
        count: 0,
        image: tracks
    }
];