import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav'
import { MatNavList, MatListItemTitle , MatListItem } from '@angular/material/list'
import { RouterLink } from "@angular/router";
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCardComponent,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatNavList,
    MatListItem,
    MatListItemTitle,
    RouterLink,
    TitleCasePipe
],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss',
})
export default class ProductsGridComponent {
  category = input<string>('all');

  products = signal<Product[]>([
    {
      id: 'prod_001',
      name: 'Wireless Noise-Cancelling Headphones',
      description:
        'Premium over-ear headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio.',
      price: 299.99,
      imageUrl: 'https://picsum.photos/id/60/600/400',
      rating: 4.8,
      reviewCount: 1243,
      inStock: true,
      category: 'electronics',
    },
    {
      id: 'prod_002',
      name: 'MacBook Pro 16-inch',
      description:
        'M3 Pro chip, 32GB RAM, 1TB SSD, Liquid Retina XDR display. The ultimate laptop for professionals.',
      price: 2499.99,
      imageUrl: 'https://picsum.photos/id/201/600/400',
      rating: 4.9,
      reviewCount: 892,
      inStock: true,
      category: 'electronics',
    },
    {
      id: 'prod_003',
      name: 'Organic Cotton T-Shirt',
      description:
        'Ultra-soft, breathable 100% organic cotton crew neck t-shirt. Perfect everyday wear.',
      price: 24.99,
      imageUrl: 'https://picsum.photos/id/1060/600/400',
      rating: 4.6,
      reviewCount: 567,
      inStock: true,
      category: 'clothing',
    },
    {
      id: 'prod_004',
      name: 'Espresso Machine',
      description:
        '15-bar professional espresso machine with milk frother and programmable settings.',
      price: 179.99,
      imageUrl: 'https://picsum.photos/id/106/600/400',
      rating: 4.4,
      reviewCount: 324,
      inStock: false,
      category: 'home & kitchen',
    },
    {
      id: 'prod_005',
      name: 'Running Sneakers',
      description:
        'Lightweight breathable running shoes with advanced cushioning and durable outsole.',
      price: 89.99,
      imageUrl: 'https://picsum.photos/id/21/600/400',
      rating: 4.7,
      reviewCount: 1456,
      inStock: true,
      category: 'footwear',
    },
    {
      id: 'prod_006',
      name: 'The Psychology of Money',
      description:
        'Timeless lessons on wealth, greed, and happiness by Morgan Housel.',
      price: 18.99,
      imageUrl: 'https://picsum.photos/id/24/600/400',
      rating: 4.9,
      reviewCount: 2341,
      inStock: true,
      category: 'books',
    },
    {
      id: 'prod_007',
      name: '4K Smart TV 55"',
      description:
        'Ultra HD LED TV with HDR10+, Dolby Vision, and built-in streaming apps.',
      price: 649.99,
      imageUrl: 'https://picsum.photos/id/180/600/400',
      rating: 4.5,
      reviewCount: 678,
      inStock: true,
      category: 'electronics',
    },
    {
      id: 'prod_008',
      name: 'Minimalist Leather Wallet',
      description:
        'Slim RFID-blocking leather wallet with 6 card slots and cash compartment.',
      price: 49.99,
      imageUrl: 'https://picsum.photos/id/201/600/400',
      rating: 4.8,
      reviewCount: 432,
      inStock: true,
      category: 'accessories',
    },
    {
      id: 'prod_009',
      name: 'Wireless Gaming Mouse',
      description:
        'Ultra-lightweight gaming mouse with 26K DPI sensor and 8 programmable buttons.',
      price: 79.99,
      imageUrl: 'https://picsum.photos/id/367/600/400',
      rating: 4.6,
      reviewCount: 892,
      inStock: true,
      category: 'electronics',
    },
    {
      id: 'prod_010',
      name: 'Ceramic Coffee Mug Set',
      description:
        'Set of 4 premium matte ceramic mugs, dishwasher and microwave safe.',
      price: 32.99,
      imageUrl: 'https://picsum.photos/id/431/600/400',
      rating: 4.7,
      reviewCount: 215,
      inStock: true,
      category: 'home & kitchen',
    },
    {
      id: 'prod_011',
      name: 'Denim Straight Fit Jeans',
      description:
        'Premium stretch denim jeans with classic straight fit and reinforced seams.',
      price: 59.99,
      imageUrl: 'https://picsum.photos/id/669/600/400',
      rating: 4.3,
      reviewCount: 387,
      inStock: true,
      category: 'clothing',
    },
    {
      id: 'prod_012',
      name: 'Wireless Earbuds Pro',
      description:
        'True wireless earbuds with ANC, transparency mode, and 40-hour total battery life.',
      price: 129.99,
      imageUrl: 'https://picsum.photos/id/870/600/400',
      rating: 4.5,
      reviewCount: 1567,
      inStock: false,
      category: 'electronics',
    },
  ]);

  filteredProduct = computed(() => {
    if (this.category() === 'all') {
      return this.products();
    }
    return this.products().filter(
      (p) => p.category === this.category().toLocaleLowerCase(),
    );
  });

  categories = signal<string[]>([
    'all',
    'electronics',
    'clothing',
    'home & kitchen',
    'footwear',
    'books',
    'accessories',
  ]);

}
