import test from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS } from '../data/catalog';
import {
  filterAndSortProducts,
  calculateCartSummary,
  validateOrderForm,
  calculateSpaceHeatingNeeds,
} from './shopLogic';

test('filterAndSortProducts filters by category and price range accurately', () => {
  const pyramidOnly = filterAndSortProducts(PRODUCTS, {
    category: 'pyramid',
    minPrice: 10000,
    maxPrice: 15000,
    color: 'all',
    onlyInStock: false,
    onlyOnSale: false,
    searchQuery: '',
    sortBy: 'price-asc',
  });

  assert.ok(pyramidOnly.length >= 4);
  assert.ok(pyramidOnly.every((p) => p.category === 'pyramid'));
  for (let i = 1; i < pyramidOnly.length; i++) {
    assert.ok(pyramidOnly[i].price >= pyramidOnly[i - 1].price);
  }
});

test('calculateCartSummary applies 5% bulk cafe discount when 3 or more heaters are in cart', () => {
  const heater = PRODUCTS[0]; // 11,000 EGP
  const summarySingle = calculateCartSummary([{ product: heater, quantity: 2 }]);
  assert.equal(summarySingle.qualifiesForBulkDiscount, false);
  assert.equal(summarySingle.subtotalEgp, 22000);
  assert.equal(summarySingle.finalTotalEgp, 22000);

  const summaryBulk = calculateCartSummary([{ product: heater, quantity: 3 }]);
  assert.equal(summaryBulk.qualifiesForBulkDiscount, true);
  assert.equal(summaryBulk.subtotalEgp, 33000);
  assert.equal(summaryBulk.bulkDiscountEgp, 1650);
  assert.equal(summaryBulk.finalTotalEgp, 31350);
});

test('validateOrderForm validates Egyptian phone numbers and required fields', () => {
  const invalid = validateOrderForm({
    fullName: 'أح',
    phone: '12345',
    governorate: '',
    address: 'قصير',
    clientType: 'home',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.governorate);

  const valid = validateOrderForm({
    fullName: 'أحمد محمود حسن',
    phone: '01012345678',
    governorate: 'القاهرة',
    address: 'التجمع الخامس - شارع التسعين الشمالي - بجوار مول كايرو فيستيفال',
    clientType: 'cafe_restaurant',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('calculateSpaceHeatingNeeds returns accurate heater count and model recommendation', () => {
  const res = calculateSpaceHeatingNeeds(80, 'semi_open_pergola', 'cafe_restaurant');
  assert.equal(res.recommendedHeatersCount, 4);
  assert.equal(res.recommendedCategory, 'commercial');
});
