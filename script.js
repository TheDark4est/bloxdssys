// 运势内容库
const auspiciousList = [
    "睡觉", "看三体", "瞻仰伟大", "写代码", "打pvp",
    "和鸡哥一起玩", "打起床四人", "上B站", "参观伟大",
    "玩海盗","建造超高层建造", "开新服", "造材质包", "扶老奶奶过马路",
    "研究物理学", "听音乐", "上洛谷", "买Super"
];

const tabooList = [
    "参加考试", "用连点器", "杀僵尸", "睡觉",
    "炸服", "开挂", "开全视野", "去伟大服",
    "写代码", "扶老爷爷过马路", "看精神污染动画", "在某服挂机一整天",
    "研究Hardcore", "以挂逃挂", "玩梗", "上Discord",
];

function generateFortune() {
    // 生成日期
    const date = new Date();
    document.getElementById('current-date').textContent = 
        `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`;

    // 随机选择运势
    function getRandomItems(arr) {
        return [...arr].sort(() => Math.random() - 0.5).slice(0, 2);
    }

    document.getElementById('auspicious-text').textContent = 
        getRandomItems(auspiciousList).join(" , ");
    document.getElementById('taboo-text').textContent = 
        getRandomItems(tabooList).join(" , ");
}

// 页面加载时生成运势
window.onload = generateFortune;

// 随机背景图功能
function setRandomBackground() {
    const imageCount = 12; // 假设有5张备选图片
    const randomIndex = Math.floor(Math.random() * imageCount) + 1;
    document.getElementById('banner-image').src = `./ssysphoto/ssys${randomIndex}.png`;
}

// 在window.onload中调用
window.onload = function() {
    generateFortune();
    setRandomBackground();
};

function preloadImages() {
    for(let i = 1; i <= imageCount; i++) {
        new Image().src = `./ssysphoto/ssys${i}.png`;
    }
}
preloadImages();