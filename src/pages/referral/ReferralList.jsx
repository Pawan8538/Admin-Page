import GenericReferralReport from './GenericReferralReport';

export default function ReferralList() {
  return <GenericReferralReport 
    title="Provider / Referral List"
    headers={['Provider ID', 'Name', 'Location', 'Type', 'Status', 'Actions']}
    items={[
      ['PRV-01', 'Dr. John Watson', 'City Central', 'Internal Medicine', 'Active', 'Edit / View'],
      ['PRV-02', 'CareWell Clinic', 'Downtown', 'Clinic', 'Active', 'Edit / View']
    ]}
  />;
}
