// pages/tables/pdq4/pdq4.js
const data = require('./pdq4_data.js');
Page({

  data: {
    currentQuestionIndex: 0, // 当前题目索引
    totalQuestions: 0,       // 总题目数量
    currentForm: {},         // 当前显示的题目数据
    progress: 0,             // 进度条百分比
    ...data.initialData
  },
  
  // 页面加载时初始化题目
  onLoad: function(options) {
    this.setData({
      totalQuestions: this.data.forms.length,
      currentForm: this.data.forms[0] // 默认加载第一个题目
    });
    this.updateProgress();
  },

  // 更新进度条
  updateProgress: function() {
    const progress = ((this.data.currentQuestionIndex + 1) / this.data.totalQuestions) * 100;
    this.setData({
      progress: progress
    });
  },

  // 切换到下一题
  nextQuestion: function() {
    if (this.data.currentQuestionIndex < this.data.totalQuestions - 1) {
      let newIndex = this.data.currentQuestionIndex + 1;
      this.setData({
        currentQuestionIndex: newIndex,
        currentForm: this.data.forms[newIndex]
      });
      this.updateProgress();
    }
  },

  // 切换到上一题
  prevQuestion: function() {
    if (this.data.currentQuestionIndex > 0) {
      let newIndex = this.data.currentQuestionIndex - 1;
      this.setData({
        currentQuestionIndex: newIndex,
        currentForm: this.data.forms[newIndex]
      });
      this.updateProgress();
    }
  },


  radioChange: function(e) {
    const value = e.detail.value;
    const items = this.data.currentForm.radioItems.map((item) => {
      return {
        ...item,
        checked: item.value === value
      };
    });
  
    this.setData({
      'currentForm.radioItems': items
    });
  
    // 更新整体表单数组中的当前题目状态
    let updatedForms = this.data.forms;
    updatedForms[this.data.currentQuestionIndex].radioItems = items;
    this.setData({
      forms: updatedForms
    });
  },
  
  checkboxChange: function(e) {
    const values = e.detail.value;
    const items = this.data.currentForm.radioItems.map((item) => {
      return {
        ...item,
        checked: values.indexOf(item.value) !== -1
      };
    });
  
    this.setData({
      'currentForm.radioItems': items
    });
  
    // 更新整体表单数组中的当前题目状态
    let updatedForms = this.data.forms;
    updatedForms[this.data.currentQuestionIndex].radioItems = items;
    this.setData({
      forms: updatedForms
    });
  },
  


  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  uploadForm:function(e){
    var forms = JSON.stringify(this.data.forms)
    var T=1
    var choices = this.data.choices
    
    for (var i=105;i>=1;i--){
      if(choices[i]==-1){
        T=0
        var num=i
        wx.showModal({
          title: '提示',
          content: '你的第' + num.toString()+'题尚未完成！',
          success: function (res) {
            if (res.confirm) {//这里是点击了确定以后
              console.log('用户点击确定')
            } else {//这里是点击了取消以后
              console.log('用户点击取消')
            }
          }
        })
        
      }
    }
    if (T==1) {
      this.data.finish = true;
      console.log('用户点击确定提交')
      var Charscore= Array(13).fill(0);
      var Charsuspect= Array(13).fill(0);
      choices[106] = Math.max(choices[106],0);
      choices[107] = Math.max(choices[107], 0);
      Charscore[0] = choices[11] + choices[24] + choices[37] + choices[50] + choices[62] + choices[85] + choices[96];
      Charscore[1] = Number(choices[9]) + choices[22] + choices[34] + choices[47] + choices[60] + choices[71] + choices[95];
      Charscore[2] = Number(choices[10]) + choices[23] + choices[36] + choices[48] + choices[60] + choices[61] + choices[72] +choices[74]+choices[86];
      Charscore[3] = Number(choices[8]) + choices[20] + choices[33] + choices[46] + choices[59] + choices[75] + choices[94] + choices[107];
      Charscore[4] = Number(choices[6] || choices[100]) + (choices[19] || choices[101]) + choices[32] + choices[45] + choices[58] + choices[69] + choices[78] + choices[93] + choices[106];
      Charscore[5] = Number(choices[102] || choices[67] )+ choices[4]  + choices[17] + choices[30] + choices[43] + choices[55] + choices[80] + choices[90] ;
      Charscore[6] = Number(choices[92] || choices[103]) + choices[79] + choices[73] + choices[68] + choices[57] + choices[44] + choices[31] + choices[18] +choices[5];
      Charscore[7] = Number(choices[98] || choices[1]) + choices[13] + choices[26] + choices[39] + choices[52] + choices[83] + choices[87]; Charscore[8] = Number(choices[2] )+ choices[15] + choices[27] + choices[40] + choices[53] + choices[65] + choices[82] + choices[88]; 
      Charscore[9] = Number(choices[99] || choices[3]) + choices[16] + choices[29] + choices[41] + choices[54] + choices[66] + choices[81] + (choices[105]||choices[89]);
      Charscore[10] = Number(choices[7]) + choices[21] + choices[35] + choices[49] + choices[63] + choices[77] + choices[91];
      Charscore[11] = Number(choices[14]) + choices[28] + choices[42] + choices[56] + choices[70] + choices[84] + choices[97];

      Charscore[12] = 3 - Number(choices[12])- choices[25] - choices[38] + choices[51] + choices[64] + choices[76];
      for(var i=0;i<13;++i){
        if (Charscore[i] >= this.data.Charstd[i]){
            Charsuspect[i] = true;
        }
        
      }
      this.data.Charscore = Charscore;
      this.data.Charsuspect = Charsuspect;

      this.setData({
        finish: true,
        Charscore: Charscore,
        Charsuspect:Charsuspect
      });
    }
      
  },
  



})

