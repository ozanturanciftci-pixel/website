export const LANGS = ['tr', 'en', 'es'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'tr';

export const OFFICE_INFO = {
  istanbul: {
    label: 'Istanbul Office',
    address: 'Mayısgülü Sokak No:8 Daire:8 Kadıköy/İstanbul'
  },
  madrid: {
    label: 'Madrid Contact Office',
    address: 'Placeholder: Salamanca District, Madrid, Spain'
  },
  phone: '+90 555 000 00 00',
  email: 'info@turanciftcilaw.com',
  linkedin: 'https://www.linkedin.com/in/placeholder'
} as const;

export type PracticeSlug = 'tax-law' | 'corporate-law' | 'immigration-law';

type PracticeContent = {
  title: string;
  subtitle: string;
  summary: string;
  bullets: string[];
  cta: string;
};

type SiteContent = {
  localeName: string;
  nav: {
    home: string;
    practiceAreas: string;
    about: string;
    contact: string;
    kvkk: string;
    privacy: string;
    cookies: string;
    admin: string;
  };
  hero: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustPoints: string[];
  practices: Record<PracticeSlug, PracticeContent>;
  about: {
    title: string;
    lead: string;
    paragraphs: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      fullName: string;
      email: string;
      phone: string;
      preferredLanguage: string;
      subject: string;
      message: string;
      consent: string;
      send: string;
      success: string;
      error: string;
    };
  };
  legal: {
    kvkkTitle: string;
    kvkkBody: string;
    privacyTitle: string;
    privacyBody: string;
    cookiesTitle: string;
    cookiesBody: string;
  };
  seo: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
  };
};

