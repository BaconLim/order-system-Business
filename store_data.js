// 店家資料庫
// 如果要新增分店，請複製一整塊 'storeX': { ... }
// 如果要修改菜單，請直接改這裡的 menu 陣列

const DATABASES = {
    'default': {
        name: '千葉素食便當 (總店)',
        heroImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800&h=400',
        theme: {
            primary: '#06C755',
            bg: '#f3f4f6',
            cardBg: '#ffffff',
            text: '#1f2937',
            subText: '#6b7280',
            border: '#e5e7eb'
        },
        menu: [
            {
                id: 1, name: "白飯便當", category: "便當", image: "https://baconlim.github.io/order-system/千草木素食便當_白飯便當_1.jpg",
                options: [{ id: '1_80', label: '80元', price: 80 }, { id: '1_70', label: '70元', price: 70 }]
            },
            {
                id: 2, name: "五穀飯便當", category: "便當", image: "https://baconlim.github.io/order-system/千草木素食便當_五穀米便當_1.jpg",
                options: [{ id: '2_80', label: '80元', price: 80 }, { id: '2_70', label: '70元', price: 70 }]
            },
            { id: 8, name: "冰糖白木耳", price: 30, category: "甜點", image: "https://baconlim.github.io/order-system/千草木素食便當_冰糖白木耳.jpg" },
            { id: 11, name: "味噌湯", price: 30, category: "湯品", image: "https://baconlim.github.io/order-system/千草木素食便當_味噌湯.jpg" }
        ]
    },

    'wangfu': {
        name: '王府肉燥飯',
        heroImage: 'https://images.unsplash.com/photo-1594966776189-9b7639f72db7?auto=format&fit=crop&q=80&w=800',
        theme: {
            primary: '#06C755',
            bg: '#f3f4f6',
            cardBg: '#ffffff',
            text: '#1f2937',
            subText: '#6b7280',
            border: '#e5e7eb'
        },
        menu: [
            { id: 210, name: "超值套餐 (王府便當+暖心好湯)", price: 190, category: "套餐", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300" },
            { id: 211, name: "超級雙拼便當 (棒棒腿+腿庫)", price: 160, category: "便當", image: "https://images.unsplash.com/photo-1626202158826-621aa9626305?auto=format&fit=crop&q=80&w=300" },
            { id: 212, name: "醬滷帶骨大豬排便當", price: 150, category: "便當", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300" },
            { id: 213, name: "醬滷霸氣大雞腿便當", price: 150, category: "便當", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300" },
            { id: 214, name: "大滿足腿庫便當 (家常腿庫飯兩倍肉量)", price: 150, category: "便當", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300" },
            { id: 215, name: "味噌湯", price: 45, category: "湯品", image: "https://baconlim.github.io/order-system/千草木素食便當_味噌湯.jpg" },
            { id: 216, name: "貢丸湯", price: 45, category: "湯品", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=300" },
            { id: 217, name: "蘿蔔湯", price: 45, category: "湯品", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=300" },
            { id: 218, name: "可樂", price: 25, category: "飲料", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=300" },
            { id: 219, name: "雪碧", price: 25, category: "飲料", image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80&w=300" },
            { id: 220, name: "檸檬紅茶", price: 25, category: "飲料", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=300" },
            { id: 221, name: "蘋果汁", price: 25, category: "飲料", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=300" },
            { id: 222, name: "檸檬無糖氣泡水", price: 25, category: "飲料", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=300" }
        ]
    },
    'dorothy': {
        name: '桃樂絲手作便當',
        heroImage: 'https://images.unsplash.com/photo-1625937329388-75b252062f83?auto=format&fit=crop&q=80&w=800',
        theme: {
            primary: '#06C755',
            bg: '#f3f4f6',
            cardBg: '#ffffff',
            text: '#1f2937',
            subText: '#6b7280',
            border: '#e5e7eb'
        },
        menu: [
            { id: 301, name: "咖哩炸雞腿便當", price: 140, category: "便當", image: "https://images.unsplash.com/photo-1626202158826-621aa9626305?auto=format&fit=crop&q=80&w=300" },
            { id: 302, name: "虱目魚肚便當", price: 130, category: "便當", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300" },
            { id: 303, name: "咖哩明蝦便當", price: 130, category: "便當", image: "https://images.unsplash.com/photo-1594966776189-9b7639f72db7?auto=format&fit=crop&q=80&w=300" },
            { id: 304, name: "咖哩綜合便當", price: 130, category: "便當", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300" },
            { id: 305, name: "什錦便當", price: 125, category: "便當", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=300" },
            { id: 306, name: "無骨酥炸雞腿便當", price: 120, category: "便當", image: "https://images.unsplash.com/photo-1625937329388-75b252062f83?auto=format&fit=crop&q=80&w=300" },
            { id: 307, name: "三色便當", price: 115, category: "便當", image: "https://images.unsplash.com/photo-1573080496987-a221b069d2f2?auto=format&fit=crop&q=80&w=300" },
            { id: 308, name: "雞腿便當", price: 110, category: "便當", image: "https://images.unsplash.com/photo-1629858564039-b9034ce78ce8?auto=format&fit=crop&q=80&w=300" },
            { id: 309, name: "椒麻雞便當", price: 110, category: "便當", image: "https://images.unsplash.com/photo-1594966776189-9b7639f72db7?auto=format&fit=crop&q=80&w=300" },
            { id: 310, name: "滷/炸排骨便當", price: 100, category: "便當", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300" },
            { id: 311, name: "燒雞便當", price: 95, category: "便當", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300" },
            { id: 312, name: "黑胡椒豬肉便當", price: 90, category: "便當", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=300" },
            { id: 313, name: "咖哩魚排便當", price: 85, category: "便當", image: "https://images.unsplash.com/photo-1625937329388-75b252062f83?auto=format&fit=crop&q=80&w=300" },
            { id: 314, name: "咖哩豬排便當", price: 85, category: "便當", image: "https://images.unsplash.com/photo-1573080496987-a221b069d2f2?auto=format&fit=crop&q=80&w=300" },
            { id: 315, name: "咖哩田園便當", price: 85, category: "便當", image: "https://images.unsplash.com/photo-1629858564039-b9034ce78ce8?auto=format&fit=crop&q=80&w=300" },
            { id: 316, name: "燒肉便當", price: 80, category: "便當", image: "https://images.unsplash.com/photo-1594966776189-9b7639f72db7?auto=format&fit=crop&q=80&w=300" },
            { id: 317, name: "田園便當", price: 75, category: "便當", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300" },
            { id: 318, name: "咖哩雞塊便當", price: 70, category: "便當", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300" }
        ]
    },
    'burgerking': {
        name: '漢堡王',
        heroImage: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800',
        theme: {
            primary: '#D62300', // 紅色系
            bg: '#fdf2f2',
            cardBg: '#ffffff',
            text: '#1f2937',
            subText: '#6b7280',
            border: '#e5e7eb'
        },
        hours: { start: '09:00', end: '20:00' },
        menu: [
            { id: 401, name: "華堡", price: 150, category: "漢堡", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=300" },
            { id: 402, name: "小華堡", price: 100, category: "漢堡", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=300" },
            { id: 403, name: "薯條", price: 45, category: "點心", image: "https://images.unsplash.com/photo-1573080496987-a221b069d2f2?auto=format&fit=crop&q=80&w=300" }
        ]
    }
};
