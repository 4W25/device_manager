/*設備組別、軟體排程用到的模擬資料*/

//設備類型
const deviceTypeList = [
  { deviceTypeName: "循環機", deviceTypeCode: 'OKI-RG7' },
  { deviceTypeName: "自動提款機", deviceTypeCode: 'WIN-1500XE' },
  { deviceTypeName: "循環機", deviceTypeCode: 'HITACHI-CZ5000' }
];

//設備資料
const deviceList = [
  // 循環機(OKI-RG7)
  { deviceId: 'A012001601', deviceLocate: '台北市-大眾門市', deviceTypeCode: "OKI-RG7", organId: '0120016', organName: '營運中心', groupIds: ['GR_OKI_TPE2500002', 'GR_OKI_TPE2500001'], groupName: "循環機OKI-RG7_台北區1組", version: "A25.04.01", createDataDate: '2025-07-08', ip: '0.16.10.0' },
  { deviceId: 'A012001602', deviceLocate: '台北市-中崙門市', deviceTypeCode: "OKI-RG7", organId: '0120016', organName: '營運中心', groupIds: [], groupName: "尚未", version: "A22.10.15", createDataDate: '2025-03-15', ip: '05.05.0.05' },
  { deviceId: 'A012001603', deviceLocate: '新北市-大庭門市', deviceTypeCode: "OKI-RG7", organId: '0120016', organName: '營運中心', groupIds: [], groupName: "尚未", version: "A23.06.22", createDataDate: '2024-12-31', ip: '164.11.20.18' },
  { deviceId: 'A012200901', deviceLocate: '台中市-大時代門市', deviceTypeCode: "OKI-RG7", organId: '0120016', organName: '營運中心', groupIds: ['GR_OKI_TPE2500001'], groupName: "尚未", version: "A25.10.01", createDataDate: '2024-10-22', ip: '162.15.0.04' },
  { deviceId: 'A012200902', deviceLocate: '高雄市-中雅門市', deviceTypeCode: "OKI-RG7", organId: '0120016', organName: '營運中心', groupIds: [], groupName: "尚未", version: "A24.07.01", createDataDate: '2024-06-10', ip: '0.0.0.0' },

]
/*
const deviceList = [
    // ATM
    { deviceId: "ATM00001", deviceName: "內湖國眾機台", area: "TPE", typeId: "Device01", typeName: "ATM系統", groupIds: [],            groupName: "尚未", version: "A25.04.01"},
    { deviceId: "ATM00002", deviceName: "信義微風機台", area: "TPE", typeId: "Device01", typeName: "ATM系統", groupIds: [],            groupName: "尚未", version: "A25.04.01" },
    { deviceId: "ATM00003", deviceName: "松山車站機台", area: "TPE", typeId: "Device01", typeName: "ATM系統", groupIds: [],            groupName: "尚未", version: "A25.02.01" },
    { deviceId: "ATM00004", deviceName: "XXXXXX機台", area: "NWT",  typeId: "Device01", typeName: "ATM系統", groupIds: [],            groupName: "尚未", version: "A24.12.01" },
    { deviceId: "ATM00005", deviceName: "新竹城隍機台", area: "HSZ", typeId: "Device01", typeName: "ATM系統", groupIds: [],            groupName: "尚未", version: "A25.04.01" },
    { deviceId: "ATM00006", deviceName: "XXXXXX機台", area: "MIA",  typeId: "Device01", typeName: "ATM系統", groupIds: ["ATMTEST0001", "ATMTPE0001"], groupNames: ["ATM_2025_測試組", "ATM_台北_1組"],  version: "A25.04.01" },
    { deviceId: "ATM00007", deviceName: "XXXXXX機台", area: "TAO",  typeId: "Device01", typeName: "ATM系統", groupIds: ["ATMTAO0003"],    groupName: "ATM_桃園_楊梅區", version: "A24.10.01" },
    { deviceId: "ATM00008", deviceName: "XXXXXX機台", area: "TXG", typeId: "Device01", typeName: "ATM系統", groupIds: ["ATMTXG0004"],     groupName: "ATM_台中",      version: "A24.12.01" },
    { deviceId: "ATM00009", deviceName: "XXXXXX機台", area: "CHA", typeId: "Device01", typeName: "ATM系統", groupIds: [],             groupName: "尚未",          version: "A24.12.01" },
    { deviceId: "ATM00010", deviceName: "XXXXXX機台", area: "NAN", typeId: "Device01", typeName: "ATM系統", groupIds: [],             groupName: "尚未",          version: "A24.10.01" },
    { deviceId: "ATM00011", deviceName: "XXXXXX機台", area: "HSZ", typeId: "Device01", typeName: "ATM系統", groupIds: ["ATMHSZ0008"],     groupName: "ATM_新竹",      version: "A25.04.01" },
    { deviceId: "ATM00012", deviceName: "XXXXXX機台", area: "MIA", typeId: "Deivce01", typeName: "ATM系統", groupIds: [],             groupName: "尚未",          version: "A24.10.01" },
    // TCR
    { deviceId: "TCR00001", deviceName: "桃園分行TCR", area: "TAO", typeId: "Device02", typeName: "TCR系統", groupIds: ['TCRTAO0005'], groupName: 'TCR_桃園_5組', version: "T24.11.11"},
    { deviceId: "TCR00002", deviceName: "台中分行TCR", area: "TXG", typeId: "Device02", typeName: "TCR系統", groupIds: ['TCRTXG0003'], groupName: 'TCR_台中_3組', version: "T25.01.01"},
    // 門禁
    { deviceId: "ASC00001", deviceName: "內湖分行1號門", area: "TPE", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSTPE0004'], groupName: 'ACS_台北_4組', version: "D25.01.01"},
    { deviceId: "ASC00002", deviceName: "內湖分行2號門", area: "TPE", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSTPE0004'], groupName: 'ACS_台北_4組', version: "D25.01.01"},
    { deviceId: "ASC00003", deviceName: "內湖分行3號門", area: "TPE", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSTPE0004'], groupName: 'ACS_台北_4組', version: "D24.11.11"},
    { deviceId: "ASC00004", deviceName: "松山分行1號門", area: "TPE", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSTPE0005'], groupName: 'ACS_台北_5組', version: "D25.01.01"},
    { deviceId: "ASC00005", deviceName: "松山分行2號門", area: "TPE", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSTPE0005'], groupName: 'ACS_台北_5組', version: "D25.01.01"},
    { deviceId: "ASC00006", deviceName: "松山分行3號門", area: "TPE", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSTPE0005'], groupName: 'ACS_台北_5組', version: "D24.11.11"},
    { deviceId: "ASC00007", deviceName: "中和分行1號門", area: "NWT", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSNWT0007'], groupName: 'ACS_新北_7組', version: "D25.01.01"},
    { deviceId: "ASC00008", deviceName: "中和分行2號門", area: "NWT", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSNWT0007'], groupName: 'ACS_新北_7組', version: "D25.01.01"},
    { deviceId: "ASC00009", deviceName: "中和分行3號門", area: "NWT", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSNWT0007'], groupName: 'ACS_新北_7組', version: "D24.11.11"},
    { deviceId: "ASC00010", deviceName: "台中南屯分行1號門", area: "TXG", typeId: "Device03", typeName: "門禁系統", groupIds: [], groupName: '尚未', version: "D25.01.01"},
    { deviceId: "ASC00011", deviceName: "台中南屯分行2號門", area: "TXG", typeId: "Device03", typeName: "門禁系統", groupIds: [], groupName: '尚未', version: "D25.01.01"},
    { deviceId: "ASC00012", deviceName: "台南永康分行1號門", area: "TNN", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSTNN0010'], groupName: 'ACS_台南_10組', version: "D24.11.11"},
    { deviceId: "ASC00013", deviceName: "台南永康分行2號門", area: "TNN", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSTNN0010'], groupName: 'ACS_台南_10組', version: "D25.01.01"},
    { deviceId: "ASC00014", deviceName: "台南永康分行3號門", area: "TNN", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSTNN0010'], groupName: 'ACS_台南_10組', version: "D25.01.01"},
    { deviceId: "ASC00015", deviceName: "台南永康分行4號門", area: "TNN", typeId: "Device03", typeName: "門禁系統", groupIds: ['ACSTNN0010'], groupName: 'ACS_台南_10組', version: "D24.12.12"},
    // 監控
    { deviceId: "SCADA00001", deviceName: "桃園中壢分行1號機", area: "TAO", typeId: "Device04", typeName: "監控系統", groupIds: ['SCADATAO0001'], groupName: 'SCADA_桃園_1組', version: "C25.01.01"},
    { deviceId: "SCADA00002", deviceName: "桃園八德分行1號機", area: "TAO", typeId: "Device04", typeName: "監控系統", groupIds: ['SCADATAO0002'], groupName: 'SCADA_桃園_2組', version: "C25.01.01"},
    { deviceId: "SCADA00003", deviceName: "台北信義分行1號機", area: "TPE", typeId: "Device04", typeName: "監控系統", groupIds: ['SCADATPE0003'], groupName: 'SCADA_台北_3組', version: "C24.12.12"},
    { deviceId: "SCADA00004", deviceName: "高雄苓雅分行1號機", area: "KHH", typeId: "Device04", typeName: "監控系統", groupIds: ['SCADAKHH0006'], groupName: 'SCADA_高雄_6組', version: "C25.01.01"},
    { deviceId: "SCADA00005", deviceName: "高雄苓雅分行2號機", area: "KHH", typeId: "Device04", typeName: "監控系統", groupIds: ['SCADAKHH0006'], groupName: 'SCADA_高雄_6組', version: "C25.01.01"},
    { deviceId: "SCADA00006", deviceName: "高雄苓雅分行3號機", area: "KHH", typeId: "Device04", typeName: "監控系統", groupIds: ['SCADAKHH0006'], groupName: 'SCADA_高雄_6組', version:"C24.12.12"},
    { deviceId: "SCADA00007", deviceName: "宜蘭分行1號機", area: "YLN", typeId: "Device04", typeName: "監控系統", groupIds: ['SCADAYLN0008'], groupName: 'SCADA_宜蘭_8組', version: "C25.01.01"},
    { deviceId: "SCADA00008", deviceName: "宜蘭分行2號機", area: "YLN", typeId: "Device04", typeName: "監控系統", groupIds: ['SCADAYLN0008'], groupName: 'SCADA_宜蘭_8組', version: "C25.01.01"},
    { deviceId: "SCADA00009", deviceName: "宜蘭分行3號機", area: "YLN", typeId: "Device04", typeName: "監控系統", groupIds: ['SCADAYLN0008'], groupName: 'SCADA_宜蘭_8組', version: "C24.12.12"},

]
*/

