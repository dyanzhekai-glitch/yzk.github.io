import { Project, Service, Stat, WorkflowStep } from './types';

export const HERO_DATA = {
  name: '闫哲恺',
  enName: 'YAN ZHE KAI',
  role: '全链路视觉设计师 / 品牌创意与空间规划双背景',
  description: '从平面到空间，从创意到落地\n用设计连接品牌与人',
};

export const ABOUT_DATA = {
  intro: '我是闫哲恺，艺术设计科班出身，具备2年以上品牌与平面设计商业实战经验。专业排名前10%，曾获全国及省级冰雕设计大赛二等奖。擅长品牌VI、活动视觉统筹、海报设计、空间制图，同时熟悉新媒体与电商视觉规范。相信设计不仅是美，更是清晰、有力的沟通。',
  concept: '“设计是品牌与用户之间的桥梁，我负责让它清晰、有力、有温度。”',
  info: {
    age: '25岁',
    ethnicity: '汉',
    politics: '中共党员',
    location: '河南省焦作市',
    education: '2019-2023 绥化学院 艺术设计 (专业排名前10%)',
  },
  skills: {
    plane: 'PS / AI',
    space: 'CAD / 3DMAX',
    other: 'AIGC工具',
  },
  advantages: [
    '艺术设计科班出身，具备良好的空间感与手绘能力',
    '2年平面及品牌设计商业实战经验',
    '能够胜任从平面视觉、品牌VI到空间物料的全链路设计需求',
    '擅长品牌创意提案、海报设计、IP宣传画、LOGO制作',
    '对新媒体（小红书/抖音等）及电商页面设计规范有深入理解',
    '具备较强的跨部门协作沟通能力，能精准对接需求、把控项目周期并高效交付'
  ]
};

