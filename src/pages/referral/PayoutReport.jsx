import GenericReferralReport from './GenericReferralReport';

export default function PayoutReport() {
  return <GenericReferralReport 
    title="Payout Report"
    headers={['Batch ID', 'Date processed', 'Total Providers', 'Total Processed (₹)', 'Status', 'Doc View']}
    items={[
      ['PAY-080', '01-Apr-26', '12', '105000', 'Settled', 'Download PDF'],
      ['PAY-081', '15-Apr-26', '5', '45200', 'Pending Bank', 'Download PDF']
    ]}
  />;
}
