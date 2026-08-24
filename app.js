(function(){
  "use strict";

  // 後端 API 的基準路徑。前端與後端同源部署（見 server.js 直接提供 public/ 靜態檔）時留空字串即可，
  // 若前端另外架設，改成完整網址，例如 'https://api.example.com'。這裡完全不含任何金鑰。
  var API_BASE = '';

  // Google 翻譯的連結，於首頁「Google 翻譯」卡片點擊後另開新分頁使用。
  var GOOGLE_TRANSLATE_URL = 'https://translate.google.com/';

  var TOPICS ={"travel": {"name": "出國旅遊", "icon": "✈️", "words": [{"en": "Plane", "zh": "飛機", "emoji": "✈️", "s1en": "Look at the plane in the sky!", "s1zh": "看天空中的那架飛機！", "s2en": "We fly on a big plane.", "s2zh": "我們乘坐大飛機飛行。"}, {"en": "Train", "zh": "火車", "emoji": "🚆", "s1en": "The fast train is coming.", "s1zh": "快速的火車進站了。", "s2en": "I like sitting by the train window.", "s2zh": "我喜歡坐在火車靠窗的位置。"}, {"en": "Car", "zh": "汽車", "emoji": "🚗", "s1en": "Dad drives a clean red car.", "s1zh": "爸爸開著一台乾淨的紅汽車。", "s2en": "Fasten your seatbelt in the car.", "s2zh": "在車上請繫好安全帶。"}, {"en": "Bus", "zh": "公車", "emoji": "🚌", "s1en": "Wait for the yellow bus here.", "s1zh": "在這裡等黃色公車。", "s2en": "Get on the bus one by one.", "s2zh": "一個接一個上公車。"}, {"en": "Taxi", "zh": "計程車", "emoji": "🚕", "s1en": "Call a taxi to the hotel.", "s1zh": "叫一台計程車去飯店。", "s2en": "The yellow taxi stops for us.", "s2zh": "黃色的計程車為我們停了下來。"}, {"en": "Ship", "zh": "輪船", "emoji": "🚢", "s1en": "The big ship floats on water.", "s1zh": "大輪船漂浮在水面上。", "s2en": "We see seagulls from the ship.", "s2zh": "我們從輪船上看到海鷗。"}, {"en": "Map", "zh": "地圖", "emoji": "🗺️", "s1en": "Look at the map to find the park.", "s1zh": "看地圖尋找公園。", "s2en": "Fold the map carefully.", "s2zh": "把地圖小心地折起來。"}, {"en": "Ticket", "zh": "車票", "emoji": "🎫", "s1en": "Show your ticket to the officer.", "s1zh": "向站務人員出示你的車票。", "s2en": "Keep your train ticket safe.", "s2zh": "把你的火車票保管好。"}, {"en": "Hotel", "zh": "旅館", "emoji": "🏨", "s1en": "Our hotel room is big and bright.", "s1zh": "我們的旅館房間大又明亮。", "s2en": "The hotel has a swimming pool.", "s2zh": "這家旅館有一個游泳池。"}, {"en": "Beach", "zh": "海灘", "emoji": "🏖️", "s1en": "Let us build a castle on the beach.", "s1zh": "我們去海灘上蓋城堡吧。", "s2en": "Walk on the sandy beach.", "s2zh": "在沙灘上散步。"}, {"en": "Sea", "zh": "大海", "emoji": "🌊", "s1en": "The blue sea looks wonderful.", "s1zh": "藍色的大海看起來真美。", "s2en": "Fish swim in the deep sea.", "s2zh": "魚兒在深海裡游泳。"}, {"en": "Island", "zh": "島嶼", "emoji": "🏝️", "s1en": "We take a boat to the island.", "s1zh": "我們搭船去那座島嶼。", "s2en": "The green island has palm trees.", "s2zh": "綠色的島嶼有椰子樹。"}, {"en": "Zoo", "zh": "動物園", "emoji": "🦁", "s1en": "We see pandas at the zoo.", "s1zh": "我們在動物園看到大熊貓。", "s2en": "Do not feed animals at the zoo.", "s2zh": "不要在動物園餵食動物。"}, {"en": "Camera", "zh": "相機", "emoji": "📷", "s1en": "Mom takes pictures with her camera.", "s1zh": "媽媽用她的相機拍照。", "s2en": "Hold the camera with both hands.", "s2zh": "用雙手拿好相機。"}, {"en": "Photo", "zh": "照片", "emoji": "🖼️", "s1en": "Smile for the family photo!", "s1zh": "拍全家福照片時請微笑！", "s2en": "Look at this nice vacation photo.", "s2zh": "看這張棒極了的假期照片。"}, {"en": "Passport", "zh": "護照", "emoji": "🛂", "s1en": "Show your passport at check-in.", "s1zh": "辦理登機時請出示護照。", "s2en": "Put your passport in your bag.", "s2zh": "把你的護照放進包包裡。"}, {"en": "Luggage", "zh": "行李", "emoji": "🧳", "s1en": "Pick up your heavy luggage.", "s1zh": "拿起你沉重的行李。", "s2en": "Tag your luggage with your name.", "s2zh": "在行李上記上你的名字。"}, {"en": "Station", "zh": "車站", "emoji": "🚉", "s1en": "Meet me at the train station.", "s1zh": "在火車站和我碰面。", "s2en": "The station is full of travelers.", "s2zh": "車站擠滿了旅客。"}, {"en": "Airport", "zh": "機場", "emoji": "🛫", "s1en": "We arrive at the airport early.", "s1zh": "我們很早到達機場。", "s2en": "Planes take off at the airport.", "s2zh": "飛機在機場起飛。"}, {"en": "Guide", "zh": "導遊", "emoji": "🧭", "s1en": "The tour guide leads the way.", "s1zh": "導遊在前面帶路。", "s2en": "Ask the guide any question.", "s2zh": "可以向導遊提任何問題。"}, {"en": "Trip", "zh": "旅行", "emoji": "🎒", "s1en": "Have a safe and happy trip!", "s1zh": "祝你有個安全愉快的旅行！", "s2en": "We planned a summer trip together.", "s2zh": "我們一起計畫了一次暑期旅行。"}, {"en": "Tour", "zh": "觀光", "emoji": "🚏", "s1en": "Join the city tour today.", "s1zh": "今天參加城市觀光行程吧。", "s2en": "The tour bus arrives on time.", "s2zh": "觀光巴士準時到達。"}, {"en": "City", "zh": "城市", "emoji": "🏙️", "s1en": "The big city has many tall buildings.", "s1zh": "大城市裡有許多高樓大廈。", "s2en": "Night lights make the city bright.", "s2zh": "夜晚的燈光讓城市明亮多彩。"}, {"en": "Town", "zh": "小鎮", "emoji": "🏘️", "s1en": "We visit a small mountain town.", "s1zh": "我們造訪了一個小山城。", "s2en": "People in this town are kind.", "s2zh": "這個小鎮的人們很親切。"}, {"en": "Road", "zh": "道路", "emoji": "🛣️", "s1en": "Look both ways before crossing the road.", "s1zh": "過馬路前請看左右兩邊。", "s2en": "Follow the straight road.", "s2zh": "沿著這條筆直的道路走。"}, {"en": "Street", "zh": "街道", "emoji": "🚦", "s1en": "The street is quiet in the morning.", "s1zh": "早晨的街道很安靜。", "s2en": "Shops line up along the street.", "s2zh": "街道兩旁排列著店家。"}, {"en": "Bridge", "zh": "橋樑", "emoji": "🌉", "s1en": "Cross the river over the bridge.", "s1zh": "走過橋樑穿過河流。", "s2en": "The long red bridge is famous.", "s2zh": "這座紅色的長橋很著名。"}, {"en": "River", "zh": "河流", "emoji": "🏞️", "s1en": "Ducks swim happily in the river.", "s1zh": "鴨子在河流裡開心悠游。", "s2en": "Clear water flows down the river.", "s2zh": "清澈的水沿著河流流淌。"}, {"en": "Mountain", "zh": "山脈", "emoji": "⛰️", "s1en": "Snow covers the high mountain.", "s1zh": "高山頂上覆蓋著白雪。", "s2en": "We climb the green mountain.", "s2zh": "我們攀登綠色的山脈。"}, {"en": "Hill", "zh": "小山丘", "emoji": "🌄", "s1en": "Roll down the grassy hill.", "s1zh": "在草地小山丘上滾下來。", "s2en": "The view from the hill is great.", "s2zh": "從小山丘看出去的景色太棒了。"}, {"en": "Sky", "zh": "天空", "emoji": "🌤️", "s1en": "White clouds float in the blue sky.", "s1zh": "白雲在藍色的天空中飄浮。", "s2en": "Birds soar high in the sky.", "s2zh": "鳥兒在天空高高飛翔。"}, {"en": "Cloud", "zh": "雲朵", "emoji": "☁️", "s1en": "That cloud looks like a big dog.", "s1zh": "那朵雲看起來像一隻大狗。", "s2en": "Dark clouds bring fresh rain.", "s2zh": "烏雲帶來新鮮的雨水。"}, {"en": "Air", "zh": "空氣", "emoji": "💨", "s1en": "The cool air feels great.", "s1zh": "涼爽的空氣感覺真好。", "s2en": "Fresh air is good for your lungs.", "s2zh": "新鮮空氣對你的肺部有益。"}, {"en": "Walk", "zh": "散步", "emoji": "🚶", "s1en": "Take a slow walk in the park.", "s1zh": "在公園裡慢慢散步。", "s2en": "I walk with my parents.", "s2zh": "我和父母一起散步。"}, {"en": "Fly", "zh": "飛行", "emoji": "🕊️", "s1en": "Kites fly high on windy days.", "s1zh": "有風的日子風箏飛得高高的。", "s2en": "Can you see the bird fly away?", "s2zh": "你能看到小鳥飛走了嗎？"}, {"en": "Swim", "zh": "游泳", "emoji": "🏊", "s1en": "Fish can swim very fast.", "s1zh": "魚兒可以游泳得很快。", "s2en": "Wear goggles when you swim.", "s2zh": "游泳時請戴上蛙鏡。"}, {"en": "Visit", "zh": "拜訪", "emoji": "🤝", "s1en": "We visit our grandparents in summer.", "s1zh": "夏天我們去拜訪祖父母。", "s2en": "Visit the toy museum today!", "s2zh": "今天去參觀玩具博物館吧！"}, {"en": "Enjoy", "zh": "享受", "emoji": "🎉", "s1en": "Enjoy your wonderful vacation!", "s1zh": "好好享受你美好的假期！", "s2en": "Enjoy the tasty local snacks.", "s2zh": "享受美味的在地小吃。"}, {"en": "Fun", "zh": "樂趣", "emoji": "🎈", "s1en": "Traveling with family is super fun.", "s1zh": "和家人一起旅行超級有趣。", "s2en": "Have fun at the playground!", "s2zh": "在遊樂場玩得開心！"}, {"en": "Gift", "zh": "禮物", "emoji": "🎁", "s1en": "Buy a sweet gift for your friend.", "s1zh": "為你的朋友買份甜美的禮物。", "s2en": "Wrap the gift with pretty paper.", "s2zh": "用漂亮的紙包裝禮物。"}, {"en": "Postcard", "zh": "明信片", "emoji": "📮", "s1en": "Send a postcard to your teacher.", "s1zh": "寄一張明信片給你的老師。", "s2en": "Write your address on the postcard.", "s2zh": "在明信片上寫下地址。"}, {"en": "Stamp", "zh": "郵票", "emoji": "🏷️", "s1en": "Stick a stamp on the corner.", "s1zh": "在角落貼上一張郵票。", "s2en": "This panda stamp looks super cute.", "s2zh": "這張貓熊郵票看起來超級可愛。"}, {"en": "Holiday", "zh": "假期", "emoji": "🌴", "s1en": "Summer holiday is coming soon!", "s1zh": "暑假快到了！", "s2en": "We rest and play on holiday.", "s2zh": "在假期裡我們休息和玩耍。"}, {"en": "Sunglasses", "zh": "太陽眼鏡", "emoji": "🕶️", "s1en": "Wear sunglasses to protect your eyes.", "s1zh": "戴太陽眼鏡保護你的眼睛。", "s2en": "Cool sunglasses fit you well.", "s2zh": "帥氣的太陽眼鏡很適合你。"}, {"en": "Umbrella", "zh": "雨傘", "emoji": "☂️", "s1en": "Open your umbrella when it rains.", "s1zh": "下雨時請撐開雨傘。", "s2en": "A yellow umbrella is easy to see.", "s2zh": "黃色雨傘很容易被看到。"}, {"en": "Memory", "zh": "回憶", "emoji": "📸", "s1en": "Keep a happy memory of this trip.", "s1zh": "留住這次旅行的快樂回憶。", "s2en": "Taking photos saves good memories.", "s2zh": "拍照可以留住美好的回憶。"}, {"en": "Lake", "zh": "湖泊", "emoji": "🛶", "s1en": "Boats sail smoothly on the lake.", "s1zh": "小船在湖泊上平穩航行。", "s2en": "The clean lake reflects the sky.", "s2zh": "清澈的湖泊倒映著天空。"}, {"en": "Suitcase", "zh": "旅行箱", "emoji": "🧳", "s1en": "Pack your clothes in the suitcase.", "s1zh": "把你的衣服裝進旅行箱。", "s2en": "Roll your suitcase smoothly.", "s2zh": "順暢地拉著你的旅行箱。"}, {"en": "Driver", "zh": "司機", "emoji": "🧑‍✈️", "s1en": "Say thank you to the bus driver.", "s1zh": "對公車司機說謝謝。", "s2en": "The driver stops at red lights.", "s2zh": "司機在紅燈時停下來。"}, {"en": "Flag", "zh": "旗幟", "emoji": "🚩", "s1en": "Look at the colorful flag flying.", "s1zh": "看那面飄揚的彩色旗幟。", "s2en": "Wave your small flag nicely.", "s2zh": "好好揮動你的小旗幟。"}]}, "life": {"name": "生活日常", "icon": "🏡", "words": [{"en": "Apple", "zh": "蘋果", "emoji": "🍎", "s1en": "I like to eat an apple.", "s1zh": "我喜歡吃蘋果。", "s2en": "An apple is red and round.", "s2zh": "蘋果是紅色又圓圓的。"}, {"en": "Banana", "zh": "香蕉", "emoji": "🍌", "s1en": "Monkeys love yellow bananas.", "s1zh": "猴子喜歡黃色的香蕉。", "s2en": "I eat a banana for breakfast.", "s2zh": "我早餐吃一根香蕉。"}, {"en": "Cat", "zh": "貓咪", "emoji": "🐱", "s1en": "The cute cat is sleeping.", "s1zh": "可愛的小貓在睡覺。", "s2en": "My cat can jump very high.", "s2zh": "我的貓咪可以跳很高。"}, {"en": "Dog", "zh": "狗狗", "emoji": "🐶", "s1en": "The friendly dog wags its tail.", "s1zh": "親切的狗狗搖著尾巴。", "s2en": "I play ball with my dog.", "s2zh": "我和我的狗狗一起玩球。"}, {"en": "Book", "zh": "書本", "emoji": "📕", "s1en": "Open your story book, please.", "s1zh": "請打開你的故事書。", "s2en": "This book has many pictures.", "s2zh": "這本書有很多圖片。"}, {"en": "Pencil", "zh": "鉛筆", "emoji": "✏️", "s1en": "I draw a sun with my pencil.", "s1zh": "我用鉛筆畫了一顆太陽。", "s2en": "Pick up your pencil, please.", "s2zh": "請撿起你的鉛筆。"}, {"en": "Eraser", "zh": "橡皮擦", "emoji": "🧼", "s1en": "Use an eraser to fix mistake.", "s1zh": "用橡皮擦修正錯誤。", "s2en": "My eraser is pink and small.", "s2zh": "我的橡皮擦是粉紅色而且小小的。"}, {"en": "Bag", "zh": "書包", "emoji": "🎒", "s1en": "Put the book in your bag.", "s1zh": "把書本放進你的書包裡。", "s2en": "My school bag is bright blue.", "s2zh": "我的書包是亮藍色的。"}, {"en": "Desk", "zh": "書桌", "emoji": "🪑", "s1en": "Clean your desk every day.", "s1zh": "每天要把你的書桌整理乾淨。", "s2en": "Sit nicely at your desk.", "s2zh": "在你的書桌前坐好。"}, {"en": "Bed", "zh": "床鋪", "emoji": "🛏️", "s1en": "I sleep on my soft bed.", "s1zh": "我睡在軟軟的床上。", "s2en": "Make your bed in the morning.", "s2zh": "早上要整理你的床鋪。"}, {"en": "Milk", "zh": "牛奶", "emoji": "🥛", "s1en": "I drink warm milk every morning.", "s1zh": "我每天早上喝溫牛奶。", "s2en": "Milk helps you grow strong.", "s2zh": "牛奶能幫你長得強壯。"}, {"en": "Box", "zh": "盒子", "emoji": "📦", "s1en": "Open the big toy box.", "s1zh": "打開那個大玩具箱。", "s2en": "What is inside this box?", "s2zh": "這個盒子裡面有什麼？"}, {"en": "Clock", "zh": "時鐘", "emoji": "🕐", "s1en": "The clock says eight o'clock.", "s1zh": "時鐘顯示八點鐘。", "s2en": "Look at the clock on the wall.", "s2zh": "看牆上的時鐘。"}, {"en": "Door", "zh": "門", "emoji": "🚪", "s1en": "Please close the room door.", "s1zh": "請把房間門關上。", "s2en": "Knock on the door first.", "s2zh": "請先敲敲門。"}, {"en": "Window", "zh": "窗戶", "emoji": "🪟", "s1en": "Open the window for fresh air.", "s1zh": "打開窗戶呼吸新鮮空氣。", "s2en": "I can see rain outside the window.", "s2zh": "我看到窗外在下雨。"}, {"en": "Sun", "zh": "太陽", "emoji": "☀️", "s1en": "The sun shines in the sky.", "s1zh": "太陽在天空閃耀。", "s2en": "We play in the warm sun.", "s2zh": "我們在溫暖的陽光下玩耍。"}, {"en": "Moon", "zh": "月亮", "emoji": "🌙", "s1en": "The bright moon shines at night.", "s1zh": "明亮的月亮在夜晚閃耀。", "s2en": "Look at the golden moon.", "s2zh": "看那顆金黃色的月亮。"}, {"en": "Star", "zh": "星星", "emoji": "⭐", "s1en": "I see many stars at night.", "s1zh": "我晚上看到許多星星。", "s2en": "Little star, twinkle bright.", "s2zh": "小星星，閃閃發亮。"}, {"en": "Tree", "zh": "大樹", "emoji": "🌳", "s1en": "Birds build homes in the tree.", "s1zh": "小鳥在大樹上築巢。", "s2en": "The big tree gives us shade.", "s2zh": "這棵大樹為我們遮蔭。"}, {"en": "Flower", "zh": "花朵", "emoji": "🌸", "s1en": "This pink flower smells sweet.", "s1zh": "這朵粉紅色的花聞起來很香。", "s2en": "Water the flower every day.", "s2zh": "每天給花朵澆水。"}, {"en": "Rain", "zh": "雨水", "emoji": "🌧️", "s1en": "Put on a raincoat for the rain.", "s1zh": "下雨天請穿上雨衣。", "s2en": "The rain waters the green grass.", "s2zh": "雨水滋潤了綠草。"}, {"en": "Wind", "zh": "風", "emoji": "🍃", "s1en": "The cool wind blows softly.", "s1zh": "涼爽的風吹過。", "s2en": "The wind moves the kites high.", "s2zh": "風把風箏吹得高高的。"}, {"en": "Shirt", "zh": "襯衫", "emoji": "👕", "s1en": "Wear a clean shirt today.", "s1zh": "今天穿乾淨的襯衫。", "s2en": "My white shirt has a red pocket.", "s2zh": "我的白襯衫有個紅口袋。"}, {"en": "Pants", "zh": "褲子", "emoji": "👖", "s1en": "Put on your comfortable pants.", "s1zh": "穿上你舒適的長褲。", "s2en": "Blue pants look great on you.", "s2zh": "藍色長褲穿在你身上真好看。"}, {"en": "Hat", "zh": "帽子", "emoji": "🧢", "s1en": "Wear a hat in the sun.", "s1zh": "大太陽下要戴帽子。", "s2en": "My red hat is cute.", "s2zh": "我的紅帽子很可愛。"}, {"en": "Shoe", "zh": "鞋子", "emoji": "👟", "s1en": "Tie your shoe laces well.", "s1zh": "把你的鞋帶綁好。", "s2en": "Put your shoes on the rack.", "s2zh": "把鞋子放在鞋架上。"}, {"en": "Sock", "zh": "襪子", "emoji": "🧦", "s1en": "Wear soft socks in winter.", "s1zh": "冬天穿上軟軟的襪子。", "s2en": "I have yellow socks.", "s2zh": "我有黃色的襪子。"}, {"en": "Hand", "zh": "手", "emoji": "✋", "s1en": "Wash your hands with soap.", "s1zh": "用肥皂洗你的雙手。", "s2en": "Raise your hand to speak.", "s2zh": "發言前請舉手。"}, {"en": "Foot", "zh": "腳", "emoji": "🦶", "s1en": "Stand on your right foot.", "s1zh": "用你的右腳站立。", "s2en": "Tap your feet to the music.", "s2zh": "隨著音樂拍拍腳。"}, {"en": "Head", "zh": "頭", "emoji": "🙂", "s1en": "Touch your head with your hand.", "s1zh": "用手摸摸你的頭。", "s2en": "Nod your head to say yes.", "s2zh": "點點頭表示同意。"}, {"en": "Eye", "zh": "眼睛", "emoji": "👁️", "s1en": "Close your eyes and sleep.", "s1zh": "閉上眼睛睡覺。", "s2en": "Look at me with bright eyes.", "s2zh": "用明亮頁眼睛看著我。"}, {"en": "Ear", "zh": "耳朵", "emoji": "👂", "s1en": "Rabbits have two long ears.", "s1zh": "兔子有兩隻長耳朵。", "s2en": "Listen carefully with your ears.", "s2zh": "用你的耳朵仔細聽。"}, {"en": "Mouth", "zh": "嘴巴", "emoji": "👄", "s1en": "Open your mouth and say Ah.", "s1zh": "張開嘴巴說「啊」。", "s2en": "Keep your mouth clean after eating.", "s2zh": "吃完東西後保持嘴巴乾淨。"}, {"en": "Face", "zh": "臉", "emoji": "😊", "s1en": "Wash your face every morning.", "s1zh": "每天早上洗洗臉。", "s2en": "She has a big smile on her face.", "s2zh": "她臉上帶著燦爛的笑容。"}, {"en": "Hair", "zh": "頭髮", "emoji": "💇", "s1en": "Brush your hair nicely.", "s1zh": "把你的頭髮梳理好。", "s2en": "My hair is black and short.", "s2zh": "我的頭髮是黑色的短髮。"}, {"en": "Home", "zh": "家", "emoji": "🏠", "s1en": "Welcome to my sweet home.", "s1zh": "歡迎來到我溫馨的家。", "s2en": "I stay home on rainy days.", "s2zh": "下雨天我待在家裡。"}, {"en": "Room", "zh": "房間", "emoji": "🛋️", "s1en": "Keep your room neat and tidy.", "s1zh": "保持你的房間乾淨整齊。", "s2en": "My room has a small window.", "s2zh": "我的房間有一扇小窗戶。"}, {"en": "Park", "zh": "公園", "emoji": "🌳", "s1en": "Let us go play at the park.", "s1zh": "我們去公園玩吧。", "s2en": "The park has a green lawn.", "s2zh": "公園有一片綠色的草坪。"}, {"en": "School", "zh": "學校", "emoji": "🏫", "s1en": "I walk to school with friends.", "s1zh": "我和朋友一起走路去學校。", "s2en": "My school is big and beautiful.", "s2zh": "我的學校又大又漂亮。"}, {"en": "Class", "zh": "班級", "emoji": "📚", "s1en": "Welcome to our English class.", "s1zh": "歡迎來到我們的英文課。", "s2en": "Everyone listens in class.", "s2zh": "大家在課堂上認真聽講。"}, {"en": "Friend", "zh": "朋友", "emoji": "🧑‍🤝‍🧑", "s1en": "You are my best friend.", "s1zh": "你是我最好的朋友。", "s2en": "Make new friends at school.", "s2zh": "在學校交新朋友。"}, {"en": "Brother", "zh": "兄弟", "emoji": "👦", "s1en": "My brother likes to play soccer.", "s1zh": "我的兄弟喜歡踢足球。", "s2en": "I share toys with my brother.", "s2zh": "我和我的兄弟分享玩具。"}, {"en": "Sister", "zh": "姐妹", "emoji": "👧", "s1en": "My sister sings very well.", "s1zh": "我姊姊/妹妹唱歌很好聽。", "s2en": "Help your sister with her bag.", "s2zh": "幫你的姊姊/妹妹拿書包。"}, {"en": "Baby", "zh": "寶寶", "emoji": "👶", "s1en": "The cute baby is sleeping soundly.", "s1zh": "可愛的寶寶睡得香甜。", "s2en": "Give the baby a soft rattle.", "s2zh": "給寶寶一個軟軟的搖鈴。"}, {"en": "Song", "zh": "歌曲", "emoji": "🎵", "s1en": "Let us sing an English song.", "s1zh": "我們來唱一首英文歌吧。", "s2en": "This song makes me happy.", "s2zh": "這首歌讓我很快樂。"}, {"en": "Toy", "zh": "玩具", "emoji": "🧸", "s1en": "Share your toys with friends.", "s1zh": "和朋友分享你的玩具。", "s2en": "Put the toys in the basket.", "s2zh": "把玩具放到籃子裡。"}, {"en": "Ball", "zh": "球", "emoji": "⚽", "s1en": "Kick the red ball to me.", "s1zh": "把紅色的球踢給我。", "s2en": "Catch the bouncing ball!", "s2zh": "接住這個會彈跳的球！"}, {"en": "Game", "zh": "遊戲", "emoji": "🎮", "s1en": "Let us play a fun game.", "s1zh": "我們來玩一個有趣的遊戲吧。", "s2en": "Playing games with friends is cool.", "s2zh": "和朋友一起玩遊戲真棒。"}, {"en": "Smile", "zh": "微笑", "emoji": "😊", "s1en": "Put a big smile on your face.", "s1zh": "臉上帶著燦爛的微笑。", "s2en": "Your smile lights up the room.", "s2zh": "你的微笑照亮了房間。"}, {"en": "Sleep", "zh": "睡覺", "emoji": "😴", "s1en": "Good night, time to sleep.", "s1zh": "晚安，該睡覺了。", "s2en": "I sleep eight hours every night.", "s2zh": "我每天晚上睡八個小時。"}]}, "food": {"name": "餐廳購物", "icon": "🍽️", "words": [{"en": "Menu", "zh": "菜單", "emoji": "📋", "s1en": "May I see the menu, please?", "s1zh": "請給我看菜單好嗎？", "s2en": "The menu has pizza and juice.", "s2zh": "菜單上有披薩和果汁。"}, {"en": "Table", "zh": "餐桌", "emoji": "🪑", "s1en": "A table for three, please.", "s1zh": "請給我三個人的座位。", "s2en": "Sit at the clean table.", "s2zh": "坐在這張乾淨的餐桌旁。"}, {"en": "Seat", "zh": "座位", "emoji": "💺", "s1en": "Please take a comfortable seat.", "s1zh": "請入座找個舒適的位置。", "s2en": "This seat is near the window.", "s2zh": "這個座位靠近窗戶。"}, {"en": "Water", "zh": "水", "emoji": "💧", "s1en": "Can I have some water, please?", "s1zh": "請給我一些開水好嗎？", "s2en": "Cold water is refreshing.", "s2zh": "冷水令人感到清涼。"}, {"en": "Glass", "zh": "玻璃杯", "emoji": "🥛", "s1en": "A glass of apple juice, please.", "s1zh": "請給我一杯蘋果汁。", "s2en": "Be careful with the glass.", "s2zh": "拿玻璃杯要小心。"}, {"en": "Cup", "zh": "杯子", "emoji": "☕", "s1en": "I want hot milk in a red cup.", "s1zh": "我想要紅杯子裝的熱牛奶。", "s2en": "Hold the cup with both hands.", "s2zh": "用雙手拿著杯子。"}, {"en": "Plate", "zh": "盤子", "emoji": "🍽️", "s1en": "Put the toast on the small plate.", "s1zh": "把吐司放到小盤子上。", "s2en": "The white plate is clean.", "s2zh": "這個白色盤子很乾淨。"}, {"en": "Bowl", "zh": "碗", "emoji": "🥣", "s1en": "I need a small bowl for soup.", "s1zh": "我需要一個喝湯的小碗。", "s2en": "The yellow bowl is full of rice.", "s2zh": "這個黃色碗裡裝滿了米飯。"}, {"en": "Spoon", "zh": "湯匙", "emoji": "🥄", "s1en": "Use a spoon to eat soup.", "s1zh": "用湯匙喝湯。", "s2en": "Scoop ice cream with a spoon.", "s2zh": "用湯匙舀冰淇淋。"}, {"en": "Fork", "zh": "叉子", "emoji": "🍴", "s1en": "I use a fork for my cake.", "s1zh": "我用叉子吃蛋糕。", "s2en": "Pick up noodles with a fork.", "s2zh": "用叉子吃麵條。"}, {"en": "Knife", "zh": "餐刀", "emoji": "🔪", "s1en": "Pass me the butter knife, please.", "s1zh": "請把奶油刀遞給我。", "s2en": "Cut the pancake with a knife.", "s2zh": "用餐刀切鬆餅。"}, {"en": "Napkin", "zh": "餐巾紙", "emoji": "🧻", "s1en": "Here is a napkin for your hands.", "s1zh": "這有一張餐巾紙擦手。", "s2en": "Wipe your mouth with a napkin.", "s2zh": "用餐巾紙擦擦嘴巴。"}, {"en": "Waiter", "zh": "服務生", "emoji": "🧑‍🍳", "s1en": "The friendly waiter takes our order.", "s1zh": "親切的服務生幫我們點餐。", "s2en": "Say thank you to the waiter.", "s2zh": "對服務生說謝謝。"}, {"en": "Order", "zh": "點餐", "emoji": "📝", "s1en": "We are ready to order now.", "s1zh": "我們現在準備好點餐了。", "s2en": "Can I order a cup of tea?", "s2zh": "我可以點一杯茶嗎？"}, {"en": "Food", "zh": "食物", "emoji": "🍱", "s1en": "The food smells very tasty.", "s1zh": "這食物聞起來真好吃。", "s2en": "Good food makes me happy.", "s2zh": "美味的食物讓我開心。"}, {"en": "Drink", "zh": "飲料", "emoji": "🥤", "s1en": "What drink would you like?", "s1zh": "你想要什麼飲料？", "s2en": "Drink your juice slowly.", "s2zh": "慢慢喝你的果汁。"}, {"en": "Coffee", "zh": "咖啡", "emoji": "☕", "s1en": "One cup of hot coffee, please.", "s1zh": "請給我一杯熱咖啡。", "s2en": "Coffee is for grown-ups.", "s2zh": "咖啡是大人喝的。"}, {"en": "Tea", "zh": "茶品", "emoji": "🍵", "s1en": "I want a cup of sweet iced tea.", "s1zh": "我想要一杯甜甜的冰紅茶。", "s2en": "Hot tea keeps you warm.", "s2zh": "熱茶讓你保持溫暖。"}, {"en": "Juice", "zh": "果汁", "emoji": "🧃", "s1en": "Fresh orange juice is sweet.", "s1zh": "新鮮的柳橙汁很甜。", "s2en": "I like apple juice best.", "s2zh": "我最喜歡蘋果汁。"}, {"en": "Soup", "zh": "湯品", "emoji": "🍲", "s1en": "The hot chicken soup is delicious.", "s1zh": "熱雞湯非常美味。", "s2en": "Drink warm soup on cold days.", "s2zh": "冷天喝溫熱的湯。"}, {"en": "Salad", "zh": "沙拉", "emoji": "🥗", "s1en": "A green salad, please.", "s1zh": "請給我一份蔬菜沙拉。", "s2en": "Veggie salad is very healthy.", "s2zh": "蔬菜沙拉非常健康。"}, {"en": "Pizza", "zh": "披薩", "emoji": "🍕", "s1en": "Can we order a cheese pizza?", "s1zh": "我們可以點一份起司披薩嗎？", "s2en": "I share pizza with friends.", "s2zh": "我和朋友分享披薩。"}, {"en": "Burger", "zh": "漢堡", "emoji": "🍔", "s1en": "I would like a small chicken burger.", "s1zh": "我想要一個小雞肉漢堡。", "s2en": "The big burger has cheese inside.", "s2zh": "這個大漢堡裡面有起司。"}, {"en": "Fries", "zh": "薯條", "emoji": "🍟", "s1en": "Yummy french fries are crispy.", "s1zh": "好吃的薯條很酥脆。", "s2en": "Dip the fries in tomato sauce.", "s2zh": "將薯條沾點番茄醬。"}, {"en": "Ice cream", "zh": "冰淇淋", "emoji": "🍦", "s1en": "I love vanilla ice cream.", "s1zh": "我喜歡香草冰淇淋。", "s2en": "Eat ice cream before it melts.", "s2zh": "在冰淇淋融化前吃掉它。"}, {"en": "Cake", "zh": "蛋糕", "emoji": "🍰", "s1en": "A slice of chocolate cake, please.", "s1zh": "請給我一片巧克力蛋糕。", "s2en": "Birthday cake tastes sweet.", "s2zh": "生日蛋糕嘗起來很甜。"}, {"en": "Cookie", "zh": "餅乾", "emoji": "🍪", "s1en": "Can I have one chocolate cookie?", "s1zh": "我可以吃一片巧克力餅乾嗎？", "s2en": "The cookie is sweet and crunchy.", "s2zh": "餅乾又甜又脆。"}, {"en": "Candy", "zh": "糖果", "emoji": "🍬", "s1en": "This strawberry candy tastes sweet.", "s1zh": "這個草莓糖果嘗起來甜甜的。", "s2en": "Do not eat too much candy.", "s2zh": "不要吃太多糖果。"}, {"en": "Chocolate", "zh": "巧克力", "emoji": "🍫", "s1en": "Dark chocolate is my favorite.", "s1zh": "黑巧克力是我的最愛。", "s2en": "Chocolate melts in your hand.", "s2zh": "巧克力會在你的手上融化。"}, {"en": "Fruit", "zh": "水果", "emoji": "🍇", "s1en": "We order a fresh fruit plate.", "s1zh": "我們點了一份新鮮水果盤。", "s2en": "Eat sweet fruit every day.", "s2zh": "每天吃甜甜的水果。"}, {"en": "Pie", "zh": "派", "emoji": "🥧", "s1en": "Warm apple pie smells good.", "s1zh": "溫熱的蘋果派聞起來好香。", "s2en": "Try a bite of pie!", "s2zh": "嚐一口派吧！"}, {"en": "Pancake", "zh": "鬆餅", "emoji": "🥞", "s1en": "I want sweet pancakes with honey.", "s1zh": "我想要加蜂蜜的甜鬆餅。", "s2en": "Pancakes are fluffy and soft.", "s2zh": "鬆餅蓬鬆又軟綿。"}, {"en": "Toast", "zh": "吐司", "emoji": "🍞", "s1en": "Butter toast is tasty for breakfast.", "s1zh": "奶油吐司當早餐很好吃。", "s2en": "Toast two slices of bread.", "s2zh": "烤兩片吐司麵包。"}, {"en": "Butter", "zh": "奶油", "emoji": "🧈", "s1en": "Spread some butter on the toast.", "s1zh": "在吐司上抹一些奶油。", "s2en": "Butter makes bread taste good.", "s2zh": "奶油讓麵包味道變好。"}, {"en": "Sugar", "zh": "糖", "emoji": "🧂", "s1en": "Add a little sugar to my milk.", "s1zh": "在我的牛奶裡加一點糖。", "s2en": "Sugar makes the tea sweet.", "s2zh": "糖讓茶變甜。"}, {"en": "Salt", "zh": "鹽", "emoji": "🧂", "s1en": "The soup needs a pinch of salt.", "s1zh": "這湯需要加少許鹽。", "s2en": "Pass the salt, please.", "s2zh": "請把鹽遞給我。"}, {"en": "Bill", "zh": "帳單", "emoji": "🧾", "s1en": "Check, please! Bring us the bill.", "s1zh": "結帳，請幫我們拿帳單。", "s2en": "Look at the bill before paying.", "s2zh": "付款前先看看帳單。"}, {"en": "Cash", "zh": "現金", "emoji": "💵", "s1en": "I will pay for the food with cash.", "s1zh": "我會用現金付餐費。", "s2en": "Keep your cash in the wallet.", "s2zh": "把你的現金放在皮夾裡。"}, {"en": "Card", "zh": "刷卡", "emoji": "💳", "s1en": "Do you take credit cards?", "s1zh": "你們接受信用卡嗎？", "s2en": "Tap your card to pay.", "s2zh": "感應你的卡片來付款。"}, {"en": "Money", "zh": "金錢", "emoji": "💰", "s1en": "Put your change money in the pouch.", "s1zh": "把找零的金錢放進零錢包。", "s2en": "Count your money carefully.", "s2zh": "仔細數數你的錢。"}, {"en": "Change", "zh": "找零", "emoji": "🪙", "s1en": "Here is your coin change, thank you.", "s1zh": "這是找給您的零錢，謝謝。", "s2en": "Keep the small coin change.", "s2zh": "收好找零的小硬幣。"}, {"en": "Receipt", "zh": "收據", "emoji": "🧾", "s1en": "Here is your receipt, keep it safe.", "s1zh": "這是您的收據，請妥善保管。", "s2en": "Keep your receipt for memory.", "s2zh": "保存好你的收據。"}, {"en": "Eat", "zh": "吃", "emoji": "😋", "s1en": "We eat our lunch slowly.", "s1zh": "我們慢慢地吃午餐。", "s2en": "Eat healthy food to grow tall.", "s2zh": "吃健康的食物長高。"}, {"en": "Taste", "zh": "品嚐", "emoji": "👅", "s1en": "Taste this yummy strawberry cake!", "s1zh": "品嚐看看這個好吃的草莓蛋糕！", "s2en": "The sweet soup tastes great.", "s2zh": "這甜湯品嚐起來很棒。"}, {"en": "Yummy", "zh": "好吃的", "emoji": "😋", "s1en": "This chocolate milk is very yummy.", "s1zh": "這杯巧克力牛奶非常好喝。", "s2en": "Yummy food makes me smile.", "s2zh": "美味的食物讓我露出笑容。"}, {"en": "Hungry", "zh": "肚子餓的", "emoji": "🤤", "s1en": "I am hungry, let us eat food!", "s1zh": "我肚子餓了，我們來吃東西吧！", "s2en": "Are you hungry for lunch?", "s2zh": "你肚子餓想要吃午餐嗎？"}, {"en": "Thirsty", "zh": "口渴的", "emoji": "🥤", "s1en": "I am thirsty, I need water.", "s1zh": "我口渴了，我需要喝水。", "s2en": "Drink water when you feel thirsty.", "s2zh": "覺得口渴時請喝水。"}, {"en": "Full", "zh": "飽的", "emoji": "🙂", "s1en": "I am full and happy now.", "s1zh": "我現在吃飽了，很開心。", "s2en": "My belly is completely full.", "s2zh": "我的肚子完全飽了。"}, {"en": "Bread", "zh": "麵包", "emoji": "🍞", "s1en": "Fresh bread is soft and warm.", "s1zh": "新鮮麵包好軟好溫暖。", "s2en": "Eat bread with sweet jam.", "s2zh": "吐司/麵包配甜果醬吃。"}, {"en": "Straw", "zh": "吸管", "emoji": "🥤", "s1en": "I need a straw for my juice.", "s1zh": "我喝果汁需要一支吸管。", "s2en": "Sip your drink with a straw.", "s2zh": "用吸管慢慢喝飲料。"}]}, "family": {"name": "與家人互動", "icon": "👨‍👩‍👧‍👦", "words": [{"en": "Mom", "zh": "媽媽", "emoji": "👩", "s1en": "Mom, good morning!", "s1zh": "媽媽，早安！", "s2en": "Mom, can you help me?", "s2zh": "媽媽，你可以幫我嗎？"}, {"en": "Dad", "zh": "爸爸", "emoji": "👨", "s1en": "Dad, look at my drawing!", "s1zh": "爸爸，看我的畫畫！", "s2en": "Dad, can we play together?", "s2zh": "爸爸，我們可以一起玩嗎？"}, {"en": "Brother", "zh": "兄弟/哥哥/弟弟", "emoji": "👦", "s1en": "Brother, please give me that toy.", "s1zh": "哥哥/弟弟，請把那個玩具給我。", "s2en": "Let's build a block castle, brother!", "s2zh": "我們一起用積木蓋城堡吧，兄弟！"}, {"en": "Sister", "zh": "姊妹/姊姊/妹妹", "emoji": "👧", "s1en": "Sister, do you want to read this book?", "s1zh": "姊姊/妹妹，你想看這本書嗎？", "s2en": "You look pretty today, sister.", "s2zh": "妳今天看起來好漂亮，姊姊/妹妹。"}, {"en": "Grandma", "zh": "奶奶/外婆", "emoji": "👵", "s1en": "Grandma, your soup is so delicious!", "s1zh": "奶奶，妳煮的湯好好喝！", "s2en": "Grandma, tell me a story, please.", "s2zh": "奶奶，請講個故事給我聽。"}, {"en": "Grandpa", "zh": "爺爺/外公", "emoji": "👴", "s1en": "Grandpa, let's take a walk outside.", "s1zh": "爺爺，我們去外面散步吧。", "s2en": "Thank you for the candy, Grandpa.", "s2zh": "謝謝爺爺給我的糖果。"}, {"en": "Family", "zh": "家庭/家人", "emoji": "👨‍👩‍👧‍👦", "s1en": "I love my family so much.", "s1zh": "我好愛我的家人。", "s2en": "Family time is the best time!", "s2zh": "家庭時光是最棒的時光！"}, {"en": "Love", "zh": "愛", "emoji": "❤️", "s1en": "Mom, I love you to the moon and back.", "s1zh": "媽媽，我愛你直到月亮再回來那麼多。", "s2en": "We share love in our house.", "s2zh": "我們在房子裡分享愛。"}, {"en": "Hug", "zh": "擁抱", "emoji": "🤗", "s1en": "Give me a big hug, Dad!", "s1zh": "給我一個大大的擁抱，爸爸！", "s2en": "A morning hug makes me happy.", "s2zh": "早安擁抱讓我好快樂。"}, {"en": "Kiss", "zh": "親吻", "emoji": "😘", "s1en": "Good night kiss for you.", "s1zh": "給你一個晚安親吻。", "s2en": "A goodbye kiss before school!", "s2zh": "上學前的道別親吻！"}, {"en": "Smile", "zh": "微笑", "emoji": "😊", "s1en": "Why are you smiling so happily?", "s1zh": "你為什麼笑得這麼開心？", "s2en": "Keep a big smile, Dad!", "s2zh": "保持大大的微笑，爸爸！"}, {"en": "Happy", "zh": "快樂的", "emoji": "😄", "s1en": "Today is a happy family day.", "s1zh": "今天是快樂的家庭日。", "s2en": "Are you happy today, sweetie?", "s2zh": "你今天過得快樂嗎，寶貝？"}, {"en": "Help", "zh": "幫忙", "emoji": "🤝", "s1en": "Let me help you set the table, Mom.", "s1zh": "讓我幫你擺餐桌吧，媽媽。", "s2en": "Can you help me carry this box?", "s2zh": "你可以幫我搬這個箱子嗎？"}, {"en": "Share", "zh": "分享", "emoji": "🍪", "s1en": "Do you want to share my cookie?", "s1zh": "你想分我的餅乾嗎？", "s2en": "Let's share our toys with each other.", "s2zh": "我們把玩具互相分享吧。"}, {"en": "Play", "zh": "玩耍", "emoji": "🧩", "s1en": "Can we play hide and seek?", "s1zh": "我們可以玩躲貓貓嗎？", "s2en": "Playing with my sister is fun.", "s2zh": "和妹妹一起玩很有趣。"}, {"en": "Talk", "zh": "聊天/交談", "emoji": "💬", "s1en": "Let's talk about your school day.", "s1zh": "我們來聊聊你在學校的一天吧。", "s2en": "Dad, let's talk before bedtime.", "s2zh": "爸爸，我們在睡前聊聊天吧。"}, {"en": "Listen", "zh": "聽", "emoji": "👂", "s1en": "Always listen to your parents.", "s1zh": "要聽爸爸媽媽的話喔。", "s2en": "Listen to the bird singing outside.", "s2zh": "聽聽外面小鳥的歌聲。"}, {"en": "Care", "zh": "關心/照顧", "emoji": "💗", "s1en": "Do you feel better now, Mom?", "s1zh": "媽媽，你現在覺得好一點了嗎？", "s2en": "Take good care of your little sister.", "s2zh": "要好好照顧小妹妹喔。"}, {"en": "Together", "zh": "在一起", "emoji": "🤝", "s1en": "We are watching a movie together.", "s1zh": "我們正在一起看電影。", "s2en": "Let's cook dinner together.", "s2zh": "我們一起煮晚餐吧。"}, {"en": "Home", "zh": "家", "emoji": "🏠", "s1en": "East or west, home is the best.", "s1zh": "東西南北，家最好。", "s2en": "Our home is warm and cozy.", "s2zh": "我們的家溫暖又舒適。"}, {"en": "Room", "zh": "房間", "emoji": "🛋️", "s1en": "Please clean up your room.", "s1zh": "請把你的房間打掃乾淨。", "s2en": "My room is full of nice toys.", "s2zh": "我的房間充滿了好玩的玩具。"}, {"en": "Bed", "zh": "床", "emoji": "🛏️", "s1en": "It's time to make your bed.", "s1zh": "該整理你的床鋪了。", "s2en": "My bed is soft and warm.", "s2zh": "我的床又軟又暖和。"}, {"en": "Toy", "zh": "玩具", "emoji": "🧸", "s1en": "Put your toys back in the box.", "s1zh": "把你的玩具放回箱子裡。", "s2en": "This is my favorite robot toy.", "s2zh": "這是我最喜歡的機器人玩具。"}, {"en": "Book", "zh": "書本", "emoji": "📕", "s1en": "Read this picture book to me, Dad.", "s1zh": "把這本繪本讀給我聽，爸爸。", "s2en": "I love reading books with Grandma.", "s2zh": "我喜歡跟奶奶一起看書。"}, {"en": "Story", "zh": "故事", "emoji": "📖", "s1en": "Tell me a bedtime story, Mom.", "s1zh": "講個睡前故事給我聽，媽媽。", "s2en": "That was a funny story!", "s2zh": "那是一個好笑的故事！"}, {"en": "Cook", "zh": "煮飯/烹調", "emoji": "🍳", "s1en": "What are you cooking, Mom?", "s1zh": "你在煮什麼，媽媽？", "s2en": "Dad can cook yummy noodles.", "s2zh": "爸爸會煮好吃的麵條。"}, {"en": "Eat", "zh": "吃", "emoji": "🍽️", "s1en": "Wash your hands before you eat.", "s1zh": "吃飯前先洗手。", "s2en": "Let's eat together, family!", "s2zh": "大家一起吃吧！"}, {"en": "Drink", "zh": "喝", "emoji": "🥤", "s1en": "Drink some warm milk before bed.", "s1zh": "睡前喝一點溫牛奶。", "s2en": "I want to drink fresh juice.", "s2zh": "我想喝新鮮果汁。"}, {"en": "Clean", "zh": "打掃/乾淨的", "emoji": "🧹", "s1en": "Keep our living room clean.", "s1zh": "保持我們客廳乾淨。", "s2en": "The table is clean now.", "s2zh": "桌子現在乾淨了。"}, {"en": "Wash", "zh": "洗", "emoji": "🧼", "s1en": "Wash your face, please.", "s1zh": "請洗臉。", "s2en": "Let me wash these small plates.", "s2zh": "讓我來洗這些小盤子。"}, {"en": "Morning", "zh": "早晨", "emoji": "🌅", "s1en": "Good morning, sun and family!", "s1zh": "早安，太陽與家人們！", "s2en": "Morning is a fresh start.", "s2zh": "早晨是一個全新的開始。"}, {"en": "Night", "zh": "夜晚", "emoji": "🌙", "s1en": "Look at the stars at night.", "s1zh": "看晚上的星星。", "s2en": "Good night, family members.", "s2zh": "晚安，家人們。"}, {"en": "Sleep", "zh": "睡覺", "emoji": "😴", "s1en": "It is time to go to sleep.", "s1zh": "該去睡覺囉。", "s2en": "Sleep tight, big brother.", "s2zh": "睡個好覺，哥哥。"}, {"en": "Wake", "zh": "醒來", "emoji": "⏰", "s1en": "Wake up, time for school!", "s1zh": "醒醒囉，上學時間到了！", "s2en": "Wake up, Dad, let's play!", "s2zh": "醒醒啦，爸爸，我們去玩！"}, {"en": "Please", "zh": "請", "emoji": "🙏", "s1en": "Please pass me the water.", "s1zh": "請把水遞給我。", "s2en": "Can you read this, please?", "s2zh": "請幫我讀這個好嗎？"}, {"en": "Thank", "zh": "謝謝", "emoji": "🙌", "s1en": "Thank you for the yummy lunch, Mom.", "s1zh": "謝謝媽媽準備的好吃午餐。", "s2en": "Thank you for fixing my toy, Dad.", "s2zh": "謝謝爸爸幫我修理玩具。"}, {"en": "Sorry", "zh": "對不起", "emoji": "😔", "s1en": "I am sorry I broke your cup.", "s1zh": "對不起，我打破了你的杯子。", "s2en": "Sorry for shouting just now.", "s2zh": "對不起，剛才對你大聲。"}, {"en": "Kind", "zh": "善良的/友善的", "emoji": "💞", "s1en": "Always be kind to your siblings.", "s1zh": "對兄弟姊妹要一直都很善良友善喔。", "s2en": "Grandma is so kind to everyone.", "s2zh": "奶奶對每個人都好善良。"}, {"en": "Good", "zh": "好的", "emoji": "👍", "s1en": "You did a good job today.", "s1zh": "你今天表現得很棒。", "s2en": "Have a good day at work, Dad.", "s2zh": "祝爸爸工作有美好的一天。"}, {"en": "Sweet", "zh": "甜蜜的/貼心的", "emoji": "🥰", "s1en": "You are a sweet sister.", "s1zh": "你是一個貼心的姊姊/妹妹。", "s2en": "What a sweet note you drew!", "s2zh": "你畫的卡片好貼心甜美！"}, {"en": "Proud", "zh": "引以為傲的", "emoji": "🌟", "s1en": "I am so proud of you, son.", "s1zh": "兒子，我為你感到好驕傲。", "s2en": "We are proud of your good grades.", "s2zh": "我們為你的好成績感到驕傲。"}, {"en": "Safe", "zh": "安全的", "emoji": "🛡️", "s1en": "Stay close to me to be safe.", "s1zh": "待在我旁邊才安全。", "s2en": "I feel safe at home with you.", "s2zh": "和你們在一起，我覺得在家裡好安全。"}, {"en": "Warm", "zh": "溫暖的", "emoji": "🧡", "s1en": "Your hug is so warm, Mom.", "s1zh": "你的擁抱好溫暖，媽媽。", "s2en": "The blanket keeps me warm at night.", "s2zh": "棉袋在晚上讓我保持溫暖。"}, {"en": "Fun", "zh": "有趣的", "emoji": "🎉", "s1en": "Board games with family are fun.", "s1zh": "和家人玩桌遊真有趣。", "s2en": "This is such a fun weekend.", "s2zh": "這個週末真有趣。"}, {"en": "Gift", "zh": "禮物", "emoji": "🎁", "s1en": "Is this gift for me, Grandma?", "s1zh": "這個禮物是給我的嗎，奶奶？", "s2en": "I want to make a handmade gift for Mom.", "s2zh": "我想親手做個禮物送給媽媽。"}, {"en": "Surprise", "zh": "驚喜", "emoji": "🎊", "s1en": "Close your eyes, I have a surprise!", "s1zh": "閉上眼睛，我有個驚喜！", "s2en": "Happy birthday! It's a surprise party!", "s2zh": "生日快樂！這是驚喜派對！"}, {"en": "Smile", "zh": "笑臉/微笑", "emoji": "😊", "s1en": "Your smile brightens my day, Mom.", "s1zh": "你的笑容點亮了我的一天，媽媽。", "s2en": "Let's draw a smiling face together.", "s2zh": "我們一起畫一個笑臉吧。"}, {"en": "Heart", "zh": "心", "emoji": "💖", "s1en": "You are always in my heart, Grandma.", "s1zh": "你永遠在我心裡，奶奶。", "s2en": "I drew a big red heart for Dad.", "s2zh": "我為爸爸畫了一個大紅心。"}, {"en": "Peace", "zh": "平靜/和平", "emoji": "🕊️", "s1en": "Peace in the family is wonderful.", "s1zh": "家庭和睦真是太棒了。", "s2en": "Let's keep our home quiet and peaceful.", "s2zh": "讓我們保持家裡安靜又平靜。"}, {"en": "Forever", "zh": "永遠", "emoji": "♾️", "s1en": "I will love my family forever.", "s1zh": "我會永遠愛我的家人。", "s2en": "Best friends forever, me and my brother.", "s2zh": "永遠的好朋友，我和我哥哥/弟弟。"}]}, "emergency": {"name": "緊急求助", "icon": "🚨", "words": [{"en": "Help", "zh": "求助", "emoji": "🆘", "s1en": "Help! I need help here!", "s1zh": "救命！我這裡需要幫忙！", "s2en": "Ask the teacher for help.", "s2zh": "向老師尋求協助。"}, {"en": "Police", "zh": "警察", "emoji": "👮", "s1en": "Call the police, please!", "s1zh": "請幫忙叫警察！", "s2en": "The police officer helps people.", "s2zh": "警察叔叔會幫助大家。"}, {"en": "Fire", "zh": "火災", "emoji": "🔥", "s1en": "Fire! Call for emergency now!", "s1zh": "火災！快點打電話報警救援！", "s2en": "Stay away from big fire.", "s2zh": "遠離可怕的大火。"}, {"en": "Doctor", "zh": "醫生", "emoji": "🩺", "s1en": "I need to see a doctor quickly.", "s1zh": "我需要儘快看醫生。", "s2en": "The doctor checks your health.", "s2zh": "醫生會檢查你的健康狀況。"}, {"en": "Nurse", "zh": "護士", "emoji": "👩‍⚕️", "s1en": "The nurse will check your hand.", "s1zh": "護士會檢查你的手。", "s2en": "A kind nurse helps you feel better.", "s2zh": "親切的護士讓你感覺舒服些。"}, {"en": "Hurt", "zh": "受傷", "emoji": "🤕", "s1en": "Ouch, my leg hurts!", "s1zh": "哎呀，我的腳受傷好痛！", "s2en": "Tell mom if you get hurt.", "s2zh": "如果你受傷了要告訴媽媽。"}, {"en": "Lost", "zh": "迷路", "emoji": "🥺", "s1en": "I am lost, where is my mom?", "s1zh": "我迷路了，我媽媽在哪裡？", "s2en": "Stay put if you are lost.", "s2zh": "如果迷路了請留在原地。"}, {"en": "Danger", "zh": "危險", "emoji": "⚠️", "s1en": "Stop! That place is danger.", "s1zh": "停下來！那個地方很危險。", "s2en": "Be careful of traffic danger.", "s2zh": "小心交通危險。"}, {"en": "Safe", "zh": "安全", "emoji": "✅", "s1en": "Stay inside, you are safe here.", "s1zh": "待在裡面，你在這裡很安全。", "s2en": "Hold hands to stay safe.", "s2zh": "牽著手保持安全。"}, {"en": "Stop", "zh": "停止", "emoji": "🛑", "s1en": "Stop right there, don't run!", "s1zh": "就停在那裡，不要跑！", "s2en": "Red light means stop.", "s2zh": "紅燈代表要停下來。"}]}};
  var TOPIC_ORDER = ['life','travel','food','family','emergency'];
  var TOPIC_COLOR = {
    life:'#fdecd8', travel:'#dcf2ee', food:'#fdf2cf', family:'#e6e2fb', emergency:'#fbe2de'
  };
  var TOPIC_DESC = {
    life:'居家、學校、生活用品',
    travel:'交通、景點、旅遊必備',
    food:'點餐、付款、美食用語',
    family:'關心問候、家人互動用語',
    emergency:'求救、危險、安全用語'
  };
  var state = {
    stack:[],
    current:'home',
    topicKey:'travel',
    wordIndex:15,
    speakSentIndex:0,
    wordFilter:'all',
    learned:{},
    recording:false,
    lastFlow:'unit', // 'unit' or 'direct'
    fontSize:'large',
    speechRate:'normal',
    voiceGender:'female' // 'female' | 'male' — 對應雲端 TTS 的女聲／男聲
  };

  var $ = function(sel){ return document.querySelector(sel); };
  var screens = document.querySelectorAll('.screen');
  var tabbar = $('#tabbar');
  var screenShell = document.querySelector('.screen-shell');

  function render(id){
    screens.forEach(function(s){ s.classList.toggle('active', s.dataset.screen === id); });
    state.current = id;
    var tabScreens = ['home','topics','progress','community'];
    tabbar.style.display = tabScreens.indexOf(id) > -1 ? 'flex' : 'none';
    var tabMap = {home:'home', topics:'topics', progress:'progress', community:'community'};
    document.querySelectorAll('.tabbar button[data-tab]').forEach(function(b){
      b.classList.toggle('tab-active', b.dataset.tab === tabMap[id]);
    });
    var activeScreen = document.querySelector('.screen.active');
    if(activeScreen) activeScreen.scrollTop = 0;
  }

  window.go = function(id){
    state.stack.push(state.current);
    render(id);
  };
  window.back = function(){
    var prev = state.stack.pop() || 'home';
    render(prev);
  };
  window.switchTab = function(id){
    state.stack = [];
    render(id);
  };

  // 首頁「Google 翻譯」卡片：直接在新分頁開啟 Google 翻譯。
  window.openGoogleTranslate = function(){
    window.open(GOOGLE_TRANSLATE_URL, '_blank', 'noopener');
  };

  window.resetProto = function(){
    state.stack = [];
    state.topicKey = 'travel'; state.wordIndex = 15; state.speakSentIndex = 0; state.wordFilter = 'all';
    state.learned = {};
    communityQueryIndex = 0;
    closePlayer(); closeShareSheet(); closeSettingsSheet();
    renderTopics();
    loadCommunityVideos();
    refreshProgress();
    render('home');
    toast('已重新開始體驗');
  };

  // ---- toast ----
  var toastTimer;
  window.toast = function(msg){
    var el = $('#toastEl');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ el.classList.remove('show'); }, 1900);
  };
  window.comingSoon = function(name){
    toast('「' + name + '」情境即將推出，敬請期待！');
  };

  // ---- settings: font size + speech rate ----
  // 「大」「特大」的放大倍率調高：手機上就算選到最大字級，文字也要真正明顯變大，
  // 不能只比原本大一點點（原本 xlarge 只比預設大 16%，長輩反應還是偏小）。
  var FONT_SCALE = { small:0.87, large:1.12, xlarge:1.4 };
  var RATE_VALUE = { slow:0.6, normal:0.85, fast:1.0 };

  window.setFontSize = function(val){
    state.fontSize = val;
    screenShell.style.setProperty('--fs', FONT_SCALE[val]);
    document.querySelectorAll('#fontSizeSeg button').forEach(function(b){
      b.classList.toggle('seg-active', b.dataset.val === val);
    });
  };
  window.setSpeechRate = function(val){
    state.speechRate = val;
    document.querySelectorAll('#speechRateSeg button').forEach(function(b){
      b.classList.toggle('seg-active', b.dataset.val === val);
    });
  };
  window.setVoiceGender = function(val){
    state.voiceGender = val;
    document.querySelectorAll('#voiceGenderSeg button').forEach(function(b){
      b.classList.toggle('seg-active', b.dataset.val === val);
    });
  };
  window.openSettingsSheet = function(){
    $('#settingsBackdrop').classList.add('show');
    $('#settingsSheet').classList.add('show');
  };
  window.closeSettingsSheet = function(){
    $('#settingsBackdrop').classList.remove('show');
    $('#settingsSheet').classList.remove('show');
  };

  // ---- speech synthesis：雲端高品質 TTS（優先，串接 /api/tts 後端代理）＋瀏覽器內建語音（備援） ----
  // 金鑰只存在後端；前端一律只呼叫 /api/tts，並在後端回傳「尚未設定金鑰」時，
  // 自動退回瀏覽器內建的 Web Speech API，確保整個 App 沒有雲端金鑰也能正常展示。
  var voices = [];
  function loadVoices(){ voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : []; }
  if(window.speechSynthesis){
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function pickVoice(accent){
    var wantLang = accent === 'GB' ? 'en-GB' : accent === 'ZH' ? 'zh-TW' : 'en-US';
    var exact = voices.filter(function(v){ return v.lang === wantLang; });
    if(exact.length) return exact[0];
    var prefix = accent === 'ZH' ? 'zh' : 'en';
    var loose = voices.filter(function(v){ return v.lang && v.lang.indexOf(prefix) === 0; });
    return loose[0] || null;
  }
  // 瀏覽器內建語音合成，僅在雲端語音金鑰未設定或雲端請求失敗時，作為最後備援使用。
  // onDone 會在「這句話真正念完」時才被呼叫一次（含播放失敗時），讓呼叫端的畫面狀態
  // （例如喇叭按鈕的『播放中』外觀）能準確反映實際播放進度，而不是用猜測的固定時間。
  function speakBrowserFallback(text, accent, onDone){
    if(!window.speechSynthesis){ toast('此瀏覽器不支援語音播放'); if(onDone) onDone(); return; }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    var v = pickVoice(accent);
    if(v) u.voice = v;
    if(accent === 'ZH'){
      // 中文鼓勵語維持原本較溫和、稍慢一點的語氣，不受「例句語速」設定影響。
      u.lang = 'zh-TW';
      u.rate = 0.95;
      u.pitch = 1.05;
    } else {
      u.lang = accent === 'GB' ? 'en-GB' : 'en-US';
      u.rate = RATE_VALUE[state.speechRate] || 0.85;
      u.pitch = 1.0;
    }
    var done = false;
    var finish = function(){ if(done) return; done = true; if(onDone) onDone(); };
    u.onend = finish;
    u.onerror = finish;
    window.speechSynthesis.speak(u);
  }

  var ttsAudioEl = new Audio();
  var ttsWarnedMock = false;
  var speakToken = 0; // 避免非同步回應互相覆蓋：快速連續點喇叭時，只播放最後一次請求的語音

  // text 要念的內容；accent 為 'US' / 'GB' / 'ZH'（'ZH' 專供中文鼓勵語使用）；
  // onDone（選用）會在語音「實際播放完畢」時才被呼叫一次 —— 無論走的是雲端音檔的
  // ended 事件、還是瀏覽器內建語音的 onend 事件，都不再用固定計時器去猜測播放時間，
  // 避免畫面狀態（例如喇叭按鈕的『播放中』外觀）在聲音實際念完之前就提早顯示成完成。
  // rateKeyOverride（選用）可覆蓋語速設定，中文鼓勵語固定用 'normal'，不受例句語速影響。
  function speak(text, accent, onDone, rateKeyOverride){
    accent = accent === 'GB' ? 'GB' : accent === 'ZH' ? 'ZH' : 'US';
    var myToken = ++speakToken;
    if(window.speechSynthesis) window.speechSynthesis.cancel();
    ttsAudioEl.pause();
    ttsAudioEl.onended = null;
    ttsAudioEl.onerror = null;

    fetch(API_BASE + '/api/tts', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ text:text, accent:accent, gender:state.voiceGender, rateKey:rateKeyOverride || state.speechRate })
    }).then(function(resp){
      if(myToken !== speakToken) return null;
      var ct = resp.headers.get('Content-Type') || '';
      if(ct.indexOf('audio') === 0){
        return resp.blob().then(function(blob){
          if(myToken !== speakToken) return;
          var url = URL.createObjectURL(blob);
          ttsAudioEl.src = url;
          var cleaned = false;
          var cleanup = function(){ if(cleaned) return; cleaned = true; URL.revokeObjectURL(url); };
          ttsAudioEl.onended = function(){ cleanup(); if(onDone) onDone(); };
          ttsAudioEl.onerror = function(){ cleanup(); speakBrowserFallback(text, accent, onDone); };
          ttsAudioEl.play().catch(function(){ cleanup(); speakBrowserFallback(text, accent, onDone); });
        });
      }
      // 未設定雲端 TTS 金鑰時，後端會回傳 JSON { mock:true }，改用瀏覽器內建語音示範。
      return resp.json().then(function(){
        if(myToken !== speakToken) return;
        if(!ttsWarnedMock){ ttsWarnedMock = true; toast('尚未設定雲端語音金鑰，先使用系統內建語音示範'); }
        speakBrowserFallback(text, accent, onDone);
      });
    }).catch(function(){
      if(myToken !== speakToken) return;
      // 連不到後端（例如離線瀏覽本原型）→ 同樣退回瀏覽器內建語音，確保功能不中斷。
      speakBrowserFallback(text, accent, onDone);
    });
  }

  function starsSvg(n, total){
    total = total || 3;
    var out = '';
    for(var i=0;i<total;i++){
      out += '<svg viewBox="0 0 24 24" class="' + (i<n?'':'off') + '" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7L12 2Z"/></svg>';
    }
    return out;
  }
  var chevronSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
  var checkSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M4 12l5 5 11-11"/></svg>';
  var speakerSvgSm = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/></svg>';

  // ---- learned tracking ----
  function wordKey(topicKey, idx){ return topicKey + '::' + idx; }
  function isLearned(topicKey, idx){ return !!state.learned[wordKey(topicKey, idx)]; }
  function setLearned(topicKey, idx, val){
    var k = wordKey(topicKey, idx);
    if(val) state.learned[k] = true; else delete state.learned[k];
  }
  function topicLearnedCount(topicKey){
    var n = 0, total = TOPICS[topicKey].words.length;
    for(var i=0;i<total;i++){ if(isLearned(topicKey, i)) n++; }
    return n;
  }
  function totalLearnedCount(){
    var n = 0;
    TOPIC_ORDER.forEach(function(k){ n += topicLearnedCount(k); });
    return n;
  }
  function totalWordCount(){
    var n = 0;
    TOPIC_ORDER.forEach(function(k){ n += TOPICS[k].words.length; });
    return n;
  }

  // ---- TOPICS screen ----
  function renderTopics(){
    var wrap = $('#topicGroups');
    wrap.innerHTML = '';
    TOPIC_ORDER.forEach(function(key){
      var t = TOPICS[key];
      var learned = topicLearnedCount(key);
      var row = document.createElement('div');
      row.className = 'topic-row';
      row.innerHTML =
        '<div class="emoji-badge" style="background:' + TOPIC_COLOR[key] + '">' + t.icon + '</div>' +
        '<div class="tr-txt"><b>' + t.name + '</b><span>共 ' + t.words.length + ' 個單字・已學會 ' + learned + ' 個</span></div>' +
        '<div class="chev">' + chevronSvg + '</div>';
      row.onclick = function(){ openTopic(key); };
      wrap.appendChild(row);
    });
  }

  window.openTopic = function(key){
    state.topicKey = key;
    state.wordFilter = 'all';
    renderWordList();
    go('wordlist');
  };

  // ---- WORD LIST screen ----
  var FILTERS = [ {key:'all', label:'全部'}, {key:'unlearned', label:'未學會'}, {key:'learned', label:'已學會'} ];
  function renderWordFilterRow(){
    var row = $('#wordFilterRow');
    row.innerHTML = '';
    FILTERS.forEach(function(f){
      var b = document.createElement('button');
      b.className = 'pill' + (state.wordFilter === f.key ? ' pill-active' : '');
      b.textContent = f.label;
      b.onclick = function(){
        state.wordFilter = f.key;
        renderWordList();
      };
      row.appendChild(b);
    });
  }
  function renderWordList(){
    var t = TOPICS[state.topicKey];
    $('#wordlistTitle').textContent = t.icon + ' ' + t.name;
    renderWordFilterRow();
    var body = $('#wordListBody');
    body.innerHTML = '';
    t.words.forEach(function(w, idx){
      var learned = isLearned(state.topicKey, idx);
      if(state.wordFilter === 'learned' && !learned) return;
      if(state.wordFilter === 'unlearned' && learned) return;
      var card = document.createElement('div');
      card.className = 'unit-card';
      card.innerHTML =
        (learned ? '<div class="unit-done">' + checkSvg + '已學會</div>' : '') +
        '<div class="unit-icon">' + w.emoji + '</div>' +
        '<div class="unit-body"><b>' + w.en + '<span class="zh-inline">' + w.zh + '</span></b></div>' +
        '<button class="head-icon-btn row-speaker">' + speakerSvgSm + '</button>';
      card.querySelector('.row-speaker').onclick = function(e){
        e.stopPropagation();
        speak(w.en, 'US');
      };
      card.onclick = function(){ openWordDetail(idx); };
      body.appendChild(card);
    });
    if(!body.children.length){
      body.innerHTML = '<div style="text-align:center; padding:40px 10px; color:var(--ink-faint); font-size:13.5px;">這個分類目前沒有符合的單字</div>';
    }
  }

  function openWordDetail(idx){
    state.wordIndex = idx;
    renderWordDetail();
    go('vocab');
  }

  // ---- WORD DETAIL (flashcard + inline sentences) ----
  function currentTopic(){ return TOPICS[state.topicKey]; }
  function currentWord(){ return currentTopic().words[state.wordIndex]; }

  function renderWordDetail(){
    var t = currentTopic();
    var w = currentWord();
    $('#vocabCounter').textContent = (state.wordIndex + 1) + ' / ' + t.words.length;
    $('#vocabEmoji').textContent = w.emoji;
    $('#vocabEn').textContent = w.en;
    $('#vocabZh').textContent = w.zh;
    $('#vocabPrev').disabled = state.wordIndex === 0;
    $('#vocabNext').disabled = state.wordIndex === t.words.length - 1;

    var learned = isLearned(state.topicKey, state.wordIndex);
    setLearnedUI(learned);

    var sc = $('#wordSentences');
    sc.innerHTML =
      sentenceCardHtml(1, w.s1en, w.s1zh) +
      sentenceCardHtml(2, w.s2en, w.s2zh);
    sc.querySelectorAll('.speaker-chip').forEach(function(chip){
      chip.onclick = function(e){
        var accent = chip.dataset.accent;
        var text = chip.dataset.text;
        document.querySelectorAll('#wordSentences .speaker-chip').forEach(function(c){ c.classList.remove('playing'); });
        chip.classList.add('playing');
        // 「播放中」外觀等語音真正念完才會消失，不再用固定 900ms 計時器猜測時間。
        speak(text, accent, function(){ chip.classList.remove('playing'); });
      };
    });
  }
  function sentenceCardHtml(n, en, zh){
    return '' +
      '<div class="sentence-card">' +
        '<span class="tag">例句 ' + n + '</span>' +
        '<div class="sentence-en">' + en + '</div>' +
        '<div class="sentence-zh">' + zh + '</div>' +
        '<div class="sentence-speakers">' +
          '<button class="speaker-chip" data-accent="US" data-text="' + en.replace(/"/g,'&quot;') + '">' + speakerSvgSm + '美式發音</button>' +
          '<button class="speaker-chip" data-accent="GB" data-text="' + en.replace(/"/g,'&quot;') + '">' + speakerSvgSm + '英式發音</button>' +
        '</div>' +
      '</div>';
  }
  function setLearnedUI(on){
    $('#learnedBtn').classList.toggle('on', on);
    $('#learnedBtn').innerHTML = on
      ? checkSvg + '已加入單字本 ✓'
      : checkSvg + '我已學會';
    $('#likeBtn').classList.toggle('liked', on);
  }
  window.toggleLearned = function(){
    var on = !isLearned(state.topicKey, state.wordIndex);
    setLearned(state.topicKey, state.wordIndex, on);
    setLearnedUI(on);
    if(on) toast('已加入我的單字本 📖');
    renderTopics();
    refreshProgress();
  };
  window.speakVocab = function(accent, e){
    e.stopPropagation();
    var chips = document.querySelectorAll('.accent-btn');
    chips.forEach(function(c){ c.classList.remove('playing'); });
    var btn = e.currentTarget; // 先存起來，非同步回呼觸發時原生事件的 currentTarget 已經是 null
    btn.classList.add('playing');
    // 「播放中」外觀等語音真正念完才會消失，不再用固定 900ms 計時器猜測時間。
    speak(currentWord().en, accent, function(){ btn.classList.remove('playing'); });
  };
  window.vocabStep = function(dir){
    var t = currentTopic();
    var next = state.wordIndex + dir;
    if(next < 0 || next > t.words.length - 1) return;
    state.wordIndex = next;
    renderWordDetail();
  };

  // ---- SPEAK (AI practice) ----
  function currentSentence(){
    var w = currentWord();
    return state.speakSentIndex === 0
      ? {en:w.s1en, zh:w.s1zh}
      : {en:w.s2en, zh:w.s2zh};
  }
  function renderSpeak(){
    var s = currentSentence();
    $('#speakCounter').textContent = (state.speakSentIndex + 1) + '/2';
    $('#speakEn').textContent = s.en;
    $('#speakZh').textContent = s.zh;
    $('#micStatus').textContent = '點麥克風開始錄音，AI 會給你鼓勵喔';
    $('#micBtn').classList.remove('recording');
    var chips = document.querySelectorAll('#speakAccentRow .accent-btn');
    chips.forEach(function(c){ c.classList.remove('playing'); });
  }
  // 讓長輩可以在開口練習前，先分別聽聽同一句話的美式與英式發音，方便比較差異。
  window.speakPromptAccent = function(accent, e){
    if(e) e.stopPropagation();
    var chips = document.querySelectorAll('#speakAccentRow .accent-btn');
    chips.forEach(function(c){ c.classList.remove('playing'); });
    var btn = e && e.currentTarget; // 先存起來，非同步回呼觸發時原生事件的 currentTarget 已經是 null
    if(btn) btn.classList.add('playing');
    // 「播放中」外觀等語音真正念完才會消失，不再用固定 900ms 計時器猜測時間。
    speak(currentSentence().en, accent, function(){ if(btn) btn.classList.remove('playing'); });
  };
  window.startWordSpeak = function(){
    state.speakSentIndex = 0;
    state.lastFlow = 'unit';
    renderSpeak();
    go('speak');
  };
  window.enterSpeakDirect = function(){
    state.topicKey = 'travel';
    state.wordIndex = 15; // Passport
    state.speakSentIndex = 0;
    state.lastFlow = 'direct';
    state.stack = ['home'];
    renderSpeak();
    render('speak');
  };

  // ---- 錄音與 AI 發音評分：真實麥克風錄音（MediaRecorder）＋ /api/pronunciation/assess ----
  // 沒有麥克風權限、瀏覽器不支援錄音、或後端無法連線時，優雅退回原本的「示範錄音」體驗，
  // 確保長輩在任何情況下都能繼續使用這個功能，而不會卡住或報錯。
  var mediaRecorder = null;
  var mediaChunks = [];
  var micStream = null;
  var micWarnedMock = false;

  function stopMicStream(){
    if(micStream){
      micStream.getTracks().forEach(function(t){ t.stop(); });
      micStream = null;
    }
  }
  function pickRecorderMime(){
    var candidates = ['audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/mp4'];
    for(var i=0;i<candidates.length;i++){
      if(window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(candidates[i])) return candidates[i];
    }
    return '';
  }
  function simulatedRecordingFallback(){
    speak(currentSentence().en, 'US');
    $('#micStatus').textContent = '錄音中… 請對著手機清楚地說出這句話';
    setTimeout(function(){
      $('#micBtn').classList.remove('recording');
      $('#micBtn').classList.add('analyzing');
      $('#micStatus').textContent = 'AI 正在聽你說話、分析發音中…';
      setTimeout(function(){
        state.recording = false;
        $('#micBtn').classList.remove('analyzing');
        goFeedback(null);
      }, 900);
    }, 2600);
  }
  window.startRecording = function(){
    if(state.recording) return;
    state.recording = true;
    $('#micBtn').classList.remove('analyzing');
    $('#micBtn').classList.add('recording');
    $('#micStatus').textContent = '錄音中… 請對著手機清楚地說出這句話';

    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder){
      simulatedRecordingFallback();
      return;
    }
    navigator.mediaDevices.getUserMedia({ audio:true }).then(function(stream){
      micStream = stream;
      mediaChunks = [];
      var mimeType = pickRecorderMime();
      try{
        mediaRecorder = mimeType ? new MediaRecorder(stream, {mimeType:mimeType}) : new MediaRecorder(stream);
      }catch(e){
        stopMicStream();
        simulatedRecordingFallback();
        return;
      }
      mediaRecorder.ondataavailable = function(e){ if(e.data && e.data.size) mediaChunks.push(e.data); };
      mediaRecorder.onstop = function(){
        stopMicStream();
        // 錄音結束、上傳評分中：讓長輩感覺得到「AI 真的在聽、真的在分析」，而不是憑空跳出結果。
        $('#micBtn').classList.remove('recording');
        $('#micBtn').classList.add('analyzing');
        $('#micStatus').textContent = 'AI 正在聽你說話、分析發音中…';
        var blob = new Blob(mediaChunks, {type: mediaRecorder.mimeType || 'audio/webm'});
        submitPronunciationAssessment(blob);
      };
      mediaRecorder.start();
      setTimeout(function(){
        if(mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop();
      }, 3600);
    }).catch(function(){
      simulatedRecordingFallback();
    });
  };

  function submitPronunciationAssessment(blob){
    var referenceText = currentSentence().en;
    var form = new FormData();
    form.append('audio', blob, 'speech.webm');
    form.append('referenceText', referenceText);
    form.append('accent', 'US');

    fetch(API_BASE + '/api/pronunciation/assess', { method:'POST', body: form })
      .then(function(resp){ return resp.json(); })
      .then(function(result){
        state.recording = false;
        $('#micBtn').classList.remove('recording','analyzing');
        if(result && result.mock && !micWarnedMock){
          micWarnedMock = true;
          toast('尚未設定雲端發音評分金鑰，先以示範分數呈現');
        }
        goFeedback(result);
      })
      .catch(function(){
        state.recording = false;
        $('#micBtn').classList.remove('recording','analyzing');
        goFeedback(null);
      });
  }

  // ---- 依據使用者實際表現（準確度／流暢度／完整度）動態產生鼓勵回饋 ----
  // 每個等級都準備好幾種不同的講法，並且會依「流暢度是否明顯偏低」判斷要不要提醒放慢語速，
  // 所以同樣是「表現不錯」，講的話、給的建議也不會每次都一樣。
  function pickRandom(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

  var PRAISE_TIERS = {
    excellent: { stars:5, options:[
      {emoji:'🎉', title:'太棒了！', sub:'發音非常標準，繼續保持這個水準！'},
      {emoji:'🌟', title:'發音很不錯！', sub:'咬字清楚、語調也很自然！'},
      {emoji:'🥳', title:'完美的一句！', sub:'幾乎和範例一模一樣，太厲害了！'}
    ]},
    good: { stars:4, options:[
      {emoji:'👏', title:'表現很好！', sub:'發音很不錯，語調掌握得不錯！'},
      {emoji:'😊', title:'很棒喔！', sub:'大部分的字都念得很清楚！'}
    ]},
    slowDown: { stars:3, options:[
      {emoji:'🐢', title:'慢慢說更好！', sub:'語速可以再慢一點，會更清楚喔。'},
      {emoji:'🌟', title:'很有進步！', sub:'不用急，放慢速度效果會更棒。'}
    ]},
    practiceMore: { stars:3, options:[
      {emoji:'💡', title:'快抓到訣竅了！', sub:'已經抓到訣竅了，這一句可以再練一次會更棒！'},
      {emoji:'🌟', title:'很有進步！', sub:'再多念幾次這句話，會越來越順喔。'}
    ]},
    tryAgain: { stars:2, options:[
      {emoji:'💪', title:'再接再厲！', sub:'這一句可以再練一次，慢慢說沒關係。'},
      {emoji:'🙂', title:'別擔心，再試一次！', sub:'放輕鬆，一個字一個字慢慢念。'}
    ]}
  };

  function praiseFromResult(result){
    var overall = result.overallScore;
    var fluency = result.fluencyScore;
    var accuracy = result.accuracyScore;
    var tierKey;
    if(overall >= 90){ tierKey = 'excellent'; }
    else if(overall >= 75){ tierKey = 'good'; }
    else if(overall >= 60){
      var fluencyIsWeakSpot = (typeof fluency === 'number' && typeof accuracy === 'number' && fluency < accuracy - 10);
      tierKey = fluencyIsWeakSpot ? 'slowDown' : 'practiceMore';
    } else {
      tierKey = 'tryAgain';
    }
    var tier = PRAISE_TIERS[tierKey];
    var pick = pickRandom(tier.options);
    return { emoji:pick.emoji, title:pick.title, sub:pick.sub, stars:tier.stars };
  }

  // 練習完成後自動唸出中文鼓勵語。跟情境例句一樣優先走雲端 AI 語音（Google Cloud TTS 的
  // 台灣國語 Wavenet 語音），音質不再像過去的瀏覽器內建語音那樣生硬；只有在後端尚未設定
  // 雲端金鑰、或雲端請求失敗時，才會自動退回瀏覽器內建語音合成（speak() 內部已處理好）。
  // 語速固定用 'normal'，不受使用者為英文例句設定的語速影響，維持原本溫和、鼓勵的語氣。
  function speakFeedback(text){
    speak(text, 'ZH', null, 'normal');
  }

  function goFeedback(result){
    var p, isMock = !!(result && result.mock);
    var hasRealScore = result && typeof result.overallScore === 'number' && result.overallScore > 0;
    if(hasRealScore){
      p = praiseFromResult(result);
    } else {
      // 連麥克風都用不了的最保底情況：依然從「表現不錯／很有進步」的話術池隨機挑一句，
      // 而不是每次都顯示同一句固定文字。
      var fallbackTier = pickRandom([PRAISE_TIERS.good, PRAISE_TIERS.practiceMore]);
      var fallbackPick = pickRandom(fallbackTier.options);
      p = { emoji:fallbackPick.emoji, title:fallbackPick.title, sub:fallbackPick.sub, stars:fallbackTier.stars };
    }

    $('#fbEmoji').textContent = p.emoji;
    $('#fbEmoji').classList.remove('fb-pop');
    void $('#fbEmoji').offsetWidth; // 強制重新觸發動畫，確保每次進入畫面都會跳出來一次
    $('#fbEmoji').classList.add('fb-pop');

    $('#fbTitle').textContent = p.title;
    var subText = p.sub + (isMock ? '（示範評分，尚未連接雲端發音評分服務）' : '');
    $('#fbSub').textContent = subText;

    $('#fbStars').innerHTML = starsSvg(p.stars, 5);
    document.querySelectorAll('#fbStars svg').forEach(function(svg, i){
      svg.classList.add('fb-star-in');
      svg.style.animationDelay = (i * 80) + 'ms';
    });

    var wave = $('#fbWave');
    wave.innerHTML = '';
    // 音波高度依實際分數決定：分數越高、震幅越平穩飽滿，分數越低則明顯較短，
    // 讓這個動畫本身也能反映使用者這次表現得如何，而不只是裝飾用的隨機線條。
    var baseline = hasRealScore ? result.overallScore : 72;
    for(var i=0;i<14;i++){
      var jitter = Math.round((Math.random() - 0.5) * 10);
      var h = Math.max(6, Math.min(38, Math.round((baseline / 100) * 34) + jitter));
      wave.innerHTML += '<i style="height:' + h + 'px; animation-delay:' + (i * 35) + 'ms;"></i>';
    }

    var isLast = state.speakSentIndex === 1;
    $('#fbNextBtn').textContent = isLast ? '完成這個單字 🎉' : '繼續下一句';
    go('feedback');
    speakFeedback(p.title + p.sub);
  }
  window.feedbackRetry = function(){
    back();
  };
  window.feedbackNext = function(){
    var isLast = state.speakSentIndex === 1;
    state.stack.pop(); // drop the 'speak' screen pushed when entering feedback
    if(isLast){
      var already = isLearned(state.topicKey, state.wordIndex);
      setLearned(state.topicKey, state.wordIndex, true);
      renderTopics();
      refreshProgress();
      toast(already ? '太棒了，再次複習成功！👏' : '太棒了，這個單字你學會了！🎉');
      if(state.lastFlow === 'direct'){
        state.stack = ['home'];
        render('home');
      } else {
        renderWordDetail();
        render('vocab');
      }
    } else {
      state.speakSentIndex = 1;
      renderSpeak();
      render('speak');
    }
  };

  // ---- PROGRESS screen ----
  function refreshProgress(){
    $('#totalLearnedNum').textContent = totalLearnedCount() + ' / ' + totalWordCount();

    var list = $('#topicProgressList');
    list.innerHTML = '';
    TOPIC_ORDER.forEach(function(key){
      var t = TOPICS[key];
      var learned = topicLearnedCount(key);
      var pct = Math.round((learned / t.words.length) * 100);
      var row = document.createElement('div');
      row.className = 'tp-row';
      row.innerHTML =
        '<div class="tp-emoji">' + t.icon + '</div>' +
        '<div class="tp-body"><b>' + t.name + '</b><div class="tp-bar"><i style="width:' + pct + '%"></i></div></div>' +
        '<div class="tp-count">' + learned + '/' + t.words.length + '</div>';
      list.appendChild(row);
    });
  }

  // ---- community: 真實 YouTube 英文學習影片（串接 /api/youtube/search，金鑰只在後端） ----
  // 未設定 YOUTUBE_API_KEY 時，後端會回傳 mock:true，前端改顯示下面這組清單，
  // 這裡放的是老師指定要放進「影片分享」區塊的 5 支真實 YouTube 影片。
  var FALLBACK_VIDEOS = [
    {id:'usm3P6MoVJc', title:'英文跟讀｜遇見你之前｜聽故事學英文｜英文聽力練習｜睡前英文故事｜英文學習（初學者友好）', author:'Learn English Daily Stories', time:'', dur:'', thumb:'https://i.ytimg.com/vi/usm3P6MoVJc/hqdefault.jpg', real:true},
    {id:'ecBH-QOMqVs', title:'百萬英傑｜英文故事｜聽故事學英文｜英文聽力練習｜睡前英文故事｜英文學習（初學者友好）', author:'Learn English Daily Stories', time:'', dur:'', thumb:'https://i.ytimg.com/vi/ecBH-QOMqVs/hqdefault.jpg', real:true, start:494},
    {id:'wSZeUoywCn0', title:'【沉浸式英文動畫】咖啡點餐英文｜客製化點餐英文｜small talk・熟客寒暄｜每周50句英文｜A1-A2 初學者必學｜旅行必備英文｜英文聽力口說', author:'天天聽英文 Everyday English Learning', time:'', dur:'', thumb:'https://i.ytimg.com/vi/wSZeUoywCn0/hqdefault.jpg', real:true},
    {id:'DJOJmuc6So8', title:'【沉浸式英文動畫】聽懂美食英文｜形容味道與口感・問口味・和陌生人聊美食｜出國盡情嚐美食｜A1–A2 初級英文｜聽力口說練習｜後段逐句跟讀｜出國必備英文聽力口說', author:'天天聽英文 Everyday English Learning', time:'', dur:'', thumb:'https://i.ytimg.com/vi/DJOJmuc6So8/hqdefault.jpg', real:true},
    {id:'7a61VwT8PZo', title:'【沉浸式英文動畫】出國旅遊問路‧搭車情境全攻略｜地鐵、公車、轉乘一次學會｜A1–A2 初級英文｜聽力口說練習｜每天50句英文｜出國必備英文聽力口說', author:'天天聽英文 Everyday English Learning', time:'', dur:'', thumb:'https://i.ytimg.com/vi/7a61VwT8PZo/hqdefault.jpg', real:true}
  ];
  var COMMUNITY_QUERIES = [
    'English speaking practice for seniors beginner conversation',
    'daily English conversation practice for beginners slow and clear',
    'English for travel airport conversation practice',
    'restaurant English ordering food conversation practice'
  ];
  var communityQueryIndex = 0;
  var VIDEOS = FALLBACK_VIDEOS.slice();
  var youtubeWarnedMock = false;

  function playIconSvg(){
    return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5Z"></path></svg>';
  }
  function extractYouTubeId(url){
    var m = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{6,15})/.exec(url || '');
    return m ? m[1] : null;
  }
  function thumbAttrs(v){
    if(v.real && v.thumb){
      return ' style="background-image:url(\'' + v.thumb.replace(/"/g,'&quot;') + '\');background-size:cover;background-position:center;"';
    }
    return '';
  }
  function thumbClassOf(v){ return v.real ? '' : (' ' + v.thumbClass); }

  function renderVideos(){
    if(!VIDEOS.length){ VIDEOS = FALLBACK_VIDEOS.slice(); }
    var featured = VIDEOS[0];
    var rest = VIDEOS.slice(1);

    var fEl = $('#featuredVideo');
    fEl.innerHTML =
      '<div class="thumb' + thumbClassOf(featured) + '"' + thumbAttrs(featured) + '>' +
        '<span class="yt-tag">▶ YouTube</span>' +
        '<div class="play-circle">' + playIconSvg() + '</div>' +
        (featured.dur ? '<span class="dur">' + featured.dur + '</span>' : '') +
      '</div>' +
      '<div class="vf-body">' +
        '<b>' + featured.title + '</b>' +
        '<div class="vr-meta">' + featured.author + (featured.time ? ' · ' + featured.time : '') + '</div>' +
      '</div>';
    fEl.onclick = function(){ openPlayer(featured.id); };

    var listEl = $('#videoList');
    listEl.innerHTML = '';
    rest.forEach(function(v){
      var row = document.createElement('div');
      row.className = 'video-row';
      row.innerHTML =
        '<div class="thumb-sm' + thumbClassOf(v) + '"' + thumbAttrs(v) + '>' +
          '<div class="play-circle sm">' + playIconSvg() + '</div>' +
          (v.dur ? '<span class="dur">' + v.dur + '</span>' : '') +
        '</div>' +
        '<div class="vr-body">' +
          '<div class="vr-title">' + v.title + '</div>' +
          '<div class="vr-meta">' + v.author + (v.time ? ' · ' + v.time : '') + '</div>' +
        '</div>';
      row.onclick = function(){ openPlayer(v.id); };
      listEl.appendChild(row);
    });
    $('#videoCount').textContent = VIDEOS.length + ' 部影片';
  }

  function loadCommunityVideos(){
    var q = COMMUNITY_QUERIES[communityQueryIndex % COMMUNITY_QUERIES.length];
    communityQueryIndex++;
    fetch(API_BASE + '/api/youtube/search?q=' + encodeURIComponent(q) + '&maxResults=7')
      .then(function(resp){ return resp.json(); })
      .then(function(result){
        if(result.mock || !result.items || !result.items.length){
          VIDEOS = FALLBACK_VIDEOS.slice();
          if(result.mock && !youtubeWarnedMock){ youtubeWarnedMock = true; toast('尚未設定 YouTube 搜尋金鑰，顯示老師精選影片清單'); }
        } else {
          // 老師精選的影片固定排在最前面，之後才接上即時搜尋到的其他影片（並去除重複的影片 ID）。
          var curatedIds = FALLBACK_VIDEOS.map(function(v){ return v.id; });
          var searched = result.items
            .filter(function(it){ return curatedIds.indexOf(it.videoId) === -1; })
            .map(function(it){
              return {
                id: it.videoId, title: it.title, author: it.channelTitle,
                time: it.publishedAt ? it.publishedAt.slice(0,10) : '',
                dur: '', thumb: it.thumbnail, real: true
              };
            });
          VIDEOS = FALLBACK_VIDEOS.concat(searched);
        }
        renderVideos();
      })
      .catch(function(){
        VIDEOS = FALLBACK_VIDEOS.slice();
        renderVideos();
      });
  }
  window.refreshCommunityVideos = function(){
    toast('正在為您換一批英文學習影片…');
    loadCommunityVideos();
  };

  var playerTimer;
  window.openPlayer = function(id){
    var v = VIDEOS.filter(function(x){ return x.id === id; })[0];
    if(!v) return;
    var stage = $('#playerStage');
    var progWrap = document.querySelector('.player-progress-wrap');
    clearTimeout(playerTimer);

    if(v.real){
      // 真實 YouTube 影片：直接嵌入官方 iframe 播放器（不落地存檔、不經過我們的伺服器轉存）。
      progWrap.style.display = 'none';
      stage.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(v.id) +
        '?autoplay=1&rel=0' + (v.start ? '&start=' + encodeURIComponent(v.start) : '') +
        '" style="width:100%;height:100%;border:0;" allow="autoplay; encrypted-media" allowfullscreen' +
        ' referrerpolicy="strict-origin-when-cross-origin"></iframe>';
      $('#playerTitle').textContent = v.title;
      $('#playerMeta').textContent = v.author;
    } else {
      // 示範資料（未設定金鑰時）沒有真實影片可播，維持原本的動畫式播放示意。
      progWrap.style.display = '';
      stage.innerHTML = '<span id="playerEmoji">' + (v.emoji || '🎬') + '</span>';
      $('#playerTitle').textContent = v.title;
      $('#playerMeta').textContent = v.author + ' · 播放中…（示範資料，非真實影片）';
      var bar = $('#playerBar');
      bar.style.transition = 'none';
      bar.style.width = '0%';
      void bar.offsetWidth;
      requestAnimationFrame(function(){
        bar.style.transition = 'width 4.5s linear';
        bar.style.width = '100%';
      });
      playerTimer = setTimeout(function(){
        $('#playerMeta').textContent = v.author + ' · 播放完畢 ✓';
      }, 4600);
    }
    $('#playerOverlay').classList.add('show');
  };
  window.closePlayer = function(){
    clearTimeout(playerTimer);
    $('#playerOverlay').classList.remove('show');
    $('#playerStage').innerHTML = '<span id="playerEmoji">🎬</span>';
    var bar = $('#playerBar');
    if(bar){ bar.style.transition = 'none'; bar.style.width = '0%'; }
  };

  window.openShareSheet = function(){
    $('#shareLinkInput').value = '';
    $('#sheetBackdrop').classList.add('show');
    $('#shareSheet').classList.add('show');
  };
  window.closeShareSheet = function(){
    $('#sheetBackdrop').classList.remove('show');
    $('#shareSheet').classList.remove('show');
  };
  window.submitShare = function(){
    var url = $('#shareLinkInput').value.trim();
    var vid = extractYouTubeId(url);
    if(!vid){
      toast('請貼上有效的 YouTube 影片連結');
      return;
    }
    VIDEOS.unshift({
      id: vid, title: '我加入的影片', author: '我的收藏', time: '剛剛',
      dur: '', thumb: 'https://i.ytimg.com/vi/' + vid + '/mqdefault.jpg', real: true
    });
    closeShareSheet();
    renderVideos();
    toast('已加入清單，點一下就能播放！🎉');
  };

  // ---- init ----
  renderTopics();
  renderWordList();
  renderWordDetail();
  renderSpeak();
  renderVideos(); // 先用示範資料畫出版面，避免畫面空白
  loadCommunityVideos(); // 再嘗試載入真實 YouTube 影片（背景更新）
  refreshProgress();
  render('home');

})();
