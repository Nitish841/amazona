import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Nitish',
      email: 'nitishkqr841@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Nitish Kumar',
      email: 'nitishkqr@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Addida Fit shirt',
      slug: 'addida-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Addidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality Pant',
    },
    {
      // _id: '4',
      name: 'Addida Fit Pant',
      slug: 'addida-fit-pant',
      category: 'Pant',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Addidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality Pant',
    },
  ],
};
export default data;
