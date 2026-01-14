
import { TrialTask } from './types';

export const TRIALS: TrialTask[] = [
  {
    id: 1, type: 'FOOD', objectCount: 5, dimensionCount: 3,
    instruction: "假设你最近家里的洗发水快用完了，你打算在网上买一袋补充装。你希望找一款价格不到50元、薄荷香味、2L超大容量的洗发水。",
    reminder: "洗发水，<50元，薄荷味，2L",
    products: [
       { id: 'd1_0', name: '清爽洗发水 A', price: 59.9, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200', summary: '超市热销款，全家适用。', attributes: [{ label: '香味', value: '柠檬' }, { label: '容量', value: '2L' },{ label: '价格', value: '59.9' }] },
      { id: 'd1_1', name: '清爽洗发水 B', price: 45.0, rating: 4.3, imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200', summary: '经典配方，柔顺亮泽。', attributes: [{ label: '香味', value: '薄荷' }, { label: '容量', value: '1L' },{ label: '价格', value: '45.0' }] },
      { id: 'd1_2', name: '清爽洗发水 C', price: 39.9, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200', summary: '深层清洁，酷爽体验。', attributes: [{ label: '香味', value: '薄荷' }, { label: '容量', value: '2L' },{ label: '价格', value: '39.9' }] },
      { id: 'd1_3', name: '清爽洗发水 D', price: 55.0, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200', summary: '草本精华，呵护头皮。', attributes: [{ label: '香味', value: '生姜' }, { label: '容量', value: '750ml' }, { label: '价格', value: '55.0' }] },
      { id: 'd1_4', name: '清爽洗发水 E', price: 49.9, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200', summary: '沙龙级品质。', attributes: [{ label: '香味', value: '无香' }, { label: '容量', value: '2L' }, { label: '价格', value: '49.9' }] }
    ]
  },
  {
    id: 2, type: 'DAILY', objectCount: 5, dimensionCount: 3,
    instruction: "假设你正打算买一箱洗衣液放在家里备用。你希望能选购一款价格在60元以内、具备专业除菌功能，并能在5日内送达的产品",
    reminder: "<60元，除菌，5日达。",
    products: [
      { id: 'd17_0', name: '洁净洗衣液 A', price: 65.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '强力去渍，呵护衣物。', attributes: [{ label: '功能', value: '含除菌' }, { label: '时效', value: '2天' }, { label: '价格', value: '65.0' }] },
      { id: 'd17_1', name: '洁净洗衣液 B', price: 58.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '清新花香，柔顺如新。', attributes: [{ label: '功能', value: '普通' }, { label: '时效', value: '3天' }, { label: '价格', value: '58.0' }] },
      { id: 'd17_2', name: '洁净洗衣液 C', price: 49.9, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '实惠之选，居家必备。', attributes: [{ label: '功能', value: '除螨' }, { label: '时效', value: '6天' }, { label: '价格', value: '49.9' }] },
      { id: 'd17_3', name: '洁净洗衣液 D', price: 72.0, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '亮白护色配方。', attributes: [{ label: '功能', value: '除菌' }, { label: '时效', value: '4天' }, { label: '价格', value: '72.0' }] },
      { id: 'd17_4', name: '洁净洗衣液 E', price: 48.0, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '自然洁净，安心之选。', attributes: [{ label: '功能', value: '含除菌' }, { label: '时效', value: '3天' }, { label: '价格', value: '48.0' }] }
    ]
  },
  {
    id: 3, type: 'DAILY', objectCount: 4, dimensionCount: 3,
    instruction: "假设你刚买新手机，想挑选一个耐用的手机壳。你希望这款壳子价格低于30元、材质必须是柔软的硅胶、用户评价里要明确提到无异味。",
    reminder: "手机壳，<30元，硅胶，无异味。",
    products: [
      { id: 'd2_0', name: '手机壳 A', price: 15.0, rating: 4.1, imageUrl: 'https://images.pexels.com/photos/14833708/pexels-photo-14833708.jpeg', summary: '极致轻薄。', attributes: [{ label: '材质', value: '硬塑料' }, { label: '评价', value: '无异味' }, { label: '单价', value: '15.0' }] },
      { id: 'd2_1', name: '手机壳 B', price: 19.9, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/14833708/pexels-photo-14833708.jpeg', summary: '手感舒适，全包防摔。', attributes: [{ label: '材质', value: '硅胶' }, { label: '评价', value: '无异味' }, { label: '单价', value: '19.9' }] },
      { id: 'd2_2', name: '手机壳 C', price: 35.0, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/14833708/pexels-photo-14833708.jpeg', summary: '真皮质感。', attributes: [{ label: '材质', value: '皮革' }, { label: '评价', value: '味道极重' }, { label: '单价', value: '35.0' }] },
      { id: 'd2_3', name: '手机壳 D', price: 28.0, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/14833708/pexels-photo-14833708.jpeg', summary: '透明防发黄。', attributes: [{ label: '材质', value: '硅胶' }, { label: '评价', value: '略有味道' },{ label: '单价', value: '28.0' }] }
    ]
  },
  {
    id: 4, type: 'DAILY', objectCount: 4, dimensionCount: 3,
    instruction: "假设你准备去超市买几罐午餐肉作为家里的常备存货。你希望选购一款淀粉含量较低、单价在30元以内、单罐净含量>340g的产品。",
    reminder: "午餐肉，低淀粉，<30元，单罐净含量>340g",
    products: [
      { id: 'd18_0', name: '经典午餐肉 A', price: 35.0, rating: 4.6, imageUrl: 'https://images.pexels.com/photos/5491290/pexels-photo-5491290.jpeg', summary: '高肉含量，真材实料。', attributes: [{ label: '淀粉', value: '极低' },  { label: '重量', value: '242g' }, { label: '价格', value: '35.0' }] },
      { id: 'd18_1', name: '经典午餐肉 B', price: 22.0, rating: 4.0, imageUrl: 'https://images.pexels.com/photos/5491290/pexels-photo-5491290.jpeg', summary: '实惠家庭装。', attributes: [{ label: '淀粉', value: '中等' },{ label: '重量', value: '198g' }, { label: '价格', value: '22.0' }] },
      { id: 'd18_2', name: '经典午餐肉 C', price: 29.0, rating: 4.3, imageUrl: 'https://images.pexels.com/photos/5491290/pexels-photo-5491290.jpeg', summary: '火锅必备。', attributes: [{ label: '淀粉', value: '低' }, { label: '重量', value: '349g' }, { label: '价格', value: '39.0' }] },
      { id: 'd18_3', name: '经典午餐肉 D', price: 25.0, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/5491290/pexels-photo-5491290.jpeg', summary: '肉质紧实，开盖即食。', attributes: [{ label: '淀粉', value: '极低' }, { label: '重量', value: '346g' }, { label: '价格', value: '25.0' }] }
    ]
  },
  {
    id: 5, type: 'DAILY', objectCount: 3, dimensionCount: 3,
    instruction: "假设你现在需要选购一袋抽纸巾放在办公室桌上。你只需要保证这款纸巾是完全无香味的，湿水不会皱且每包至少要有100抽。",
    reminder: "无香味，100抽/包，湿水不会皱",
    products: [
      { id: 'd4_0', name: '原生木浆抽纸 A', price: 15.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1610021684483-b06bf8ed5a41?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '便携装。', attributes: [{ label: '香味', value: '清香' }, { label: '规格', value: '40抽' }, { label: '是否湿水抗皱', value: '是' }] },
      { id: 'd4_1', name: '原生木浆抽纸 B', price: 18.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1610021684483-b06bf8ed5a41?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '薰衣草香。', attributes: [{ label: '香味', value: '花香' }, { label: '规格', value: '120抽' }, { label: '是否湿水抗皱', value: '是' }] },
      { id: 'd4_2', name: '原生木浆抽纸 C', price: 12.0, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1610021684483-b06bf8ed5a41?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '实惠之选。', attributes: [{ label: '香味', value: '无香味' }, { label: '规格', value: '80抽' }, { label: '是否湿水抗皱', value: '是' }] }
    ]
  },
  {
    id: 6, type: 'DAILY', objectCount: 3, dimensionCount: 3,
    instruction: "假设你需要买一盒酒精湿巾放在包里消毒。你只需要保证这款湿纸巾的酒精含量达到了有效的75%，且采用的是干净卫生的单片独立包装，价格在25元以下",
    reminder: "75%酒精，独立包装，价格低于25元",
    products: [
      { id: 'd20_0', name: '消毒湿巾 A', price: 12.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1734599397715-f030c6d206a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '温和不刺激。', attributes: [{ label: '酒精', value: '30%' }, { label: '包装', value: '独立包装' }] },
      { id: 'd20_1', name: '消毒湿巾 B', price: 15.8, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1734599397715-f030c6d206a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '有效杀菌，便携出行。', attributes: [{ label: '酒精', value: '75%' }, { label: '包装', value: '独立包装' }] },
      { id: 'd20_2', name: '消毒湿巾 C', price: 18.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1734599397715-f030c6d206a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '大桶分享。', attributes: [{ label: '酒精', value: '75%' }, { label: '包装', value: '抽取式' }] }
    ]
  },
  {
    id: 7, type: 'DAILY', objectCount: 2, dimensionCount: 3,
    instruction: "假设你打算买一个新的订书机放在书桌上。你希望能选购到一款商家直接赠送一整盒配套订书钉，且本身具备轻松按压的省力设计，价格低于20元的产品。",
    reminder: "送订书钉，省力设计，价格低于20元。",
    products: [
      { id: 'd8_0', name: '得力订书机 A', price: 12.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '小巧迷你型。', attributes: [{ label: '赠品', value: '无' }, { label: '功能', value: '省力50%' }] },
      { id: 'd8_1', name: '得力订书机 B', price: 15.0, rating: 4.7, imageUrl: 'https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', summary: '重型装订。', attributes: [{ label: '赠品', value: '送1000枚钉' }, { label: '功能', value: '省力50%' }] }
    ]
  },
  {
    id: 8, type: 'DAILY', objectCount: 2, dimensionCount: 3,
    instruction: "假设你需要买一盒电池给家里的遥控器用。你只需要保证它们是质量稳定的5号碱性电池，且每盒要是划算的10粒装，价格低于15元。",
    reminder: "5号碱性，10粒，价格低于25元。",
    products: [
       { id: 'd24_0', name: '南孚电池 A', price: 15.0, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/1084213/pexels-photo-1084213.jpeg', summary: '7号专属。', attributes: [{ label: '类型', value: '5号碱性' }, { label: '规格', value: '6粒装' }] },
      { id: 'd24_1', name: '南孚电池 B', price: 19.9, rating: 4.9, imageUrl: 'https://images.pexels.com/photos/1084213/pexels-photo-1084213.jpeg', summary: '聚能环，电量持久。', attributes: [{ label: '类型', value: '5号碱性' }, { label: '规格', value: '10粒装' }] }
    ]
  }
];