export const SITE_CONTENT: Record<Lang, SiteContent> = {
  tr: {
    localeName: 'Türkçe',
    nav: {
      home: 'Ana Sayfa',
      practiceAreas: 'Faaliyet Alanları',
      about: 'Hakkımızda',
      contact: 'İletişim',
      kvkk: 'KVKK',
      privacy: 'Gizlilik',
      cookies: 'Çerez',
      admin: 'Yönetim'
    },
    hero: {
      title: 'Turançiftçi Law Firm',
      description:
        'İstanbul merkezli ve Madrid temas ofisli yapımızla vergi hukuku, şirketler hukuku ve yabancılar hukukunda stratejik, uluslararası odaklı hukuki danışmanlık sunuyoruz.',
      primaryCta: 'Bize Ulaşın',
      secondaryCta: 'Hizmet Alanları'
    },
    trustPoints: [
      'Vergi hukuku odaklı derin tecrübe',
      'Yabancı şirketler için İngilizce/Spanish erişilebilirlik',
      'İstanbul ve Madrid bağlantılı uluslararası bakış'
    ],
    practices: {
      'tax-law': {
        title: 'Vergi Hukuku',
        subtitle: 'Uygulama odaklı vergi stratejisi ve uyum',
        summary:
          'Vergi incelemeleri, uzlaşma süreçleri, vergi ihtilafları ve şirket içi vergi risk haritaları konularında sonuca odaklı temsil sunuyoruz.',
        bullets: [
          'Vergi inceleme süreçlerinde hazırlık ve temsil',
          'Tarhiyat, ceza ve idari başvurularda hukuki strateji',
          'Transfer fiyatlandırması ve uluslararası vergi risk analizi',
          'Dava ve alternatif uyuşmazlık çözüm süreçleri'
        ],
        cta: 'Vergi hukuku konusunda görüşelim'
      },
      'corporate-law': {
        title: 'Şirketler Hukuku',
        subtitle: 'Yerel ve yabancı yatırımcılar için hukuki altyapı',
        summary:
          'Şirket kuruluşları, pay devri, yönetim yapısı, ticari sözleşmeler ve kurumsal yönetişim süreçlerinde üç dilde erişilebilir danışmanlık sağlıyoruz.',
        bullets: [
          'Şirket kuruluş, yeniden yapılanma ve birleşme süreçleri',
          'Pay sahipleri sözleşmeleri ve yönetim hakkı tasarımı',
          'Yabancı şirketlerin Türkiye pazarına giriş modellemesi',
          'Ticari sözleşmelerin risk odaklı hazırlanması'
        ],
        cta: 'Şirketler hukuku desteği alın'
      },
      'immigration-law': {
        title: 'Yabancılar Hukuku',
        subtitle: 'Oturum ve çalışma izni süreçlerinde pratik çözüm',
        summary:
          'Yabancı gerçek kişiler ve şirket yöneticileri için oturum izni, çalışma izni, vatandaşlık ve ilgili idari süreçlerde etkin hukuki takip sağlıyoruz.',
        bullets: [
          'Kısa ve uzun dönem oturum izni başvuruları',
          'Çalışma izni süreçleri ve itiraz mekanizmaları',
          'Vatandaşlık başvuruları ve hukuki uygunluk değerlendirmesi',
          'Göç idaresi ve ilgili kurum yazışmalarının yönetimi'
        ],
        cta: 'Yabancılar hukuku için iletişime geçin'
      }
    },
    about: {
      title: 'Hakkımızda',
      lead: 'Turançiftçi Law Firm, iş dünyasının hızlı karar alma ihtiyacına uygun, teknik ve uluslararası perspektife sahip hukuk hizmeti sunar.',
      paragraphs: [
        'Büro yapımız, vergi hukuku ve ticari hayatın kesiştiği alanlarda riskleri erken aşamada tespit etmeye odaklanır. Hukuki çözümleri sadece mevzuat temelli değil, aynı zamanda operasyonel gerçekliğe uygun şekilde kurgularız.',
        'İstanbul merkezli çalışma modelimize Madrid temas noktamızı ekleyerek uluslararası müşteri iletişimi açısından erişilebilirliği artırıyoruz. Türkçe, İngilizce ve İspanyolca iletişime uygun süreç yönetimi sağlıyoruz.',
        'Bu metin ilk faz taslağıdır ve sizin hukuki revizyonlarınızla son hale getirilecektir.'
      ]
    },
    contact: {
      title: 'Bize Yazın',
      subtitle: 'Sorununuzu kısaca iletin, sizinle en uygun yol haritası için iletişime geçelim.',
      form: {
        fullName: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        preferredLanguage: 'Tercih Edilen Dil',
        subject: 'Konu',
        message: 'Mesajınız',
        consent: 'KVKK/Gizlilik metinlerini okudum ve iletişim amaçlı veri işlenmesini kabul ediyorum.',
        send: 'Mesajı Gönder',
        success: 'Mesajınız alındı. En kısa sürede dönüş yapacağız.',
        error: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.'
      }
    },
    legal: {
      kvkkTitle: 'KVKK Aydınlatma Metni (Taslak)',
      kvkkBody:
        'Bu sayfa prototip aşamasında oluşturulmuş taslak metindir. Veri sorumlusu, işleme amacı, hukuki sebep, aktarım ve başvuru hakları nihai yayında avukatlık bürosunun politikalarına göre güncellenecektir.',
      privacyTitle: 'Privacy Notice (Draft)',
      privacyBody:
        'This draft privacy notice explains what personal data is collected through the website contact form and how it is used for legal service communication only.',
      cookiesTitle: 'Cookie Notice (Draft)',
      cookiesBody:
        'This prototype currently uses only essential technical cookies required for session and security. Final cookie classification will be published before production launch.'
    },
    seo: {
      siteName: 'Turançiftçi Law Firm',
      defaultTitle: 'Turançiftçi Law Firm | Istanbul & Madrid',
      defaultDescription:
        'Vergi hukuku, şirketler hukuku ve yabancılar hukuku alanlarında İstanbul merkezli, Madrid temas ofisli hukuki danışmanlık.'
    }
  },
  en: {
    localeName: 'English',
    nav: {
      home: 'Home',
      practiceAreas: 'Practice Areas',
      about: 'About Us',
      contact: 'Contact',
      kvkk: 'KVKK',
      privacy: 'Privacy',
      cookies: 'Cookies',
      admin: 'Admin'
    },
    hero: {
      title: 'Turançiftçi Law Firm',
      description:
        'Based in Istanbul with a contact office in Madrid, we provide strategic legal counsel in tax law, corporate law and immigration law for local and international clients.',
      primaryCta: 'Contact Us',
      secondaryCta: 'Practice Areas'
    },
    trustPoints: [
      'Strong background in tax law and disputes',
      'Accessible for foreign companies in English and Spanish',
      'Cross-border perspective with Istanbul-Madrid connection'
    ],
    practices: {
      'tax-law': {
        title: 'Tax Law',
        subtitle: 'Practical tax strategy and compliance',
        summary:
          'We advise on tax audits, settlement negotiations, tax litigation and internal risk mapping with a business-focused legal approach.',
        bullets: [
          'Preparation and representation in tax audits',
          'Legal strategy for assessments and tax penalties',
          'International tax risk and transfer pricing support',
          'Litigation and alternative dispute resolution roadmap'
        ],
        cta: 'Discuss your tax law matter'
      },
      'corporate-law': {
        title: 'Corporate Law',
        subtitle: 'Legal infrastructure for local and foreign investors',
        summary:
          'We support company formations, shareholder structures, governance and commercial agreements with multilingual client communication.',
        bullets: [
          'Company setup, restructuring and M&A support',
          'Shareholder agreements and governance design',
          'Turkey market-entry structuring for foreign entities',
          'Risk-oriented drafting of commercial contracts'
        ],
        cta: 'Get corporate law support'
      },
      'immigration-law': {
        title: 'Immigration Law',
        subtitle: 'Residence and work permit support',
        summary:
          'We assist individuals and company executives in residence permits, work permits, citizenship applications and administrative follow-up.',
        bullets: [
          'Short-term and long-term residence permit applications',
          'Work permit applications and objection processes',
          'Citizenship eligibility and application strategy',
          'Official filings before immigration authorities'
        ],
        cta: 'Start your immigration process'
      }
    },
    about: {
      title: 'About Us',
      lead: 'Turançiftçi Law Firm delivers business-oriented legal work with technical depth and international accessibility.',
      paragraphs: [
        'We focus on early risk detection where tax and commercial realities intersect. Our legal approach is designed to be both technically robust and operationally practical.',
        'With our Istanbul base and Madrid contact point, we improve communication with international clients and maintain a smooth process in Turkish, English and Spanish.',
        'This text is a first-phase draft and will be finalized after legal language review.'
      ]
    },
    contact: {
      title: 'Write to Us',
      subtitle: 'Send us your legal issue in brief, and we will contact you with an initial path forward.',
      form: {
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        preferredLanguage: 'Preferred Language',
        subject: 'Subject',
        message: 'Your Message',
        consent: 'I have read the privacy/KVKK notices and consent to data processing for communication.',
        send: 'Send Message',
        success: 'Your message has been received. We will get back to you shortly.',
        error: 'Message could not be sent. Please try again.'
      }
    },
    legal: {
      kvkkTitle: 'KVKK Information Notice (Draft)',
      kvkkBody:
        'This is a draft notice for prototype purposes. Full legal disclosures regarding data controller identity, legal basis and rights of data subjects will be updated before launch.',
      privacyTitle: 'Privacy Notice (Draft)',
      privacyBody:
        'This page outlines draft privacy practices for contact form submissions and communication-related processing only.',
      cookiesTitle: 'Cookie Notice (Draft)',
      cookiesBody:
        'Only essential technical cookies are currently used for security and admin sessions. Final cookie policy will be published before production release.'
    },
    seo: {
      siteName: 'Turançiftçi Law Firm',
      defaultTitle: 'Turançiftçi Law Firm | Istanbul & Madrid',
      defaultDescription:
        'Strategic legal counsel in tax law, corporate law and immigration law for local and international clients.'
    }
  },
  es: {
    localeName: 'Espanol',
    nav: {
      home: 'Inicio',
      practiceAreas: 'Areas de Practica',
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      kvkk: 'KVKK',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      admin: 'Admin'
    },
    hero: {
      title: 'Turançiftçi Law Firm',
      description:
        'Con sede en Estambul y oficina de contacto en Madrid, ofrecemos asesoria legal estrategica en derecho fiscal, societario y de extranjeria.',
      primaryCta: 'Contactar',
      secondaryCta: 'Areas de Practica'
    },
    trustPoints: [
      'Experiencia solida en derecho fiscal',
      'Accesibilidad para empresas extranjeras en ingles y espanol',
      'Perspectiva internacional Estambul-Madrid'
    ],
    practices: {
      'tax-law': {
        title: 'Derecho Fiscal',
        subtitle: 'Estrategia fiscal y cumplimiento',
        summary:
          'Asesoramos en inspecciones fiscales, procesos de conciliacion, litigios tributarios y gestion preventiva de riesgos.',
        bullets: [
          'Representacion en inspecciones fiscales',
          'Estrategia juridica frente a liquidaciones y sanciones',
          'Analisis de riesgo fiscal internacional',
          'Hoja de ruta para litigios y resolucion alternativa'
        ],
        cta: 'Hablemos de su asunto fiscal'
      },
      'corporate-law': {
        title: 'Derecho Societario',
        subtitle: 'Estructuras legales para inversion local e internacional',
        summary:
          'Apoyamos constitucion de sociedades, pactos entre socios, gobierno corporativo y contratos mercantiles con comunicacion multilingue.',
        bullets: [
          'Constitucion, reestructuracion y operaciones societarias',
          'Pactos de socios y diseno de gobernanza',
          'Entrada al mercado turco para empresas extranjeras',
          'Redaccion contractual orientada al riesgo'
        ],
        cta: 'Solicitar apoyo societario'
      },
      'immigration-law': {
        title: 'Derecho de Extranjeria',
        subtitle: 'Permisos de residencia y trabajo',
        summary:
          'Asistimos a personas y directivos en permisos de residencia, permisos de trabajo, ciudadania y tramites administrativos.',
        bullets: [
          'Solicitudes de residencia de corta y larga duracion',
          'Permisos de trabajo y recursos administrativos',
          'Estrategia para solicitudes de ciudadania',
          'Gestiones ante autoridades migratorias'
        ],
        cta: 'Iniciar su proceso migratorio'
      }
    },
    about: {
      title: 'Sobre Nosotros',
      lead: 'Turançiftçi Law Firm ofrece asesoria legal orientada a negocios, con profundidad tecnica y enfoque internacional.',
      paragraphs: [
        'Nos enfocamos en detectar riesgos de forma temprana en la interseccion entre fiscalidad y actividad comercial. Nuestras soluciones juridicas son tecnicas y aplicables en la practica.',
        'Con base en Estambul y punto de contacto en Madrid, facilitamos la comunicacion con clientes internacionales en turco, ingles y espanol.',
        'Este texto es un borrador inicial y sera revisado juridicamente en la siguiente fase.'
      ]
    },
    contact: {
      title: 'Escribanos',
      subtitle: 'Comparta su consulta y nos pondremos en contacto con una ruta legal inicial.',
      form: {
        fullName: 'Nombre Completo',
        email: 'Correo',
        phone: 'Telefono',
        preferredLanguage: 'Idioma Preferido',
        subject: 'Asunto',
        message: 'Su Mensaje',
        consent: 'He leido los avisos de privacidad/KVKK y autorizo el tratamiento de datos para comunicacion.',
        send: 'Enviar Mensaje',
        success: 'Hemos recibido su mensaje. Le responderemos pronto.',
        error: 'No se pudo enviar el mensaje. Intentelo de nuevo.'
      }
    },
    legal: {
      kvkkTitle: 'Aviso KVKK (Borrador)',
      kvkkBody:
        'Este aviso es un borrador para la fase de prototipo. Los detalles legales definitivos se publicaran antes del lanzamiento.',
      privacyTitle: 'Aviso de Privacidad (Borrador)',
      privacyBody:
        'Esta pagina describe de forma preliminar como tratamos los datos enviados por el formulario de contacto.',
      cookiesTitle: 'Aviso de Cookies (Borrador)',
      cookiesBody:
        'Actualmente solo se utilizan cookies tecnicas esenciales para seguridad y sesiones de administracion.'
    },
    seo: {
      siteName: 'Turançiftçi Law Firm',
      defaultTitle: 'Turançiftçi Law Firm | Estambul y Madrid',
      defaultDescription:
        'Asesoria legal en derecho fiscal, societario y de extranjeria para clientes locales e internacionales.'
    }
  }
};

export function isLang(value: string): value is Lang {
  return LANGS.includes(value as Lang);
}

export const PRACTICE_ORDER: PracticeSlug[] = ['tax-law', 'corporate-law', 'immigration-law'];

export function buildLangPath(lang: Lang, path = ''): string {
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  const [pathnameWithPossibleLang, hashPart = ''] = withSlash.split('#');
  const normalizedPathname = pathnameWithPossibleLang.replace(/^\/(tr|en|es)(?=\/|$)/, '') || '/';
  const base = `/${lang}${normalizedPathname === '/' ? '' : normalizedPathname}`;
  return hashPart ? `${base}#${hashPart}` : base;
}
