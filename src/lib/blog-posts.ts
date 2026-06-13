import deptHarmonisation from "@/assets/dept-harmonisation.jpg";
import deptAntiage from "@/assets/dept-antiage.jpg";
import equipRegen from "@/assets/equip-regen.jpg";
import deptLaser from "@/assets/dept-laser.jpg";
import deptSkin from "@/assets/dept-skin.jpg";
import equipGyneco from "@/assets/equip-gyneco.jpg";
import type { Lang } from "@/lib/i18n";

interface LocalizedPost {
  title: string;
  excerpt: string;
  category: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  readTime: string;
  image: string;
  imageAlt: string;
  i18n: Record<Lang, LocalizedPost>;
}

export const POSTS: BlogPost[] = [
  {
    slug: "botox-ou-acide-hyaluronique",
    readTime: "5 min",
    image: deptHarmonisation,
    imageAlt: "Département harmonisation faciale",
    i18n: {
      fr: {
        title: "Botox ou acide hyaluronique : comment choisir ?",
        excerpt: "Deux molécules complémentaires, deux indications différentes.",
        category: "Injections",
        body: [
          "La toxine botulique (Botox) et l'acide hyaluronique sont les deux piliers de la médecine esthétique moderne. Ils ne traitent pas les mêmes problématiques et sont souvent complémentaires.",
          "Le Botox détend sélectivement les muscles responsables des rides d'expression : front, ride du lion, pattes d'oie. Effets en 7 à 14 jours, durée 4 à 6 mois.",
          "L'acide hyaluronique restaure les volumes perdus : pommettes, cernes, lèvres, jawline. Les résultats durent de 9 à 18 mois.",
          "Une harmonisation faciale réussie combine souvent les deux pour un résultat naturel et équilibré.",
        ],
      },
      en: {
        title: "Botox or hyaluronic acid: how to choose?",
        excerpt: "Two complementary molecules, two different indications.",
        category: "Injectables",
        body: [
          "Botulinum toxin (Botox) and hyaluronic acid are the two pillars of modern aesthetic medicine. They treat different concerns and are often complementary.",
          "Botox selectively relaxes the muscles responsible for expression lines: forehead, frown lines, crow's feet. Effects appear in 7–14 days and last 4–6 months.",
          "Hyaluronic acid restores lost volumes: cheeks, tear troughs, lips, jawline. Results last 9 to 18 months.",
          "A successful facial harmonization often combines both for a natural, balanced outcome.",
        ],
      },
      ar: {
        title: "بوتوكس أم حمض الهيالورونيك: كيف تختار؟",
        excerpt: "جزيئتان متكاملتان، استطبابان مختلفان.",
        category: "الحقن",
        body: [
          "يعتبر البوتوكس وحمض الهيالورونيك الركيزتين الأساسيتين لطب التجميل الحديث، ويعالجان مشاكل مختلفة بشكل متكامل.",
          "يعمل البوتوكس على إرخاء عضلات التعبير: الجبهة، خطوط الغضب، حول العينين. تظهر النتائج خلال 7 إلى 14 يوماً وتدوم 4 إلى 6 أشهر.",
          "يعيد حمض الهيالورونيك الحجم المفقود: الخدود، الهالات، الشفاه، خط الفك. النتائج تدوم 9 إلى 18 شهراً.",
          "غالباً ما يُجمع الاثنان لتحقيق تناسق طبيعي ومتوازن للوجه.",
        ],
      },
    },
  },
  {
    slug: "prevenir-vieillissement-visage",
    readTime: "6 min",
    image: deptAntiage,
    imageAlt: "Département anti-âge",
    i18n: {
      fr: {
        title: "Comment prévenir le vieillissement du visage ?",
        excerpt: "Stratégies médicales de longévité cutanée.",
        category: "Anti-âge",
        body: [
          "Le vieillissement cutané est multifactoriel : génétique, soleil, stress oxydatif, hormones, alimentation.",
          "Trépied médical : photoprotection SPF 50, micronutrition antioxydante, stimulation cellulaire (PRP, skinboosters, biostimulateurs).",
          "À partir de 30 ans, des protocoles préventifs doux maintiennent la qualité de peau sans modifier les traits.",
          "À Nefertiti Clinic, chaque protocole est personnalisé après un bilan complet.",
        ],
      },
      en: {
        title: "How to prevent facial aging?",
        excerpt: "Medical strategies for skin longevity.",
        category: "Anti-aging",
        body: [
          "Skin aging is multifactorial: genetics, sun, oxidative stress, hormones, diet.",
          "Medical triad: daily SPF 50, antioxidant micronutrition, cell stimulation (PRP, skinboosters, biostimulators).",
          "From 30 onwards, gentle preventive protocols preserve skin quality without altering features.",
          "At Nefertiti Clinic, every protocol is tailored after a complete clinical assessment.",
        ],
      },
      ar: {
        title: "كيف نقي الوجه من الشيخوخة؟",
        excerpt: "استراتيجيات طبية لطول عمر البشرة.",
        category: "مكافحة الشيخوخة",
        body: [
          "شيخوخة البشرة متعددة العوامل: الوراثة، الشمس، الإجهاد التأكسدي، الهرمونات، التغذية.",
          "الثلاثي الطبي: حماية يومية بعامل 50، تغذية دقيقة مضادة للأكسدة، تحفيز خلوي (PRP، سكين بوسترز، محفّزات).",
          "ابتداءً من 30 سنة، تساعد البروتوكولات الوقائية اللطيفة في الحفاظ على جودة البشرة دون تغيير الملامح.",
          "في عيادة نفرتيتي، كل بروتوكول مخصص بعد تقييم سريري شامل.",
        ],
      },
    },
  },
  {
    slug: "avantages-prp",
    readTime: "5 min",
    image: equipRegen,
    imageAlt: "Département médecine régénérative",
    i18n: {
      fr: {
        title: "Les avantages du PRP en médecine esthétique",
        excerpt: "Régénération 100 % naturelle à partir de votre propre sang.",
        category: "Régénérative",
        body: [
          "Le PRP est un concentré autologue obtenu par prise de sang. Les facteurs de croissance stimulent la régénération cellulaire.",
          "Indications : qualité de peau, chute de cheveux, cicatrices, vergetures.",
          "Entièrement naturel — aucun risque allergique. 3 séances espacées de 4 semaines.",
          "Notre clinique applique un protocole rigoureux : kits CE, centrifugation contrôlée.",
        ],
      },
      en: {
        title: "The benefits of PRP in aesthetic medicine",
        excerpt: "100% natural regeneration from your own blood.",
        category: "Regenerative",
        body: [
          "PRP is an autologous concentrate obtained from a simple blood draw. Growth factors stimulate cell regeneration.",
          "Indications: skin quality, hair loss, scars, stretch marks.",
          "Entirely natural — no allergic risk. Three sessions, four weeks apart.",
          "Our clinic uses a strict protocol: CE-certified kits, controlled centrifugation.",
        ],
      },
      ar: {
        title: "فوائد الـ PRP في طب التجميل",
        excerpt: "تجديد طبيعي 100% من دمك الخاص.",
        category: "الطب التجديدي",
        body: [
          "الـ PRP مركّز ذاتي يُستخرج من عينة دم بسيطة. عوامل النمو تحفّز تجديد الخلايا.",
          "الاستطبابات: جودة البشرة، تساقط الشعر، الندبات، التشققات.",
          "طبيعي تماماً — لا خطر تحسس. 3 جلسات كل 4 أسابيع.",
          "تعتمد عيادتنا بروتوكولاً صارماً: أطقم معتمدة وتجهيز محكم.",
        ],
      },
    },
  },
  {
    slug: "exosomes-revolution",
    readTime: "7 min",
    image: equipRegen,
    imageAlt: "Laboratoire d'exosomes",
    i18n: {
      fr: {
        title: "Exosomes : la révolution esthétique de 2026",
        excerpt: "Nouvelle génération de régénération cellulaire.",
        category: "Régénérative",
        body: [
          "Les exosomes sont des micro-vésicules sécrétées par les cellules souches, riches en signaux régénératifs.",
          "Appliqués ou injectés, ils stimulent le collagène, réduisent l'inflammation et accélèrent la cicatrisation.",
          "Indications : rajeunissement global, mélasma, post-laser, alopécie.",
          "Dr. Iman utilise les protocoles d'exosomes les plus avancés disponibles au Maroc.",
        ],
      },
      en: {
        title: "Exosomes: the 2026 aesthetic revolution",
        excerpt: "The new generation of cell regeneration.",
        category: "Regenerative",
        body: [
          "Exosomes are micro-vesicles secreted by stem cells, rich in regenerative signals.",
          "Topical or injected, they boost collagen, reduce inflammation and speed up healing.",
          "Indications: global rejuvenation, melasma, post-laser, alopecia.",
          "Dr. Iman uses the most advanced exosome protocols available in Morocco.",
        ],
      },
      ar: {
        title: "الإكسوسومات: ثورة التجميل لعام 2026",
        excerpt: "الجيل الجديد من تجديد الخلايا.",
        category: "الطب التجديدي",
        body: [
          "الإكسوسومات حويصلات دقيقة تفرزها الخلايا الجذعية، غنية بإشارات التجديد.",
          "تطبيقاً أو حقناً، تحفّز الكولاجين وتقلل الالتهاب وتسرّع الالتئام.",
          "الاستطبابات: تجديد شامل، الكلف، ما بعد الليزر، تساقط الشعر.",
          "تعتمد د. إيمان أحدث بروتوكولات الإكسوسومات الطبية المتاحة في المغرب.",
        ],
      },
    },
  },
  {
    slug: "taches-pigmentaires",
    readTime: "6 min",
    image: deptLaser,
    imageAlt: "Département laser",
    i18n: {
      fr: {
        title: "Traitement des taches pigmentaires",
        excerpt: "Mélasma, lentigos, hyperpigmentation : solutions médicales.",
        category: "Lasers",
        body: [
          "Les taches pigmentaires ont des causes variées : soleil, hormones, inflammation.",
          "Le diagnostic médical est essentiel : un mélasma mal traité peut s'aggraver.",
          "Protocoles combinés : laser Fotona Q-switch, peelings, exosomes, photoprotection.",
          "Résultats sur 3 à 6 mois selon le type de pigmentation.",
        ],
      },
      en: {
        title: "Treatment of pigmentation spots",
        excerpt: "Melasma, lentigines, hyperpigmentation: medical solutions.",
        category: "Lasers",
        body: [
          "Pigmentation has many causes: sun, hormones, inflammation.",
          "Medical diagnosis is essential — mistreated melasma can worsen.",
          "Combined protocols: Q-switched Fotona laser, peelings, exosomes, strict photoprotection.",
          "Results take 3 to 6 months depending on the pigmentation type.",
        ],
      },
      ar: {
        title: "علاج البقع الصبغية",
        excerpt: "الكلف، البقع الشمسية، فرط التصبغ: الحلول الطبية.",
        category: "الليزر",
        body: [
          "للبقع الصبغية أسباب متعددة: الشمس، الهرمونات، الالتهاب.",
          "التشخيص الطبي ضروري — الكلف غير المُعالج جيداً قد يتفاقم.",
          "بروتوكولات مدمجة: ليزر Fotona Q-switch، تقشير، إكسوسومات، حماية شمسية.",
          "النتائج خلال 3 إلى 6 أشهر حسب نوع التصبغ.",
        ],
      },
    },
  },
  {
    slug: "laser-fotona",
    readTime: "6 min",
    image: deptLaser,
    imageAlt: "Plateau laser Fotona",
    i18n: {
      fr: {
        title: "Tout savoir sur le laser Fotona",
        excerpt: "Protocoles 4D, indications, suites.",
        category: "Lasers",
        body: [
          "Fotona est un laser hybride Nd:YAG / Er:YAG, l'un des plus polyvalents.",
          "Le protocole 4D traite relâchement, qualité de peau et rides, sans bistouri.",
          "Indications : tightening, rajeunissement, mélasma, cicatrices.",
          "Une consultation médicale préalable est obligatoire.",
        ],
      },
      en: {
        title: "Everything about the Fotona laser",
        excerpt: "4D protocols, indications, downtime.",
        category: "Lasers",
        body: [
          "Fotona is a hybrid Nd:YAG / Er:YAG laser, one of the most versatile in the world.",
          "The 4D protocol treats laxity, skin quality and wrinkles without surgery.",
          "Indications: tightening, rejuvenation, melasma, scars.",
          "A prior medical consultation is mandatory.",
        ],
      },
      ar: {
        title: "كل ما تحتاج معرفته عن ليزر فوتونا",
        excerpt: "بروتوكول 4D والاستطبابات والنقاهة.",
        category: "الليزر",
        body: [
          "فوتونا ليزر هجين Nd:YAG / Er:YAG، من أكثر الأنظمة تنوعاً عالمياً.",
          "يعالج بروتوكول 4D الترهل وجودة البشرة والتجاعيد دون جراحة.",
          "الاستطبابات: الشد، التجديد، الكلف، الندبات.",
          "الاستشارة الطبية المسبقة إلزامية.",
        ],
      },
    },
  },
  {
    slug: "endolift-tightening",
    readTime: "5 min",
    image: deptLaser,
    imageAlt: "Technologie EndoliftX",
    i18n: {
      fr: {
        title: "EndoliftX : tightening sans chirurgie",
        excerpt: "Une fibre laser sous-cutanée pour retendre l'ovale.",
        category: "Lasers",
        body: [
          "EndoliftX utilise une micro-fibre laser pour rétracter le collagène et fondre les amas graisseux.",
          "Indications : double menton, bajoues, paupières inférieures, cou.",
          "30 à 60 min sous anesthésie locale, retour social en 48 à 72 h.",
          "Une séance suffit ; résultat optimal sur 3 à 6 mois.",
        ],
      },
      en: {
        title: "EndoliftX: tightening without surgery",
        excerpt: "A subcutaneous laser fiber to redefine the jawline.",
        category: "Lasers",
        body: [
          "EndoliftX uses a micro laser fiber to retract collagen and melt small fat pockets.",
          "Indications: double chin, jowls, lower eyelids, neck laxity.",
          "30–60 min under local anesthesia, social recovery in 48–72 hours.",
          "One session is usually enough; results optimize over 3 to 6 months.",
        ],
      },
      ar: {
        title: "EndoliftX: شدّ بدون جراحة",
        excerpt: "ألياف ليزر تحت الجلد لإعادة رسم خط الفك.",
        category: "الليزر",
        body: [
          "تستخدم EndoliftX ألياف ليزر دقيقة لشدّ الكولاجين وإذابة تجمعات دهنية صغيرة.",
          "الاستطبابات: الذقن المزدوج، الفكين، الجفن السفلي، ترهل الرقبة.",
          "من 30 إلى 60 دقيقة تحت تخدير موضعي، العودة الاجتماعية خلال 48 إلى 72 ساعة.",
          "جلسة واحدة كافية عادة؛ النتائج تتحسن خلال 3 إلى 6 أشهر.",
        ],
      },
    },
  },
  {
    slug: "skinboosters-qualite-peau",
    readTime: "5 min",
    image: deptSkin,
    imageAlt: "Département qualité de peau",
    i18n: {
      fr: {
        title: "Skinboosters : la qualité de peau",
        excerpt: "Hydratation profonde et stimulation cellulaire.",
        category: "Qualité de peau",
        body: [
          "Les skinboosters sont des injections d'acide hyaluronique peu réticulé pour hydrater sans volumiser.",
          "Améliorent élasticité, densité et éclat — visage, cou, décolleté, mains.",
          "2 à 3 séances espacées de 4 semaines, entretien tous les 6 à 9 mois.",
          "Souvent combinés au PRP ou aux exosomes.",
        ],
      },
      en: {
        title: "Skinboosters: skin quality at the core",
        excerpt: "Deep hydration and cellular stimulation.",
        category: "Skin quality",
        body: [
          "Skinboosters are lightly cross-linked hyaluronic acid injections that hydrate without adding volume.",
          "They improve elasticity, density and glow — face, neck, décolleté, hands.",
          "2–3 sessions four weeks apart, maintenance every 6 to 9 months.",
          "Often combined with PRP or exosomes for amplified results.",
        ],
      },
      ar: {
        title: "سكين بوسترز: جودة البشرة في صميم البروتوكول",
        excerpt: "ترطيب عميق وتحفيز خلوي.",
        category: "جودة البشرة",
        body: [
          "سكين بوسترز حقن حمض الهيالورونيك المرتبط جزئياً لترطيب البشرة دون إضافة حجم.",
          "تحسّن المرونة والكثافة والإشراق — الوجه والرقبة والصدر واليدين.",
          "من 2 إلى 3 جلسات كل 4 أسابيع، صيانة كل 6 إلى 9 أشهر.",
          "غالباً ما تُجمع مع PRP أو الإكسوسومات.",
        ],
      },
    },
  },
  {
    slug: "rajeunissement-intime",
    readTime: "5 min",
    image: equipGyneco,
    imageAlt: "Équipement gynécologie esthétique",
    i18n: {
      fr: {
        title: "Rajeunissement intime : approche médicale discrète",
        excerpt: "Laser vaginal et protocoles régénératifs.",
        category: "Gynécologie esthétique",
        body: [
          "Le laser vaginal CO₂ traite sécheresse, relâchement et inconforts liés à la ménopause ou au post-partum.",
          "Séances courtes, indolores, sans éviction sociale.",
          "Une consultation médicale préalable évalue indication et contre-indications.",
          "Cadre entièrement personnalisé, discret et respectueux.",
        ],
      },
      en: {
        title: "Intimate rejuvenation: a discreet medical approach",
        excerpt: "Vaginal laser and regenerative protocols.",
        category: "Aesthetic gynecology",
        body: [
          "CO₂ vaginal laser treats dryness, laxity and discomfort linked to menopause or post-partum.",
          "Sessions are short, painless and require no downtime.",
          "A prior medical consultation assesses indication and contraindications.",
          "A fully personalized, discreet and respectful setting.",
        ],
      },
      ar: {
        title: "تجديد المنطقة الحميمية: مقاربة طبية رصينة",
        excerpt: "ليزر مهبلي وبروتوكولات تجديد.",
        category: "أمراض النساء التجميلية",
        body: [
          "يعالج ليزر CO₂ المهبلي الجفاف والترهل والانزعاج المرتبط بسن اليأس أو ما بعد الولادة.",
          "جلسات قصيرة، غير مؤلمة، دون توقف عن النشاط.",
          "تقيّم الاستشارة الطبية المسبقة الاستطبابات وموانعها.",
          "إطار مخصص بالكامل، رصين ومحترِم للخصوصية.",
        ],
      },
    },
  },
  {
    slug: "consultation-premiere-fois",
    readTime: "4 min",
    image: deptHarmonisation,
    imageAlt: "Consultation médicale",
    i18n: {
      fr: {
        title: "Première consultation : à quoi s'attendre ?",
        excerpt: "Bilan médical, photographies, plan de soin personnalisé.",
        category: "Patient",
        body: [
          "La consultation commence par un échange approfondi : attentes, antécédents, mode de vie.",
          "Examen clinique complet et photographies standardisées.",
          "Plan de soin personnalisé, indications, limites, risques, devis transparent.",
          "Aucune décision dans la précipitation : délai de réflexion encouragé.",
        ],
      },
      en: {
        title: "Your first consultation: what to expect",
        excerpt: "Medical assessment, photos, personalized treatment plan.",
        category: "Patient",
        body: [
          "The consultation starts with an in-depth conversation: expectations, history, lifestyle.",
          "Full clinical exam and standardized photographs for follow-up.",
          "Personalized treatment plan with indications, limits, risks, and transparent pricing.",
          "No rushed decisions — a reflection period is always encouraged.",
        ],
      },
      ar: {
        title: "الاستشارة الأولى: ماذا تتوقع؟",
        excerpt: "تقييم طبي، صور، خطة علاج مخصصة.",
        category: "المريض",
        body: [
          "تبدأ الاستشارة بحوار معمّق: التوقعات، السوابق، نمط الحياة.",
          "فحص سريري شامل وصور موحدة للمتابعة.",
          "خطة علاج مخصصة مع الاستطبابات والحدود والمخاطر وعرض أسعار شفاف.",
          "لا قرار متسرع — يُشجَّع على وقت للتفكير.",
        ],
      },
    },
  },
  {
    slug: "biostimulateurs-collagene",
    readTime: "6 min",
    image: deptAntiage,
    imageAlt: "Biostimulateurs de collagène",
    i18n: {
      fr: {
        title: "Biostimulateurs : réveiller le collagène",
        excerpt: "Radiesse, Sculptra, Profhilo — le nouveau langage de la régénération.",
        category: "Régénérative",
        body: [
          "Les biostimulateurs n'ajoutent pas de volume artificiel : ils stimulent la production naturelle de collagène.",
          "Radiesse (hydroxyapatite), Sculptra (acide poly-L-lactique) et Profhilo agissent en profondeur pendant 18 à 24 mois.",
          "Idéal pour la qualité de peau, le relâchement modéré et la prévention dès 35 ans.",
          "Protocole : 2 à 3 séances espacées, résultats progressifs et naturels.",
        ],
      },
      en: {
        title: "Biostimulators: awakening collagen",
        excerpt: "Radiesse, Sculptra, Profhilo — the new language of regeneration.",
        category: "Regenerative",
        body: [
          "Biostimulators do not add artificial volume — they stimulate the body's own collagen production.",
          "Radiesse (hydroxyapatite), Sculptra (poly-L-lactic acid) and Profhilo act deeply for 18 to 24 months.",
          "Ideal for skin quality, mild laxity and prevention from age 35.",
          "Protocol: 2 to 3 sessions spaced apart, with gradual and natural-looking results.",
        ],
      },
      ar: {
        title: "محفّزات الكولاجين: إيقاظ النسيج",
        excerpt: "راديس، سكلبترا، بروفيلو — اللغة الجديدة للتجديد.",
        category: "الطب التجديدي",
        body: [
          "لا تضيف المحفّزات حجمًا اصطناعيًا، بل تحفّز إنتاج الكولاجين الطبيعي للجسم.",
          "راديس (هيدروكسي أباتيت)، سكلبترا (حمض بولي-L-لاكتيك) وبروفيلو تعمل بعمق لمدة 18 إلى 24 شهرًا.",
          "مثالية لتحسين جودة البشرة والترهل الخفيف والوقاية من سن 35.",
          "البروتوكول: 2 إلى 3 جلسات متباعدة، بنتائج تدريجية وطبيعية.",
        ],
      },
    },
  },
  {
    slug: "harmonisation-jawline",
    readTime: "5 min",
    image: deptHarmonisation,
    imageAlt: "Harmonisation du jawline",
    i18n: {
      fr: {
        title: "Jawline & profiloplastie médicale",
        excerpt: "Redessiner l'ovale du visage sans chirurgie.",
        category: "Injections",
        body: [
          "La définition de la mâchoire est devenue un marqueur d'élégance moderne, autant chez la femme que chez l'homme.",
          "L'acide hyaluronique structurant permet de redessiner menton, angle mandibulaire et profil sous-mentonnier.",
          "Couplé à EndoliftX ou à un Fotona 4D, le résultat gagne en netteté et en tension cutanée.",
          "Approche millimétrique : préserver l'identité du visage tout en révélant son architecture.",
        ],
      },
      en: {
        title: "Jawline & medical profiloplasty",
        excerpt: "Redefining the facial oval without surgery.",
        category: "Injectables",
        body: [
          "Jawline definition has become a modern marker of elegance, for both women and men.",
          "Structuring hyaluronic acid redraws chin, mandibular angle and sub-mental profile.",
          "Combined with EndoliftX or Fotona 4D, the result gains sharpness and skin tension.",
          "A millimeter-precise approach: preserving facial identity while revealing its architecture.",
        ],
      },
      ar: {
        title: "خط الفك والتنسيق الجانبي الطبي",
        excerpt: "إعادة رسم بيضوي الوجه دون جراحة.",
        category: "الحقن",
        body: [
          "أصبح تحديد خط الفك علامة على الأناقة الحديثة لدى النساء والرجال.",
          "يسمح حمض الهيالورونيك الداعم بإعادة رسم الذقن وزاوية الفك السفلي والوجه الجانبي.",
          "بالاقتران مع EndoliftX أو Fotona 4D، تكتسب النتيجة وضوحًا وشدًا للبشرة.",
          "مقاربة بدقة الميليمتر: الحفاظ على هوية الوجه مع إبراز هندسته.",
        ],
      },
    },
  },
  {
    slug: "mesotherapie-cheveux",
    readTime: "5 min",
    image: equipRegen,
    imageAlt: "Mésothérapie capillaire",
    i18n: {
      fr: {
        title: "Mésothérapie capillaire : stopper la chute",
        excerpt: "Vitamines, peptides et facteurs de croissance pour densifier la chevelure.",
        category: "Cheveux",
        body: [
          "La mésothérapie capillaire injecte un cocktail sur mesure de vitamines, peptides et oligo-éléments dans le cuir chevelu.",
          "Indications : chute saisonnière, post-partum, stress, début d'alopécie androgénétique.",
          "Combinée au PRP et aux exosomes, elle relance le cycle pilaire en quelques semaines.",
          "Protocole : 4 à 6 séances rapprochées puis entretien trimestriel.",
        ],
      },
      en: {
        title: "Hair mesotherapy: stopping hair loss",
        excerpt: "Vitamins, peptides and growth factors to densify hair.",
        category: "Hair",
        body: [
          "Hair mesotherapy delivers a tailored cocktail of vitamins, peptides and trace elements into the scalp.",
          "Indications: seasonal shedding, post-partum, stress, early androgenetic alopecia.",
          "Combined with PRP and exosomes, it restarts the hair cycle within a few weeks.",
          "Protocol: 4 to 6 close sessions followed by quarterly maintenance.",
        ],
      },
      ar: {
        title: "الميزوثيرابي للشعر: إيقاف التساقط",
        excerpt: "فيتامينات وببتيدات وعوامل نمو لتكثيف الشعر.",
        category: "الشعر",
        body: [
          "يحقن الميزوثيرابي مزيجًا مخصصًا من الفيتامينات والببتيدات والعناصر النادرة في فروة الرأس.",
          "الاستطبابات: التساقط الموسمي، بعد الولادة، الإجهاد، بداية الصلع الوراثي.",
          "بالاقتران مع PRP والإكسوسومات، يعيد تشغيل دورة الشعر خلال أسابيع.",
          "البروتوكول: 4 إلى 6 جلسات متقاربة ثم صيانة فصلية.",
        ],
      },
    },
  },
  {
    slug: "peeling-medical",
    readTime: "5 min",
    image: deptSkin,
    imageAlt: "Peeling médical",
    i18n: {
      fr: {
        title: "Peelings médicaux : l'éclat retrouvé",
        excerpt: "Acides choisis sur mesure pour rénover la peau en profondeur.",
        category: "Qualité de peau",
        body: [
          "Le peeling médical exfolie de façon contrôlée pour renouveler les couches superficielles de l'épiderme.",
          "Indications : teint terne, pores dilatés, cicatrices d'acné, taches, kératoses.",
          "Acides glycolique, salicylique, mandelique, TCA ou phénol — chaque protocole est dosé pour le phototype.",
          "Suites légères, résultats visibles dès 7 jours.",
        ],
      },
      en: {
        title: "Medical peelings: a renewed glow",
        excerpt: "Custom-selected acids to renew skin in depth.",
        category: "Skin quality",
        body: [
          "Medical peelings perform a controlled exfoliation to renew the superficial layers of the epidermis.",
          "Indications: dull complexion, enlarged pores, acne scars, pigmentation, keratoses.",
          "Glycolic, salicylic, mandelic, TCA or phenol acids — every protocol is dosed for the phototype.",
          "Mild downtime, visible results within 7 days.",
        ],
      },
      ar: {
        title: "التقشير الطبي: إشراق متجدد",
        excerpt: "أحماض مختارة بعناية لتجديد البشرة بعمق.",
        category: "جودة البشرة",
        body: [
          "يقوم التقشير الطبي بإزالة محكمة لطبقات البشرة السطحية لتجديدها.",
          "الاستطبابات: البشرة الباهتة، المسام الواسعة، ندوب حب الشباب، التصبغات.",
          "أحماض جليكوليك، ساليسيليك، مانديليك، TCA أو الفينول — كل بروتوكول يُجرع حسب نمط البشرة.",
          "نقاهة خفيفة، نتائج ملحوظة خلال 7 أيام.",
        ],
      },
    },
  },
  {
    slug: "tendances-2026",
    readTime: "7 min",
    image: deptAntiage,
    imageAlt: "Tendances médecine esthétique 2026",
    i18n: {
      fr: {
        title: "Médecine esthétique : tendances 2026",
        excerpt: "Régénération, prévention, naturalité — les nouveaux codes du beau.",
        category: "Tendances",
        body: [
          "2026 marque le triomphe de la médecine régénérative sur le tout-injection.",
          "Les patients recherchent un visage reposé et expressif, pas figé : less is more.",
          "Combos prisés : exosomes + Fotona 4D, Profhilo + skinboosters, EndoliftX + jawline subtil.",
          "La prévention dès 25-30 ans devient la norme — protocoles légers, espacés, ciblés.",
        ],
      },
      en: {
        title: "Aesthetic medicine: 2026 trends",
        excerpt: "Regeneration, prevention, naturalness — the new beauty codes.",
        category: "Trends",
        body: [
          "2026 marks the triumph of regenerative medicine over the all-injection approach.",
          "Patients are seeking a rested, expressive face — never frozen: less is more.",
          "Trending combos: exosomes + Fotona 4D, Profhilo + skinboosters, EndoliftX + subtle jawline.",
          "Prevention from age 25–30 becomes the norm — light, spaced, targeted protocols.",
        ],
      },
      ar: {
        title: "طب التجميل: توجهات 2026",
        excerpt: "تجديد، وقاية، طبيعية — قواعد الجمال الجديدة.",
        category: "اتجاهات",
        body: [
          "يشهد عام 2026 انتصار الطب التجديدي على نهج الحقن الشامل.",
          "يبحث المرضى عن وجه مرتاح ومعبّر، لا متجمد: الأقل هو الأكثر.",
          "المزجات الرائجة: إكسوسومات + Fotona 4D، بروفيلو + سكين بوسترز، EndoliftX + خط فك لطيف.",
          "تصبح الوقاية من سن 25-30 هي القاعدة — بروتوكولات خفيفة، متباعدة، مستهدفة.",
        ],
      },
    },
  },
];

export function localizedPost(post: BlogPost, lang: Lang): LocalizedPost {
  return post.i18n[lang] ?? post.i18n.fr;
}
