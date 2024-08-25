// pages/tables/pdq4/pdq4.js
module.exports = {
  initialData: {
    title: 'PDQ-4测试',
    isAgree: false,
    showTopTips: false,
    TopTipsText: '',
    choices: Array(109).fill(-1),
    Qfor106: Array(7).fill(-1),
    Qfor107: Array(16).fill(-1),
    finish: 0,
    Charstd: [4, 4, 5, 3, 5, 5, 5, 4, 5, 4, 4, 5, 5],
    Charscore: Array(13).fill(0),
    Charsuspect: Array(13).fill(false),
    forms:[
      {
        qid: 1, order: 1, formType: '1', qText: '1、我尽量避免与可能批评我的人一块工作', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 2, order: 2, formType: '1', qText: '2、没有得到别人的建议和再三宽心，我难以作出决定', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 3, order: 3, formType: '1', qText: '3、我常常将功夫花在细节上而忽略了大目标', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 4, order: 4, formType: '1', qText: '4、我希望能引人注目', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 5, order: 5, formType: '1', qText: '5、我所作出的成绩远比别人所认为的要多', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 6, order: 6, formType: '1', qText: '6、为了使我所爱的人不离开我，我会走极端', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 7, order: 7, formType: '1', qText: '7、别人抱怨我没有能够完成我的工作任务和所承诺的事情', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 8, order: 8, formType: '1', qText: '8、我曾几次遇到过法律上的麻烦（或如果我当时被抓住，我将会有这类麻烦）', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 9, order: 9, formType: '1', qText: '9、与家人或朋友一起消磨时间并不使我感到有趣', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 10, order: 10, formType: '1', qText: '10、我从周围所发生的事中接受到特殊的信息', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 11, order: 11, formType: '1', qText: '11、我知道如果我任别人怎样待我，他们将会从我身上乘机得利或试图欺骗我', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 12, order: 12, formType: '1', qText: '12、我有时心情不好', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 13, order: 13, formType: '1', qText: '13、只有当我确信对方喜欢我，我才会与他们交朋友', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 14, order: 14, formType: '1', qText: '14、我通常心情抑郁', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 15, order: 15, formType: '1', qText: '15、我让我的家人和朋友为我生活中的重要事情作出决定', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 16, order: 16, formType: '1', qText: '16、我做事过份追求完美，因此花费不少时间', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 17, order: 17, formType: '1', qText: '17、我比一般人对于异性更具有吸引力', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 18, order: 18, formType: '1', qText: '18、我经常发现自己在想我是一个怎样重要的人，或将会成为这样的人', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 19, order: 19, formType: '1', qText: '19、我要么喜欢和佩服某人，要么怨恨他们，没有介于两者之间的感受', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 20, order: 20, formType: '1', qText: '20、我与别人打过许多次架', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 21, order: 21, formType: '1', qText: '21、我觉得别人并不理解和赏识我', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 22, order: 22, formType: '1', qText: '22、我宁可独自工作而不愿与他人一块工作', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 23, order: 23, formType: '1', qText: '23、我能够在一些事情发生之前便知道他们会要发生', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 24, order: 24, formType: '1', qText: '24、我常常寻思我所认识的人是否真正信得过', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 25, order: 25, formType: '1', qText: '25、我偶尔在背后议论别人', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 26, order: 26, formType: '1', qText: '26、由于我不受到别人的奚落或取笑而在与我有亲密关系的人面前压抑自己的情感', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 27, order: 27, formType: '1', qText: '27、我担心如果我表示与别人不一致的看法，便会失去他们的支持实施', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 28, order: 28, formType: '1', qText: '28、我为自卑感而苦恼', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 29, order: 29, formType: '1', qText: '29、我将工作置于与家人或朋友相聚或娱乐之前', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 30, order: 30, formType: '1', qText: '30、我容易显露出自己的情绪', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 31, order: 31, formType: '1', qText: '31、只有某些特别的人才能真正赏识和理解我', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 32, order: 32, formType: '1', qText: '32、我常想弄清自己究竟是何人', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 33, order: 33, formType: '1', qText: '33、我常缺勤，也比我所认识到大多数人更多的调换工作', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 34, order: 34, formType: '1', qText: '34、性方面的事不能引起我的兴趣', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 35, order: 35, formType: '1', qText: '35、别人认为我心情易变及脾气躁', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 36, order: 36, formType: '1', qText: '36、我常能觉察和感受别人感受不到的事情', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 37, order: 37, formType: '1', qText: '37、别人会把我向他们所说的话当作将来此我处于不利的把柄', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 38, order: 38, formType: '1', qText: '38、有一些人我不怎么喜欢', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 39, order: 39, formType: '1', qText: '39、我比大多数人对于批评或拒绝更敏感', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 40, order: 40, formType: '1', qText: '40、一旦事情需要我独自去干，我便感到难以开展', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 41, order: 41, formType: '1', qText: '41、我比别人有更强的道德观念', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 42, order: 42, formType: '1', qText: '42、我是我自己最严厉的批评者', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 43, order: 43, formType: '1', qText: '43、我用自己外貌来得到我所需要的注意', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 44, order: 44, formType: '1', qText: '44、我很需要别人注意我或称赞我', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 45, order: 45, formType: '1', qText: '45、我曾试过伤害自己或自杀', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 46, order: 46, formType: '1', qText: '46、我做过很多不考虑后果的事情', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 47, order: 47, formType: '1', qText: '47、很少有什么活动能够使我感兴趣', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 48, order: 48, formType: '1', qText: '48、人们常常难以理解我谈话中的内容', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 49, order: 49, formType: '1', qText: '49、我不喜欢上级交待我应该怎样干活的工作', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 50, order: 50, formType: '1', qText: '50、我时常留意与捉摸别人话中所隐含的意思', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 51, order: 51, formType: '1', qText: '51、我从未说过一次谎', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 52, order: 52, formType: '1', qText: '52、我害怕陌生人，因为那会使我感到不自在', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 53, order: 53, formType: '1', qText: '53、我很需要别人喜欢我,以致为此作出许多我不情愿做的事情', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 54, order: 54, formType: '1', qText: '54、我积累了不少我不再需要而又不忍心扔掉的东西', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 55, order: 55, formType: '1', qText: '55、我虽然说得很多，但别人说我难以抓住要点', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 56, order: 56, formType: '1', qText: '56、我有很多的忧虑', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 57, order: 57, formType: '1', qText: '57、当店员或营业员使我在柜台前和排队等待较长时间，我容易感到受到怠慢而生气', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 58, order: 58, formType: '1', qText: '58、我是一个情绪不稳定的人', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 59, order: 59, formType: '1', qText: '59、对我来说说谎很容易，我常常这样做', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 60, order: 60, formType: '1', qText: '60、我对于拥有亲密朋友没有什么兴趣', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 61, order: 61, formType: '1', qText: '61、我常常保持警惕以防被别人乘机利用', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 62, order: 62, formType: '1', qText: '62、我不会忘记和原谅那些待我不好的人', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 63, order: 63, formType: '1', qText: '63、我对那些较我“走运”的人感到不满', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 64, order: 64, formType: '1', qText: '64、核战争也许不是一个那么坏的想法', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 65, order: 65, formType: '1', qText: '65、我会在独处时感到无能为力和无法照顾自己', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 66, order: 66, formType: '1', qText: '66、我常常不愿与他人合作或将事情托付给别人干，只是因为我不放心他们是否真正会按我的要求和方式去干', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 67, order: 67, formType: '1', qText: '67、我有一种表演天赋', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 68, order: 68, formType: '1', qText: '68、有些人认为我利用别人', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 69, order: 69, formType: '1', qText: '69、我觉得我的生活乏味', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 70, order: 70, formType: '1', qText: '70、我对周围的人甚为挑剔与苛求', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 71, order: 71, formType: '1', qText: '71、我不在乎别人会怎么说我', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 72, order: 72, formType: '1', qText: '72、我难以在一种只有两人的场合单独与对方打交道', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 73, order: 73, formType: '1', qText: '73、人们常怪我没能意识到他们心情不好', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 74, order: 74, formType: '1', qText: '74、我看上去可能会使别人认为我有些古怪和离奇', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 75, order: 75, formType: '1', qText: '75、我喜欢干冒险的事', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 76, order: 76, formType: '1', qText: '76、我在回答了这份问卷时说了不少谎', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 77, order: 77, formType: '1', qText: '77、我诉说许多我的苦楚和不幸', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 78, order: 78, formType: '1', qText: '78、我难以控制恼怒或脾气', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 79, order: 79, formType: '1', qText: '79、有的人嫉妒我', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 80, order: 80, formType: '1', qText: '80、我易受别人的影响', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 81, order: 81, formType: '1', qText: '81、我认为自己节约，而别人认为我吝啬', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 82, order: 82, formType: '1', qText: '82、一旦我与别人的亲密关系终止，我便需要很快与其他人建立起这种关系', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 83, order: 83, formType: '1', qText: '83、我为自卑感而苦恼', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 84, order: 84, formType: '1', qText: '84、我是一个悲观的人', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 85, order: 85, formType: '1', qText: '85、当别人中伤我时，我毫不犹豫给予还击', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 86, order: 86, formType: '1', qText: '86、别人围在我身旁会使我感到紧张不安', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 87, order: 87, formType: '1', qText: '87、在没有经历过的新场合，我害怕自己会发窘', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 88, order: 88, formType: '1', qText: '88、我时常很害怕别人会离开我而让我自己照顾自己的一切事情', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 89, order: 89, formType: '1', qText: '89、人们说我相当固执', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 90, order: 90, formType: '1', qText: '90、与跟我交往的人相比，我总是很快变成与别人建立起亲密关系', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 91, order: 91, formType: '1', qText: '91、我能在对别人发火之后很快向他们道歉', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 92, order: 92, formType: '1', qText: '92、别人觉得我傲慢', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 93, order: 93, formType: '1', qText: '93、遇到紧张的事情时，我会变得敏感多疑或记不起刚刚发生过的事情', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 94, order: 94, formType: '1', qText: '94、只要我能得到我所需要的，我不会在乎别人会受到什么伤害', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 95, order: 95, formType: '1', qText: '95、我与别人保持相当的距离', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 96, order: 96, formType: '1', qText: '96、我常想弄明白我的妻子（丈夫、女朋友或男朋友）是否有过不忠实的行为', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 97, order: 97, formType: '1', qText: '97、我常有内疚感', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 98, order: 98, formType: '1', qText: '98、我回避做许多我应做但需人际接触的事情，因为我害怕会得不到别人的赞许或遭到拒绝与批评', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 99, order: 99, formType: '1', qText: '99、必须承认，我做事时总是要花许多时间考虑细节、规则或程序以至于我感到难以象别人那样迅速和有效地完成事情', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 100, order: 100, formType: '1', qText: '100、一旦我发现与我关系亲密的人不再接近我，我便会感到十分烦恼并作出各种强烈的反应', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 101, order: 101, formType: '1', qText: '101、我与别人的关系有时变得很亲密，有时则变得充满怨恨', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 102, order: 102, formType: '1', qText: '102、我在表达自己的感受和情绪时比一般人更为兴奋和强烈', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 103, order: 103, formType: '1', qText: '103、我常常禁不住要对我周围人们的一些毛病作些否定性的评价', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 104, order: 104, formType: '1', qText: '104、我无论对别人还是对自己都很注意节省，尽管有人会认为我很吝惜', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 105, order: 105, formType: '1', qText: '105、我习惯于按自己的方式行事，难以因别人的建议而改变，即使是这些建议看来很有道理', radioItems: [
          { name: '是', value: 1 },
          { name: '否', value: 0 },
        ]
      },
      {
        qid: 106, order: 106, formType: '2', qText: '106 、我凭一时冲动干过一些以下的事情以至给我带来麻烦 \n [多选,若都没有则不选]', radioItems: [
          { name: '1)花费的金钱超前了我自己所容有的数额', value: 1 },
          { name: '2)与我不熟悉的人发生性关系', value: 2 },
          { name: '3)喝酒过多', value: 3 },
          { name: '4)服用成瘾药物', value: 4 },
          { name: '5)无节制的大吃', value: 5 },
          { name: '6)莽撞骑车或驾驶', value: 6 },
      ]
      },     
      {
        qid: 107, order: 107, formType: '2', qText: '107 、我小时候（15岁以前）干过以下某些事情 \n [多选,若都没有则不选]', radioItems: [
          { name: '1)我被认为是一个霸道的人', value: 1 },
          { name: '2)我曾先动手打别的小孩', value: 2 },
          { name: '3)我曾用我手头的武器打架', value: 3 },
          { name: '4)我曾对别人进行抢劫', value: 4 },
          { name: '5) 我曾对别人进行身体上的虐待', value: 5 },
          { name: '6)我曾虐待动物', value: 6 },
          { name: '7)我曾强迫别人与我发生性关系', value: 7 },
          { name: '8)我曾多次说慌', value: 8 },
          { name: '9)我曾没经父母的允许而在外面过夜', value: 9 },
          { name: '10)我偷过别人的东西', value: 10 },
          { name: '11)我纵过火', value: 11 },
          { name: '12)我曾打破窗户或捣坏财物', value: 12 },
          { name: '13)我曾不止一次离家在外过夜', value: 13 },
          { name: '14)我在13岁之前经常逃学', value: 14 },
          { name: '15) 我曾撬门窗而入别人的家，房子或汽车', value: 15 }
        ]
      }, 


    ],
  },
};