//設備組別資料
const deviceGroupList = [
  // 循環機(OKI-RG7)
  { groupId: 'GR_OKI_TPE2500001', groupName: '循環機OKI-RG7_測試組', groupTag: '測試組', deviceTypeCode: "OKI-RG7", modId: 'Admin', lastVersion: 'A25.05.01', lastSendDate: '2025-06-01' },
  { groupId: 'GR_OKI_TPE2500002', groupName: '循環機OKI-RG7_台北區1組', groupTag: '台北組', deviceTypeCode: "OKI-RG7", modId: 'Admin', lastVersion: 'A25.05.01', lastSendDate: '2025-06-01' },


  /*  
  { groupId: 'ATMTPE0001', groupName: 'ATM_台北_1組', groupTag: '台北_松山區', deviceTypeCode: "OKI-RG7", typeName: 'ATM系統', organId: '0123419', organName: '富邦松山分行', modId: 'Admin', lastVersion: 'A25.05.01', lastSendDate: '2025-06-01' },
  { groupId: 'ATMTPE0002', groupName: 'ATM_台北_2組', groupTag: '台北_信義區', deviceTypeCode: "OKI-RG7", typeName: 'ATM系統', organId: '0123420', organName: '富邦信義分行', modId: 'Admin', lastVersion: 'A25.05.01', lastSendDate: '2025-06-02' },
  { groupId: 'ATMTAO0003', groupName: 'ATM_桃園_3組', groupTag: '桃園_中壢區', deviceTypeCode: "OKI-RG7", typeName: 'ATM系統', organId: '0123421', organName: '富邦桃園分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ATMTXG0004', groupName: 'ATM_台中_4組', groupTag: '台中_南屯區', deviceTypeCode: "OKI-RG7", typeName: 'ATM系統', organId: '0123422', organName: '富邦南屯分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ATMNWT0005', groupName: 'ATM_新北_5組', groupTag: '新北_板橋區', deviceTypeCode: "OKI-RG7", typeName: 'ATM系統', organId: '0123423', organName: '富邦板橋分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ATMNWT0006', groupName: 'ATM_新北_6組', groupTag: '新北_永和區', deviceTypeCode: "OKI-RG7", typeName: 'ATM系統', organId: '0123424', organName: '富邦永和分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ATMMIA0007', groupName: 'ATM_苗栗_7組', groupTag: '苗栗_頭份區', typeId: 'Device01', typeName: 'ATM系統', organId: '0123425', organName: '富邦頭份分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ATMHSZ0008', groupName: 'ATM_新竹_8組', groupTag: '新竹_東區', typeId: 'Device01', typeName: 'ATM系統', organId: '0123426', organName: '富邦新竹分行', modId: 'Admin', lastVersion: 'A25.05.01', lastSendDate: '2025-06-01' },
  { groupId: 'ATMCHA0009', groupName: 'ATM_彰化_9組', groupTag: '彰化_員林區', typeId: 'Device01', typeName: 'ATM系統', organId: '0123427', organName: '富邦員林分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ATMNAN0010', groupName: 'ATM_南投_10組', groupTag: '南投_草屯區', typeId: 'Device01', typeName: 'ATM系統', organId: '0123428', organName: '富邦草屯分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ATMTPE0011', groupName: 'ATM_台北_11組', groupTag: '台北_大安區', typeId: 'Device01', typeName: 'ATM系統', organId: '0123429', organName: '富邦大安分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ATMTPE0012', groupName: 'ATM_台北_12組', groupTag: '台北_南港區', typeId: 'Device01', typeName: 'ATM系統', organId: '0123430', organName: '富邦南港分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },

  // 💰 TCR 系統（5 組）
  { groupId: 'TCRTPE0001', groupName: 'TCR_台北_1組', groupTag: '台北_內湖區', typeId: 'Device02', typeName: 'TCR系統', organId: '0123501', organName: '富邦內湖分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'TCRNWT0002', groupName: 'TCR_新北_2組', groupTag: '新北_新莊區', typeId: 'Device02', typeName: 'TCR系統', organId: '0123502', organName: '富邦新莊分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'TCRTXG0003', groupName: 'TCR_台中_3組', groupTag: '台中_北屯區', typeId: 'Device02', typeName: 'TCR系統', organId: '0123503', organName: '富邦北屯分行', modId: 'Admin', lastVersion: 'T25.01.01', lastSendDate: '2025-06-03' },
  { groupId: 'TCRHSZ0004', groupName: 'TCR_新竹_4組', groupTag: '新竹_竹北區', typeId: 'Device02', typeName: 'TCR系統', organId: '0123504', organName: '富邦竹北分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'TCRTAO0005', groupName: 'TCR_桃園_5組', groupTag: '桃園_蘆竹區', typeId: 'Device02', typeName: 'TCR系統', organId: '0123505', organName: '富邦蘆竹分行', modId: 'Admin', lastVersion: '', lastSendDate: '' },

  // 門禁系統（15 組）
  { groupId: 'ACSTPE0001', groupName: 'ACS_台北_1組', groupTag: '台北_信義區', typeId: 'Device03', typeName: '門禁系統', organId: '0123601', organName: '信義商業大樓', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ACSTPE0002', groupName: 'ACS_台北_2組', groupTag: '台北_大安區', typeId: 'Device03', typeName: '門禁系統', organId: '0123602', organName: '大安科技園區', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ACSTPE0003', groupName: 'ACS_台北_3組', groupTag: '台北_中山區', typeId: 'Device03', typeName: '門禁系統', organId: '0123603', organName: '台北金融中心', modId: 'Admin', lastVersion: 'D25.01.01', lastSendDate: '2025-06-04' },
  { groupId: 'ACSTPE0004', groupName: 'ACS_台北_4組', groupTag: '台北_內湖區', typeId: 'Device03', typeName: '門禁系統', organId: '0123604', organName: '內湖科技園區', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ACSTPE0005', groupName: 'ACS_台北_5組', groupTag: '台北_松山區', typeId: 'Device03', typeName: '門禁系統', organId: '0123605', organName: '松山機場', modId: 'Admin', lastVersion: 'D25.01.01', lastSendDate: '2025-06-04' },
  { groupId: 'ACSNWT0006', groupName: 'ACS_新北_6組', groupTag: '新北_三重區', typeId: 'Device03', typeName: '門禁系統', organId: '0123606', organName: '三重工業區', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ACSNWT0007', groupName: 'ACS_新北_7組', groupTag: '新北_中和區', typeId: 'Device03', typeName: '門禁系統', organId: '0123607', organName: '中和科技大樓', modId: 'Admin', lastVersion: 'D25.03.01', lastSendDate: '2025-06-05' },
  { groupId: 'ACSTXG0008', groupName: 'ACS_台中_8組', groupTag: '台中_西屯區', typeId: 'Device03', typeName: '門禁系統', organId: '0123608', organName: '台中科學園區', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ACSTXG0009', groupName: 'ACS_台中_9組', groupTag: '台中_南屯區', typeId: 'Device03', typeName: '門禁系統', organId: '0123609', organName: '台中軟體園區', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'ACSTNN0010', groupName: 'ACS_台南_10組', groupTag: '台南_永康區', typeId: 'Device03', typeName: '門禁系統', organId: '0123610', organName: '台南工業區', modId: 'Admin', lastVersion: 'D25.05.06', lastSendDate: '2025-06-06' },
  { groupId: 'ACSTNN0011', groupName: 'ACS_台南_11組', groupTag: '台南_安平區', typeId: 'Device03', typeName: '門禁系統', organId: '0123611', organName: '安平古堡', modId: 'Admin', lastVersion: 'D25.05.06', lastSendDate: '2025-06-06' },
  { groupId: 'ACSKHH0012', groupName: 'ACS_高雄_12組', groupTag: '高雄_楠梓區', typeId: 'Device03', typeName: '門禁系統', organId: '0123612', organName: '楠梓加工出口區', modId: 'Admin', lastVersion: 'D25.01.01', lastSendDate: '2025-06-07' },
  { groupId: 'ACSKHH0013', groupName: 'ACS_高雄_13組', groupTag: '高雄_苓雅區', typeId: 'Device03', typeName: '門禁系統', organId: '0123613', organName: '高雄展覽館', modId: 'Admin', lastVersion: 'D25.01.01', lastSendDate: '2025-06-07' },
  { groupId: 'ACSPTG0014', groupName: 'ACS_屏東_14組', groupTag: '屏東_屏東市', typeId: 'Device03', typeName: '門禁系統', organId: '0123614', organName: '屏東科技園區', modId: 'Admin', lastVersion: 'D25.06.28', lastSendDate: '2025-07-01' },
  { groupId: 'ACSTPE0015', groupName: 'ACS_台北_15組', groupTag: '台北_南港區', typeId: 'Device03', typeName: '門禁系統', organId: '0123615', organName: '南港展覽館', modId: 'Admin', lastVersion: '', lastSendDate: '' },

  // 🎥 監控系統 SCADA（9 組）
  { groupId: 'SCADATAO0001', groupName: 'SCADA_桃園_1組', groupTag: '桃園_中壢區', typeId: 'Device04', typeName: '監控系統', organId: '0123701', organName: '中壢監控站', modId: 'Admin', lastVersion: 'C25.01.01', lastSendDate: '2025-06-09' },
  { groupId: 'SCADATAO0002', groupName: 'SCADA_桃園_2組', groupTag: '桃園_八德區', typeId: 'Device04', typeName: '監控系統', organId: '0123702', organName: '八德監控站', modId: 'Admin', lastVersion: 'C25.01.01', lastSendDate: '2025-06-09' },
  { groupId: 'SCADATPE0003', groupName: 'SCADA_台北_3組', groupTag: '台北_信義區', typeId: 'Device04', typeName: '監控系統', organId: '0123703', organName: '信義監控中心', modId: 'Admin', lastVersion: 'C25.03.12', lastSendDate: '2025-06-10' },
  { groupId: 'SCADATXG0004', groupName: 'SCADA_台中_4組', groupTag: '台中_西屯區', typeId: 'Device04', typeName: '監控系統', organId: '0123704', organName: '西屯監控中心', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'SCADATNN0005', groupName: 'SCADA_台南_5組', groupTag: '台南_永康區', typeId: 'Device04', typeName: '監控系統', organId: '0123705', organName: '永康監控站', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'SCADAKHH0006', groupName: 'SCADA_高雄_6組', groupTag: '高雄_苓雅區', typeId: 'Device04', typeName: '監控系統', organId: '0123706', organName: '苓雅監控中心', modId: 'Admin', lastVersion: 'C25.07.03', lastSendDate: '2025-06-11' },
  { groupId: 'SCADAPTG0007', groupName: 'SCADA_屏東_7組', groupTag: '屏東_屏東市', typeId: 'Device04', typeName: '監控系統', organId: '0123707', organName: '屏東監控站', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'SCADAYLN0008', groupName: 'SCADA_宜蘭_8組', groupTag: '宜蘭_宜蘭市', typeId: 'Device04', typeName: '監控系統', organId: '0123708', organName: '宜蘭監控中心', modId: 'Admin', lastVersion: '', lastSendDate: '' },
  { groupId: 'SCADATAO0009', groupName: 'SCADA_桃園_9組', groupTag: '桃園_桃園區', typeId: 'Device04', typeName: '監控系統', organId: '0123709', organName: '桃園監控總站', modId: 'Admin', lastVersion: '', lastSendDate: '' }
*/
];

