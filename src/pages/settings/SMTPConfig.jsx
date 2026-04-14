export default function SMTPConfig() {
  return (
    <div className="max-w-4xl mx-auto space-y-2 pb-10">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">System Settings</h1>
      </div>

      <div className="bg-white border text-sm font-sans">
        
        <div className="border-b border-slate-200 p-4">
           <h2 className="text-base font-bold text-slate-800">Email Configuration</h2>
           <p className="text-xs text-slate-500">Manage SMTP settings, email templates, and outgoing communication preferences to ensure reliable and professional email communications.</p>
        </div>

        <div className="p-4 space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-none">
            <h4 className="text-sm font-bold text-blue-800 mb-1">Important Information</h4>
            <p className="text-[11px] text-blue-700 leading-relaxed">
              Please configure your mail server settings accurately. This application will rely on your specified mail server to handle email delivery. Errors encountered during email operations are typically due to incorrect server settings. Ensure all credentials, such as the port, encryption method, and SMTP details, are correct. Use the Send Test Email button to validate your configuration. If an error occurs, review your settings and try again.
            </p>
          </div>

          <form className="space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               
               <div className="flex flex-col gap-1">
                 <label className="text-xs font-bold text-slate-700">SMTP Protocol</label>
                 <select className="border border-slate-300 p-1.5 text-xs outline-none focus:border-indigo-500 rounded-sm">
                   <option>SMTP</option>
                   <option>Sendmail</option>
                 </select>
               </div>
               
               <div className="flex flex-col gap-1">
                 <label className="text-xs font-bold text-slate-700">SMTP Host</label>
                 <input type="text" className="border border-slate-300 p-1.5 text-xs outline-none focus:border-indigo-500 rounded-sm" defaultValue="smtp.gmail.com" />
               </div>

               <div className="flex flex-col gap-1">
                 <label className="text-xs font-bold text-slate-700">SMTP Port</label>
                 <input type="text" className="border border-slate-300 p-1.5 text-xs outline-none focus:border-indigo-500 rounded-sm" defaultValue="587" />
               </div>
               
               <div className="flex flex-col gap-1">
                 <label className="text-xs font-bold text-slate-700">SMTP Username</label>
                 <input type="text" className="border border-slate-300 p-1.5 text-xs outline-none focus:border-indigo-500 rounded-sm" defaultValue="e3210..." />
               </div>

               <div className="flex flex-col gap-1">
                 <label className="text-xs font-bold text-slate-700">SMTP Password</label>
                 <input type="password" className="border border-slate-300 p-1.5 text-xs outline-none focus:border-indigo-500 rounded-sm" defaultValue="********" />
               </div>
               
               <div className="flex flex-col gap-1">
                 <label className="text-xs font-bold text-slate-700">SMTP Encryption</label>
                 <select className="border border-slate-300 p-1.5 text-xs outline-none focus:border-indigo-500 rounded-sm">
                   <option>TLS</option>
                   <option>SSL</option>
                 </select>
               </div>

               <div className="flex flex-col gap-1">
                 <label className="text-xs font-bold text-slate-700">Sender Name</label>
                 <input type="text" className="border border-slate-300 p-1.5 text-xs outline-none focus:border-indigo-500 rounded-sm" placeholder="Your Company Name" />
               </div>
               
               <div className="flex flex-col gap-1">
                 <label className="text-xs font-bold text-slate-700">Sender Email</label>
                 <input type="email" className="border border-slate-300 p-1.5 text-xs outline-none focus:border-indigo-500 rounded-sm" placeholder="example@example.com" />
               </div>

             </div>
             
             <div className="border-t border-slate-200 pt-4 mt-2">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-slate-700">Send Test Email</label>
                  <span className="text-[11px] text-slate-500 mb-1">Send test email to make sure that your SMTP settings is set correctly.</span>
                  <div className="flex gap-2">
                    <input type="email" placeholder="Test" className="flex-1 border border-slate-300 p-1.5 text-xs outline-none focus:border-indigo-500 rounded-sm" />
                    <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-6 py-1.5 rounded-sm">Test</button>
                  </div>
                </div>
             </div>

             <div className="flex justify-end pt-4">
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-6 py-2 rounded-sm shadow-sm transition-colors">
                  Save Changes
                </button>
             </div>

          </form>
        </div>
      </div>
    </div>
  );
}
