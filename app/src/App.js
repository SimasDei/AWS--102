import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import data from './dev-data/data';

const App = () => {
  const [invoices, setInvoices] = useState(data);
  const [loading, setLoading] = useState(false);

  if (loading) return <div>Loading...</div>;

  const removeInvoice = id => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  return (
    <div className='container border border-secondary rounded center text-white'>
      <div className='row'>
        <div className='col-xs-12'>
          <h4>Pending Invoices</h4>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12 center text-center'>
          <Table>
            <thead className='text-white'>
              <th>Vendor</th>
              <th>Amount</th>
              <th>Invoice #</th>
              <th>Date</th>
              <th colSpan='4'>Actions</th>
              <th>Image</th>
            </thead>
            <tbody>
              {invoices.map(invoice => (
                <tr key={invoice.id} className='text-white'>
                  <td>{invoice.Vendor}</td>
                  <td>{invoice.Amount}</td>
                  <td>{invoice.id}</td>
                  <td>{invoice.Date}</td>
                  <td>
                    <Button className='btn btn-lg btn-success'>Ok</Button>
                  </td>
                  <td>
                    <Button
                      className='btn btn-lg btn-danger'
                      onClick={() => removeInvoice(invoice.id)}
                    >
                      Nope
                    </Button>
                  </td>
                  <td>
                    <Button className='btn btn-lg btn-info'>Meh</Button>
                  </td>
                  <td>
                    <Button className='btn btn-lg btn-warning'>??</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default App;