//軟體版本資料
const versionList = [
  // 循環機(OKI-RG7)
  { versionId: "A250401", version: "A25.04.01", deviceTypeCode: 'OKI-RG7', versionName: "ATM 4月更新", modId: "Admin", createdAt: "2025-04-01" },
  { versionId: "A250501", version: "A25.05.01", deviceTypeCode: 'OKI-RG7', versionName: "ATM 5月更新", modId: "Admin", createdAt: "2025-05-01" },
  { versionId: "A250601", version: "A25.06.01", deviceTypeCode: 'OKI-RG7', versionName: "ATM 6月更新", modId: "Admin", createdAt: "2025-06-01" },

  /*
  // TCR 系統 Device02
  { versionId: "T250101", version: "T25.01.01", typeId: "Device02", versionName: "TCR 1月更新", modId: "Admin", createdAt: "2025-01-01" },
  { versionId: "T250401", version: "T25.04.01", typeId: "Device02", versionName: "TCR 4月更新", modId: "Admin", createdAt: "2025-04-01" },
  { versionId: "T250515", version: "T25.05.15", typeId: "Device02", versionName: "TCR 5月中修正", modId: "Admin", createdAt: "2025-05-15" },
  { versionId: "T250620", version: "T25.06.20", typeId: "Device02", versionName: "TCR 6月強化", modId: "Admin", createdAt: "2025-06-20" },
 
  // 門禁系統 Device03
  { versionId: "D250101", version: "D25.01.01", typeId: "Device03", versionName: "門禁冬季版", modId: "Admin", createdAt: "2025-01-01" },
  { versionId: "D250301", version: "D25.03.01", typeId: "Device03", versionName: "門禁春季版", modId: "Admin", createdAt: "2025-03-01" },
  { versionId: "D250506", version: "D25.05.06", typeId: "Device03", versionName: "門禁五月改版", modId: "Admin", createdAt: "2025-05-06" },
  { versionId: "D250628", version: "D25.06.28", typeId: "Device03", versionName: "門禁6月功能新增", modId: "Admin", createdAt: "2025-06-28" },
 
  // 監控系統 SCADA Device04
  { versionId: "C250312", version: "C25.03.12", typeId: "Device04", versionName: "監控3月維護", modId: "Admin", createdAt: "2025-03-12" },
  { versionId: "C250511", version: "C25.05.11", typeId: "Device04", versionName: "監控五月升級", modId: "Admin", createdAt: "2025-05-11" },
  { versionId: "C250703", version: "C25.07.03", typeId: "Device04", versionName: "SCADA 7月版本", modId: "Admin", createdAt: "2025-07-03" }
  */
];


