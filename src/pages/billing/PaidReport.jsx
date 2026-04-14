import GenericReferralReport from '../referral/GenericReferralReport';

export default function PaidReport() {
  return <GenericReferralReport 
    title="Fully Paid Bills Report"
    headers={['Bill No', 'Patient Name', 'Date', 'Net Total (₹)', 'Clear Date']}
    items={[
      ['INV-2023-001', 'John Doe', '23-11-01', '1200', '23-11-02'],
      ['INV-2023-085', 'Alice Wong', '25-11-01', '400', '25-11-01']
    ]}
  />;
}
