import React, { useState, useEffect } from 'react';
import { Table } from '@/Components/ui/table';
import { Button } from '@/Components/ui/button';
import { Alert } from '@/Components/ui/alert';
import axios from 'axios';


const SellerFragranceList = () => {
  const [fragrances, setFragrances] = useState([]);
  const [error, setError] = useState(null);


  const fetchFragrances = async () => {
    try {
      const response = await axios.get('/api/seller/fragrances');
      setFragrances(response.data);
    } catch (err) {
      setError('Failed to fetch fragrances');
    }
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/seller/fragrances/${id}`);
      fetchFragrances();
    } catch (err) {
      setError('Failed to delete fragrance');
    }
  };


  useEffect(() => {
    fetchFragrances();
  }, []);


  return (
    <div>
      {error && <Alert variant="destructive">{error}</Alert>}
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fragrances.map((fragrance) => (
            <tr key={fragrance.id}>
              <td>{fragrance.name}</td>
              <td>{fragrance.brand}</td>
              <td>${fragrance.price}</td>
              <td>{fragrance.status}</td>
              <td>
                <div className="space-x-2">
                  <Button size="sm" onClick={() => handleEdit(fragrance.id)}>
                    Edit
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDelete(fragrance.id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};