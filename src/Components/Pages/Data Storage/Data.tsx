
import apples from 'C:/Users/vedav/Desktop/My-React-Project/src/assets/Apples.png';
import bananas from 'C:/Users/vedav/Desktop/My-React-Project/src/assets/Bananas.png';
import oranges from 'C:/Users/vedav/Desktop/My-React-Project/src/assets/Oranges.png';
import grapes from 'C:/Users/vedav/Desktop/My-React-Project/src/assets/Grapes.png';
import guava from 'C:/Users/vedav/Desktop/My-React-Project/src/assets/Guava.png';
import mustardApple from 'C:/Users/vedav/Desktop/My-React-Project/src/assets/Mustard Apple.png';
import pomegranate from 'C:/Users/vedav/Desktop/My-React-Project/src/assets/Pomegranate.png';
import papaya from 'C:/Users/vedav/Desktop/My-React-Project/src/assets/Papaya.png';

export const products = [
  { id: 1, name: 'Apples', stock: 150, price: 100, image: apples },
  { id: 2, name: 'Bananas', stock: 200, price: 50, image: bananas },
  { id: 3, name: 'Oranges', stock: 10, price: 120, image: oranges },
  { id: 4, name: 'Grapes', stock: 20, price: 50, image: grapes },
  { id: 5, name: 'Guava', stock: 30, price: 30, image: guava },
  { id: 6, name: 'Mustard Apple', stock: 10, price: 90, image: mustardApple },
  { id: 7, name: 'Pomegranate', stock: 15, price: 100, image: pomegranate },
  { id: 8, name: 'Papaya', stock: 10, price: 40, image: papaya }
];

  
  export const purchases = [
    { id: 1, productId: 2, quantity: 3 }, // Bought 3 Bananas
    { id: 2, productId: 1, quantity: 2 }  // Bought 2 Apples
  ];
  