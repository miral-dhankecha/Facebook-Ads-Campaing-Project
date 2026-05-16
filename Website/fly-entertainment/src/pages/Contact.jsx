import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' });

  const submit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message sent',
      description: `Thanks ${form.name || 'friend'} — the F.L.Y team will reply within 2 business days.`,
    });
    setForm({ name: '', email: '', subject: 'General', message: '' });
  };

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="pt-36 pb-10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[var(--fly-orange)]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--fly-orange)] font-semibold">Contact</span>
          </div>
          <h1 className="font-display font-black text-white text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.03em]">
            Let&apos;s <span className="text-gradient-aqua">talk.</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-white/65">For partnerships, press, audition inquiries or artist bookings — reach out below and our team will get back within 2 business days.</p>
            <InfoRow icon={Mail} label="Email" value="hello@flyentertainment.com" />
            <InfoRow icon={Phone} label="Phone" value="+82 2 5500 1234" />
            <InfoRow icon={MapPin} label="HQ" value="F.L.Y Tower, 142 Olympic-ro, Songpa-gu, Seoul, KR" />
            <div className="pt-4">
              <div className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-3">Departments</div>
              <ul className="text-sm space-y-2 text-white/75">
                <li><span className="text-white/50">Press:</span> press@flyentertainment.com</li>
                <li><span className="text-white/50">Audition:</span> audition@flyentertainment.com</li>
                <li><span className="text-white/50">Business:</span> biz@flyentertainment.com</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 bg-[var(--fly-ink)] border border-white/5 rounded-lg p-6 md:p-10 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Your name">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" />
              </Field>
              <Field label="Email">
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" />
              </Field>
            </div>
            <Field label="Subject">
              <div className="flex flex-wrap gap-2">
                {['General', 'Press', 'Audition', 'Partnership'].map((s) => (
                  <button type="button" key={s} onClick={() => setForm({ ...form, subject: s })}
                    className={`px-4 h-10 rounded-full text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors border ${
                      form.subject === s ? 'bg-[var(--fly-orange)] text-black border-[var(--fly-orange)]' : 'border-white/15 text-white/70 hover:text-white hover:border-white/40'
                    }`}>
                    {s}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Message">
              <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input resize-none" />
            </Field>
            <button type="submit" className="inline-flex items-center gap-3 h-12 px-7 rounded-full bg-[var(--fly-orange)] text-black text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors">
              Send message <Send size={14} />
            </button>
          </form>
        </div>

        <style>{`
          .input {
            width: 100%;
            background: #050507;
            border: 1px solid rgba(255,255,255,0.08);
            color: #fff;
            padding: 12px 16px;
            border-radius: 10px;
            outline: none;
            font-size: 14px;
            transition: border-color .2s ease;
          }
          .input:focus { border-color: var(--fly-orange); }
        `}</style>
      </section>
    </main>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <span className="h-10 w-10 rounded-full bg-[var(--fly-ink)] border border-white/10 flex items-center justify-center text-[var(--fly-orange)] shrink-0">
        <Icon size={16} />
      </span>
      <div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">{label}</div>
        <div className="text-white mt-1">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">{label}</div>
      {children}
    </label>
  );
}
