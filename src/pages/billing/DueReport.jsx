import GenericReferralReport from '../referral/GenericReferralReport';

export default function DueReport() {
  return <GenericReferralReport 
    title="Due Bills Report"
    headers={['Bill No', 'Patient Name', 'Date', 'Net Total (₹)', 'Paid (₹)', 'Due Balance (₹)', 'Action']}
    items={[
      ['INV-2023-002', 'Jane Smith', '23-11-02', '800', '400', '400', 'Collect'],
      ['INV-2023-003', 'Robert King', '23-11-01', '2500', '0', '2500', 'Collect']
    ]}
  />;
}
