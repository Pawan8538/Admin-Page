import GenericReferralReport from './GenericReferralReport';

export default function Statement() {
  return <GenericReferralReport 
    title="Referral Statement"
    headers={['Date', 'Reference ID', 'Description', 'Credit (₹)', 'Debit (₹)', 'Balance (₹)']}
    items={[
      ['13-Apr-26', 'SYS-81', 'Commission for Patient Jane', '200', '0', '3200'],
      ['12-Apr-26', 'TXN-901', 'Withdrawal Request', '0', '5000', '3000']
    ]}
  />;
}
