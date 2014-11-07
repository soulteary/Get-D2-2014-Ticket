/**
 * ref @tombkeeper
 */

var listA = ['自寒',
    '吴琪华',
    '徐媛',
    '李寅侃',
    '唐僧洗头爱飘柔',
    '啸生',
    '雪龙ACMILAN',
    '王天宇',
    '胡海波',
    '吴天豪',
    '王会',
    'Herrington Darkholme',
    'sprying',
    '冯平平',
    '李忠南',
    'abel liu',
    '羊咩咩',
    'chao',
    'Mr.doob',
    '翟羽',
    '吕晓东',
    'xie.xuyang@gmail.com',
    '应干飞',
    '徐津',
    '薛梦飞',
    '马慧',
    '随便叫吧',
    '耿磊',
    '袁源',
    '王杰',
    '孙成瑞',
    '张瑶丹',
    '郑轲阳',
    '卢东旭',
    '马克思'];

var listB = ['末小禾',
    '吴双Orange',
    'reafagon',
    '民工精髓V',
    '朱_小贱',
    '美国大鼻子',
    '前端风暴',
    'willwong123',
    'Barret李靖',
    '前端小工'];


function gift(seed, salt, user, nums) {
    function RNG(seed) {
        // LCG using GCC's constants
        this.m = 0x80000000; // 2**31;
        this.a = 1103515245;
        this.c = salt;

        this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
    }
    RNG.prototype.nextInt = function () {
        this.state = (this.a * this.state + this.c) % this.m;
        return this.state;
    };
    RNG.prototype.nextRange = function (start, end) {
        // returns in range [start, end): including start, excluding end
        // can't modulu nextInt because of weak randomness in lower bits
        var rangeSize = end - start;
        var randomUnder1 = this.nextInt() / this.m;
        return start + Math.floor(randomUnder1 * rangeSize);
    };
    RNG.prototype.choice = function (array) {
        return array[this.nextRange(0, array.length)];
    };

    var rng = new RNG(seed);
    for (var i = 0; i < nums; i++) {
        document.write(rng.choice(user) + "<br>");
    }
}

/** 从问卷中抽取5名 **/
gift(20141025, 1024, listA, 5);
/** 从日志中抽取1名 **/
gift(20141025, 1024, listB, 1);


/**
 * RESULT:
 * 王会
 * 吕晓东
 * 胡海波
 * Herrington Darkholme
 * 马慧
 * 民工精髓V
 **/