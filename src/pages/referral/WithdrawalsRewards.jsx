import GenericReferralReport from './GenericReferralReport';

export default function WithdrawalsRewards() {
  return <GenericReferralReport 
    title="Withdrawals & Rewards Log"
    headers={['Txn ID', 'Date', 'Provider Name', 'Amount (₹)', 'Reward Points', 'Type', 'Status']}
    items={[
      ['TXN-901', '12-Apr-26', 'Dr. John Watson', '5000', '+50', 'Payout', 'Completed'],
      ['TXN-902', '10-Apr-26', 'CareWell Clinic', '0', '-20', 'Reward Red.', 'Processed']
    ]}
  />;
}
