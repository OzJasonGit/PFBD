'use client';

import React from 'react';
import styles from './Invoice.module.css';

const Invoice = ({ orderNumber, date, buyer, products, total }) => {
  return (
    <div className={styles.invoiceContainer}>
      <div className={styles.invoice}>
        <div className={styles.header}>
          <h1>Invoice</h1>
          <div className={styles.invoiceDetails}>
            <p><strong>Order Number:</strong> {orderNumber}</p>
            <p><strong>Date:</strong> {date}</p>
          </div>
        </div>

        <div className={styles.buyerInfo}>
          <h2>Buyer Information</h2>
          <p><strong>Name:</strong> {buyer?.name || 'N/A'}</p>
          <p><strong>Email:</strong> {buyer?.email || 'N/A'}</p>
        </div>

        <div className={styles.productsSection}>
          <h2>Products</h2>
          <table className={styles.productsTable}>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products && products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name || product.productName || 'N/A'}</td>
                    <td>{product.quantity || 1}</td>
                    <td>${(product.price || 0).toFixed(2)}</td>
                    <td>${((product.price || 0) * (product.quantity || 1)).toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: 'center' }}>No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.totalSection}>
          <h2>Total: ${(total || 0).toFixed(2)}</h2>
        </div>

        <div className={styles.footer}>
          <p>Thank you for your purchase!</p>
          <button 
            className={styles.printButton} 
            onClick={() => window.print()}
          >
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

