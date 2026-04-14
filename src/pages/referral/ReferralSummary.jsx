import GenericReferralReport from './GenericReferralReport';

export default function ReferralSummary() {
  return <GenericReferralReport 
    title="Commission Summary"
    headers={['Provider ID', 'Provider Name', 'Total Referring (MTD)', 'Total Commission (₹)', 'Total Paid (₹)', 'Net Balance (₹)']}
    items={[
      ['PRV-01', 'Dr. John Watson', '45', '12500', '10000', '2500'],
      ['PRV-02', 'CareWell Clinic', '110', '42000', '42000', '0']
    ]}
  />;
}