export const STATS: Stat[] = [
  { label: 'EXPERIENCE', value: '2Y+', desc: '商业实战' },
  { label: 'RANKING', value: 'TOP 10%', desc: '专业排名' },
  { label: 'PROJECTS', value: '5+', desc: '赛事/活动视觉统筹' },
  { label: 'SOFTWARE', value: '4+', desc: 'PS/AI/CAD/3DMAX' },
];

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: '武汉企业天地一号垂直跑马拉松比赛',
    category: '落地项目展示',
    date: '2024-2026',
    context: '武汉企业天地1号“向上出发”垂直跑，武汉首个城市级垂直马拉松IP及地标楼宇攀登赛事。',
    features: [
      '主视觉系列海报设计：采用大色块拼接，保留运动活力感与色彩通透感',
      '全套赛事物料延展体系定调：从路跑指引、完赛证书到颁奖签到背景板',
      '赛事周边产品打造：主题抽绳背包、运动速干T恤等实物宣发装备设计'
    ],
    result: '赛事连续举办五届，规模影响力逐年攀升，已成为武汉全民健身及品牌跨界的标志性活动。',
    image: 'https://i.postimg.cc/g2ywJBWW/wei-xin-tu-pian-20260601163052-146-2.jpg',
    gallery: [
      'https://i.postimg.cc/XqC2yy3P/ge-ren-zuo-pin-ji-16.jpg',
      'https://i.postimg.cc/Y25DB8fY/ge-ren-zuo-pin-ji-17.jpg',
      'https://i.postimg.cc/HWqv1349/ge-ren-zuo-pin-ji-18.jpg',
      'https://i.postimg.cc/Kc6phQrs/ge-ren-zuo-pin-ji-19.jpg',
      'https://i.postimg.cc/mZvpWVNp/ge-ren-zuo-pin-ji-20.jpg'
    ]
  },
  {
    id: '02',
    title: '国家能源公司湖北分公司球类运动会',
    category: '品牌活动视觉统筹',
    date: '2024.08-2025.12',
    context: '为国家能源公司湖北分公司内部球类运动会提供主视觉与全流程物料设计，覆盖开幕式、比赛现场、颁奖典礼及线上宣传。',
    features: [
      '提取“力量、协作、运动”关键词，设计主视觉插画与配色体系',
      '产出：主背景板、计分牌、奖杯奖牌、秩序册、引导牌、线上宣传海报',
      '统一VI规范，确保线上线下体验一致'
    ],
    result: '活动落地后获客户方书面好评，并被用于次年活动视觉基准。',
    image: 'https://i.postimg.cc/HLswX7dC/20f62cea1ff419f1a32c7845d2646687.jpg',
    gallery: [
      'https://i.postimg.cc/SxTWkxbb/ge-ren-zuo-pin-ji-21.jpg',
      'https://i.postimg.cc/xdXLCV9C/ge-ren-zuo-pin-ji-22.jpg',
      'https://i.postimg.cc/s2M5XC31/ge-ren-zuo-pin-ji-23.jpg',
      'https://i.postimg.cc/C5V271zn/Gemini-Generated-Image-mrzatmrzatmrzatm.png',
      'https://i.postimg.cc/j2r1c5L4/Gemini-Generated-Image-yt851cyt851cyt85.png',
      'https://i.postimg.cc/MH8L5TvD/Gemini-Generated-Image-yt851cyt851cyt85-(1).png',
      'https://i.postimg.cc/RhzYdFNG/Gemini-Generated-Image-yt851cyt851cyt85-(2).png',
      'https://i.postimg.cc/Vvchg6dg/Gemini-Generated-Image-yt851cyt851cyt85-(3).png'
    ]
  },
  {
    id: '03',
    title: '武汉市第三医院建院150周年健步走',
    category: '品牌活动设计',
    date: '2024.08-2025.12',
    context: '需结合“百年医院”历史感与“健步走”的活力调性。',
    features: [
      '采用复古红+健康绿的撞色，加入简洁的医疗十字辅助图形',
      '设计：纪念T恤、打卡手环、路线地图、终点站合影墙、线上H5分享海报'
    ],
    result: '实际参与人数超500人，物料现场出片率高，院方主动推荐给其他活动策划方。',
    image: 'https://i.postimg.cc/L6Y0gwvN/579e9b620b4719459fe3dc2f46548e35-01.jpg',
    gallery: [
      'https://i.postimg.cc/2ybtFKdH/ge-ren-zuo-pin-ji-24.jpg',
      'https://i.postimg.cc/52VxyB1r/ge-ren-zuo-pin-ji-25.jpg',
      'https://i.postimg.cc/FKFNghYT/ge-ren-zuo-pin-ji-26.jpg'
    ]
  },
  {
    id: '04',
    title: '新媒体平台设计与搭建',
    category: 'UI辅助/界面设计',
    date: '2024.08-2025.12',
    context: '旅游平台UI设计与内容构建。',
    features: [
      '主导小程序界面视觉风格（首页、攻略详情页、个人中心）',
      '设计icon系统、banner模板、主色调与辅助色规范',
      '与前端协作完成视觉落地，确保还原度'
    ],
    result: '使小程序上线后视觉统一性提升，用户留存数据优于同类平均水平。',
    image: 'https://i.postimg.cc/yNYGxdGj/6c8c2c54f2849f96edc56fdea4e52803.jpg',
    gallery: [
      'https://i.postimg.cc/FH7xfLZY/ge-ren-zuo-pin-ji-52.jpg',
      'https://i.postimg.cc/RFQ1rQSz/ge-ren-zuo-pin-ji-53.jpg'
    ]
  },
  {
    id: '05',
    title: '品牌全案视觉提案',
    category: '品牌全案提案设计',
    date: '2021-2025',
    context: '美高迪户外、禾满畦果蔬及云隙气泡酒包装设计的核心视觉全案。',
    features: [
      '品牌视觉语言与核心定位SLOGAN的推导与提取',
      '品牌标志与专属中英文字体系统设计',
      '产品包装、周边物料及品牌空间延展物料全链路设计'
    ],
    result: '通过极简主义与色彩张力提升品牌质感，实现从视觉吸引到心理认同。',
    image: 'https://i.postimg.cc/xTJ1Zjjs/20-kao-bei.jpg',
    galleryGroups: [
      {
        title: '美高迪',
        images: [
          'https://i.postimg.cc/t4cGPFHC/1.jpg',
          'https://i.postimg.cc/J0MfmqjZ/2.jpg',
          'https://i.postimg.cc/sDnkd5xp/3.jpg',
          'https://i.postimg.cc/8z9xsDhr/4.jpg',
          'https://i.postimg.cc/KzyVrNqH/5.jpg',
          'https://i.postimg.cc/7hV75xdH/10-kao-bei.jpg',
          'https://i.postimg.cc/90pTDWK7/11-kao-bei.jpg',
          'https://i.postimg.cc/NF4TKgSr/12-kao-bei.jpg',
          'https://i.postimg.cc/2ywv1zMW/13-kao-bei.jpg',
          'https://i.postimg.cc/sxcSMVqP/14-kao-bei.jpg',
          'https://i.postimg.cc/h4bVyrvF/15-kao-bei.jpg',
          'https://i.postimg.cc/66LCj0qx/16-kao-bei.jpg',
          'https://i.postimg.cc/mZN7XwkG/18-kao-bei.jpg',
          'https://i.postimg.cc/kMFW1cGD/19-kao-bei.jpg',
          'https://i.postimg.cc/8kBLKHcF/21-kao-bei.jpg',
          'https://i.postimg.cc/VLfn3C0J/22-kao-bei.jpg',
          'https://i.postimg.cc/dtsrzyZy/23-kao-bei.jpg',
          'https://i.postimg.cc/fTzm69S3/24-kao-bei.jpg',
          'https://i.postimg.cc/Y03gvpZc/3-kao-bei.jpg',
          'https://i.postimg.cc/cCmYvs24/4-kao-bei.jpg',
          'https://i.postimg.cc/yxP9DVt8/5-kao-bei.jpg',
          'https://i.postimg.cc/gjDRxYQY/7-kao-bei.jpg'
        ]
      },
      {
        title: '禾满畦',
        images: [
          'https://i.postimg.cc/90Ln2jWL/6.jpg',
          'https://i.postimg.cc/jdj1XCX1/7.jpg',
          'https://i.postimg.cc/MpMrC4gt/8.jpg',
          'https://i.postimg.cc/Zq6sRNby/9.jpg',
          'https://i.postimg.cc/Y0DbVfRh/10.jpg',
          'https://i.postimg.cc/65SMfcTY/11.jpg',
          'https://i.postimg.cc/1t9B3YYP/12.jpg',
          'https://i.postimg.cc/TP6R4rhN/hetong1-(10).jpg',
          'https://i.postimg.cc/KY2ZHnRX/hetong1-(11).jpg',
          'https://i.postimg.cc/vmtQFcVw/hetong1-(13).jpg',
          'https://i.postimg.cc/25DzK4Vz/hetong1-(14).jpg',
          'https://i.postimg.cc/HL9pDVys/hetong1-(15).jpg',
          'https://i.postimg.cc/Jh51VGkb/hetong1-(16).jpg',
          'https://i.postimg.cc/Ls3HKn1P/hetong1-(17).jpg',
          'https://i.postimg.cc/KzcmZxP7/hetong1-(18).jpg',
          'https://i.postimg.cc/V67mvpgZ/hetong1-(21).jpg',
          'https://i.postimg.cc/Y2stHchG/hetong1-(22).jpg',
          'https://i.postimg.cc/44SXgCmn/hetong1-(23).jpg',
          'https://i.postimg.cc/hv6nbmHy/hetong1-(24).jpg',
          'https://i.postimg.cc/y6b7HqkT/hetong1-(25).jpg',
          'https://i.postimg.cc/PrvTf6wS/hetong1-(29).jpg',
          'https://i.postimg.cc/pTkX8pWw/hetong1-(3).jpg',
          'https://i.postimg.cc/RVJ4CPHP/hetong1-(31).jpg',
          'https://i.postimg.cc/nc9pVdD5/hetong1-(32).jpg',
          'https://i.postimg.cc/sgFyMpPz/hetong1-(33).jpg',
          'https://i.postimg.cc/8z8D7hdb/hetong1-(34).jpg',
          'https://i.postimg.cc/K8XF1n7m/hetong1-(35).jpg',
          'https://i.postimg.cc/mkDZSBhQ/hetong1-(4).jpg',
          'https://i.postimg.cc/J76zzDd7/hetong1-(7).jpg',
          'https://i.postimg.cc/cLYxhD18/hetong1-(8).jpg',
          'https://i.postimg.cc/GmYLKM3Q/hetong1-(9).jpg'
        ]
      },
      {
        title: '云隙气泡酒',
        images: [
          'https://i.postimg.cc/7hhNgJkF/13.jpg',
          'https://i.postimg.cc/FFCphpbt/14.jpg',
          'https://i.postimg.cc/Nfy4FXb0/15.jpg',
          'https://i.postimg.cc/ZK9cnNjF/16.jpg',
          'https://i.postimg.cc/qvyxXdP0/17.jpg',
          'https://i.postimg.cc/s2z9TNzJ/18.jpg'
        ]
      }
    ]
  },
  {
    id: '06',
    title: '品牌徽标与字体实验',
    category: '字体LOGO设计',
    date: '2024-2026',
    context: '为多个品牌与影视活动等提供的定制化中英文字体组合及标志设计。',
    features: [
      '中英文字体结构的定制化重塑与错位骨架设计',
      '结合品牌基因的图形化语言抽象与字体融合',
      '创作“搭戏台”、“莲花空行”、“特洛伊木马”等视觉超级符号'
    ],
    result: '将常规文字信息提炼升华为高强度的识别符号，强化品牌专属核心视觉记忆。',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2670&auto=format&fit=crop',
    galleryGroups: [
      {
        title: '字体',
        images: [
          'https://i.postimg.cc/HW8zs563/ge-ren-zuo-pin-ji-31.jpg',
          'https://i.postimg.cc/mZ93G4rF/ge-ren-zuo-pin-ji-38.jpg',
          'https://i.postimg.cc/WpZmPV4k/ge-ren-zuo-pin-ji-39.jpg',
          'https://i.postimg.cc/rs55G1b2/ge-ren-zuo-pin-ji-40.jpg',
          'https://i.postimg.cc/FFSbQvKH/ge-ren-zuo-pin-ji-41.jpg',
          'https://i.postimg.cc/X70fjPZP/ge-ren-zuo-pin-ji-42.jpg'
        ]
      },
      {
        title: 'logo',
        images: [
          'https://i.postimg.cc/jdQzLhPs/ge-ren-zuo-pin-ji-48.jpg',
          'https://i.postimg.cc/9FtGrBZ4/ge-ren-zuo-pin-ji-49.jpg',
          'https://i.postimg.cc/xTyKcPMK/ge-ren-zuo-pin-ji-50.jpg'
        ]
      }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: '品牌视觉系统(VI)',
    items: ['LOGO设计，标准色/字体规范', 'VI手册，基础延展（名片/手袋等）', '源码交付 + 规范PDF']
  },
  {
    title: '平面设计',
    items: ['海报 / 画册 / 折页 / 名片', '电商主图 / 详情页 / 店铺装修', '新媒体封面 (小红书/抖音/公众号)', '印刷对接与打样跟进']
  },
  {
    title: '空间与施工图',
    items: ['室内平面布局规划', 'CAD施工图（平面/立面/节点等）', '3DMAX效果图出具', '材料选型与预算协同']
  },
  {
    title: '活动与赛事统筹',
    items: ['主视觉设计及背景/道旗延展', '全套物料设计与生产跟进', '线上线下视觉一致性把控']
  },
  {
    title: '新媒体视觉优化',
    items: ['账号整体视觉定位', '内容视觉模板制作', '详情页转化导向设计']
  }
];

export const WORKFLOW: WorkflowStep[] = [
  { title: '需求沟通', desc: '了解品牌、目标、调性、预算' },
  { title: '创意提案', desc: '提供风格方向参考或初步草图' },
  { title: '设计执行', desc: '初稿 → 反馈 → 修改（2-3轮）' },
  { title: '落地支持', desc: '提供印刷/开发对接、文件整理交付' }
];

export const CONTACT_INFO = {
  phone: '1884-6555-728',
  email: '1433908358@qq.com',
  location: '河南省焦作市'
};

export const NAV_LINKS = [
  { label: '首页', href: '#home', en: 'HOME' },
  { label: '关于我', href: '#about', en: 'ABOUT' },
  { label: '作品集', href: '#portfolio', en: 'WORKS' },
  { label: '服务', href: '#services', en: 'SERVICES' },
  { label: '联系', href: '#contact', en: 'CONTACT' },
];
