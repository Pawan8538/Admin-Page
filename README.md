# ElabAssist: Pathology Lab Admin Prototype

## Overview
This repository contains a high-performance, enterprise-grade Pathology Lab Management Admin Dashboard functional prototype built using React and Tailwind CSS. The primary UX direction models a dense, traditional, sharp-edged interface (reminiscent of legacy library management modules and reliable enterprise Windows XP-era layouts) customized with modern styling technology while completely preserving a specific green/blue/teal branding palette.

## Project Specifications
- **Technology Stack:** React 18, Vite, React Router v6, Tailwind CSS v3.
- **Styling Architecture:** PostCSS combined with Tailwind configuration defining strict primary system colors. 
- **Layout Model:** All containers utilize `rounded-none`, dense data density with strict bounds, high contrast borders (`border-slate-400`), tight typography (`text-xs` mostly), and zero soft shadows.

## Module Map and Features Built To-date

### 1. Dashboard (`/`)
- A completely dynamic and responsive executive dashboard containing metric summaries (`Today's Patients`, `Total Appointments`, `Pending Lab Results`, `Daily Collection`).
- Displays embedded tables for tracking "Recent Appointments" and "Pending Lab Requests" with priority-colored identifiers.
- Dynamically generates current dates and uses strict `IndianRupee` currency tags.

### 2. Patient Module
- **Create Patient** (`/patient/create`): Highly dense registration form supporting basic demographic indexing alongside extensive clinical baselines.
- **Patient List** (`/patient/list`): Master directory with filter search and export functionality.
- **Patient Category** (`/patient/category`): UI splitting into "Add Category Configuration" and "Category Definition Table" in the same view.

### 3. Tests Configuration Module
- **Create Test** (`/tests/create`): Central test requisition definition system determining processing techniques, units, limits, baselines, and prices.
- **Test List** (`/tests/list`): Exhaustive database search array displaying all master metrics.
- **Add Tests** (`/tests/add`): Traditional LIS Test Requisition interface. Selects patient configurations, embeds tests specifically into an array tracking accumulated cost, and exports directly to the Billing router.

### 4. Employee Management Module
Everything required to operate clinic personnel:
- **Add Employee** (`/employee/create`): Includes split configuration parameters detailing demographics, corporate employment indexing, and internal system login permission credentials.
- **Employee List** (`/employee/list`): Overview roster highlighting active leave vs on-floor statistics.
- **Department Setup** (`/employee/department`) and **Designation Setup** (`/employee/designation`): Operational taxonomy forms and array arrays.

### 5. Pathology Lab Tools
- **Lab Test Config** (`/pathology/tests`): The functional control module where tests are indexed per parameter (RBC, Platelets, etc.). Implemented as a high-efficiency dual-pane window interface for blazing-fast workflow.
- **Categories** (`/pathology/categories`): Define test clusters and Heads of Department.
- **Pathology Reports** (`/pathology/reports`): Filter-focused reporting viewer displaying generated labs matching timestamps and completed status. Queue/Worklists successfully refactored out.

### 6. Billing and Checkout Module
- **Add Bill Order** (`/billing/add`): Search and generate final pricing requirements for new orders in a POS-style UI flow. 
- **Test Bills Log** (`/billing/list`): Tracks every transactional state containing total metrics vs. unpaid metrics (Due balances brightly flagged).
- **Billing Reconciliations**: Segregated reports explicitly tailored for financial administration tracking `Due Reports`, `Fully Paid Reports`, and `Collected Balances` matrices.

### 7. Referral Manager
A completely structured payout/commission module to track external clinic referrals:
- Built around a unified robust `<GenericReferralReport />` to rapidly scaffold tables.
- Implements: `Set Referral Partner`, `Referral Lists`, `Withdrawals/Rewards Ledgers`, `Statement Accounting`, `Commission Tables`, `Summary Balances`, and `Payout Batching`.

## Starting the Project
To run the server locally:
```bash
npm run dev
```

Project is initialized for `localhost:5173`. Ensure Tailwind directives have cleanly compiled your PostCSS pipeline prior to rendering components.
