import GenericReferralReport from './GenericReferralReport';

export default function CommissionReport() {
  return <GenericReferralReport 
    title="Commission Report"
    headers={['Bill No', 'Patient', 'Test Code', 'Bill Amount (₹)', 'Comm %', 'Credit (₹)', 'Date']}
    items={[
      ['INV-230', 'Jane Doe', 'CBC', '400', '10%', '40', '13-Apr-26'],
      ['INV-231', 'Alice Wong', 'LIPID', '800', '15%', '120', '13-Apr-26']
    ]}
  />;
}