// 狀態對應排序與顏色
const reviewStatus = [
	{ statusName: "核准", statusCode: 2, colorBadge: "badge-success" },
	{ statusName:"審核中", statusCode: 0, colorBadge: "badge-warning" },
	{ statusName: "退回", statusCode: 1, colorBadge: "badge-danger" }
];

//設備軟體排程資料
const deviceScheduleList = [
    /* ===============================
       1. 循環機 OKI-RG7
     =============================== */
  // 循環機(OKI-RG7)  核准 (status = 2)
  { scheduleId: 'SCH_OKI_25010101', reviewStatus:2, deviceIds: ['A012200901','A012200902'], groupIds: ['GR_OKI_TPE2500001'], deviceTypeCode: 'OKI-RG7', sendVersionId: "A250501", dispatchType: ["PUSH","PULL"], sendVersion: 'A250501', scheduleDate: '2025-06-01', timePeriod: [{ start: "10:00", end: "12:00" }, { start: "19:00", end: "21:00" }, { start: "01:00", end: "05:00" }], updateTime: '2025-07-01 23:59:59' },
  { scheduleId: 'SCH_OKI_25010102', reviewStatus: 2, deviceIds: ['A012200902'], groupIds: ['GR_OKI_TPE2500002'], deviceTypeCode: 'OKI-RG7', sendVersionId: "A250601", dispatchType: ["PULL","PUSH"], sendVersion: 'A25.06.01', scheduleDate: '2025-06-05', timePeriod: [{ start: "10:00", end: "12:00" }, { start: "19:00", end: "21:00" }], updateTime: '2025-07-03 00:00:00' },

  // 審核中 (status = 0)
  { scheduleId: 'SCH_OKI_25010201', reviewStatus: 0, deviceIds: ['A012200903'], groupIds: ['GR_OKI_NTP01'], deviceTypeCode: 'OKI-RG7', sendVersionId: "A250601", dispatchType: ["PULL"], sendVersion: 'A25.06.02', scheduleDate: '2025-06-10', timePeriod: [{ start: "14:00", end: "16:00" }], updateTime: '2025-07-10 23:59:59' },
  { scheduleId: 'SCH_OKI_25010202', reviewStatus: 0, deviceIds: ['A012200904'], groupIds: ['GR_OKI_NTP02'], deviceTypeCode: 'OKI-RG7', sendVersionId: "A250401", dispatchType: ["PUSH"], sendVersion: 'A25.07.01', scheduleDate: '2025-06-12', timePeriod: [{ start: "01:00", end: "05:00" }], updateTime: '2025-07-12 23:59:59' },

  // 退回 (status = 1)
  { scheduleId: 'SCH_OKI_25010301', reviewStatus: 1, deviceIds: ['A012200905'], groupIds: ['GR_OKI_KHH01'], deviceTypeCode: 'OKI-RG7', sendVersionId: "A250601", dispatchType: ["PUSH","PULL"], sendVersion: 'A25.08.01', scheduleDate: '2025-06-15', timePeriod: [{ start: "08:00", end: "09:30" }], updateTime: '2025-07-15 23:59:59' },
  { scheduleId: 'SCH_OKI_25010302', reviewStatus: 1, deviceIds: ['A012200906'], groupIds: ['GR_OKI_KHH02'], deviceTypeCode: 'OKI-RG7', sendVersionId: "A250502", dispatchType: ["PULL"], sendVersion: 'A25.08.02', scheduleDate: '2025-06-18', timePeriod: [{ start: "20:00", end: "23:00" }], updateTime: '2025-07-18 23:59:59' }
/*
   ===============================
       2. 自動提款機 WIN-1500XE
   =============================== 

  // 核准
  { scheduleId: 'SCH_WIN_25020101', reviewStatus: 2, deviceIds: ['W012300901'], groupIds: ['GR_WIN_TPE01'], deviceTypeCode: 'WIN-1500XE', sendVersionId: "B250501", dispatchType: ["PUSH"], sendVersion: 'B25.05.01', scheduleDate: '2025-07-01', timePeriod: [{ start: "09:00", end: "11:00" }], updateDate: '2025-08-01' },
  { scheduleId: 'SCH_WIN_25020102', reviewStatus: 2, deviceIds: ['W012300902'], groupIds: ['GR_WIN_TPE02'], deviceTypeCode: 'WIN-1500XE', sendVersionId: "B250601", dispatchType: ["PULL"], sendVersion: 'B25.06.01', scheduleDate: '2025-07-03', timePeriod: [{ start: "18:00", end: "20:00" }], updateDate: '2025-08-03' },

  // 審核中
  { scheduleId: 'SCH_WIN_25020201', reviewStatus: 0, deviceIds: ['W012300903'], groupIds: ['GR_WIN_NTP01'], deviceTypeCode: 'WIN-1500XE', sendVersionId: "B250701", dispatchType: ["PUSH","PULL"], sendVersion: 'B25.07.01', scheduleDate: '2025-07-10', timePeriod: [{ start: "02:00", end: "04:00" }], updateDate: '2025-08-10' },
  { scheduleId: 'SCH_WIN_25020202', reviewStatus: 0, deviceIds: ['W012300904'], groupIds: ['GR_WIN_NTP02'], deviceTypeCode: 'WIN-1500XE', sendVersionId: "B250702", dispatchType: ["PULL"], sendVersion: 'B25.07.02', scheduleDate: '2025-07-12', timePeriod: [{ start: "09:00", end: "10:00" }], updateDate: '2025-08-12' },

  // 退回
  { scheduleId: 'SCH_WIN_25020301', reviewStatus: 1, deviceIds: ['W012300905'], groupIds: ['GR_WIN_KHH01'], deviceTypeCode: 'WIN-1500XE', sendVersionId: "B250801", dispatchType: ["PUSH"], sendVersion: 'B25.08.01', scheduleDate: '2025-07-15', timePeriod: [{ start: "22:00", end: "23:30" }], updateDate: '2025-08-15' },
  { scheduleId: 'SCH_WIN_25020302', reviewStatus: 1, deviceIds: ['W012300906'], groupIds: ['GR_WIN_KHH02'], deviceTypeCode: 'WIN-1500XE', sendVersionId: "B250802", dispatchType: ["PULL","PUSH"], sendVersion: 'B25.08.02', scheduleDate: '2025-07-17', timePeriod: [{ start: "05:00", end: "07:00" }], updateDate: '2025-08-17' },


   ===============================
       3. 循環機 HITACHI-CZ5000
     =============================== 

  // 核准
  { scheduleId: 'SCH_HIT_25030101', reviewStatus: 2, deviceIds: ['H013300901'], groupIds: ['GR_HIT_TPE01'], deviceTypeCode: 'HITACHI-CZ5000', sendVersionId: "C250501", dispatchType: ["PUSH"], sendVersion: 'C25.05.01', scheduleDate: '2025-08-01', timePeriod: [{ start: "07:00", end: "09:00" }], updateDate: '2025-09-01' },
  { scheduleId: 'SCH_HIT_25030102', reviewStatus: 2, deviceIds: ['H013300902'], groupIds: ['GR_HIT_TPE02'], deviceTypeCode: 'HITACHI-CZ5000', sendVersionId: "C250601", dispatchType: ["PULL"], sendVersion: 'C25.06.01', scheduleDate: '2025-08-03', timePeriod: [{ start: "15:00", end: "17:00" }], updateDate: '2025-09-03' },

  // 審核中
  { scheduleId: 'SCH_HIT_25030201', reviewStatus: 0, deviceIds: ['H013300903'], groupIds: ['GR_HIT_NTP01'], deviceTypeCode: 'HITACHI-CZ5000', sendVersionId: "C250701", dispatchType: ["PUSH","PULL"], sendVersion: 'C25.07.01', scheduleDate: '2025-08-10', timePeriod: [{ start: "03:00", end: "05:00" }], updateDate: '2025-09-10' },
  { scheduleId: 'SCH_HIT_25030202', reviewStatus: 0, deviceIds: ['H013300904'], groupIds: ['GR_HIT_NTP02'], deviceTypeCode: 'HITACHI-CZ5000', sendVersionId: "C250702", dispatchType: ["PULL"], sendVersion: 'C25.07.02', scheduleDate: '2025-08-12', timePeriod: [{ start: "13:00", end: "14:00" }], updateDate: '2025-09-12' },

  // 退回
  { scheduleId: 'SCH_HIT_25030301', reviewStatus: 1, deviceIds: ['H013300905'], groupIds: ['GR_HIT_KHH01'], deviceTypeCode: 'HITACHI-CZ5000', sendVersionId: "C250801", dispatchType: ["PUSH"], sendVersion: 'C25.08.01', scheduleDate: '2025-08-15', timePeriod: [{ start: "00:00", end: "02:00" }], updateDate: '2025-09-15' },
  { scheduleId: 'SCH_HIT_25030302', reviewStatus: 1, deviceIds: ['H013300906'], groupIds: ['GR_HIT_KHH02'], deviceTypeCode: 'HITACHI-CZ5000', sendVersionId: "C250802", dispatchType: ["PULL","PUSH"], sendVersion: 'C25.08.02', scheduleDate: '2025-08-17', timePeriod: [{ start: "18:00", end: "20:00" }], updateDate: '2025-09-17' },
*/
];

const DispatchStatus = {
  PENDING: 'PENDING',      // 待派送
  SUCCESS: 'SUCCESS',      // 派送完成
};

const UpdateStatus = {
  PENDING: 'PENDING',      // 待更新
  SUCCESS: 'SUCCESS',      // 更新成功
  FAILED: 'FAILED',        // 更新失敗
}

const scheduleStatusList = [
  { 
    scheduleId: 'SCH_OKI_25010101',
    devices: [{ deviceId: 'A012200902', deviceLocate: '高雄市-中雅門市', organId: '0120016', organName: '營運中心', dispatchStatus: 'SUCCESS', updateStatus: 'SUCCESS' }],
    groups: [{ groupId: 'GR_OKI_TPE2500001',groupName: '循環機OKI-RG7_測試組',groupTag: '測試組',deviceTypeCode: 'OKI-RG7',dispatchProgress: '50%',
      groupDevices: [
          {deviceId: 'A012001601', deviceLocate: '台北市-大眾門市', organId: '0120016', organName: '營運中心', dispatchStatus: 'PENDING'},
          {deviceId: 'A012200901', deviceLocate: '台中市-大時代門市', organId: '0120016', organName: '營運中心', dispatchStatus: 'SUCCESS'}]
    }]
  }
];


