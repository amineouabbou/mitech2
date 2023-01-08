import Cardconformity from './Cardconformity'

const DATA = [
  {
    id: 0,
    title: 'eKYC',
    icon: '/icons/ekyc.svg',
    photo: '/bgs/ekyc-photo.png',
    intro: '',
    liste: [
      {
        id: 0,
        title:
          'Processus de vérification et utilisateur 100% digital à partir de d’une pièce et une technologie de face matching (liveness) d’identité. ',
      },
      {
        id: 1,
        title: 'Plus de 900 types de documents de 190 pays supportés.',
      },
    ],
  },
  {
    id: 1,
    title: 'AML',
    icon: '/icons/aml.svg',
    photo: '/bgs/aml-photo.png',
    intro: '',
    liste: [
      {
        id: 0,
        title:
          'Notre AML policy est fondé sur un processus de vérification continuel des clients pour évaluer leurs risques, identifier et signaler les conduites suspectes pour maintenir une politique de prévention de blanchiment d’argent et financement du terrorisme.',
      },
    ],
  },
  {
    id: 2,
    title: 'Screening',
    icon: '/icons/aml.svg',
    photo: '/bgs/screening-photo.png',
    intro:
      'Un screening temps réel avant dénouement des transactions sur plus de :',
    liste: [
      {
        id: 0,
        title:
          '800 listes de sanctions internationaux (OFAC, HMT, FINRA, Interpol)',
      },
      {
        id: 1,
        title:
          'Plus de 1.6 million de profilés détaillés des PEPs et liste des PEPs',
      },
      {
        id: 2,
        title: 'Adverse Media check sur des milliards d’articles media ',
      },
    ],
  },
]

const Conformity = () => {
  return (
    <div>
      <p className="text-[20px] text-[#878ea2] mb-[35px] leading-[31px]">
        Money International place la conformité au centre du processing des
        opérations à travers des outils robustes conformes aux exigences des
        régulateurs internationaux (FATF, FINMA, FCA, CySEC, MAS, FSA) et un
        screening sur plus de 800 listes (OFAC, HMT, FINRA, Interpol)
      </p>

      <div className="grid grid-cols-1 gap-y-[15px]">
        {DATA.map((item, index) => (
          <Cardconformity data={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Conformity
