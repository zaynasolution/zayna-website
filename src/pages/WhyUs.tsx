import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Heart,
  Zap,
  Check,
  Star,
  Users,
  Award,
  Globe,
  Smile,
  Lock,
  Clock,
} from 'lucide-react'
import Footer from '../components/Footer'
import founderImage from '../assets/founder.jpg'
import { useLanguage } from '../context/LanguageContext'

export default function WhyUs() {
  const { t, rtl } = useLanguage()

  const values = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#8B5A2B]" />,
      title: t('why_value1_title'),
      subtitle: t('why_value1_subtitle'),
      description: t('why_value1_desc'),
      features: [
        t('why_value1_feat1'),
        t('why_value1_feat2'),
        t('why_value1_feat3'),
        t('why_value1_feat4'),
      ],
    },
    {
      icon: <Heart className="w-10 h-10 text-[#8B5A2B]" />,
      title: t('why_value2_title'),
      subtitle: t('why_value2_subtitle'),
      description: t('why_value2_desc'),
      features: [
        t('why_value2_feat1'),
        t('why_value2_feat2'),
        t('why_value2_feat3'),
        t('why_value2_feat4'),
      ],
    },
    {
      icon: <Zap className="w-10 h-10 text-[#8B5A2B]" />,
      title: t('why_value3_title'),
      subtitle: t('why_value3_subtitle'),
      description: t('why_value3_desc'),
      features: [
        t('why_value3_feat1'),
        t('why_value3_feat2'),
        t('why_value3_feat3'),
        t('why_value3_feat4'),
      ],
    },
  ]

  const comparison = [
    { feature: t('why_comp_feat1'), traditional: false, other: false, zayna: true },
    { feature: t('why_comp_feat2'), traditional: false, other: true, zayna: true },
    { feature: t('why_comp_feat3'), traditional: false, other: false, zayna: true },
    { feature: t('why_comp_feat4'), traditional: true, other: true, zayna: true },
    { feature: t('why_comp_feat5'), traditional: false, other: false, zayna: true },
    { feature: t('why_comp_feat6'), traditional: false, other: true, zayna: true },
    { feature: t('why_comp_feat7'), traditional: false, other: false, zayna: true },
    { feature: t('why_comp_feat8'), traditional: true, other: false, zayna: true },
  ]

  const testimonials = {
    customers: [
      {
        text: t('why_test_cust1_text'),
        author: t('why_test_cust1_author'),
        location: t('why_test_cust1_loc'),
      },
      {
        text: t('why_test_cust2_text'),
        author: t('why_test_cust2_author'),
        location: t('why_test_cust2_loc'),
      },
    ],
    owners: [
      {
        text: t('why_test_owner1_text'),
        author: t('why_test_owner1_author'),
        location: t('why_test_owner1_loc'),
      },
      {
        text: t('why_test_owner2_text'),
        author: t('why_test_owner2_author'),
        location: t('why_test_owner2_loc'),
      },
    ],
  }

  return (
    <div className="bg-[#FFF0ED] min-h-screen" dir={rtl ? 'rtl' : 'ltr'}>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FFF0ED] to-[#EFC7C2]/20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-serif text-[#2B0902] mb-6 leading-tight"
          >
            {t('why_hero_title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#2B0902]/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t('why_hero_desc')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 text-[#8B5A2B] font-semibold"
          >
            <span className="flex items-center gap-2">
              <Award size={20} /> {t('why_stat_salons')}
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-2">
              <Users size={20} /> {t('why_stat_users')}
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-2">
              <Smile size={20} /> {t('why_stat_satisfaction')}
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/60 backdrop-blur-md rounded-[30px] p-8 border border-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-[#FFF0ED] w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2B0902] mb-2 font-serif">{value.title}</h3>
                <p className="text-[#8B5A2B] font-medium mb-4">{value.subtitle}</p>
                <p className="text-[#2B0902]/70 mb-6 text-sm">{value.description}</p>
                <ul className="space-y-3">
                  {value.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#2B0902]/80">
                      <Check size={16} className="text-[#F5AC73] mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Comparison Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2B0902] mb-4">
              {t('why_comparison_title')}
            </h2>
            <p className="text-[#2B0902]/70">{t('why_comparison_subtitle')}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#2B0902]/10">
                  <th className="py-4 text-left rtl:text-right text-[#2B0902] font-serif text-lg px-4">
                    {t('why_comp_header_feature')}
                  </th>
                  <th className="py-4 text-center text-[#2B0902]/60 font-medium">
                    {t('why_comp_header_traditional')}
                  </th>
                  <th className="py-4 text-center text-[#2B0902]/60 font-medium">
                    {t('why_comp_header_other')}
                  </th>
                  <th className="py-4 text-center text-[#8B5A2B] font-bold text-xl bg-[#FFF0ED]/50 rounded-t-xl">
                    {t('why_comp_header_zayna')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#2B0902]/5 hover:bg-white/50 transition-colors"
                  >
                    <td className="py-4 text-[#2B0902] font-medium px-4">{row.feature}</td>
                    <td className="py-4 text-center">
                      {row.traditional ? (
                        <Check className="mx-auto text-gray-400" size={20} />
                      ) : (
                        <span className="text-gray-300">-</span>
                      )}
                    </td>
                    <td className="py-4 text-center">
                      {row.other ? (
                        <Check className="mx-auto text-gray-400" size={20} />
                      ) : (
                        <span className="text-gray-300">-</span>
                      )}
                    </td>
                    <td className="py-4 text-center bg-[#FFF0ED]/30">
                      <div className="bg-[#F5AC73] rounded-full p-1 w-fit mx-auto">
                        <Check className="text-white" size={16} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Customer Stories */}
            <div>
              <h3 className="text-2xl font-bold font-serif text-[#2B0902] mb-8 flex items-center gap-3">
                <Heart className="text-[#F5AC73]" /> {t('why_stories_customers_title')}
              </h3>
              <div className="space-y-6">
                {testimonials.customers.map((story, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-[#F5AC73]/20"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} className="text-[#F5AC73] fill-current" />
                      ))}
                    </div>
                    <p className="text-[#2B0902]/80 italic mb-4">"{story.text}"</p>
                    <div className="text-sm">
                      <span className="font-bold text-[#2B0902]">{story.author}</span>
                      <span className="text-[#2B0902]/40 mx-2">•</span>
                      <span className="text-[#8B5A2B]">{story.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Owner Stories */}
            <div>
              <h3 className="text-2xl font-bold font-serif text-[#2B0902] mb-8 flex items-center gap-3">
                <StoreIcon className="text-[#8B5A2B]" /> {t('why_stories_owners_title')}
              </h3>
              <div className="space-y-6">
                {testimonials.owners.map((story, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-[#8B5A2B]/20"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} className="text-[#8B5A2B] fill-current" />
                      ))}
                    </div>
                    <p className="text-[#2B0902]/80 italic mb-4">"{story.text}"</p>
                    <div className="text-sm">
                      <span className="font-bold text-[#2B0902]">{story.author}</span>
                      <span className="text-[#2B0902]/40 mx-2">•</span>
                      <span className="text-[#8B5A2B]">{story.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Awards & Recognition */}
      <section className="py-20 bg-[#FFF0ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2B0902] mb-4">
              {t('why_awards_title')}
            </h2>
            <p className="text-[#2B0902]/70 max-w-2xl mx-auto">{t('why_awards_desc')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('why_award1_title'),
                org: t('why_award1_org'),
                icon: <Award className="w-12 h-12 text-[#F5AC73]" />,
              },
              {
                title: t('why_award2_title'),
                org: t('why_award2_org'),
                icon: <Star className="w-12 h-12 text-[#F5AC73]" />,
              },
              {
                title: t('why_award3_title'),
                org: t('why_award3_org'),
                icon: <Heart className="w-12 h-12 text-[#F5AC73]" />,
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-[#F5AC73]/20 flex flex-col items-center"
              >
                <div className="bg-[#FFF0ED] p-4 rounded-full mb-6">{award.icon}</div>
                <h3 className="text-xl font-bold text-[#2B0902] mb-2">{award.title}</h3>
                <p className="text-[#8B5A2B] font-medium">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#2B0902] mb-6">
                {t('why_vision_title')}
              </h2>
              <p className="text-lg text-[#2B0902]/80 mb-6 leading-relaxed">
                {t('why_vision_text1')}
              </p>
              <p className="text-lg text-[#2B0902]/80 mb-8 leading-relaxed">
                {t('why_vision_text2')}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-[#EFC7C2] border-2 border-white flex items-center justify-center text-[#2B0902] font-bold text-xs"
                    >
                      Team
                    </div>
                  ))}
                </div>
                <span className="text-[#8B5A2B] font-medium">{t('why_team_label')}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-[#FFF0ED] rounded-[40px] overflow-hidden relative z-10 border-4 border-white shadow-xl">
                <img
                  src={founderImage}
                  alt="Zayna Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F5AC73]/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8B5A2B]/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Quality & Trust Badges */}
      <section className="py-16 bg-[#2B0902] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-12">{t('why_commit_title')}</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: <ShieldCheck size={32} />, text: t('why_commit_item1') },
              { icon: <Clock size={32} />, text: t('why_commit_item2') },
              { icon: <Lock size={32} />, text: t('why_commit_item3') },
              { icon: <Globe size={32} />, text: t('why_commit_item4') },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">{item.icon}</div>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#2B0902] mb-6">
            {t('why_cta_title')}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button
              onClick={() =>
                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-[#F5AC73] text-[#2B0902] rounded-full font-bold text-lg shadow-lg hover:bg-[#EFC7C2] transition-colors"
            >
              {t('why_cta_btn_book')}
            </button>
            <button
              onClick={() =>
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-4 bg-white text-[#8B5A2B] border-2 border-[#8B5A2B] rounded-full font-bold text-lg hover:bg-[#FFF0ED] transition-colors"
            >
              {t('why_cta_btn_list')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function StoreIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}
