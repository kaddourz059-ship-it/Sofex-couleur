/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Truck, 
  ShoppingCart, 
  CheckCircle2, 
  Star,
  ShieldCheck,
  Send,
  Instagram,
  Facebook,
  AlertTriangle,
  ArrowLeft,
  ChevronRight,
  Music
} from 'lucide-react';

const WILAYAS = [
  { name: "16 - الجزائر العاصمة", desk: 400, home: 400 },
  { name: "09 - البليدة", desk: 500, home: 600 },
  { name: "35 - بومرداس", desk: 500, home: 600 },
  { name: "42 - تيبازة", desk: 500, home: 600 },
  { name: "31 - وهران", desk: 600, home: 800 },
  { name: "13 - تلمسان", desk: 600, home: 800 },
  { name: "46 - عين تموشنت", desk: 600, home: 800 },
  { name: "44 - عين الدفلى", desk: 600, home: 800 },
  { name: "14 - تيارت", desk: 600, home: 800 },
  { name: "29 - معسكر", desk: 600, home: 800 },
  { name: "22 - سيدي بلعباس", desk: 600, home: 800 },
  { name: "27 - مستغانم", desk: 600, home: 800 },
  { name: "48 - غليزان", desk: 600, home: 800 },
  { name: "20 - سعيدة", desk: 600, home: 800 },
  { name: "02 - الشلف", desk: 600, home: 800 },
  { name: "23 - عنابة", desk: 600, home: 800 },
  { name: "04 - أم البواقي", desk: 600, home: 800 },
  { name: "24 - قالمة", desk: 600, home: 800 },
  { name: "26 - المدية", desk: 600, home: 800 },
  { name: "43 - ميلة", desk: 600, home: 800 },
  { name: "38 - تيسمسيلت", desk: 600, home: 800 },
  { name: "41 - سوق أهراس", desk: 600, home: 800 },
  { name: "21 - سكيكدة", desk: 600, home: 800 },
  { name: "15 - تيزي وزو", desk: 600, home: 800 },
  { name: "19 - سطيف", desk: 600, home: 800 },
  { name: "18 - جيجل", desk: 600, home: 800 },
  { name: "40 - خنشلة", desk: 600, home: 800 },
  { name: "05 - باتنة", desk: 600, home: 800 },
  { name: "34 - برج بوعريريج", desk: 600, home: 800 },
  { name: "36 - الطارف", desk: 600, home: 800 },
  { name: "25 - قسنطينة", desk: 600, home: 800 },
  { name: "28 - المسيلة", desk: 600, home: 800 },
  { name: "06 - بجاية", desk: 600, home: 800 },
  { name: "10 - البويرة", desk: 600, home: 800 },
  { name: "07 - بسكرة", desk: 700, home: 900 },
  { name: "17 - الجلفة", desk: 700, home: 900 },
  { name: "12 - تبسة", desk: 700, home: 900 },
  { name: "47 - غرداية", desk: 700, home: 900 },
  { name: "30 - ورقلة", desk: 700, home: 900 },
  { name: "03 - الأغواط", desk: 700, home: 900 },
  { name: "45 - النعامة", desk: 700, home: 900 },
  { name: "39 - الوادي", desk: 700, home: 900 },
  { name: "49 - المغير", desk: 700, home: 900 },
  { name: "50 - المنيعة", desk: 700, home: 900 },
  { name: "51 - أولاد جلال", desk: 700, home: 900 },
  { name: "55 - تقرت", desk: 700, home: 900 },
  { name: "01 - أدرار", desk: 900, home: 1150 },
  { name: "08 - بشار", desk: 900, home: 1150 },
  { name: "32 - البيض", desk: 900, home: 1150 },
  { name: "53 - بني عباس", desk: 900, home: 1150 },
  { name: "54 - تيميمون", desk: 900, home: 1150 },
  { name: "11 - تمنراست", desk: 1250, home: 1450 },
  { name: "37 - تندوف", desk: 1250, home: 1450 },
  { name: "33 - إليزي", desk: 1250, home: 1450 },
  { name: "52 - برج باجي مختار", desk: 1250, home: 1450 },
  { name: "56 - جانت", desk: 1250, home: 1450 },
  { name: "57 - إن صالح", desk: 1250, home: 1450 },
  { name: "58 - إن قزام", desk: 1250, home: 1450 }
];

