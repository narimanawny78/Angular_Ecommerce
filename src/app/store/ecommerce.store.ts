import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Product } from '../models/product';
import { computed, inject } from '@angular/core';
import { produce } from 'immer';
import { ToasterService } from '../services/toaster.service';
import { CartItem } from '../models/cart';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialogComponent } from '../components/sign-in-dialog/sign-in-dialog.component';
import { SignInParams, SignUpParams, User } from '../models/user';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { withStorageSync } from '@angular-architects/ngrx-toolkit';
import { AddReviewParams, UserReview } from '../models/user-review';

export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
  cartItem: CartItem[];
  user: User | undefined;

  loading: boolean;
  selectedProductId: string | undefined;

  writeReview: boolean;
};

export const EcommerceStore = signalStore(
  {
    providedIn: 'root',
  },
  withState({
    products: [
      // ==================== Electronics ====================
      {
        id: '1',
        name: 'Wireless Headphones',
        description:
          'Premium wireless headphones with clear sound, noise cancellation, and long battery life.',
        price: 89.99,
        imageUrl:
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        rating: 4.6,
        reviewCount: 5,
        inStock: true,
        category: 'electronics',
        reviews: [
          {
            id: '1-1',
            productId: '1',
            userName: 'Ahmed Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
            title: 'Amazing Sound',
            comment:
              'The sound quality is excellent and the battery lasts for a long time.',
            reviewDate: new Date('2026-07-10'),
          },
          {
            id: '1-2',
            productId: '1',
            userName: 'Sara Mohamed',
            userImageUrl: 'https://i.pravatar.cc/150?img=47',
            rating: 5,
            title: 'Very Comfortable',
            comment:
              'Very comfortable to wear and the noise cancellation works perfectly.',
            reviewDate: new Date('2026-07-15'),
          },
          {
            id: '1-3',
            productId: '1',
            userName: 'Omar Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=33',
            rating: 5,
            title: 'Great Quality',
            comment: 'Excellent build quality and very clear sound.',
            reviewDate: new Date('2026-07-20'),
          },
          {
            id: '1-4',
            productId: '1',
            userName: 'Mona Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=45',
            rating: 4,
            title: 'Good Product',
            comment: 'Great headphones but slightly expensive.',
            reviewDate: new Date('2026-08-01'),
          },
          {
            id: '1-5',
            productId: '1',
            userName: 'Ali Mahmoud',
            userImageUrl: 'https://i.pravatar.cc/150?img=11',
            rating: 4,
            title: 'Nice Headphones',
            comment: 'Good sound quality and nice design.',
            reviewDate: new Date('2026-08-05'),
          },
        ],
      },
      {
        id: '2',
        name: 'Smart Watch',
        description:
          'Modern smartwatch with fitness tracking, heart rate monitoring, and smart notifications.',
        price: 149.99,
        imageUrl:
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
        rating: 4.4,
        reviewCount: 5,
        inStock: true,
        category: 'electronics',
        reviews: [
          {
            id: '2-1',
            productId: '2',
            userName: 'Youssef Samy',
            userImageUrl: 'https://i.pravatar.cc/150?img=14',
            rating: 5,
            title: 'Excellent Watch',
            comment: 'The fitness tracking features are very useful.',
            reviewDate: new Date('2026-07-12'),
          },
          {
            id: '2-2',
            productId: '2',
            userName: 'Nour Ahmed',
            userImageUrl: 'https://i.pravatar.cc/150?img=32',
            rating: 4,
            title: 'Good Features',
            comment: 'It has many useful features and looks stylish.',
            reviewDate: new Date('2026-07-22'),
          },
          {
            id: '2-3',
            productId: '2',
            userName: 'Khaled Mostafa',
            userImageUrl: 'https://i.pravatar.cc/150?img=52',
            rating: 4,
            title: 'Nice Design',
            comment: 'The design is modern and the screen is clear.',
            reviewDate: new Date('2026-08-02'),
          },
          {
            id: '2-4',
            productId: '2',
            userName: 'Laila Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=44',
            rating: 5,
            title: 'Love It',
            comment: 'Very easy to use and the battery life is great.',
            reviewDate: new Date('2026-08-07'),
          },
          {
            id: '2-5',
            productId: '2',
            userName: 'Mohamed Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=53',
            rating: 4,
            title: 'Worth Buying',
            comment: 'Good value for the price.',
            reviewDate: new Date('2026-08-10'),
          },
        ],
      },

      // ==================== Clothing ====================
      {
        id: '3',
        name: 'Classic White T-Shirt',
        description:
          'Comfortable classic white cotton t-shirt suitable for everyday wear.',
        price: 24.99,
        imageUrl:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
        rating: 4.4,
        reviewCount: 5,
        inStock: true,
        category: 'clothing',
        reviews: [
          {
            id: '3-1',
            productId: '3',
            userName: 'Adam Ibrahim',
            userImageUrl: 'https://i.pravatar.cc/150?img=15',
            rating: 5,
            title: 'Perfect Basic',
            comment: 'Soft material and a perfect fit.',
            reviewDate: new Date('2026-06-15'),
          },
          {
            id: '3-2',
            productId: '3',
            userName: 'Hana Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=48',
            rating: 4,
            title: 'Good Quality',
            comment: 'Good quality cotton for the price.',
            reviewDate: new Date('2026-07-01'),
          },
          {
            id: '3-3',
            productId: '3',
            userName: 'Tarek Ahmed',
            userImageUrl: 'https://i.pravatar.cc/150?img=60',
            rating: 4,
            title: 'Nice Shirt',
            comment: 'Comfortable for everyday use.',
            reviewDate: new Date('2026-07-14'),
          },
          {
            id: '3-4',
            productId: '3',
            userName: 'Salma Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=49',
            rating: 5,
            title: 'Great Material',
            comment: 'The material feels soft and premium.',
            reviewDate: new Date('2026-07-30'),
          },
          {
            id: '3-5',
            productId: '3',
            userName: 'Karim Samir',
            userImageUrl: 'https://i.pravatar.cc/150?img=61',
            rating: 4,
            title: 'Recommended',
            comment: 'Simple, comfortable, and useful.',
            reviewDate: new Date('2026-08-09'),
          },
        ],
      },
      {
        id: '4',
        name: 'Blue Denim Jacket',
        description:
          'Stylish blue denim jacket with a timeless design for casual outfits.',
        price: 79.99,
        imageUrl:
          'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80',
        rating: 4.6,
        reviewCount: 5,
        inStock: false,
        category: 'clothing',
        reviews: [
          {
            id: '4-1',
            productId: '4',
            userName: 'Reem Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=25',
            rating: 5,
            title: 'Beautiful Jacket',
            comment: 'Looks exactly like the product image.',
            reviewDate: new Date('2026-06-20'),
          },
          {
            id: '4-2',
            productId: '4',
            userName: 'Omar Salah',
            userImageUrl: 'https://i.pravatar.cc/150?img=56',
            rating: 5,
            title: 'Excellent Quality',
            comment: 'The denim quality is excellent.',
            reviewDate: new Date('2026-07-05'),
          },
          {
            id: '4-3',
            productId: '4',
            userName: 'Mariam Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=35',
            rating: 4,
            title: 'Nice Jacket',
            comment: 'Very stylish and comfortable.',
            reviewDate: new Date('2026-07-25'),
          },
          {
            id: '4-4',
            productId: '4',
            userName: 'Hassan Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=67',
            rating: 4,
            title: 'Good Purchase',
            comment: 'Good fit but the sleeves are a little long.',
            reviewDate: new Date('2026-08-03'),
          },
          {
            id: '4-5',
            productId: '4',
            userName: 'Nada Ahmed',
            userImageUrl: 'https://i.pravatar.cc/150?img=36',
            rating: 5,
            title: 'Love The Style',
            comment: 'One of my favorite jackets.',
            reviewDate: new Date('2026-08-11'),
          },
        ],
      },

      // ==================== Home & Kitchen ====================
      {
        id: '5',
        name: 'Non-Stick Frying Pan',
        description:
          'Durable non-stick frying pan designed for easy and healthy everyday cooking.',
        price: 39.99,
        imageUrl:
          'https://commons.wikimedia.org/wiki/Special:FilePath/Diamond%20surface%20nonstick%20frying%20pan.jpg?width=800',
        rating: 4.6,
        reviewCount: 5,
        inStock: true,
        category: 'home & kitchen',
        reviews: [
          {
            id: '5-1',
            productId: '5',
            userName: 'Fatma Mohamed',
            userImageUrl: 'https://i.pravatar.cc/150?img=29',
            rating: 5,
            title: 'Very Practical',
            comment: 'Nothing sticks to the pan and it is easy to clean.',
            reviewDate: new Date('2026-06-18'),
          },
          {
            id: '5-2',
            productId: '5',
            userName: 'Dina Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=30',
            rating: 5,
            title: 'Excellent Pan',
            comment: 'Good quality and heats evenly.',
            reviewDate: new Date('2026-07-03'),
          },
          {
            id: '5-3',
            productId: '5',
            userName: 'Mahmoud Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=68',
            rating: 4,
            title: 'Good Quality',
            comment: 'Works well and feels durable.',
            reviewDate: new Date('2026-07-17'),
          },
          {
            id: '5-4',
            productId: '5',
            userName: 'Aya Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=41',
            rating: 4,
            title: 'Nice Product',
            comment: 'A good pan for everyday cooking.',
            reviewDate: new Date('2026-08-04'),
          },
          {
            id: '5-5',
            productId: '5',
            userName: 'Mostafa Samy',
            userImageUrl: 'https://i.pravatar.cc/150?img=69',
            rating: 5,
            title: 'Highly Recommended',
            comment: 'One of the best pans I have used.',
            reviewDate: new Date('2026-08-12'),
          },
        ],
      },
      {
        id: '6',
        name: 'Modern Table Lamp',
        description:
          'Minimal and elegant table lamp for bedrooms, living rooms, and workspaces.',
        price: 45.99,
        imageUrl:
          'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
        rating: 4.4,
        reviewCount: 5,
        inStock: true,
        category: 'home & kitchen',
        reviews: [
          {
            id: '6-1',
            productId: '6',
            userName: 'Nour Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=42',
            rating: 5,
            title: 'Beautiful Lamp',
            comment: 'The design looks beautiful in my bedroom.',
            reviewDate: new Date('2026-06-25'),
          },
          {
            id: '6-2',
            productId: '6',
            userName: 'Ahmed Samir',
            userImageUrl: 'https://i.pravatar.cc/150?img=70',
            rating: 4,
            title: 'Good Lighting',
            comment: 'Provides a comfortable amount of light.',
            reviewDate: new Date('2026-07-11'),
          },
          {
            id: '6-3',
            productId: '6',
            userName: 'Heba Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=43',
            rating: 4,
            title: 'Nice Design',
            comment: 'Simple and elegant design.',
            reviewDate: new Date('2026-07-28'),
          },
          {
            id: '6-4',
            productId: '6',
            userName: 'Yassin Mohamed',
            userImageUrl: 'https://i.pravatar.cc/150?img=71',
            rating: 5,
            title: 'Great Product',
            comment: 'Looks exactly as expected.',
            reviewDate: new Date('2026-08-06'),
          },
          {
            id: '6-5',
            productId: '6',
            userName: 'Rana Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=46',
            rating: 4,
            title: 'Worth It',
            comment: 'Good product for the price.',
            reviewDate: new Date('2026-08-13'),
          },
        ],
      },

      // ==================== Footwear ====================
      {
        id: '7',
        name: 'Running Sneakers',
        description:
          'Lightweight and comfortable sneakers designed for running and everyday activities.',
        price: 69.99,
        imageUrl:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
        rating: 4.6,
        reviewCount: 5,
        inStock: true,
        category: 'footwear',
        reviews: [
          {
            id: '7-1',
            productId: '7',
            userName: 'Khaled Ahmed',
            userImageUrl: 'https://i.pravatar.cc/150?img=72',
            rating: 5,
            title: 'Very Comfortable',
            comment: 'Perfect for walking and running.',
            reviewDate: new Date('2026-06-10'),
          },
          {
            id: '7-2',
            productId: '7',
            userName: 'Sara Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=50',
            rating: 5,
            title: 'Great Sneakers',
            comment: 'Lightweight and very comfortable.',
            reviewDate: new Date('2026-07-08'),
          },
          {
            id: '7-3',
            productId: '7',
            userName: 'Adel Mostafa',
            userImageUrl: 'https://i.pravatar.cc/150?img=73',
            rating: 4,
            title: 'Good For Daily Use',
            comment: 'Comfortable but I recommend choosing the right size.',
            reviewDate: new Date('2026-07-19'),
          },
          {
            id: '7-4',
            productId: '7',
            userName: 'Mariam Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=51',
            rating: 4,
            title: 'Nice Shoes',
            comment: 'The design is stylish and sporty.',
            reviewDate: new Date('2026-08-02'),
          },
          {
            id: '7-5',
            productId: '7',
            userName: 'Omar Samy',
            userImageUrl: 'https://i.pravatar.cc/150?img=74',
            rating: 5,
            title: 'Excellent',
            comment: 'I wear them almost every day.',
            reviewDate: new Date('2026-08-10'),
          },
        ],
      },
      {
        id: '8',
        name: 'Leather Boots',
        description:
          'Stylish and durable leather boots suitable for casual and outdoor wear.',
        price: 119.99,
        imageUrl:
          'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
        rating: 4.4,
        reviewCount: 5,
        inStock: false,
        category: 'footwear',
        reviews: [
          {
            id: '8-1',
            productId: '8',
            userName: 'Mohamed Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=75',
            rating: 5,
            title: 'Premium Quality',
            comment: 'The leather feels high quality and durable.',
            reviewDate: new Date('2026-06-30'),
          },
          {
            id: '8-2',
            productId: '8',
            userName: 'Tamer Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=76',
            rating: 4,
            title: 'Good Boots',
            comment: 'Very stylish but takes time to break in.',
            reviewDate: new Date('2026-07-12'),
          },
          {
            id: '8-3',
            productId: '8',
            userName: 'Hany Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=77',
            rating: 4,
            title: 'Nice Design',
            comment: 'Looks great with casual outfits.',
            reviewDate: new Date('2026-07-26'),
          },
          {
            id: '8-4',
            productId: '8',
            userName: 'Mona Samir',
            userImageUrl: 'https://i.pravatar.cc/150?img=52',
            rating: 5,
            title: 'Love Them',
            comment: 'Beautiful boots and excellent quality.',
            reviewDate: new Date('2026-08-05'),
          },
          {
            id: '8-5',
            productId: '8',
            userName: 'Ali Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=78',
            rating: 4,
            title: 'Good Purchase',
            comment: 'Comfortable after wearing them a few times.',
            reviewDate: new Date('2026-08-14'),
          },
        ],
      },

      // ==================== Books ====================
      {
        id: '9',
        name: 'Atomic Habits',
        description:
          'A practical guide to building good habits, breaking bad habits, and improving your life.',
        price: 18.99,
        imageUrl:
          'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80',
        rating: 4.8,
        reviewCount: 5,
        inStock: true,
        category: 'books',
        reviews: [
          {
            id: '9-1',
            productId: '9',
            userName: 'Nour Mohamed',
            userImageUrl: 'https://i.pravatar.cc/150?img=53',
            rating: 5,
            title: 'Life Changing',
            comment: 'Very practical ideas that are easy to apply.',
            reviewDate: new Date('2026-05-15'),
          },
          {
            id: '9-2',
            productId: '9',
            userName: 'Ahmed Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=79',
            rating: 5,
            title: 'Excellent Book',
            comment: 'One of the best books about building habits.',
            reviewDate: new Date('2026-06-20'),
          },
          {
            id: '9-3',
            productId: '9',
            userName: 'Salma Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=54',
            rating: 5,
            title: 'Highly Recommended',
            comment: 'Easy to read and full of useful advice.',
            reviewDate: new Date('2026-07-10'),
          },
          {
            id: '9-4',
            productId: '9',
            userName: 'Omar Samy',
            userImageUrl: 'https://i.pravatar.cc/150?img=80',
            rating: 4,
            title: 'Very Useful',
            comment: 'A helpful book with practical examples.',
            reviewDate: new Date('2026-07-29'),
          },
          {
            id: '9-5',
            productId: '9',
            userName: 'Dina Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=55',
            rating: 5,
            title: 'Amazing Read',
            comment: 'I learned a lot from this book.',
            reviewDate: new Date('2026-08-08'),
          },
        ],
      },
      {
        id: '10',
        name: 'Clean Code',
        description:
          'A handbook for writing clean, readable, maintainable, and professional software code.',
        price: 34.99,
        imageUrl:
          'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80',
        rating: 4.6,
        reviewCount: 5,
        inStock: true,
        category: 'books',
        reviews: [
          {
            id: '10-1',
            productId: '10',
            userName: 'Karim Ahmed',
            userImageUrl: 'https://i.pravatar.cc/150?img=81',
            rating: 5,
            title: 'Great Programming Book',
            comment: 'A must-read book for software developers.',
            reviewDate: new Date('2026-05-20'),
          },
          {
            id: '10-2',
            productId: '10',
            userName: 'Yara Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=56',
            rating: 5,
            title: 'Very Informative',
            comment: 'Contains valuable lessons about writing better code.',
            reviewDate: new Date('2026-06-18'),
          },
          {
            id: '10-3',
            productId: '10',
            userName: 'Mohamed Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=82',
            rating: 4,
            title: 'Useful Concepts',
            comment: 'Some concepts are difficult but very useful.',
            reviewDate: new Date('2026-07-15'),
          },
          {
            id: '10-4',
            productId: '10',
            userName: 'Hana Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=57',
            rating: 4,
            title: 'Good Book',
            comment: 'A valuable resource for improving coding skills.',
            reviewDate: new Date('2026-08-01'),
          },
          {
            id: '10-5',
            productId: '10',
            userName: 'Omar Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=83',
            rating: 5,
            title: 'Recommended',
            comment: 'I recommend it to every developer.',
            reviewDate: new Date('2026-08-12'),
          },
        ],
      },

      // ==================== Accessories ====================
      {
        id: '11',
        name: 'Leather Wallet',
        description:
          'Classic and durable leather wallet with multiple card slots and a compact design.',
        price: 29.99,
        imageUrl:
          'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80',
        rating: 4.4,
        reviewCount: 5,
        inStock: true,
        category: 'accessories',
        reviews: [
          {
            id: '11-1',
            productId: '11',
            userName: 'Adham Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=84',
            rating: 5,
            title: 'Great Wallet',
            comment: 'The leather quality is very good.',
            reviewDate: new Date('2026-06-05'),
          },
          {
            id: '11-2',
            productId: '11',
            userName: 'Ahmed Samy',
            userImageUrl: 'https://i.pravatar.cc/150?img=85',
            rating: 4,
            title: 'Nice Design',
            comment: 'Compact and has enough space for my cards.',
            reviewDate: new Date('2026-07-02'),
          },
          {
            id: '11-3',
            productId: '11',
            userName: 'Mona Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=58',
            rating: 4,
            title: 'Good Product',
            comment: 'Looks elegant and feels durable.',
            reviewDate: new Date('2026-07-20'),
          },
          {
            id: '11-4',
            productId: '11',
            userName: 'Hassan Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=86',
            rating: 5,
            title: 'Excellent',
            comment: 'Exactly what I was looking for.',
            reviewDate: new Date('2026-08-03'),
          },
          {
            id: '11-5',
            productId: '11',
            userName: 'Rania Mohamed',
            userImageUrl: 'https://i.pravatar.cc/150?img=59',
            rating: 4,
            title: 'Worth Buying',
            comment: 'Good quality for the price.',
            reviewDate: new Date('2026-08-13'),
          },
        ],
      },
      {
        id: '12',
        name: 'Classic Sunglasses',
        description:
          'Stylish sunglasses with a timeless design and UV protection for everyday use.',
        price: 39.99,
        imageUrl:
          'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
        rating: 4.6,
        reviewCount: 5,
        inStock: true,
        category: 'accessories',
        reviews: [
          {
            id: '12-1',
            productId: '12',
            userName: 'Laila Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=60',
            rating: 5,
            title: 'Very Stylish',
            comment: 'Beautiful design and comfortable to wear.',
            reviewDate: new Date('2026-06-12'),
          },
          {
            id: '12-2',
            productId: '12',
            userName: 'Sara Adel',
            userImageUrl: 'https://i.pravatar.cc/150?img=61',
            rating: 5,
            title: 'Love Them',
            comment: 'They look great and provide good sun protection.',
            reviewDate: new Date('2026-07-07'),
          },
          {
            id: '12-3',
            productId: '12',
            userName: 'Omar Mohamed',
            userImageUrl: 'https://i.pravatar.cc/150?img=87',
            rating: 4,
            title: 'Good Quality',
            comment: 'Nice sunglasses with a classic style.',
            reviewDate: new Date('2026-07-23'),
          },
          {
            id: '12-4',
            productId: '12',
            userName: 'Nour Ali',
            userImageUrl: 'https://i.pravatar.cc/150?img=62',
            rating: 4,
            title: 'Nice Product',
            comment: 'Good product but the frame is slightly large for me.',
            reviewDate: new Date('2026-08-04'),
          },
          {
            id: '12-5',
            productId: '12',
            userName: 'Karim Hassan',
            userImageUrl: 'https://i.pravatar.cc/150?img=88',
            rating: 5,
            title: 'Perfect',
            comment: 'Excellent style and good quality.',
            reviewDate: new Date('2026-08-14'),
          },
        ],
      },
    ],

    category: 'all',
    wishlistItems: [],
    cartItem: [],
    user: undefined,
    loading: false,
    selectedProductId: undefined,
    writeReview: false,
  } as EcommerceState),

  withStorageSync({
    key: 'modern-store',
    select: ({ wishlistItems, cartItem, user }) => ({
      wishlistItems,
      cartItem,
      user,
    }),
  }),

  withComputed(
    ({ category, products, wishlistItems, cartItem, selectedProductId }) => ({
      filteredProduct: computed(() => {
        if (category() === 'all') {
          return products();
        }
        return products().filter(
          (p) => p.category === category().toLocaleLowerCase(),
        );
      }),
      wishlistCount: computed(() => wishlistItems().length),
      cartCount: computed(() =>
        cartItem().reduce((acc, item) => acc + item.quantity, 0),
      ),
      selectedProduct: computed(() =>
        products().find((p) => p.id === selectedProductId()),
      ),
    }),
  ),

  withMethods(
    (
      store,
      toaster = inject(ToasterService),
      matDialog = inject(MatDialog),
      router = inject(Router),
    ) => ({
      setCategory: signalMethod<string>((category: string) => {
        patchState(store, { category });
      }),

      setProductId: signalMethod<string>((productId: string) => {
        patchState(store, { selectedProductId: productId });
      }),

      addToWishList: (product: Product) => {
        const updatedWishListItems = produce(store.wishlistItems(), (draft) => {
          if (!draft.find((p) => p.id === product.id)) {
            draft.push(product);
          }
        });
        patchState(store, { wishlistItems: updatedWishListItems });

        toaster.success('Product added to wishlist');
      },

      removeFromWishlist: (product: Product) => {
        patchState(store, {
          wishlistItems: store
            .wishlistItems()
            .filter((p) => p.id !== product.id),
        });
        toaster.error('Product removed from wishlist');
      },

      clearWishlist: () => {
        patchState(store, { wishlistItems: [] });
      },

      addToCart: (product: Product, quantity = 1) => {
        const existingItemIndex = store
          .cartItem()
          .findIndex((i) => i.product.id === product.id);

        const updatedCartItems = produce(store.cartItem(), (draft) => {
          if (existingItemIndex !== -1) {
            draft[existingItemIndex].quantity += quantity;
            return;
          }
          draft.push({
            product,
            quantity,
          });
        });

        patchState(store, { cartItem: updatedCartItems });
        toaster.success(
          existingItemIndex !== -1
            ? 'Product added again'
            : 'Produact added to the cart',
        );
      },

      setItemQuantity(params: { productId: string; quantity: number }) {
        const index = store
          .cartItem()
          .findIndex((c) => c.product.id === params.productId);
        const updated = produce(store.cartItem(), (draft) => {
          draft[index].quantity = params.quantity;
        });
        patchState(store, { cartItem: updated });
      },

      addAllWishlistToCart: () => {
        const updatedCartItems = produce(store.cartItem(), (draft) => {
          store.wishlistItems().forEach((p) => {
            if (!draft.find((c) => c.product.id === p.id)) {
              draft.push({ product: p, quantity: 1 });
            }
          });
        });
        patchState(store, { cartItem: updatedCartItems, wishlistItems: [] });
      },

      moveToWishlist: (product: Product) => {
        const updatedCartItems = store
          .cartItem()
          .filter((p) => p.product.id !== product.id);
        const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
          if (!draft.find((p) => p.id === product.id)) {
            draft.push(product);
          }
        });

        patchState(store, {
          cartItem: updatedCartItems,
          wishlistItems: updatedWishlistItems,
        });
      },

      removeFromCart: (product: Product) => {
        patchState(store, {
          cartItem: store.cartItem().filter((c) => c.product.id !== product.id),
        });
      },

      proceedToCheckout: () => {
        if (!store.user()) {
          matDialog.open(SignInDialogComponent, {
            disableClose: true,
            data: {
              checkout: true,
            },
          });
          return;
        }
        router.navigate(['/checkout']);
      },

      placeOrder: async () => {
        patchState(store, { loading: true });

        const user = store.user();

        if (!user) {
          toaster.error('Please login before placing order');
          patchState(store, { loading: false });
          return;
        }

        const order: Order = {
          id: crypto.randomUUID(),
          userId: user.id,
          total: Math.round(
            store
              .cartItem()
              .reduce(
                (acc, item) => acc + item.quantity * item.product.price,
                0,
              ),
          ),
          items: store.cartItem(),
          paymentStatus: 'success',
        };

        await new Promise((resolve) => setTimeout(resolve, 1000));

        patchState(store, { loading: false, cartItem: [] });
        router.navigate(['order-success']);
      },

      signIn: ({ email, password, checkout, dialogId }: SignInParams) => {
        patchState(store, {
          user: {
            id: '1',
            email,
            name: 'John Doe',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
          },
        });

        matDialog.getDialogById(dialogId)?.close();

        if (checkout) {
          router.navigate(['/checkout']);
        }
      },

      signUp: ({ email, password, name, checkout, dialogId }: SignUpParams) => {
        patchState(store, {
          user: {
            id: '1',
            email,
            name: 'John Doe',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
          },
        });

        matDialog.getDialogById(dialogId)?.close();

        if (checkout) {
          router.navigate(['/checkout']);
        }
      },

      signOut: () => {
        patchState(store, { user: undefined });
      },

      showWriteReview: () => {
        patchState(store, { writeReview: true });
      },

      hideWriteReview: () => {
        patchState(store, { writeReview: false });
      },

      addReview: async ({ title, comment, rating }: AddReviewParams) => {
        patchState(store, { loading: true });
        const product = store
          .products()
          .find((p) => p.id === store.selectedProductId());
        if (!product) {
          patchState(store, { loading: false });
          return;
        }

        const review: UserReview = {
          id: crypto.randomUUID(),
          title,
          comment,
          rating,
          productId: product.id,
          userName: store.user()?.name || '',
          userImageUrl: store.user()?.imageUrl || '',
          reviewDate: new Date(),
        };

        const updatedProducts = produce(store.products(), (draft) => {
          const index = draft.findIndex((p) => p.id === product.id);
          draft[index].reviews.push(review);
          draft[index].rating =
            Math.round(
              (draft[index].reviews.reduce((acc, r) => acc + r.rating, 0) /
                draft[index].reviews.length) *
                10,
            ) / 10;
          draft[index].reviewCount = draft[index].reviews.length;
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
        patchState(store, {
          loading: false,
          products: updatedProducts,
          writeReview: false,
        });
      },
    }),
  ),
);
