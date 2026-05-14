// import type { LanguageItem } from "@/types/typesDapp/language";

export const content = {
    title: {
        en: 'Evidence Box Swap Demo',
        zh: '证据盒子流转演示',
        ko: '증거 상자 순환 데모'
    },
    viewer: {
        boxId: { en: 'Box ID:', zh: '盒子 ID:', ko: '상자 ID:' },
        whistleblower: { en: 'Whistleblower:', zh: '吹哨人:', ko: '내부고발자:' },
        creationTime: { en: 'Creation Time:', zh: '创建时间:', ko: '생성 시간:' },
        operationShadow: { en: 'Classified Evidence Box - Operation: Shadow', zh: '机密证据盒子 - 行动：暗影', ko: '기밀 증거 상자 - 작전명: 섀도우' },
        description: {
            en: 'This is a highly secretive black box, containing undeniable criminal evidence. Once the countdown reaches zero, the smart contract will automatically execute irreversible operations to make it public. Unless... The criminal is willing to sell all his assets, pay a high delay fee to cover up the truth.',
            zh: '这是一个高度机密的黑匣子，包含着不可否认的犯罪证据。一旦倒计时归零，智能合约将自动执行不可逆的操作将其公开。除非... 犯罪分子愿意变卖所有资产，支付高昂的延时费来掩盖真相。',
            ko: '이것은 부인할 수 없는 범죄 증거가 담긴 고도의 기밀 블랙박스입니다. 카운트다운이 0에 도달하면 스마트 계약은 이를 공개하기 위해 되돌릴 수 없는 작업을 자동으로 실행합니다. 범죄자가 진실을 은폐하기 위해 모든 자산을 매각하고 높은 지연 수수료를 지불할 의사가 없는 한 말이죠.'
        }
    },
    story: {
        storing: {
            title: { en: 'First Act: You are a brave whistleblower', zh: '第一幕：你是一名吹哨人', ko: '제1막: 당신은 내부고발자입니다.' },
            desc: {
                en: 'You holding a secret criminal evidence, and casting it into a Evidence Box. Now, it is securely stored on the blockchain, and you can choose to proceed:',
                zh: '你手握秘密犯罪证据，并将其投进证据盒子。现在，它已安全地存储在区块链上，接下来你可以选择：',
                ko: '당신은 범죄에 대한 비밀 증거를 가지고 있으며, 이를 증거함에 넣습니다. 이제 증거는 블록체인에 안전하게 저장되며, 당신은 다음 단계를 진행할지 선택할 수 있습니다.'
            }
        },
        selling: {
            title: { en: 'Second Act: Sell Evidence Box', zh: '第二幕：出售证据盒子', ko: '제2막: 증거 보관함 판매합니다' },
            desc: {
                en: 'You choose sell. The OpenClaw AI bot broadcast it to the entire network, black market buyer, intelligence agency, and even related criminals noticed this evidence. The first buyer to make an offer...',
                zh: '你选择了出售，OpenClaw AI 机器人全网广播，黑市买家、情报机构，相关的犯罪分子都注意到了它。买家正准备购买它...',
                ko: '판매를 선택하셨고, OpenClaw AI 봇이 인터넷에 해당 정보를 게시하여 암시장 구매자, 정보 기관 및 관련 범죄자들의 관심을 끌고 있습니다. 구매자가 구매를 준비 중입니다...'
            },
            status: { en: 'Listed at a fixed price of ', zh: '以固定价格挂牌：', ko: '고정 가격으로 등록됨: ' },
            waiting: { en: 'waiting for buyers...', zh: '等待买家中...', ko: '구매자 대기 중...' }
        },
        auctioning: {
            title: { en: 'Second Act: The Auction', zh: '第二幕：拍卖盒子', ko: '제2막: 경매' },
            desc: {
                en: 'You chosen to participate in the auction. Various parties begin bidding wildly, driving the price ever higher. Time is running out; the auction is about to end...',
                zh: '你选择了拍卖。各方势力开始疯狂加价，价格不断攀升。时间紧迫，拍卖即将结束...',
                ko: '경매에 참여하기로 결정하셨군요. 여러 사람들이 열띤 입찰 경쟁을 벌이며 가격은 계속해서 치솟습니다. 시간이 얼마 남지 않았습니다. 경매가 곧 종료될 예정입니다…'
            },
            bidding: { en: 'All kinds of black and gray industries are bidding...', zh: '各路黑灰产业正在竞价...', ko: '온갖 흑색 및 회색 산업이 입찰 중입니다...' }
        },
        paid: {
            title: { en: 'Third Act: The Transaction Completed', zh: '第三幕：交易完成', ko: '제3막: 거래 완료' },
            desc: {
                en: 'Ding! Your evidence box has been purchased by a mystery buyer. The payment is currently securely locked in a smart contract, awaiting the buyer  confirmation...',
                zh: '叮！你的证据盒子被一位神秘买家买走，支付款目前安全地锁定在智能合约中，等待买家进行确认...',
                ko: '딩! 귀하의 증거 보관함이 익명의 구매자에게 판매되었습니다. 결제 금액은 현재 스마트 계약에 안전하게 보관되어 있으며, 구매자의 확인을 기다리고 있습니다.'
            },
            completed: { en: 'Completed:', zh: '已完成：', ko: '완료됨:' },
            locked: { en: 'The buyer\'s funds are locked in the smart contract, waiting for extraction and confirmation...', zh: '买家资金已锁定在智能合约中，等待提取确认...', ko: '구매자의 자금이 스마트 계약에 잠겨 있으며 인출 및 확인을 기다리고 있습니다...' }
        },
        delaying: {
            title: { en: 'Fourth Act: The Buyer Confirmed, Crazy Renewal!', zh: '第四幕：买家确认，疯狂续费！', ko: '제4막: 구매자 확인, 미친 갱신!' },
            desc: {
                en: 'The buyer has confirmed receipt, and the transaction has been successfully executed! You have received your first basic reward. This buyer has started paying delay fees to extend the deadline for evidence release in order to postpone its publication. You will receive an additional bonus for each delay.',
                zh: '买家确认收货，交易成功执行！你收到了第一笔基础奖励。这个买家竟然为了推迟证据的公开，他开始支付延时费来延长证据的公开截止时间。每延迟一次，你都会获得额外奖金。',
                ko: '구매자가 수령을 확인했으며 거래가 성공적으로 완료되었습니다! 첫 번째 기본 보상을 받으셨습니다. 이 구매자는 증거 공개 기한 연장을 위해 지연 수수료를 지불하기 시작했으며, 이는 증거 공개를 연기하기 위한 것입니다. 지연이 발생할 때마다 추가 보너스를 받게 됩니다.'
            },
            paying: { en: 'The criminal is paying Delay Fee ...', zh: '买家正在支付延时费...', ko: '범죄자가 지연 수수료를 지불하고 있습니다...' },
            grossIncome: { en: 'Accumulated Gross Income:', zh: '累计总收入：', ko: '누적 총 수입:' }
        },
        published: {
            title: { en: 'Fifth Act: The Evidence is Public', zh: '第五幕：证据公开', ko: '제5막: 진실이 밝혀지다' },
            desc: {
                en: 'Finally, As delay fees escalated, the buyer became unable to pay, and the countdown reached zero. The smart contract automatically decrypted the evidence box. All encrypted criminal evidence was made public! The criminals were eventually arrested and brought to trial...',
                zh: '最终，随着延时费变得越来越高，买家已无力支付，倒计时归零。智能合约自动解密证据盒子。所有加密的犯罪证据都向世界公开！犯罪分子最终被逮捕并受审...',
                ko: '마침내 연체료가 눈덩이처럼 불어나면서 구매자는 대금을 지불할 수 없게 되었고, 카운트다운은 0에 도달했습니다. 스마트 계약은 자동으로 증거 상자를 해독했습니다. 암호화된 모든 범죄 증거가 공개되었습니다! 결국 범죄자들은 ​​체포되어 재판에 회부되었습니다...'
            }
        }
    },
    labels: {
        sell: { en: 'Sell', zh: '出售', ko: '판매' },
        auction: { en: 'Auction', zh: '拍卖', ko: '경매' },
        publish: { en: 'Publish', zh: '发布', ko: '게시' },
        restart: { en: 'Restart Story', zh: '重新开始故事', ko: '스토리 다시 시작' },
        rewardTitle: { en: 'Your total reward for this whistleblowing', zh: '你本次吹哨的总奖励', ko: '이 내부 고발에 대한 총 보상' },
        purchaseIncome: { en: 'Purchase Income', zh: '购买收入', ko: '구매 수입' },
        delayIncome: { en: 'Delay Income', zh: '延期收入', ko: '지연 수입' },
        serviceFee: { en: 'Service Fee (3%)', zh: '服务费 (3%)', ko: '서비스 수수료 (3%)' },
        netReward: { en: 'Total Net Reward', zh: '总计净奖励', ko: '총 순 보상' },
        sellInfo: { en: 'We sell this box for:', zh: '我们将此盒子出售为：', ko: '이 상자를 다음 가격으로 판매합니다:' },
        simulationMode: {
            title: { en: 'Storytelling Mode: ', zh: '故事模式：', ko: '스토리텔링 모드: ' },
            desc: {
                en: 'This is a simulated interactive demo. Clicking buttons advances the storyline, providing a simple demonstration of how Evidence Market works.',
                zh: '这是一个模拟交互演示。点击按钮推动故事情节发展，简单演示Evidence Market的运行流程。',
                ko: '이것은 시뮬레이션 기반의 인터랙티브 데모입니다. 버튼을 클릭하면 스토리가 진행되어 Evidence Market의 작동 방식을 간단하게 보여줍니다.'
            }
        }
    },
    flow: {
        storing: { en: 'Minted', zh: '已铸造', ko: '민팅됨' },
        selling: { en: 'Listed', zh: '已挂牌', ko: '리스팅됨' },
        auctioning: { en: 'Auctioning', zh: '拍卖中', ko: '경매 중' },
        paid: { en: 'Purchased', zh: '已购买', ko: '구매됨' },
        delaying: { en: 'Delaying', zh: '延期公开', ko: '공개 지연' },
        refunding: { en: 'Refunding', zh: '退款中', ko: '환불 중' },
        published: { en: 'Published', zh: '已公开', ko: '공개됨' },
    }
};