const TG_TOKEN = "8249247789:AAE9saD1Bjz5L9Zqg_jZae9I5fYet0DzxGY";
const TG_CHAT_ID = "7917961504";
const INSTAGRAM_URL = "https://www.instagram.com/sofex03?igsh=eHk4ZmFhN2theHd6";
const FACEBOOK_URL = "https://www.facebook.com/share/1B3j19TWQ5/";
const TIKTOK_URL = "https://www.tiktok.com/@sofex0102?_r=1&_t=ZS-963PpA7URTZ";

export default function App() {
  const [selectedColor, setSelectedColor] = useState<'الأزرق' | 'الأحمر' | 'الأخضر' | 'الأصفر'>('الأزرق');
  const [selectedWilayaIndex, setSelectedWilayaIndex] = useState<number>(0);
  const [deliveryType, setDeliveryType] = useState<'desk' | 'home'>('home');
  const [view, setView] = useState<'product' | 'checkout'>('product');
  const [selectedSize, setSelectedSize] = useState<'1kg' | '2kg'>('1kg');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPrivacy, setShowPrivacy] = useState(false);

  const productImages = [
    "https://i.postimg.cc/3JJHdZjb/photo-2026-05-08-17-57-56.jpg",
    "https://i.postimg.cc/jjkDF5xJ/photo-2026-05-08-17-54-28.jpg",
    "https://i.postimg.cc/NMSp2G7c/photo-2026-05-03-13-34-05.jpg",
    "https://i.postimg.cc/Gmq8Qrvq/photo-2026-05-02-13-32-02.jpg",
    "https://i.postimg.cc/Qd09bscS/photo-2026-05-02-13-32-08.jpg"
  ];

  const deliveryPrice = useMemo(() => {
    const wilaya = WILAYAS[selectedWilayaIndex];
    return deliveryType === 'desk' ? wilaya.desk : wilaya.home;
  }, [selectedWilayaIndex, deliveryType]);

  const priceData = useMemo(() => {
    return selectedSize === '1kg' 
      ? { 1: 2400, 2: 4400, 3: 6300, bulk: 2000 } 
      : { 1: 2900, 2: 5500, 3: 7900, bulk: 2500 };
  }, [selectedSize]);

  const currentPrice = useMemo(() => {
    if (quantity === 1) return priceData[1];
    if (quantity === 2) return priceData[2];
    if (quantity === 3) return priceData[3];
    return quantity * priceData.bulk;
  }, [quantity, priceData]);

  const totalPrice = useMemo(() => currentPrice + deliveryPrice, [currentPrice, deliveryPrice]);

  const handleSendTelegram = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = e.target as HTMLFormElement;
    const formDataObj = new FormData(currentForm);
    setIsSubmitting(true);

    const message = `
🚀 *طلب جديد من متجر SOFEX*
━━━━━━━━━━━━━━
👤 *الزبون:* ${formDataObj.get('name')}
📞 *الهاتف:* ${formDataObj.get('phone')}
📍 *الولاية:* ${WILAYAS[selectedWilayaIndex].name}
📍 *نوع التوصيل:* ${deliveryType === 'home' ? 'توصيل للمنزل 🏠' : 'استلام من المكتب 🏢'}
📍 *العنوان:* ${formDataObj.get('address')}
━━━━━━━━━━━━━━
🛍️ *تفاصيل الطلب:*
- المنتج: قارورة سوفيكس الأفراح (${selectedSize})
- الهدية: قارورة الثلج مجاناً 🎁
- اللون: ${selectedColor}
- الكمية: ${quantity} حبة
━━━━━━━━━━━━━━
💰 *سعر المنتج:* ${currentPrice} دج
🚚 *سعر التوصيل:* ${deliveryPrice} دج (${deliveryType === 'home' ? 'للمنزل' : 'للمكتب'})
💵 *المجموع الكلي:* ${totalPrice} دج
━━━━━━━━━━━━━━
✅ *يرجى تأكيد الطلب فوراً.*
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        setFormStatus('success');
        currentForm.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus('idle'), 10000);
    }
  };

  return (
    <div className="min-h-screen hero-gradient selection:bg-brand-blue selection:text-white pb-20">
      
      {/* Top Bar */}
      <div className="bg-brand-red text-white py-2 overflow-hidden whitespace-nowrap border-b border-white/10 uppercase tracking-widest text-[10px] font-black z-[1000] relative">
        <div className="flex animate-marquee gap-10">
           <span>⚡️ تخفيضات هائلة: المجموع ينخفض عند شراء أكثر من قطعة واحدة ⚡️</span>
           <span>🚚 شحن سريع وآمن لـ 58 ولاية جزائرية 🚚</span>
           <span>⚡️ ضمان الجودة الأصلية أو استرجاع أموالك ⚡️</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view === 'product' ? (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            className="w-full"
          >
            {/* Header */}
            <nav className="h-24 px-6 md:px-12 flex items-center justify-between sticky top-0 bg-black/50 backdrop-blur-xl z-[500] border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <img src="https://i.postimg.cc/Y0hMc7F7/photo-2025-10-17-20-22-46.jpg" className="w-full h-full rounded-xl object-contain" alt="Logo" />
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black italic tracking-tighter leading-none text-white uppercase">SOFEX</span>
                  <span className="text-[10px] font-bold text-brand-blue tracking-[0.3em] uppercase">Algeria Elite</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook size={20} /></a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-pink-600/10 text-pink-500 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"><Instagram size={20} /></a>
                <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-stone-600/10 text-white flex items-center justify-center hover:bg-black hover:text-white transition-all"><Music size={20} /></a>
              </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 pt-12 md:pt-20">
              <div className="grid lg:grid-cols-12 gap-16 items-start">
                {/* Images */}
                <div className="lg:col-span-7 space-y-10">
                  <motion.div 
                    layoutId="main-product"
                    className="card-glass p-4 md:p-8 relative group"
                  >
                    <div className="absolute top-8 left-8 z-10 flex flex-col gap-3">
                       <span className="bg-brand-red text-white px-5 py-2 rounded-xl font-black text-xs shadow-2xl animate-pulse italic">-%40 عرض حصري</span>
                    </div>
                    <img src={productImages[activeImage]} className="w-full h-auto rounded-[32px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" alt="Product" />
                  </motion.div>
                  
                  <div className="grid grid-cols-5 gap-4">
                    {productImages.map((img, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-brand-blue shadow-[0_0_20px_rgba(0,102,255,0.4)] scale-105' : 'border-white/10 opacity-40 hover:opacity-100'}`}
                      >
                        <img src={img} className="w-full h-full object-cover" alt="thumb" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-5 space-y-12 bg-black/20 p-10 rounded-[60px] border border-white/5 backdrop-blur-3xl relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/10 blur-[100px]" />
                    <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-1 text-brand-orange">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-brand-orange" />)}
                      <span className="text-xs font-black text-white/40 mr-3 uppercase">(150+ مراجعة إيجابية)</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-tight text-white">
                      SOFEX <br/>
                      <span className="text-brand-blue uppercase">JOY & ICE</span>
                    </h1>
                    <p className="text-stone-400 font-medium italic text-2xl leading-relaxed">
                      الجيل الجديد من قارورات الأفراح الاحترافية.<br/>
                      <span className="text-brand-green font-black">🎁 هديّة خاصّة:</span> قارورة الثلج مجاناً عند شراء قارورة الأفراح!
                    </p>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-baseline gap-6">
                      <span className="text-8xl font-black text-brand-red tracking-tighter italic">{currentPrice} <span className="text-3xl">دج</span></span>
                      <span className="text-2xl font-bold text-stone-600 line-through">{(priceData[1] * quantity)} دج</span>
                    </div>
                  </div>

                  <div className="space-y-12 relative z-10">
                    <div className="space-y-6">
                      <h3 className="text-xs font-black text-stone-500 uppercase tracking-widest italic pr-4">1. اختر حجم القارورة:</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {(['1kg', '2kg'] as const).map(s => (
                          <button 
                            key={s}
                            onClick={() => setSelectedSize(s)}
                            className={`option-btn ${selectedSize === s ? 'option-btn-active' : 'option-btn-inactive'}`}
                          >
                            <span className="text-3xl font-black italic">{s === '1kg' ? '1 كـغ' : '2 كـغ'}</span>
                            <span className="text-[10px] font-black uppercase opacity-60 mt-1">{s === '1kg' ? 'حجم قياسي' : 'حجم توفيري'}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xs font-black text-stone-500 uppercase tracking-widest italic pr-4">2. اختر اللون المتوفر:</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {(['الأزرق', 'الأحمر', 'الأخضر', 'الأصفر'] as const).map(color => (
                          <button 
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`px-4 py-3 rounded-2xl border-2 font-black italic text-sm transition-all ${selectedColor === color ? 'border-brand-blue bg-brand-blue/10 text-white shadow-[0_0_15px_rgba(0,102,255,0.3)]' : 'border-white/5 bg-white/5 text-stone-500 hover:bg-white/10'}`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xs font-black text-stone-500 uppercase tracking-widest italic pr-4">3. كم عدد القارورات التي تريدها؟</h3>
                      <div className="flex items-center gap-6 bg-white/5 p-3 rounded-3xl w-fit border border-white/5">
                        <button onClick={() => setQuantity(q => q + 1)} className="w-14 h-14 bg-brand-blue text-white rounded-2xl shadow-xl flex items-center justify-center text-4xl font-black">+</button>
                        <span className="text-5xl font-black italic w-12 text-center text-white">{quantity}</span>
                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center text-4xl font-black hover:bg-white/20">-</button>
                        <span className="text-xs font-black text-stone-600 mr-2 uppercase italic">قارورة</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setView('checkout')}
                      className="btn-primary group"
                    >
                      إتمام الطلب الآن <ArrowLeft className="group-hover:-translate-x-3 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mega Features */}
              <section className="mt-40 grid md:grid-cols-3 gap-10">
                <motion.div whileHover={{ y: -10 }} className="card-glass p-12 space-y-6 border-b-8 border-b-brand-blue">
                  <div className="w-20 h-20 bg-brand-blue/20 text-brand-blue rounded-3xl flex items-center justify-center"><Truck size={40} /></div>
                  <h3 className="text-3xl font-black italic">شحن لـ 58 ولاية</h3>
                  <p className="text-stone-500 font-bold italic text-xl leading-relaxed">نصلك أينما كنت في الجزائر، سرعة وأمان في التسليم.</p>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="card-glass p-12 space-y-6 border-b-8 border-b-brand-red">
                  <div className="w-20 h-20 bg-brand-red/20 text-brand-red rounded-3xl flex items-center justify-center"><ShieldCheck size={40} /></div>
                  <h3 className="text-3xl font-black italic">ضمان الجودة</h3>
                  <p className="text-stone-500 font-bold italic text-xl leading-relaxed">منتجاتنا مختبرة وتضمن لك أفضل نتائج تلوين احترافية.</p>
                </motion.div>
                <motion.div whileHover={{ y: -10 }} className="card-glass p-12 space-y-6 border-b-8 border-b-brand-green">
                  <div className="w-20 h-20 bg-brand-green/20 text-brand-green rounded-3xl flex items-center justify-center"><ShoppingCart size={40} /></div>
                  <h3 className="text-3xl font-black italic">دفع عند الاستلام</h3>
                  <p className="text-stone-500 font-bold italic text-xl leading-relaxed">لا حاجة للدفع المسبق، ادفع فقط عندما تلمس منتجك.</p>
                </motion.div>
              </section>

              {/* Delivery Table Integration */}
              <section className="mt-40 mb-20 bg-black/40 p-10 md:p-20 rounded-[80px] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-brand-red/5 blur-[100px] -z-10" />
                <div className="max-w-4xl mx-auto space-y-8 text-right">
                  <h2 className="text-4xl md:text-5xl font-black italic text-center text-white tracking-tighter mb-4">أسعار التوصيل مع شركة ياليدين yalidine 🚚</h2>
                  <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden overflow-x-auto">
                    <table className="w-full text-right min-w-[500px]">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="p-6 text-xs font-black uppercase text-stone-500">الولاية / المنطقة</th>
                          <th className="p-6 text-xs font-black uppercase text-stone-500 text-center">لمكتب الشركة (دج)</th>
                          <th className="p-6 text-xs font-black uppercase text-stone-500 text-center">لباب المنزل (دج)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-white">
                        <tr className="hover:bg-white/10">
                          <td className="p-6 font-black italic text-xl">الجزائر العاصمة</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-blue">400</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-red">400</td>
                        </tr>
                        <tr className="hover:bg-white/10">
                          <td className="p-6 font-black italic text-xl">البليدة / بومرداس / تيبازة</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-blue">500</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-red">600</td>
                        </tr>
                        <tr className="hover:bg-white/10">
                          <td className="p-6 font-black italic text-sm">وهران / تلمسان / عين تموشنت / عين الدفلى / تيارت / معسكر / بلعباس / مستغانم / غليزان / سعيدة / الشلف / عنابة / أم البواقي / قالمة / المدية / ميلة / تيسمسيلت / سوق اهراس / سكيكدة / تيزي وزو / سطيف / جيجل / خنشلة / باتنة / برج بوعريريج / الطارف / قسنطينة / مسيلة / بجاية / البويرة</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-blue">600</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-red">800</td>
                        </tr>
                        <tr className="hover:bg-white/10">
                          <td className="p-6 font-black italic text-xl">بسكرة / الجلفة / تبسة / غرداية / ورقلة / الاغواط / النعامة / واد سوف</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-blue">700</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-red">900</td>
                        </tr>
                        <tr className="hover:bg-white/10">
                          <td className="p-6 font-black italic text-xl">أدرار / بشار / البيض</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-blue">900</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-red">1150</td>
                        </tr>
                        <tr className="hover:bg-white/10">
                          <td className="p-6 font-black italic text-xl">تمنراست / تندوف / إليزي</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-blue">1250</td>
                          <td className="p-6 font-black italic text-xl text-center text-brand-red">1450</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </main>
          </motion.div>
        ) : (
          <motion.div 
            key="checkout"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-3xl mx-auto px-6 py-20"
          >
            <button 
              onClick={() => setView('product')}
              className="flex items-center gap-3 text-stone-500 hover:text-white transition-colors mb-12 font-black italic text-xl"
            >
              <ChevronRight /> العودة للمنتج
            </button>

            <div className="card-glass p-10 md:p-16 space-y-16 border-t-8 border-t-brand-blue relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] -z-10" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 blur-[100px] -z-10" />
               
               {formStatus === 'success' ? (
                  <div className="text-center space-y-10 py-10">
                     <div className="w-32 h-32 bg-brand-green rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(0,204,102,0.5)]">
                        <CheckCircle2 size={60} className="text-white" />
                     </div>
                     <div className="space-y-4">
                        <h2 className="text-5xl font-black italic">طلبك قيد المعالجة!</h2>
                        <p className="text-xl text-stone-400 font-bold italic">شكراً لثقتك بـ سوفيكس. سنتحدث إليك قريباً جداً.</p>
                     </div>
                     <button onClick={() => setView('product')} className="text-brand-blue font-black underline text-xl italic hover:text-white">العودة للرئيسية</button>
                  </div>
               ) : (
                  <form onSubmit={handleSendTelegram} className="space-y-12">
                    <div className="space-y-4">
                      <h2 className="text-5xl font-black italic tracking-tighter">أدخل معلوماتك الشخصية ✍️</h2>
                      <p className="text-stone-500 font-bold italic text-lg">يرجى كتابة الاسم والعنوان بدقة لضمان سرعة التوصيل.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase text-stone-500 pr-4">الاسم الكامل</label>
                          <input name="name" required className="form-input" placeholder="اسمك الكريم..." />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase text-stone-500 pr-4">رقم الهاتف</label>
                          <input name="phone" required type="tel" className="form-input" placeholder="06 / 07 / 05 ..." />
                       </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-stone-500 pr-4 italic">اختر الولاية</label>
                        <select 
                          value={selectedWilayaIndex} 
                          onChange={(e) => setSelectedWilayaIndex(Number(e.target.value))}
                          className="form-input appearance-none bg-zinc-900 focus:bg-[#1a1a1a]"
                        >
                          {WILAYAS.map((w, i) => (
                            <option key={i} value={i}>{w.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase text-stone-500 pr-4 italic">طريقة الاستلام</label>
                        <div className="grid grid-cols-2 gap-3 h-[70px]">
                           <button 
                             type="button"
                             onClick={() => setDeliveryType('desk')}
                             className={`rounded-2xl border-2 font-black italic transition-all flex flex-col items-center justify-center ${deliveryType === 'desk' ? 'border-brand-blue bg-brand-blue/10 text-white shadow-[0_0_15px_rgba(0,102,255,0.3)]' : 'border-white/5 bg-white/5 text-stone-500 hover:bg-white/10'}`}
                           >
                              <span className="text-base leading-none">مكتب ياليدين</span>
                              <span className="text-[9px] mt-1 opacity-60">Desk Delivery</span>
                           </button>
                           <button 
                             type="button"
                             onClick={() => setDeliveryType('home')}
                             className={`rounded-2xl border-2 font-black italic transition-all flex flex-col items-center justify-center ${deliveryType === 'home' ? 'border-brand-blue bg-brand-blue/10 text-white shadow-[0_0_15px_rgba(0,102,255,0.3)]' : 'border-white/5 bg-white/5 text-stone-500 hover:bg-white/10'}`}
                           >
                              <span className="text-base leading-none">باب المنزل</span>
                              <span className="text-[9px] mt-1 opacity-60">Home Delivery</span>
                           </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-stone-500 pr-4 italic">العنوان الكامل {deliveryType === 'desk' ? '(الولاية والبلدية لفرع ياليدين)' : '(البلدية والنهج)'}</label>
                      <input name="address" required className="form-input" placeholder={deliveryType === 'desk' ? "اسم البلدية ومكان المكتب..." : "اسم البلدية والشارع ورقم المنزل..."} />
                    </div>

                    <div className="bg-black/60 p-8 md:p-12 rounded-[40px] border border-white/5 space-y-8 shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/5 blur-3xl pointer-events-none" />
                       
                       <div className="grid grid-cols-2 gap-4 relative z-10 border-b border-white/5 pb-8">
                          <div className="space-y-1">
                             <span className="text-[10px] font-black uppercase text-stone-600 italic">سعر المنتج ({quantity} قطعة)</span>
                             <p className="text-2xl font-black italic text-white">{currentPrice} دج</p>
                          </div>
                          <div className="space-y-1 text-left">
                             <span className="text-[10px] font-black uppercase text-stone-600 italic">سعر التوصيل</span>
                             <p className="text-2xl font-black italic text-brand-blue">{deliveryPrice} دج</p>
                             <p className="text-[9px] font-black text-brand-green italic mt-1 animate-pulse">
                                * سعر التوصيل قابل للتخفيض بعد الطلب
                             </p>
                          </div>
                       </div>

                       <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                         <div className="w-full md:w-auto">
                            <span className="text-[10px] font-black uppercase text-stone-500 block mb-2 italic">المجموع الكلي المستحق</span>
                            <div className="flex items-baseline gap-3">
                               <span className="text-7xl font-black italic tracking-tighter text-brand-red leading-none">{totalPrice}</span>
                               <span className="text-2xl font-black italic text-brand-blue">دج</span>
                            </div>
                         </div>
                         <button 
                           disabled={isSubmitting}
                           type="submit"
                           className="btn-primary !w-full md:!w-auto !px-12"
                         >
                            {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الطلب نهائياً ⚡️'}
                         </button>
                       </div>
                    </div>
                  </form>
               )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-40 pt-40 pb-20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-brand-blue/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-10">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-3xl bg-white p-1 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <img src="https://i.postimg.cc/Y0hMc7F7/photo-2025-10-17-20-22-46.jpg" className="w-full h-full rounded-2xl object-contain" alt="Footer Logo" />
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-black italic tracking-tighter text-white">SOFEX</span>
                <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">Elite Algeria Distribution</span>
              </div>
            </div>
            <p className="text-3xl font-black italic text-stone-500 leading-tight">شريكك الأول في عالم التلوين الاحترافي منذ عام 2020.</p>
            <div className="flex gap-4">
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all shadow-xl group border border-white/5">
                <Facebook size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-pink-600 transition-all shadow-xl group border border-white/5">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-xl group border border-white/5">
                <Music size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <h4 className="text-brand-blue font-black uppercase tracking-widest text-xs pr-4 border-r-4 border-brand-blue">روابط مهمة</h4>
               <ul className="space-y-4 text-2xl font-black italic text-stone-500">
                 <li><button onClick={() => setView('product')} className="hover:text-white transition-colors">الرئيسية</button></li>
                 <li><button onClick={() => setView('checkout')} className="hover:text-white transition-colors">أطلب الآن</button></li>
                 <li><button onClick={() => setShowPrivacy(true)} className="hover:text-white transition-colors">الخصوصية</button></li>
               </ul>
            </div>
            <div className="space-y-8">
               <h4 className="text-brand-red font-black uppercase tracking-widest text-xs pr-4 border-r-4 border-brand-red">تواصل معنا</h4>
               <div className="space-y-4">
                  <p className="text-4xl font-black italic text-white leading-none">0655110977</p>
                  <p className="text-xl font-bold italic text-stone-500">الدويرة، الجزائر العاصمة.</p>
                  <p className="text-sm font-bold text-stone-700 uppercase tracking-widest">مفتوح الآن • خدمة 24/7</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex items-center gap-10">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-800 italic leading-none">SOFEX STORE OFFICIAL 2026</span>
              <span className="hidden md:block w-20 h-px bg-white/5" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-800 italic leading-none">MADE IN ALGERIA 🇩🇿</span>
           </div>
        </div>
      </footer>

      {/* Privacy Policy Overlay */}
      <AnimatePresence>
         {showPrivacy && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-3xl p-6 flex items-center justify-center"
            >
               <motion.div 
                  initial={{ y: 50, scale: 0.9 }}
                  animate={{ y: 0, scale: 1 }}
                  exit={{ y: 50, scale: 0.9 }}
                  className="bg-zinc-900 border border-white/10 rounded-[60px] p-10 md:p-16 max-w-3xl w-full max-h-[85vh] overflow-y-auto space-y-12 text-right relative shadow-[0_0_100px_rgba(0,0,0,1)]"
               >
                  <div className="flex justify-between items-center border-b border-white/10 pb-8">
                     <h2 className="text-5xl font-black italic tracking-tighter text-white">سياسة الخصوصية</h2>
                     <button onClick={() => setShowPrivacy(false)} className="w-16 h-16 rounded-[24px] bg-white/5 text-white flex items-center justify-center text-3xl font-black hover:rotate-90 transition-transform">×</button>
                  </div>
                  <div className="space-y-8 text-stone-400 font-bold leading-relaxed italic text-xl">
                     <p>أهلاً بك في متجر سوفيكس. نحن نلتزم بأعلى معايير حماية بياناتك الشخصية:</p>
                     <ul className="list-disc pr-10 space-y-4">
                        <li>نحن نجمع فقط المعلومات الضرورية لإتمام عملية الشحن (الاسم، الهاتف، والعنوان).</li>
                        <li>لا يتم تخزين معلوماتك لأغراض تسويقية غير مرغوب فيها.</li>
                        <li>يتم مشاركة رقم هاتفك وعنوانك فقط مع مندوب التوصيل المعتمد لضمان وصول المنتج إليك.</li>
                        <li>نحن نستخدم حماية مشفرة لنموذج الطلب لضمان عدم اعتراض البيانات من أي طرف ثالث.</li>
                        <li>نحن نتبع سياسة "الدفع عند الاستلام" لحماية زبائننا من أي مخاطر مالية إلكترونية.</li>
                     </ul>
                  </div>
                  <button onClick={() => setShowPrivacy(false)} className="w-full bg-brand-blue text-white py-6 rounded-[32px] font-black text-2xl shadow-3xl shadow-brand-blue/30 hover:scale-105 transition-transform">أوافق على الشروط</button>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>

      {/* Super Floating Sticky Button for Mobile */}
      <AnimatePresence>
         {view === 'product' && (
           <div className="md:hidden fixed bottom-8 left-8 right-8 z-[1000]">
              <motion.button 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                onClick={() => setView('checkout')}
                className="w-full bg-brand-red text-white p-6 rounded-[32px] shadow-[0_30px_60px_-10px_rgba(255,0,0,0.5)] border-4 border-white/20 flex items-center justify-between group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none" />
                <div className="text-right relative z-10 pr-2">
                   <span className="text-[10px] block font-black uppercase tracking-widest opacity-60 mb-1 italic">سعر المنتج</span>
                   <span className="text-4xl font-black italic tracking-tighter">{currentPrice} دج</span>
                </div>
                <div className="bg-white text-brand-red px-10 py-3 rounded-2xl text-base font-black shadow-2xl relative z-10 italic flex items-center gap-3">
                   أطلب الآن <ShoppingCart size={20} />
                </div>
              </motion.button>
           </div>
         )}
      </AnimatePresence>

    </div>
  );
}
