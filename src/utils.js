import { collection, getDocs, query } from 'firebase/firestore';


export async function getRestaurants(db) {
    const restRefs = collection(db, `/restaurants/`)
    const q = query(restRefs)
    const restDocs = await getDocs(q);
    let restaurants = []
    restDocs.forEach((doc) =>{restaurants.push(doc)})
    
    return restaurants
};