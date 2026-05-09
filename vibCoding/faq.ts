
export interface FAQItem {
  q: string
  a: string
  highlight?: boolean
}

export interface FAQCategory {
  category: string
  icon: string
  questions: FAQItem[]
}

export const faqTitle = '常见问题解答'
export const faqDescription = '关于匿名举报、收益分配和安全保障的一切疑问'

export const faqs: FAQCategory[] = [
  {
    category: '快速开始',
    icon: '🚀',
    questions: [
      {
        q: '我需要什么才能开始举报？',
        a: '只需要：1) 一个Web3钱包（如MetaMask）2) 犯罪证据 3) 5分钟时间。无需注册，无需身份验证。',
        highlight: true
      },
      {
        q: '什么样的证据最有价值？',
        a: '金融诈骗、政府腐败、企业违法的内部文件、录音、邮件、聊天记录等。涉案金额越大，价值越高。',
      },
      {
        q: 'WikiTruth和传统举报渠道有什么区别？',
        a: 'WikiTruth是纯粹的市场机制，不是政府机构。关键区别：1) 收益由市场供需决定，不是固定比例 2) Minter获得97%收益 3) 即时成交变现 4) 技术保障匿名 5) 全球24/7开放交易。',
        highlight: true
      },
    ],
  },
  {
    category: '安全与匿名',
    icon: '🛡️',
    questions: [
      {
        q: 'WikiTruth的安全技术架构是怎样的？',
        a: '我们采用三层安全架构：1) 数据层：AES+EDCH对称加密算法加密证据文件，上传至IPFS获得CID 2) 密钥层：解密私钥存储在Oasis Sapphire网络的Intel TEE硬件环境中 3) 交互层：通过EIP-712代理合约匿名交互，隔离地址关联。',
        highlight: true
      },
      {
        q: '我的身份会被暴露吗？',
        a: '绝对不会。即使是节点运营者也无法访问Intel TEE中的私钥，IPFS节点只能看到加密的CID数据，你的钱包地址通过代理层交互不留直接痕迹。',
        highlight: true
      },
      {
        q: '如果网站被关闭怎么办？',
        a: '不可能被关闭。前端部署在IPFS去中心化网络，后端运行在区块链上。即使我们的团队消失，系统仍会自动运行。',
      },
      {
        q: '我需要使用Tor或VPN吗？',
        a: '强烈建议使用。虽然我们的技术已经提供了强大保护，但额外的网络隐私层会让你更加安全。',
      },
      {
        q: '政府能强制你们交出我的信息吗？',
        a: '即使我们想配合也做不到。我们没有后门，没有主密钥。只有你的私钥才能解密证据。这就是"代码即法律"的力量。',
        highlight: true
      },
    ],
  },
  {
    category: '收益与交易',
    icon: '💰',
    questions: [
      {
        q: '我能获得多少收益？',
        a: 'WikiTruth是纯粹的市场机制，收益由两部分组成：1) Truth Box的销售价格（由市场供需决定）2) 买家支付的延迟披露费用。Minter最多可获得97%的总收益。',
        highlight: true
      },
      {
        q: '收益什么时候到账？',
        a: '一旦有人购买你的Truth Box，销售收益立即自动转入你的钱包。延迟披露费用也会实时分配。无需等待，无需申请。',
        highlight: true
      },
      {
        q: '如何为Truth Box定价？',
        a: '你可以自由设定初始价格。市场会告诉你定价是否合理 - 如果价格过高没人买，可以调整；如果很快被买走，说明可能定价偏低。',
      },
      {
        q: '什么是延迟披露费用？',
        a: '买家购买Truth Box后，可以支付递增的费用来延迟公开。这些费用的97%也会分配给你。费用呈指数增长，确保真相最终必然公开。',
        highlight: true
      },
      {
        q: '如果没人买我的证据怎么办？',
        a: '你可以调整价格策略，或者等待合适的买家。真正有价值的证据总会找到市场。我们也在开发悬赏功能，让需求方主动寻找特定证据。',
      },
      {
        q: '买家是谁？',
        a: '可能是执法机构、受害者、律师事务所、调查记者、竞争对手或任何需要证据的人。市场会自动匹配供需，你无需关心买家身份。',
      },
    ],
  },
  {
    category: '法律与合规',
    icon: '⚖️',
    questions: [
      {
        q: '这样做合法吗？',
        a: 'WikiTruth是一个中性的技术工具，就像BitTorrent或Tor。我们鼓励用户遵守当地法律，但代码本身是无需许可的。',
      },
      {
        q: '会不会被用于勒索？',
        a: '我们的"递增保密费"机制确保真相最终必然公开。这不是勒索，而是向邪恶征收"时间税"。数学上保证了正义的胜利。',
        highlight: true
      },
      {
        q: '如何防止虚假证据？',
        a: '1) 上传需要支付Gas费 2) 买家是最佳验证者 3) DAO社区投票机制 4) 未来将引入AI检测。造假成本远高于收益。',
      },
      {
        q: '我会承担法律风险吗？',
        a: '举报犯罪在大多数国家都受法律保护。但请咨询当地律师，了解你所在地区的具体法律。我们提供技术，你负责合规。',
      },
    ],
  },
  {
    category: '技术支持',
    icon: '🔧',
    questions: [
      {
        q: '我不懂区块链技术怎么办？',
        a: '不需要懂技术。我们的界面就像使用微信一样简单。连接钱包，上传文件，设置价格，就完成了。',
      },
      {
        q: '支持哪些文件格式？',
        a: '支持所有常见格式：文档(PDF, Word)、图片(JPG, PNG)、音频(MP3, WAV)、视频(MP4, AVI)等。单个文件最大100MB。',
      },
      {
        q: '如果我忘记了钱包密码怎么办？',
        a: '我们无法帮你恢复钱包。请务必备份好助记词。这是去中心化的代价，也是安全的保障。',
      },
      {
        q: '遇到技术问题怎么联系你们？',
        a: '访问我们的Discord社区或Telegram群组。社区成员和技术团队会24/7提供帮助。',
      },
    ],
  },
]

export const emergencyNotice = {
  title: '🚨 紧急情况处理',
  content: '如果你正面临生命威胁或紧急情况，请立即联系当地执法部门。WikiTruth是长期解决方案，不能替代紧急救援。',
  hotline: '全球紧急电话：911 (美国) | 110 (中国) | 112 (欧盟)'
}

export const faqCTA = {
  title: '还有疑问？',
  description: '加入我们的社区，与其他举报者交流经验',
  buttons: [
    { text: '加入Discord', link: 'https://discord.gg/wikitruth' },
    { text: '立即开始举报', link: 'https://app.wikitruth.eth.limo' }
  ]
}

