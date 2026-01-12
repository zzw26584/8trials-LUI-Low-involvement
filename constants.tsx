
import { TrialTask } from './types';

export const TRIALS: TrialTask[] = [
  {
    id: 1, type: 'FOOD', objectCount: 5, dimensionCount: 3,
    instruction: "假设你想买一箱矿泉水放在家里或车里喝。你希望每瓶的容量在250ml以上、整箱买下来的总价格不要超过15元，且必须是天然的矿物质水。",
    reminder: ">250ml/瓶，<15元，矿物质水。",
    products: [
      { id: 'e1_1', name: '天然饮用水 A', price: 18.8, rating: 4.8, imageUrl: 'https://images.pexels.com/photos/2479095/pexels-photo-2479095.jpeg', summary: '天然水源，甘甜解渴。', attributes: [{ label: '容量', value: '250ml' }, { label: '水源', value: '矿物质水' }, { label: '整箱价', value: '18.8' }] },
      { id: 'e1_2', name: '天然饮用水 B', price: 25.5, rating: 4.7, imageUrl: 'https://images.pexels.com/photos/2479095/pexels-photo-2479095.jpeg', summary: '深度净化。', attributes: [{ label: '容量', value: '550ml' }, { label: '水源', value: '纯净水' }, { label: '整箱价', value: '25.5' }] },
      { id: 'e1_3', name: '天然饮用水 C', price: 12.0, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/2479095/pexels-photo-2479095.jpeg', summary: '便捷小瓶。', attributes: [{ label: '容量', value: '330ml' }, { label: '水源', value: '矿物质水' }, { label: '整箱价', value: '12.0' }] },
      { id: 'e1_4', name: '天然饮用水 D', price: 13.0, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/2479095/pexels-photo-2479095.jpeg', summary: '大容量分享。', attributes: [{ label: '容量', value: '250ml' }, { label: '水源', value: '山泉水' }, { label: '整箱价', value: '13.0' }] },
      { id: 'e1_5', name: '天然饮用水 E', price: 12.9, rating: 4.3, imageUrl: 'https://images.pexels.com/photos/2479095/pexels-photo-2479095.jpeg', summary: '弱碱性水。', attributes: [{ label: '容量', value: '250ml' }, { label: '水源', value: '矿物质水' }, { label: '整箱价', value: '12.9' }] }
    ]
  },
  {
    id: 2, type: 'DAILY', objectCount: 5, dimensionCount: 3,
    instruction: "假设你家里的垃圾袋用完了，你需要买一包新的。你希望这款垃圾袋带有方便拎走的抽绳封口、颜色是低调的黑色，且每包的数量要在150只以上。",
    reminder: "抽绳，黑色，>150只。",
    products: [
      { id: 'e2_1', name: '加厚垃圾袋 A', price: 9.9, rating: 4.0, imageUrl: 'https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg', summary: '常规平口型。', attributes: [{ label: '封口', value: '平口' }, { label: '颜色', value: '黑色' }, { label: '数量', value: '150只' }] },
      { id: 'e2_2', name: '加厚垃圾袋 B', price: 15.0, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg', summary: '色彩斑斓。', attributes: [{ label: '封口', value: '抽绳' }, { label: '颜色', value: '黑色' }, { label: '数量', value: '120只' }] },
      { id: 'e2_3', name: '加厚垃圾袋 C', price: 12.9, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg', summary: '承重力强，不脏手。', attributes: [{ label: '封口', value: '抽绳' }, { label: '颜色', value: '黑色' }, { label: '数量', value: '100只' }] },
      { id: 'e2_4', name: '加厚垃圾袋 D', price: 18.0, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg', summary: '商用超大号。', attributes: [{ label: '封口', value: '背心式' }, { label: '颜色', value: '黑色' }, { label: '数量', value: '160只' }] },
      { id: 'e2_5', name: '加厚垃圾袋 E', price: 11.5, rating: 4.1, imageUrl: 'https://images.pexels.com/photos/3962260/pexels-photo-3962260.jpeg', summary: '环保材质。', attributes: [{ label: '封口', value: '抽绳' }, { label: '颜色', value: '黑色' }, { label: '数量', value: '150只' }] }
    ]
  },
  {
    id: 3, type: 'DAILY', objectCount: 4, dimensionCount: 3,
    instruction: "假设你正想买一瓶好用的洗洁精。你特别希望它是果蔬可用，没有味道，还要是那种不伤手的温和配方。",
    reminder: "可洗果蔬，无味道，不伤手。",
    products: [
      { id: 'e3_1', name: '强力洗洁精 A', price: 12.0, rating: 4.2, imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200', summary: '去油王。', attributes: [{ label: '功能', value: '仅洗餐具' }, { label: '香味', value: '无香' }, { label: '配方', value: '中性不伤手' }] },
      { id: 'e3_2', name: '强力洗洁精 B', price: 18.0, rating: 4.4, imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200', summary: '柠檬清香。', attributes: [{ label: '功能', value: '仅洗餐具' }, { label: '香味', value: '柠檬味' }, { label: '配方', value: '普通' }] },
      { id: 'e3_3', name: '强力洗洁精 C', price: 22.0, rating: 4.5, imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200', summary: '高端有机。', attributes: [{ label: '功能', value: '果蔬可用' }, { label: '香味', value: '无香' }, { label: '配方', value: '中性不伤手' }] },
      { id: 'e3_4', name: '强力洗洁精 D', price: 15.9, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200', summary: '快速去油，易冲洗。', attributes: [{ label: '功能', value: '果蔬可用' }, { label: '香味', value: '无香' }, { label: '配方', value: '普通' }] }
    ]
  },
  {
    id: 4, type: 'DAILY', objectCount: 4, dimensionCount: 3,
    instruction: "假设你打算买一个放在浴室里的肥皂盒。你希望它带有专门的镂空沥水设计、采用吸盘固定不需要打孔，且颜色选定为富有生命力的彩色。",
    reminder: "带沥水，吸盘，彩色。",
    products: [
      { id: 'e4_1', name: '创意肥皂架 A', price: 8.8, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/7303928/pexels-photo-7303928.jpeg', summary: '不积水，肥皂更耐用。', attributes: [{ label: '结构', value: '双层沥水' }, { label: '安装', value: '强力吸盘' }, { label: '颜色', value: '透明' }] },
      { id: 'e4_2', name: '创意肥皂架 B', price: 12.0, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/7303928/pexels-photo-7303928.jpeg', summary: '壁挂大师。', attributes: [{ label: '结构', value: '无沥水' }, { label: '安装', value: '强力吸盘' }, { label: '颜色', value: '透明' }] },
      { id: 'e4_3', name: '创意肥皂架 C', price: 6.5, rating: 3.8, imageUrl: 'https://images.pexels.com/photos/7303928/pexels-photo-7303928.jpeg', summary: '简约放置。', attributes: [{ label: '结构', value: '单层沥水' }, { label: '安装', value: '强力吸盘' }, { label: '颜色', value: '彩色' }] },
      { id: 'e4_4', name: '创意肥皂架 D', price: 15.0, rating: 4.5, imageUrl: 'https://images.pexels.com/photos/7303928/pexels-photo-7303928.jpeg', summary: '不锈钢质感。', attributes: [{ label: '结构', value: '不锈钢镂空沥水' }, { label: '安装', value: '打孔式' }, { label: '颜色', value: '白色' }] }
    ]
  },
  {
    id: 5, type: 'DAILY', objectCount: 3, dimensionCount: 3,
    instruction: "假设你需要买一包新的厨房清洁海绵。你希望每包至少要包含15片海绵、只有单面，且必须具备极强的吸水能力。",
    reminder: "≥15片，单面，吸水强。",
    products: [
      { id: 'e5_1', name: '百洁布海绵 A', price: 8.0, rating: 4.1, imageUrl: 'https://images.pexels.com/photos/28576641/pexels-photo-28576641.jpeg', summary: '单面加厚。', attributes: [{ label: '数量', value: '20片' }, { label: '结构', value: '单面' }, { label: '功能', value: '高吸水' }] },
      { id: 'e5_2', name: '百洁布海绵 B', price: 5.5, rating: 4.2, imageUrl: 'https://images.pexels.com/photos/28576641/pexels-photo-28576641.jpeg', summary: '经典组合。', attributes: [{ label: '数量', value: '20片' }, { label: '结构', value: '双面' }, { label: '功能', value: '强力去油' }] },
      { id: 'e5_3', name: '百洁布海绵 C', price: 6.9, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/28576641/pexels-photo-28576641.jpeg', summary: '去污快，不伤锅。', attributes: [{ label: '数量', value: '15片' }, { label: '结构', value: '单面' }, { label: '功能', value: '强力去油' }] }
    ]
  },
  {
    id: 6, type: 'DAILY', objectCount: 3, dimensionCount: 3,
    instruction: "假设你担心机洗会坏掉娇贵的衣服，想买几个洗衣袋。你指定要那种细网眼材质的、最好是一次性能买到不同规格的三件套，且一定要包含一个超小号尺寸的袋子。",
    reminder: "细网，三件套，一定要包含小号。",
    products: [
      { id: 'e6_1', name: '护衣洗护袋 A', price: 10.0, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '粗网耐用。', attributes: [{ label: '网孔', value: '粗网' }, { label: '数量', value: '3件套' }, { label: '包含', value: '含大号' }] },
      { id: 'e6_2', name: '护衣洗护袋 B', price: 15.0, rating: 4.6, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '防止衣物缠绕。', attributes: [{ label: '网孔', value: '细网' }, { label: '数量', value: '3件套' }, { label: '包含', value: '含小号' }] },
      { id: 'e6_3', name: '护衣洗护袋 C', price: 8.0, rating: 3.9, imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=200', summary: '单件大号。', attributes: [{ label: '网孔', value: '细网' }, { label: '数量', value: '1件' }, { label: '包含', value: '仅小号' }] }
    ]
  },
  {
    id: 7, type: 'DAILY', objectCount: 2, dimensionCount: 3,
    instruction: "假设你准备去买一盒日常写字用的签字笔。你只需要保证笔尖是常用的0.5mm、墨水颜色是蓝色，且试用评价说书写感觉非常流畅即可。",
    reminder: "0.5mm，蓝色，流畅。",
    products: [
      { id: 'e7_1', name: '办公签字笔 A', price: 4.5, rating: 4.1, imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=200', summary: '极细绘图。', attributes: [{ label: '粗细', value: '0.5mm' }, { label: '颜色', value: '蓝色' }, { label: '书写评价', value: '略有阻力' }] },
      { id: 'e7_2', name: '办公签字笔 B', price: 3.5, rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=200', summary: '考试办公专用。', attributes: [{ label: '粗细', value: '0.5mm' }, { label: '颜色', value: '蓝色' }, { label: '书写评价', value: '非常流畅' }] }
    ]
  },
  {
    id: 8, type: 'DAILY', objectCount: 2, dimensionCount: 3,
    instruction: "假设你正想买一个橡皮擦。你希望这款橡皮擦在使用时不会碎屑满天飞（无屑型）、材质要是那种软软的质感，且颜色必须是干净的白色。",
    reminder: "无屑，软质感，白色。",
    products: [
      { id: 'e8_1', name: '橡皮 A', price: 2.0, rating: 4.4, imageUrl: 'https://images.pexels.com/photos/5705986/pexels-photo-5705986.jpeg', summary: '不伤纸。', attributes: [{ label: '类型', value: '无屑型' }, { label: '质地', value: '软' }, { label: '颜色', value: '白色' }] },
      { id: 'e8_2', name: '橡皮 B', price: 1.5, rating: 3.8, imageUrl: 'https://images.pexels.com/photos/5705986/pexels-photo-5705986.jpeg', summary: '多彩趣味。', attributes: [{ label: '类型', value: '无屑型' }, { label: '质地', value: '硬' }, { label: '颜色', value: '白色' }] }
    ]
  }
];
