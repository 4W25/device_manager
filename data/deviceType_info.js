// 模擬設備數據

// deviceType.html
// deviceTypeAdd.html
// deviceTypeEdit.html
const deviceTypeDataList = [
  {deviceTypeName:'ATM系統', deviceTypeCode:'0001', deviceTypeDesc: '我是ATM', status:'true', heartBeatFreq:"15", moduleSelect: ['現金模組', '卡片模組', '百鈔存儲上限', '千鈔存儲上限'], deviceToken:'eyJhbGciOiJIUzI1NiJ9.eyJyb3VuZCI6IjA5NTMxNmNiLWRkZTAtNDEzYS04ZmIxLWIwNTZlOTYyOTdhZiIsInVzZXJuYW1lIjoiTEVPIiwiZXhwIjoxNzQ0MDk5MjI3fQ.dK4vEl-b1Z2sv5L7R8PSqIkj7se7NgUyZTnuU56L8kw', createId:'tom', createTime:'2024-05-22 09:42', modId:'Admin1', modTime:'2025-01-12 13:55'},
  {deviceTypeName:'TCR系統', deviceTypeCode:'0002', deviceTypeDesc: '我是TCR系統', status:'true', heartBeatFreq:"20", moduleSelect: [], deviceToken:'leoleoleo', createId:'sam', createTime:'2024-09-15 16:02', modId:'Admin1', modTime:'2025-02-01 12:07'},
  {deviceTypeName:'門禁系統', deviceTypeCode:'0003', deviceTypeDesc: '我是門禁系統', status:'false', heartBeatFreq:"10", moduleSelect: ['門禁控制面板', '讀卡', '指紋識別器'], deviceToken:'eyJhbGciOiJIUzI1NiJ9.eyJyb3VuZCI6ImRhOGQ1YTM4LWI1ZjQtNDlkZS05NmIwLTFkYThc4Zq8rxwEnSIpo', createId:'ann', createTime:'2024-10-17 14:25', modId:'Admin2', modTime:'2025-02-25 08:42'},
  {deviceTypeName:'監控系統', deviceTypeCode:'0004', deviceTypeDesc: '我是監控系統', status:'true', heartBeatFreq:"30", moduleSelect: ['網絡視頻錄像機（NVR）', '數字視頻錄像機（DVR）', '存儲設備', '監視顯示器', '視頻管理軟件（VMS）', '移動偵測模組'], deviceToken:'abcabc', createId:'sam', createTime:'2024-10-28 16:02', modId:'Admin1', modTime:'2025-03-01 12:07'}
]

// deviceTransactionCode.html
const deviceTransactionCodeDataList = [
  {codeNo: '001', deviceTypeCode:'0001', deviceTypeName:'ATM', transactionCode:'WITHDRAW', transactionName:'提款', status:'true', modId:'Admin1', modTime:'2025-01-12 13:55'},
  {codeNo: '002', deviceTypeCode:'0003', deviceTypeName:'門禁系統', transactionCode:'FGRRCGN', transactionName:'指紋辨識', status:'false', modId:'Admin2', modTime:'2024-10-15 08:54'},
  {codeNo: '003', deviceTypeCode:'0001', deviceTypeName:'ATM', transactionCode:'DEPOSIT', transactionName:'存款', status:'true', modId:'Admin2', modTime:'2025-02-10 11:43'},
  {codeNo: '004', deviceTypeCode:'0003', deviceTypeName:'門禁系統', transactionCode:'UNLOCK', transactionName:'解鎖', status:'false', modId:'Admin1', modTime:'2025-03-11 17:22'}
]

