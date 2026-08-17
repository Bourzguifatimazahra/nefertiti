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
    readTime: "8 min",
    image: deptHarmonisation,
    imageAlt: "Département harmonisation faciale",
    i18n: {
      fr: {
        title: "Botox ou acide hyaluronique : comment choisir ?",
        excerpt: "Deux molécules complémentaires, deux indications différentes.",
        category: "Injections",
        body: [
          "De nombreuses personnes font l'amalgame entre le botox et l'acide hyaluronique. Utilisées en médecine esthétique, ces molécules sont pourtant très différentes. Elles ne possèdent pas les mêmes propriétés et ne sont pas utilisées pour les mêmes soins. Les traitements au botox et à l'acide hyaluronique ont pourtant la même finalité : rajeunir les traits du visage. Botox ou acide hyaluronique, que choisir ? Nous vous disons tout dans ce nouvel article.",
          "L'acide hyaluronique est une molécule naturellement présente dans le derme de la peau. Elle peut contenir jusqu'à 1 000 fois son poids en eau et est très hydratante pour l'épiderme. Elle sert aussi à lier certaines protéines contenues dans la peau, comme le collagène et l'élastine. L'acide hyaluronique est utilisé sous forme plus ou moins dense en médecine esthétique. L'injection d'acide hyaluronique permet d'obtenir différents résultats : redonner du volume au visage ou au corps, combler les rides et ridules, hydrater la peau en profondeur, lui apporter de l'éclat, apporter du volume aux lèvres fines, modifier la forme du visage (rhinoplastie médicale, jawline contouring, redresser les pommettes, combler les sillons nasogéniens…). L'acide hyaluronique est un composant naturel, très bien toléré par les patients. Son utilisation présente très peu de risques. De plus, cette molécule se résorbe seule. Les résultats obtenus par le médecin sont ponctuels et non définitifs, contrairement à la chirurgie esthétique.",
          "Le résultat obtenu est immédiat. Ensuite, l'acide hyaluronique possède une action de 9 à 18 mois. Une fois ce délai écoulé, il faut renouveler les injections pour conserver le résultat obtenu. Dans le cas contraire, votre visage retrouve sa forme et sa texture post-injections.",
          "L'acide hyaluronique est une molécule naturelle, sans risque d'allergies. Grâce à lui, il est possible d'obtenir de nombreux résultats. Ce n'est pas tout : l'acide hyaluronique traite la peau en profondeur. Il la nourrit et l'hydrate et stimule la production de collagène.",
          "Le botox, ou toxine botulique, est une molécule neurotoxique. Elle est utilisée en médecine esthétique depuis de nombreuses années. On l'injecte dans les muscles pour les bloquer temporairement. C'est une solution parfaite pour effacer les rides d'expression et les rides comme les pattes d'oie, la ride du lion ou le pli d'amertume (ride du fumeur). Contrairement aux idées reçues, un botox injecté en proportions correctes ne donne pas un aspect figé au visage. Comme l'acide hyaluronique, cette toxine a un effet temporaire, qui s'estompe de lui-même au bout de quelques mois. Choisissez le botox si vous voulez estomper ou effacer des rides, ou encore illuminer votre regard en redressant la queue de vos sourcils. Le botox est aussi idéal pour estomper les rides du front, obtenir un décolleté plus lisse ou corriger un double menton.",
          "Les effets du botox sont visibles quelques jours après l'intervention. Le résultat obtenu dure 6 à 9 mois en moyenne.",
          "Le botox permet de lisser la peau du visage et d'effacer les rides profondes sans chirurgie. Il peut être utilisé sur de nombreuses zones, au niveau du visage, du cou et du décolleté. Le botox est assimilé par l'organisme de plus en plus facilement injection après injection. Aussi, les zones traitées restent en forme de plus en plus longtemps entre chaque traitement au fil des séances.",
          "Vous connaissez maintenant la différence entre le botox et l'acide hyaluronique. Ces deux produits étant totalement différents, il n'y a pas de bon choix. Le botox agit sur la partie musculaire du visage, tandis que l'acide hyaluronique traite directement les tissus cutanés. Tout dépend de vos envies et de vos besoins. Vous ne savez pas vers quel produit vous diriger ? Vous hésitez à choisir entre le botox ou l'acide hyaluronique ? Venez consulter l'un de nos docteurs pour connaître nos procédures de rajeunissement et de restructuration du visage médicales. Éviter un lifting est tout à fait possible grâce à ces procédures sans cicatrices, sans risques et rapides à réaliser. Besoin d'être guidé(e) dans votre choix d'injections ?",
        ],
      },
      en: {
        title: "Botox or hyaluronic acid: how to choose?",
        excerpt: "Two complementary molecules, two different indications.",
        category: "Injectables",
        body: [
          "Many people confuse botox and hyaluronic acid. Used in aesthetic medicine, these molecules are actually very different. They do not have the same properties and are not used for the same treatments. However, botox and hyaluronic acid treatments share the same goal: to rejuvenate facial features. Botox or hyaluronic acid, which to choose? We tell you everything in this new article.",
          "Hyaluronic acid is a molecule naturally present in the dermis of the skin. It can hold up to 1,000 times its weight in water and is very hydrating for the epidermis. It also serves to bind certain proteins contained in the skin, such as collagen and elastin. Hyaluronic acid is used in more or less dense form in aesthetic medicine. Hyaluronic acid injection can achieve different results: restore volume to the face or body, fill wrinkles and fine lines, deeply hydrate the skin, give it radiance, add volume to thin lips, modify the shape of the face (medical rhinoplasty, jawline contouring, lift cheekbones, fill nasolabial folds…). Hyaluronic acid is a natural component, very well tolerated by patients. Its use presents very few risks. Moreover, this molecule is reabsorbed on its own. The results obtained by the doctor are temporary and not definitive, unlike cosmetic surgery.",
          "The result obtained is immediate. Then, hyaluronic acid has an effect lasting 9 to 18 months. Once this period has elapsed, injections must be renewed to maintain the result obtained. Otherwise, your face returns to its post-injection shape and texture.",
          "Hyaluronic acid is a natural molecule, with no risk of allergies. Thanks to it, it is possible to achieve many results. That's not all: hyaluronic acid treats the skin in depth. It nourishes and hydrates it and stimulates collagen production.",
          "Botox, or botulinum toxin, is a neurotoxic molecule. It has been used in aesthetic medicine for many years. It is injected into the muscles to temporarily block them. It is a perfect solution for erasing expression lines and wrinkles such as crow's feet, frown lines or the marionette line (smoker's line). Contrary to popular belief, botox injected in correct proportions does not give the face a frozen appearance. Like hyaluronic acid, this toxin has a temporary effect, which fades on its own after a few months. Choose botox if you want to reduce or erase wrinkles, or even brighten your gaze by lifting the tail of your eyebrows. Botox is also ideal for reducing forehead wrinkles, achieving a smoother décolleté or correcting a double chin.",
          "The effects of botox are visible a few days after the procedure. The result obtained lasts 6 to 9 months on average.",
          "Botox allows you to smooth the skin of the face and erase deep wrinkles without surgery. It can be used on many areas, on the face, neck and décolleté. Botox is assimilated by the body more and more easily with each injection. Also, the treated areas remain in shape for longer and longer between each treatment over the sessions.",
          "You now know the difference between botox and hyaluronic acid. These two products being totally different, there is no right choice. Botox acts on the muscular part of the face, while hyaluronic acid directly treats the skin tissues. It all depends on your desires and your needs. You don't know which product to turn to? You hesitate to choose between botox or hyaluronic acid? Come consult one of our doctors to learn about our facial rejuvenation and restructuring medical procedures. Avoiding a facelift is quite possible thanks to these scar-free, risk-free and quick procedures. Need guidance in your choice of injections?",
        ],
      },
      ar: {
        title: "بوتوكس أم حمض الهيالورونيك: كيف تختار؟",
        excerpt: "جزيئتان متكاملتان، استطبابان مختلفان.",
        category: "الحقن",
        body: [
          "الكثير من الناس يخلطون بين البوتوكس وحمض الهيالورونيك. المستخدمان في طب التجميل، هاتان الجزيئتان مختلفتان في الواقع. لا تمتلكان نفس الخصائص ولا تستخدمان لنفس العلاجات. لكن علاجات البوتوكس وحمض الهيالورونيك تشترك في نفس الهدف: تجديد ملامح الوجه. بوتوكس أم حمض الهيالورونيك، ماذا تختار؟ نخبرك بكل شيء في هذا المقال الجديد.",
          "حمض الهيالورونيك هو جزيء موجود بشكل طبيعي في الأدمة. يمكنه الاحتفاظ بوزن يصل إلى 1000 مرة من وزنه في الماء وهو مرطب جداً للبشرة. كما يخدم لربط بعض البروتينات الموجودة في الجلد، مثل الكولاجين والإيلاستين. يُستخدم حمض الهيالورونيك بشكل أكثر أو أقل كثافة في طب التجميل. حقن حمض الهيالورونيك يمكن أن يحقق نتائج مختلفة: استعادة حجم الوجه أو الجسم، ملء التجاعيد والخطوط الدقيقة، ترطيب البشرة بعمق، منحها إشراقاً، إضافة حجم للشفاه الرقيقة، تعديل شكل الوجه (رينوبلاستي طبية، تحديد خط الفك، رفع عظام الوجنتين، ملء الثنيات الأنفية الشفوية…). حمض الهيالورونيك هو مكون طبيعي، متحمل جداً من قبل المرضى. استخدامه يقدم مخاطر قليلة جداً. علاوة على ذلك، هذا الجزيء يُمتص ذاتياً. النتائج التي يحصل عليها الطبيب مؤقتة وليست نهائية، على عكس الجراحة التجميلية.",
          "النتيجة التي تم الحصول عليها فورية. بعد ذلك، حمض الهيالورونيك له مفعول يدوم من 9 إلى 18 شهراً. بمجرد انقضاء هذه الفترة، يجب تجديد الحقن للحفاظ على النتيجة. خلاف ذلك، يعود وجهك إلى شكله وملمسه بعد الحقن.",
          "حمض الهيالورونيك هو جزيء طبيعي، بدون خطر تحسس. بفضله، من الممكن تحقيق العديد من النتائج. هذا ليس كل شيء: حمض الهيالورونيك يعالج البشرة بعمق. يغذيها ويرطبها ويحفز إنتاج الكولاجين.",
          "البوتوكس، أو التوكسين البوتوليني، هو جزيء عصبي سام. يُستخدم في طب التجميل منذ سنوات عديدة. يُحقن في العضلات لحجبها مؤقتاً. إنه حل مثالي لمحو خطوط التعبير والتجاعيد مثل خطوط حول العينين، خطوط الجبهة أو خطوط الفم (خط المدخن). على عكس الاعتقادات الشائعة، البوتوكس المحقون بنسب صحيحة لا يعطي الوجه مظهراً متجمداً. مثل حمض الهيالورونيك، هذا السم له تأثير مؤقت، يتلاشى من تلقاء نفسه بعد بضعة أشهر. اختر البوتوكس إذا كنت تريد تخفيف أو محو التجاعيد، أو حتى إشراق نظرك برفع ذيل حواجبك. البوتوكس مثالي أيضاً لتخفيف تجاعيد الجبهة، الحصول على صدر أكثر نعومة أو تصحيح الذقن المزدوج.",
          "تأثيرات البوتوكس مرئية بعد أيام قليلة من الإجراء. النتيجة التي تم الحصول عليها تدوم من 6 إلى 9 أشهر في المتوسط.",
          "البوتوكس يسمح بتهدئة بشرة الوجه ومحو التجاعيد العميقة دون جراحة. يمكن استخدامه على مناطق عديدة، على مستوى الوجه والرقبة والصدر. البوتوكس يمتصه الجسم بسهولة متزايدة حقناً بعد حقن. أيضاً، المناطق المعالجة تبقى في شكل لفترة أطول وأطول بين كل علاج على مدى الجلسات.",
          "أنت الآن تعرف الفرق بين البوتوكس وحمض الهيالورونيك. هاتان المنتجان مختلفتان تماماً، لا يوجد خيار صحيح. البوتوكس يعمل على الجزء العضلي من الوجه، بينما حمض الهيالورونيك يعالج الأنسجة الجلدية مباشرة. كل شيء يعتمد على رغباتك واحتياجاتك. لا تعرف إلى أي منتج تتوجه؟ تتردد في الاختيار بين البوتوكس أو حمض الهيالورونيك؟ تعالوا استشيروا أحد أطبائنا لمعرفة إجراءات تجديد الوجه وإعادة بنائه الطبية. تجنب شد الوجه ممكن تماماً بفضل هذه الإجراءات التي لا تترك ندوباً ولا مخاطر وسريعة التنفيذ. بحاجة إلى توجيه في اختيار الحقن؟",
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
