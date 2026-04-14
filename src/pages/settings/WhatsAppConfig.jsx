import { Save, Link as LinkIcon, Edit2, Unplug } from 'lucide-react';

export default function WhatsAppConfig() {
  return (
    <div className="max-w-5xl mx-auto space-y-2 pb-10">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">WhatsApp Cloud API Config</h1>
      </div>

      <div className="bg-white border-2 border-slate-400 rounded-none overflow-hidden">
        
        {/* Tab section mimicking image */}
        <div className="flex gap-4 border-b border-slate-300 p-2 text-xs font-bold text-slate-500 bg-slate-100">
           <span className="text-primary-800 border-b-2 border-primary-800 pb-1 cursor-pointer">Connection Settings</span>
           <span className="cursor-pointer hover:text-slate-800">Lead Automation</span>
           <span className="cursor-pointer hover:text-slate-800">OpenAI Integration</span>
           <span className="cursor-pointer hover:text-slate-800">Advanced Settings</span>
        </div>

        <form className="p-4 space-y-4 bg-white">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span className="w-2 h-2 bg-slate-800 inline-block rounded-sm"></span> Business ID
              </label>
              <input type="text" className="w-full text-xs border border-slate-300 p-1.5 focus:border-slate-500 outline-none" defaultValue="647020..." />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span className="w-2 h-2 bg-slate-800 inline-block rounded-sm -rotate-45"></span> Access Token
              </label>
              <input type="password" className="w-full text-xs border border-slate-300 p-1.5 focus:border-slate-500 outline-none" defaultValue="EAACVIwc6..." />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full border border-blue-500 inline-block"></span> Webhook URL
              </label>
              <input type="text" className="w-full text-xs border border-slate-300 bg-slate-50 p-1.5 focus:border-slate-500 outline-none" readOnly defaultValue="https://elabassist.demo.com/webhook" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span className="w-2 h-2 bg-yellow-600 inline-block rounded-sm"></span> Webhook Token
              </label>
              <input type="text" className="w-full text-xs border border-slate-300 p-1.5 focus:border-slate-500 outline-none" defaultValue="123456" />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span className="w-2 h-2 bg-slate-800 inline-block rounded-sm"></span> Meta App ID
              </label>
              <input type="text" className="w-full text-xs border border-slate-300 p-1.5 focus:border-slate-500 outline-none" defaultValue="515805..." />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <span className="w-2 h-2 bg-slate-800 inline-block rounded-sm"></span> App Secret
              </label>
              <input type="password" className="w-full text-xs border border-slate-300 p-1.5 focus:border-slate-500 outline-none" defaultValue="801..." />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <LinkIcon className="w-3 h-3 text-slate-800" /> Connection Method
              </label>
              <select className="w-full text-xs border border-slate-300 p-1.5 focus:border-slate-500 outline-none">
                <option>Manual</option>
                <option>OAuth (Facebook Login)</option>
              </select>
            </div>

          </div>

          <div className="flex items-center gap-2 pt-2 text-xs font-bold">
             <span className="text-slate-600">App:</span> <span className="bg-slate-200 px-2 py-0.5 border border-slate-300">MyLab LTD</span> <span className="text-green-600 font-bold flex items-center gap-1 text-[10px]"><span className="w-3 h-3 bg-green-500 text-white rounded-sm flex items-center justify-center">✓</span> Valid</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-200">
             <div className="pr-4 border-r border-slate-200 text-[11px] leading-relaxed">
                <div className="font-bold flex items-center gap-1 text-slate-800 text-xs mb-2 border-b border-slate-100 pb-1">Token Info</div>
                <div className="grid grid-cols-[80px_1fr]"><span className="font-bold text-slate-600">App:</span><span>MyLab...</span></div>
                <div className="grid grid-cols-[80px_1fr]"><span className="font-bold text-slate-600">User ID:</span><span>10101...</span></div>
                <div className="grid grid-cols-[80px_1fr]"><span className="font-bold text-slate-600">Type:</span><span>USER</span></div>
                <div className="grid grid-cols-[80px_1fr]"><span className="font-bold text-slate-600">Valid:</span><span className="text-green-600">✅ Yes</span></div>
             </div>

             <div className="pr-4 border-r border-slate-200 text-[11px] leading-relaxed">
                <div className="font-bold flex items-center gap-1 text-slate-800 text-xs mb-2 border-b border-slate-100 pb-1">WhatsApp Business Account</div>
                <div className="grid grid-cols-[60px_1fr] mb-1"><span className="font-bold text-slate-600">ID:</span><span className="break-all font-semibold pb-1">104218...</span></div>
                <div className="grid grid-cols-[60px_1fr]"><span className="font-bold text-slate-600">Name:</span><span>ElabAssist Clinic Main</span></div>
             </div>
             
             <div className="pr-4 border-r border-slate-200 text-[11px] leading-relaxed">
                <div className="font-bold flex items-center gap-1 text-slate-800 text-xs mb-2 border-b border-slate-100 pb-1">Phone Numbers</div>
                <div className="text-blue-600 font-bold text-xs mb-1">+91 9876543210</div>
                <div className="grid grid-cols-[70px_1fr]"><span className="font-bold text-slate-600">Verified Name:</span><span>ElabAssist...</span></div>
                <div className="grid grid-cols-[70px_1fr]"><span className="font-bold text-slate-600">Status:</span><span className="text-green-600 font-bold">CONNECTED</span></div>
             </div>

             <div className="text-[11px] leading-relaxed">
                <div className="font-bold flex items-center gap-1 text-slate-800 text-xs mb-2 border-b border-slate-100 pb-1">Webhooks</div>
                <div className="grid grid-cols-[1fr_auto] mb-1"><span className="font-bold">whatsapp_business_account</span><span className="text-green-600 font-bold">✅ Active</span></div>
             </div>
          </div>

          <div className="flex gap-2 mt-4 pt-4 border-t border-slate-200">
             <button type="button" className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-sm flex items-center gap-1 shadow-sm">
               <Save className="w-3 h-3"/> Save Settings
             </button>
             <button type="button" className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-sm flex items-center gap-1 shadow-sm">
               <Unplug className="w-3 h-3"/> Disconnect
             </button>
             <button type="button" className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-sm flex items-center gap-1 shadow-sm">
                Unregister Webhook
             </button>
          </div>

        </form>
      </div>
    </div>
  );
}