// 設備模組資料
const deviceParams = [
  // 審核中
  {deviceCode:'CAM007', deviceId:"Deivce04", deviceType:'監控系統', paramValue:'', paramStatus:'審核中', moduleName:'固定型攝像頭', moduleContent:'固定角度監視區域，常用於監視大型場地', applyDate:'2025-01-13', projectLeader:"admin2"},
  {deviceCode:'CAM008', deviceId:"Deivce04", deviceType:'監控系統', paramValue:'', paramStatus:'審核中', moduleName:'可旋轉攝像頭（PTZ Camera）', moduleContent:'可遠程控制旋轉、放大，具有更高的靈活性', applyDate:'2025-01-13', projectLeader:"admin2"},
  {deviceCode:'CAM009', deviceId:"Deivce04", deviceType:'監控系統', paramValue:'', paramStatus:'審核中', moduleName:'紅外線攝像頭', moduleContent:'能在低光或夜間條件下工作，提供紅外線影像', applyDate:'2025-01-13', projectLeader:"admin2"},
  {deviceCode:'CAM010', deviceId:"Deivce04", deviceType:'監控系統', paramValue:'', paramStatus:'審核中', moduleName:'高解析度攝像頭', moduleContent:'提供更清晰的影像，適用於需要高細節監控的環境', applyDate:'2025-01-13', projectLeader:"admin2"},  
  // ATM
  {deviceCode:'ATM001', deviceId:"Deivce01", deviceType:'ATM系統', paramValue:'', paramStatus:'核准', moduleName:'現金模組', moduleContent:'處理現金存取，通常分為取款模組和存款模組', applyDate:'2025-01-03', projectLeader:"admin2"},
  {deviceCode:'ATM002', deviceId:"Deivce01", deviceType:'ATM系統', paramValue:'', paramStatus:'核准', moduleName:'卡片模組', moduleContent:'讀取客戶銀行卡信息（IC 卡或磁條卡）', applyDate:'2025-01-03', projectLeader:"admin2"},
  {deviceCode:'ATM003', deviceId:"Deivce01", deviceType:'ATM系統', paramValue:'', paramStatus:'核准', moduleName:'憑條模組', moduleContent:'打印交易憑據', applyDate:'2025-01-03', projectLeader:"admin2"},
  {deviceCode:'ATM004', deviceId:"Deivce01", deviceType:'ATM系統', paramValue:'', paramStatus:'核准', moduleName:'憑顯示模組', moduleContent:'顯示操作界面（例如觸摸屏）', applyDate:'2025-01-03', projectLeader:"admin1"},
  {deviceCode:'ATM006', deviceId:"Deivce01", deviceType:'ATM系統', paramValue:'', paramStatus:'核准', moduleName:'百鈔存儲上限', moduleContent:'500000', applyDate:'2025-01-03', projectLeader:"admin2"},
  {deviceCode:'ATM005', deviceId:"Deivce01", deviceType:'ATM系統', paramValue:'', paramStatus:'核准', moduleName:'千鈔存儲上限', moduleContent:'1000000', applyDate:'2025-01-03', projectLeader:"admin2"},
  // TCR
  {deviceCode:'TCR001', deviceId:"Deivce02", deviceType:'TCR系統', paramValue:'', paramStatus:'核准', moduleName:'現金模組', moduleContent:'可處理多幣種現金的存取（包括分類和驗鈔功能）', applyDate:'2025-01-03', projectLeader:"admin3"},
  {deviceCode:'TCR002', deviceId:"Deivce02", deviceType:'TCR系統', paramValue:'', paramStatus:'核准', moduleName:'分類模組', moduleContent:'將現金按面值分類，並存入對應的回收箱', applyDate:'2025-01-03', projectLeader:"admin3"},
  {deviceCode:'TCR003', deviceId:"Deivce02", deviceType:'TCR系統', paramValue:'', paramStatus:'核准', moduleName:'驗鈔模組', moduleContent:'識別假鈔和破損的紙幣', applyDate:'2025-01-03', projectLeader:"admin3"},
  {deviceCode:'TCR004', deviceId:"Deivce02", deviceType:'TCR系統', paramValue:'', paramStatus:'核准', moduleName:'存儲模組', moduleContent:'用於存放現金回收箱', applyDate:'2025-01-03', projectLeader:"admin3"},
  // 門禁
  {deviceCode:'DEV001', deviceId:"Deivce03", deviceType:'門禁系統', paramValue:'', paramStatus:'核准', moduleName:'門禁控制面板', moduleContent:'核心控制設備，負責處理來自各種輸入設備的信息，控制電鎖或警報系統', applyDate:'2025-01-01', projectLeader:"admin"},
  {deviceCode:'DEV002', deviceId:"Deivce03", deviceType:'門禁系統', paramValue:'', paramStatus:'核准', moduleName:'讀卡器', moduleContent:'用來驗證使用者身份，通過卡片識別等方式授權進入', applyDate:'2025-01-01', projectLeader:"admin"},
  {deviceCode:'DEV003', deviceId:"Deivce03", deviceType:'門禁系統', paramValue:'', paramStatus:'核准', moduleName:'指紋識別器', moduleContent:'用來驗證使用者身份，通過指紋識別等方式授權進入', applyDate:'2025-01-01', projectLeader:"admin"},
  {deviceCode:'DEV004', deviceId:"Deivce03", deviceType:'門禁系統', paramValue:'', paramStatus:'核准', moduleName:'人臉識別器', moduleContent:'用來驗證使用者身份，通過面部識別等方式授權進入', applyDate:'2025-01-01', projectLeader:"admin"},
  {deviceCode:'DEV005', deviceId:"Deivce03", deviceType:'門禁系統', paramValue:'', paramStatus:'核准', moduleName:'電磁鎖', moduleContent:'用來控制門的開關，只有在身份驗證成功後才會開鎖', applyDate:'2025-01-01', projectLeader:"admin"},
  {deviceCode:'DEV006', deviceId:"Deivce03", deviceType:'門禁系統', paramValue:'', paramStatus:'核准', moduleName:'身份識別模組', moduleContent:'如指紋識別模組、虹膜識別模組等，用來增強身份識別的安全性', applyDate:'2025-01-01', projectLeader:"admin"},
  {deviceCode:'DEV007', deviceId:"Deivce03", deviceType:'門禁系統', paramValue:'', paramStatus:'核准', moduleName:'門禁讀取介面', moduleContent:'用來與控制面板或雲端服務通信，傳送數據和指令', applyDate:'2025-01-01', projectLeader:"admin"},
  {deviceCode:'DEV008', deviceId:"Deivce03", deviceType:'門禁系統', paramValue:'', paramStatus:'核准', moduleName:'警報系統', moduleContent:'當無權人士嘗試進入時觸發警報，防止非法入侵', applyDate:'2025-01-01', projectLeader:"admin"},
  {deviceCode:'DEV009', deviceId:"Deivce03", deviceType:'門禁系統', paramValue:'', paramStatus:'核准', moduleName:'門禁軟體', moduleContent:'管理用戶、設置開門規則、查看進出紀錄等的後台軟體', applyDate:'2025-01-01', projectLeader:"admin"},
  // 監控
  {deviceCode:'CAM001', deviceId:"Deivce04", deviceType:'監控系統', paramValue:'', paramStatus:'核准', moduleName:'網絡視頻錄像機（NVR）', moduleContent:'數字錄像機，用來接收並儲存來自網絡攝像頭的視頻數據', applyDate:'2025-01-03', projectLeader:"admin1"},
  {deviceCode:'CAM002', deviceId:"Deivce04", deviceType:'監控系統', paramValue:'', paramStatus:'核准', moduleName:'數字視頻錄像機（DVR）', moduleContent:'通常與模擬攝像頭配合使用，錄製並儲存視頻資料', applyDate:'2025-01-03', projectLeader:"admin1"},
  {deviceCode:'CAM003', deviceId:"Deivce04", deviceType:'監控系統', paramValue:'', paramStatus:'核准', moduleName:'存儲設備', moduleContent:'硬碟或雲端服務，用來存儲視頻錄像和其他資料', applyDate:'2025-01-03', projectLeader:"admin1"},
  {deviceCode:'CAM004', deviceId:"Deivce04", deviceType:'監控系統', paramValue:'', paramStatus:'核准', moduleName:'監視顯示器', moduleContent:'用來顯示實時視頻畫面，通常連接到多個攝像頭', applyDate:'2025-01-03', projectLeader:"admin1"},
  {deviceCode:'CAM005', deviceId:"Deivce04", deviceType:'監控系統', paramValue:'', paramStatus:'核准', moduleName:'視頻管理軟件（VMS）', moduleContent:'用於監控、控制攝像頭，並管理錄製的視頻檔案，提供檢索、回放功能', applyDate:'2025-01-03', projectLeader:"admin1"},
  {deviceCode:'CAM006', deviceId:"Deivce04", deviceType:'監控系統', paramValue:'', paramStatus:'核准', moduleName:'移動偵測模組', moduleContent:'能夠自動偵測畫面中有無移動物體，並觸發錄影或警報', applyDate:'2025-01-03', projectLeader:"admin1"},
]
