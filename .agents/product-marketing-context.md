# Product Marketing Context

_Last updated: 2026-05-15_

## Product Overview

**One-liner:** Evidence Market 是一个由两套逻辑互补的市场组成的双引擎情报网络与去中心化犯罪证据市场。
**What it does:** 它包含 Evidence Blind Box (证据盲盒) 和 Bounty Token (悬赏令牌)。利用区块链、TEE 加密和零知识证明，让吹哨人安全变现敏感机密，并迫使作恶者为掩盖真相支付指数级代价；同时允许机构或个人悬赏征集线索。
**Product category:** Web3, Crypto, Whistleblower, Privacy, Decentralized Intelligence
**Product type:** DApp (去中心化应用), 双引擎去中心化市场
**Business model:** 核心代币经济模型（基于延迟披露溢价 Delay Premium）+ 悬赏资金池（支持 EMC, BTC, USDT 锁定）+ 隐私支付。

## Target Audience

**Target companies:** 金融市场套利者（做空机构等）、商业调研机构、Web3 项目方、执法机构与安全公司、维权群体。
**Decision-makers:** 机构负责人、项目安全主管、合规部门。
**Primary use case:**

- 吹哨人：在绝对隐身的前提下，将高价值犯罪证据通过 TEE 加密转化为盲盒出售，或通过悬赏令提供线索变现。
- 悬赏方：通过预先锁定资金池（Bounty）安全、去中心化地征集散落全球的情报。
- 掩盖方：支付指数级递增的保护费来换取证据暂不公开的缓冲时间。

**Jobs to be done:**

- 吹哨人：安全变现情报，消除身份暴露和被报复的风险。
- 买方/被曝光方：购买解密密钥并支付延迟费，暂缓丑闻曝光以争取时间。
- 悬赏方：发布透明的需求池，高效收集验证关键线索。

**Use cases:**

- 内部员工举报企业财务造假。
- 匿名黑客/线人提交犯罪组织记录获取赏金。
- Web3 项目悬赏追回被盗资金。

## Personas

| Persona                    | Cares about        | Challenge                                | Value we promise                                                   |
| -------------------------- | ------------------ | ---------------------------------------- | ------------------------------------------------------------------ |
| **吹哨人 (供给方)**        | 绝对隐身、变现回报 | 实名易遭报复，传统渠道无收益且有泄密风险 | Zcash 匿名支付、ERC2771 元交易代理、无服务器暴露风险，实现安全套利 |
| **掩盖方/作恶方 (买方)**   | 拖延曝光时间、止损 | 无法阻止爆料，丑闻带来毁灭性打击         | 通过支付延迟披露溢价 (Delay Premium) 短期止损买断时间              |
| **套利方/悬赏方 (需求方)** | 真实线索、情报质量 | 缺乏透明可信的情报收集渠道               | 链上锁定赏金，提供 1对多 悬赏机制和信誉背书                        |

## Problems & Pain Points

**Core problem:** 维护真相的成本高于掩盖谎言的成本——吹哨人风险极高且无收益，传统举报渠道存在单点信任故障与隐私泄露风险。
**Why alternatives fall short:**

- 传统举报通道：易暴露 IP/身份，易被内部人员干预、黑箱操作。
- WikiLeaks：无商业闭环，吹哨人缺乏经济激励。
  **What it costs them:** 真相永远被埋葬，犯罪者逃避制裁，受害者难以维权。
  **Emotional tension:** 良知与恐惧的撕裂，正义感无法敌过被报复的现实威胁；罪犯团伙内部的囚徒困境与不信任。

## Competitive Landscape

**Direct:** 小型匿名爆料 Web3 项目 — 往往缺乏完整的商业逻辑与买方博弈设计。
**Secondary:** WikiLeaks — 缺乏可持续的经济激励模型（仅有道德驱动）。
**Indirect:** 官方合规举报热线/SEC Whistleblower Program — 流程繁琐，存在跨境协作壁垒与隐私担忧。

## Differentiation

**Key differentiators:**

- **双引擎互补**：Evidence Blind Box (被动披露/先有证据) 与 Bounty Token (主动需求/先有需求)。
- **延迟披露溢价**：创新性的时间金融化，买方必须支付指数级递增的保护费。
- **必然公开趋向**：当费用耗尽，智能合约自动释放密钥，真相无法被永远买断。
- **极致隐私架构**：基于 Oasis Sapphire TEE 隐私计算 + Zcash 屏蔽池匿名支付 + ERC2771 中继代理元交易。

**How we do it differently:**
不依赖“人性本善”，而是利用极端的经济博弈（贪婪与恐惧），将真相变现转化为安全套利行为。

**Why that's better:**
打破了依赖中心化道德的僵局，用代码和密码学构建了一个冷酷但高效的正义机器。

**Why customers choose us:**
绝对安全、利益丰厚、规则透明且无法篡改。

## Objections

| Objection              | Response                                                                                            |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| **隐私会被追踪吗？**   | 引入 Zcash 屏蔽钱包支付与 ERC2771 中继交易，底层基于 Oasis Sapphire TEE，确保物理与链上的彻底绝缘。 |
| **凭什么有人买？**     | 作恶者为了争取转移资产的时间必须买，做空机构为了获利也会买。                                        |
| **发布者赖账怎么办？** | Bounty Token 通过智能合约预锁资金，若恶意拒付将导致声誉破产，失去市场准入。                         |

**Anti-persona:**
发送虚假信息的造谣者，无高价值信息的普通爆料人。

## Switching Dynamics

**Push:** 对传统社会机构黑箱操作的失望，对身份暴露的极度恐惧。
**Pull:** 去中心化的智能合约保障，以及可能获得的巨额 EMC、BTC、USDT 回报。
**Habit:** 习惯于向传统媒体匿名邮箱爆料。
**Anxiety:** Web3 钱包和 Zcash 支付的学习成本与使用门槛。

## Customer Language

**How they describe the problem:** “好人承担风险却赚不到钱，坏人轻易花钱掩盖一切。”
**How they describe us:** “去中心化情报网络”，“无法被关闭的真相盒子”。
**Words to use:** 延迟披露溢价、双引擎、Evidence Blind Box、Bounty Token、时间金融化、必然公开。
**Words to avoid:** （避免过度宣扬空洞的道德感，应强调冷酷的现实利益博弈）。
**Glossary:**
| Term | Meaning |
|------|---------|
| **Evidence Blind Box** | 证据盲盒。加密的敏感证据盲盒，通过 TEE 保护，底价加延迟费机制。 |
| **Bounty Token** | 悬赏令牌。需求方通过锁定资金发布的线索征集池。 |
| **Delay Premium** | 延迟披露溢价。作恶方为阻止证据曝光必须支付的指数级费用。 |
| **TEE** | 可信执行环境，保障智能合约和数据处理的隐私。 |

## Brand Voice

**Tone:** 冷峻、极客、现实主义、客观。
**Style:** 科技与暗黑森林法则的结合体。
**Personality:** 冷静的旁观者与规则制定者。

## Proof Points

**Value themes:**
| Theme | Proof |
|-------|-------|
| 隐私无懈可击 | Zcash 支付 + Sapphire TEE + ERC2771 中继代理的多重保护。 |
| 时间金融化 | 延迟费呈指数级增长，经济上注定了无人能永远买断真相。 |

## Goals

**Business goal:** 向目标群体（套利者、维权者等）推广 Evidence Market 的核心逻辑，吸引早期悬赏方与爆料者。
**Conversion action:** 引导阅读文档深入了解双引擎模型，体验测试网/主网。
