import GenericReferralReport from '../referral/GenericReferralReport';

export default function DueCollectReport() {
  return <GenericReferralReport 
    title="Due Collections Recon Report"
    headers={['Collect Txn', 'Bill No', 'Patient Name', 'Collector Empl', 'Amount Collected (₹)', 'Date Collected']}
    items={[
      ['CTX-911', 'INV-2023-003', 'Robert King', 'John Reese', '500', '24-11-01'],
      ['CTX-912', 'INV-2023-002', 'Jane Smith', 'John Reese', '400', '24-11-02']
    ]}
  />;
}
