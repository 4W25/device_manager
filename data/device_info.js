// 狀態對應排序與顏色
const statusMap = {
	"審核中": { order: 1, color: "red" },
	"退回": { order: 2, color: "gray" },
	"核准": { order: 3, color: "blue" }
};

// 設備資料設定 deviceData.html
const deviceDataList = [
	// 退回
	{ deviceNo: 'A012341902', deviceName: '富邦松山分行ATM2', status: '核准', deviceId: "Device01", deviceType: 'OKI-RG7', organId: '0123419', organName: '富邦松山分行', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: "T012341902", deviceName: "富邦松山分行TCR2", status: '核准', deviceId: "Device02", deviceType: "OKI-RG7", organId: '0123419', organName: '富邦松山分行', modId: 'Admin3', cofId: '何牛' },
	// ATM
	{ deviceNo: 'A012001601', deviceName: '富邦濟南分行ATM1', status: '核准', deviceId: "Device01", deviceType: 'OKI-RG7', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012001602', deviceName: '富邦濟南分行ATM2', status: '核准', deviceId: "Device01", deviceType: 'OKI-RG7', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012001603', deviceName: '富邦濟南分行ATM3', status: '核准', deviceId: "Device01", deviceType: 'OKI-RG7', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012200901', deviceName: '富邦營業部ATM1', status: '核准', deviceId: "Device01", deviceType: 'OKI-RG7', organId: '0122009', organName: '富邦營業部', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012200902', deviceName: '富邦營業部ATM2', status: '核准', deviceId: "Device01", deviceType: 'OKI-RG7', organId: '0122009', organName: '富邦營業部', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012210201', deviceName: '富邦公庫處ATM1', status: '核准', deviceId: "Device01", deviceType: 'OKI-RG7', organId: '0122102', organName: '富邦公庫處', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012210202', deviceName: '富邦公庫處ATM2', status: '核准', deviceId: "Device01", deviceType: 'OKI-RG7', organId: '0122102', organName: '富邦公庫處', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012210203', deviceName: '富邦公庫處ATM3', status: '核准', deviceId: "Device01", deviceType: 'OKI-RG7', organId: '0122102', organName: '富邦公庫處', modId: 'Admin', cofId: '楊蔥圈' },
	// TCR
	{ deviceNo: "T012001601", deviceName: "富邦濟南分行TCR1", status: '核准', deviceId: "Device02", deviceType: "WIN-1500XE", organId: '0120016', organName: '富邦濟南分行', modId: 'Admin3', cofId: '何牛' },
	{ deviceNo: "T012200901", deviceName: "富邦營業部TCR1", status: '核准', deviceId: "Device02", deviceType: "WIN-1500XE", organId: '0122009', organName: '富邦營業部', modId: 'Admin3', cofId: '何牛' },
	// 門禁
	{ deviceNo: "D012001601", deviceName: "富邦濟南1號門", status: '核准', deviceId: "Device03", deviceType: "HITACHI-CZ5000", organId: '0120016', organName: '富邦濟南分行', modId: 'Admin1', cofId: '蔡桃貴' },
	{ deviceNo: "D012001602", deviceName: "富邦濟南2號門", status: '核准', deviceId: "Device03", deviceType: "HITACHI-CZ5000", organId: '0120016', organName: '富邦濟南分行', modId: 'Admin1', cofId: '蔡桃貴' },

]

// 設備資料設定覆核 deviceDataCheck.html
const deviceDataCheckList = [
	{ deviceNo: 'A012341901', deviceName: '富邦濟南分行ATM1', status: '核准', deviceId: "Device01", deviceType: "ATM系統", registrationDate: '2025-02-02', organId: '0123419', organName: '富邦濟南分行', modId: 'Admin', cofId: '', ip: '0.0.0.1' },
	{ deviceNo: "T012341901", deviceName: "富邦營業部TCR1", status: '核准', deviceId: "Device02", deviceType: "TCR系統", registrationDate: '2025-01-11', organId: '0123419', organName: '富邦營業部', modId: 'Admin3', cofId: '', ip: '0.0.0.2' },
	{ deviceNo: "D012341901", deviceName: "富邦長安東路1號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2025-01-11', organId: '0123419', organName: '富邦長安東路分行', modId: 'Admin1', cofId: '', ip: '0.0.0.3' },
	{ deviceNo: "C012341901", deviceName: "富邦松山1號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2025-01-11', organId: '0123419', organName: '富邦松山分行', modId: 'Admin2', cofId: '', ip: '0.0.0.4' },
]

// deviceDataEdit.所屬單位
const organList = [
	{ organId: '0120016', organName: '富邦濟南分行' },
	{ organId: '0122009', organName: '富邦營業部' },
	{ organId: '0122032', organName: '富邦長安東路分行' },
	{ organId: '0122102', organName: '富邦公庫處' },
	{ organId: '0123419', organName: '富邦松山分行' },
	{ organId: '0123420', organName: '富邦信義分行' },
	{ organId: '0123421', organName: '富邦桃園分行' },
	{ organId: '0123422', organName: '富邦南屯分行' },
	{ organId: '0123423', organName: '富邦板橋分行' },
	{ organId: '0123424', organName: '富邦永和分行' },
	{ organId: '0123425', organName: '富邦頭份分行' },
	{ organId: '0123426', organName: '富邦新竹分行' },
	{ organId: '0123427', organName: '富邦員林分行' },
	{ organId: '0123428', organName: '富邦草屯分行' },
	{ organId: '0123425', organName: '富邦頭份分行' },
	{ organId: '0123503', organName: '富邦北屯分行' },
	{ organId: '0123605', organName: '松山機場' },
	{ organId: '0123607', organName: '中和科技大樓' },
	{ organId: '0123610', organName: '台南工業區' },
	{ organId: '0123612', organName: '楠梓加工出口區' },
	{ organId: '0123614', organName: '屏東科技園區' },
	{ organId: '0123701', organName: '中壢監控站' },
	{ organId: '0123703', organName: '信義監控中心' },
	{ organId: '0123706', organName: '苓雅監控中心' },
]

// 設備資料:修改 deviceDataEdit.html
const deviceDataEditList = [
	// 審核中,退回
	{ deviceNo: 'A012341901', deviceName: '富邦松山分行ATM1', status: '核准', deviceId: "Device01", deviceType: 'ATM系統', registrationDate: '2025-02-02', organId: '0123419', organName: '富邦濟南分行', modId: 'Admin', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: 'A012341902', deviceName: '富邦松山分行ATM2', status: '核准', deviceId: "Device01", deviceType: 'ATM系統', registrationDate: '2025-02-02', organId: '0123419', organName: '富邦濟南分行', modId: 'Admin', cofId: '楊蔥圈', ip: '0.0.0.0' },
	{ deviceNo: "T012341901", deviceName: "富邦松山分行TCR1", status: '核准', deviceId: "Device02", deviceType: "TCR系統", registrationDate: '2025-01-11', organId: '0123419', organName: '富邦濟南分行', modId: 'Admin3', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "T012341902", deviceName: "富邦松山分行TCR2", status: '核准', deviceId: "Device02", deviceType: "TCR系統", registrationDate: '2025-01-11', organId: '0123419', organName: '富邦濟南分行', modId: 'Admin3', cofId: '何牛', ip: '0.0.0.0' },
	{ deviceNo: "D012341901", deviceName: "富邦松山1號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2025-01-11', organId: '0123419', organName: '富邦濟南分行', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "C012341901", deviceName: "富邦松山1號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2025-01-11', organId: '0123419', organName: '富邦濟南分行', modId: 'Admin2', cofId: '', ip: '0.0.0.0' },
	// ATM
	{ deviceNo: 'A012001601', deviceName: '富邦濟南分行ATM1', status: '核准', deviceId: "Device01", deviceType: 'ATM系統', registrationDate: '2024-09-09', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: 'A012001602', deviceName: '富邦濟南分行ATM2', status: '核准', deviceId: "Device01", deviceType: 'ATM系統', registrationDate: '2024-09-09', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: 'A012001603', deviceName: '富邦濟南分行ATM3', status: '核准', deviceId: "Device01", deviceType: 'ATM系統', registrationDate: '2024-09-09', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: 'A012200901', deviceName: '富邦營業部ATM1', status: '核准', deviceId: "Device01", deviceType: 'ATM系統', registrationDate: '2024-09-09', organId: '0122009', organName: '富邦營業部', modId: 'Admin', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: 'A012200902', deviceName: '富邦營業部ATM2', status: '核准', deviceId: "Device01", deviceType: 'ATM系統', registrationDate: '2024-09-09', organId: '0122009', organName: '富邦營業部', modId: 'Admin', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: 'A012210201', deviceName: '富邦公庫處ATM1', status: '核准', deviceId: "Device01", deviceType: 'ATM系統', registrationDate: '2024-09-09', organId: '0122102', organName: '富邦公庫處', modId: 'Admin', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: 'A012210202', deviceName: '富邦公庫處ATM2', status: '核准', deviceId: "Device01", deviceType: 'ATM系統', registrationDate: '2024-09-09', organId: '0122102', organName: '富邦公庫處', modId: 'Admin', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: 'A012210203', deviceName: '富邦公庫處ATM3', status: '核准', deviceId: "Device01", deviceType: 'ATM系統', registrationDate: '2024-09-09', organId: '0122102', organName: '富邦公庫處', modId: 'Admin', cofId: '', ip: '0.0.0.0' },
	// TCR
	{ deviceNo: "T012001601", deviceName: "富邦濟南分行TCR1", status: '核准', deviceId: "Device02", deviceType: "TCR系統", registrationDate: '2024-08-08', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin3', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "T012200901", deviceName: "富邦營業部TCR1", status: '核准', deviceId: "Device02", deviceType: "TCR系統", registrationDate: '2024-08-08', organId: '0122009', organName: '富邦營業部', modId: 'Admin3', cofId: '', ip: '0.0.0.0' },
	// 門禁
	{ deviceNo: "D012001601", deviceName: "富邦濟南1號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012001602", deviceName: "富邦濟南2號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012001603", deviceName: "富邦濟南3號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012200901", deviceName: "富邦營業部1號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122009', organName: '富邦營業部', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012200902", deviceName: "富邦營業部2號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122009', organName: '富邦營業部', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012200903", deviceName: "富邦營業部3號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122009', organName: '富邦營業部', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012203201", deviceName: "富邦長安東路1號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122032', organName: '富邦長安東路分行', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012203202", deviceName: "富邦長安東路2號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122032', organName: '富邦長安東路分行', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012203203", deviceName: "富邦長安東路3號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122032', organName: '富邦長安東路分行', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012210201", deviceName: "富邦公庫處1號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122102', organName: '富邦公庫處', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012210202", deviceName: "富邦公庫處2號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122102', organName: '富邦公庫處', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012210203", deviceName: "富邦公庫處3號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122102', organName: '富邦公庫處', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012210204", deviceName: "富邦公庫處4號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122102', organName: '富邦公庫處', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012210205", deviceName: "富邦公庫處5號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122102', organName: '富邦公庫處', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "D012210206", deviceName: "富邦公庫處6號門", status: '核准', deviceId: "Device03", deviceType: "門禁系統", registrationDate: '2024-10-10', organId: '0122102', organName: '富邦公庫處', modId: 'Admin1', cofId: '', ip: '0.0.0.0' },
	// 監控
	{ deviceNo: "C012001601", deviceName: "富邦濟南1號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2024-11-11', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin2', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "C012001602", deviceName: "富邦濟南2號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2024-11-11', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin2', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "C012001603", deviceName: "富邦濟南3號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2024-11-11', organId: '0120016', organName: '富邦濟南分行', modId: 'Admin2', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "C012200901", deviceName: "富邦營業部1號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2024-11-11', organId: '0122009', organName: '富邦營業部', modId: 'Admin2', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "C012200902", deviceName: "富邦營業部2號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2024-11-11', organId: '0122009', organName: '富邦營業部', modId: 'Admin2', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "C012200903", deviceName: "富邦營業部3號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2024-11-11', organId: '0122009', organName: '富邦營業部', modId: 'Admin2', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "C012203201", deviceName: "富邦長安東路1號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2024-11-11', organId: '0122032', organName: '富邦長安東路分行', modId: 'Admin2', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "C012203202", deviceName: "富邦長安東路2號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2024-11-11', organId: '0122032', organName: '富邦長安東路分行', modId: 'Admin2', cofId: '', ip: '0.0.0.0' },
	{ deviceNo: "C012203203", deviceName: "富邦長安東路3號機", status: '核准', deviceId: "Device04", deviceType: "監控系統", registrationDate: '2024-11-11', organId: '0122032', organName: '富邦長安東路分行', modId: 'Admin2', cofId: '', ip: '0.0.0.0' },
]

// 設備狀態查詢 deviceStatusQuery.html
const deviceStatusData = [
	// ATM
	{  deviceLocation: "全家楊鑫店", unit:"富邦濟南分行", deviceCode: "7f4b2a93", deviceId: "Device01", deviceName:"自動提款機", deviceModel: "WIN-1500XE", deviceType: "自動提款機(WIN-1500XE)", deviceStatus: "未派送", deviceVersion: "A25.01.01", updateTime: '2025-01-01', updateVersion: 0, modId: "admin" },
	{  deviceLocation: "7-11匯揚門市", unit:"富邦濟南分行", deviceCode: "3a91e9b5",deviceId: "Device01", deviceName:"自動提款機", deviceModel:"WIN-1500XE", deviceType: "自動提款機(WIN-1500XE)", deviceStatus: "已派送", deviceVersion: "A25.01.01", updateTime: '2025-01-01', updateVersion: 0, modId: "admin" },
	{  deviceLocation: "7-11大眾門市", unit:"富邦濟南分行", deviceCode: "a0246f9e",deviceId: "Device01", deviceName:"自動提款機", deviceModel:"WIN-1500XE", deviceType: "自動提款機(WIN-1500XE)", deviceStatus: "已更新", deviceVersion: "A24.11.11", updateTime: '2024-11-11', updateVersion: 1, modId: "admin" },
	{  deviceLocation: "全家堤頂店", unit:"富邦長安東路分行", deviceCode: "8c67a3d9",deviceId: "Device01", deviceName:"循環機", deviceModel:"OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceStatus: "更新失敗", deviceVersion: "A25.01.01", updateTime: '2025-01-04', updateVersion: 1, modId: "admin" },
	{  deviceLocation: "7-11大眾門市", unit:"富邦長安東路分行", deviceCode: "d42c54e7",deviceId: "Device01", deviceName:"循環機", deviceModel:"OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceStatus: "未派送", deviceVersion: "A25.01.01", updateTime: '2025-01-04', updateVersion: 1, modId: "admin" },
	{  deviceLocation: "7-11匯揚門市", unit:"富邦長安東路分行", deviceCode: "54a8c2f5",deviceId: "Device01", deviceName:"循環機", deviceModel:"OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceStatus: "已派送", deviceVersion: "D25.01.01", updateTime: '2025-01-06', updateVersion: 0, modId: "admin" },
	{  deviceLocation: "全家楊鑫店", unit:"富邦長安東路分行", deviceCode: "9e8b6a0d",deviceId: "Device01", deviceName:"循環機", deviceModel:"OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceStatus: "已更新", deviceVersion: "D25.01.01", updateTime: '2025-01-07', updateVersion: 0, modId: "admin" },
	{  deviceLocation: "富邦公庫處ATM2", unit:"富邦營業部", deviceCode: "6e92d27b", deviceName:"循環機", deviceModel:"HITACHI-CZ5000",deviceId: "Device01", deviceType: "循環機(HITACHI-CZ5000)", deviceStatus: "已更新", deviceVersion: "D24.12.12", updateTime: '2024-12-12', updateVersion: 0, modId: "admin" },
	{  deviceLocation: "富邦公庫處ATM3", unit:"富邦營業部", deviceCode: "f18a4a2e", deviceName:"循環機", deviceModel:"HITACHI-CZ5000",deviceId: "Device01", deviceType: "循環機(HITACHI-CZ5000)", deviceStatus: "更新失敗", deviceVersion: "D24.11.11", updateTime: '2024-11-11', updateVersion: 0, modId: "admin" },
]

// updateVersionHist.更新紀錄
  const versionHist = [
    // 自動提款機
    { deviceCode: "7f4b2a93", deviceModel: "WIN-1500XE", deviceType: "自動提款機(WIN-1500XE)", deviceVersion: "A25.01.01", updateTime: "2025-01-01", deviceStatus: "已派送", modId: "admin" },
    { deviceCode: "3a91e9b5", deviceModel: "WIN-1500XE", deviceType: "自動提款機(WIN-1500XE)", deviceVersion: "A25.01.01", updateTime: "2025-01-01", deviceStatus: "已派送", modId: "admin" },
    { deviceCode: "a0246f9e", deviceModel: "WIN-1500XE", deviceType: "自動提款機(WIN-1500XE)", deviceVersion: "A24.11.11", updateTime: "2024-11-11", deviceStatus: "已派送", modId: "admin" },

    // 循環機
    { deviceCode: "8c67a3d9", deviceModel: "OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceVersion: "A25.01.01", updateTime: "2025-01-01", deviceStatus: "已派送", modId: "admin" },
	{ deviceCode: "8c67a3d9", deviceModel: "OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceVersion: "A25.01.02", updateTime: "2025-01-02", deviceStatus: "已派送", modId: "admin" },
	{ deviceCode: "8c67a3d9", deviceModel: "OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceVersion: "A25.01.03", updateTime: "2025-01-03", deviceStatus: "已派送", modId: "admin" },
	{ deviceCode: "8c67a3d9", deviceModel: "OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceVersion: "A25.01.04", updateTime: "2025-01-04", deviceStatus: "已派送", modId: "admin" },
    { deviceCode: "d42c54e7", deviceModel: "OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceVersion: "A25.01.04", updateTime: "2025-01-05", deviceStatus: "已派送", modId: "admin" },
    { deviceCode: "54a8c2f5", deviceModel: "OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceVersion: "D25.01.05", updateTime: "2025-01-06", deviceStatus: "已派送", modId: "admin" },
    { deviceCode: "9e8b6a0d", deviceModel: "OKI-RG7", deviceType: "循環機(OKI-RG7)", deviceVersion: "D25.01.06", updateTime: "2025-01-07", deviceStatus: "已派送", modId: "admin" },
    { deviceCode: "6e92d27b", deviceModel: "HITACHI-CZ5000", deviceType: "循環機(HITACHI-CZ5000)", deviceVersion: "D24.12.12", updateTime: "2024-12-12", deviceStatus: "已派送", modId: "admin" },
    { deviceCode: "f18a4a2e", deviceModel: "HITACHI-CZ5000", deviceType: "循環機(HITACHI-CZ5000)", deviceVersion: "D24.11.11", updateTime: "2024-11-11", deviceStatus: "已派送", modId: "admin" }
  ];


//設備監控設定 deviceParam.html , divceParamEdit.html
const deviceParams = [
	// ATM
	{ deviceCode: 'ATM001', deviceId: "Device01", deviceType: 'ATM系統', paramValue: '', paramStatus: '核准', moduleName: '現金模組', moduleContent: '處理現金存取，通常分為取款模組和存款模組', applyDate: '2025-01-03', projectLeader: "admin2" },
	{ deviceCode: 'ATM002', deviceId: "Device01", deviceType: 'ATM系統', paramValue: '', paramStatus: '核准', moduleName: '卡片模組', moduleContent: '讀取客戶銀行卡信息（IC 卡或磁條卡）', applyDate: '2025-01-03', projectLeader: "admin2" },
	{ deviceCode: 'ATM003', deviceId: "Device01", deviceType: 'ATM系統', paramValue: '', paramStatus: '核准', moduleName: '憑條模組', moduleContent: '打印交易憑據', applyDate: '2025-01-03', projectLeader: "admin2" },
	{ deviceCode: 'ATM004', deviceId: "Device01", deviceType: 'ATM系統', paramValue: '', paramStatus: '核准', moduleName: '憑顯示模組', moduleContent: '顯示操作界面（例如觸摸屏）', applyDate: '2025-01-03', projectLeader: "admin1" },
	{ deviceCode: 'ATM006', deviceId: "Device01", deviceType: 'ATM系統', paramValue: '', paramStatus: '核准', moduleName: '百鈔存儲上限', moduleContent: '500000', applyDate: '2025-01-03', projectLeader: "admin2" },
	{ deviceCode: 'ATM005', deviceId: "Device01", deviceType: 'ATM系統', paramValue: '', paramStatus: '核准', moduleName: '千鈔存儲上限', moduleContent: '1000000', applyDate: '2025-01-03', projectLeader: "admin2" },
	// TCR
	{ deviceCode: 'TCR001', deviceId: "Device02", deviceType: 'TCR系統', paramValue: '', paramStatus: '核准', moduleName: '現金模組', moduleContent: '可處理多幣種現金的存取（包括分類和驗鈔功能）', applyDate: '2025-01-03', projectLeader: "admin3" },
	{ deviceCode: 'TCR002', deviceId: "Device02", deviceType: 'TCR系統', paramValue: '', paramStatus: '核准', moduleName: '分類模組', moduleContent: '將現金按面值分類，並存入對應的回收箱', applyDate: '2025-01-03', projectLeader: "admin3" },
	{ deviceCode: 'TCR003', deviceId: "Device02", deviceType: 'TCR系統', paramValue: '', paramStatus: '核准', moduleName: '驗鈔模組', moduleContent: '識別假鈔和破損的紙幣', applyDate: '2025-01-03', projectLeader: "admin3" },
	{ deviceCode: 'TCR004', deviceId: "Device02", deviceType: 'TCR系統', paramValue: '', paramStatus: '核准', moduleName: '存儲模組', moduleContent: '用於存放現金回收箱', applyDate: '2025-01-03', projectLeader: "admin3" },
	// 門禁
	{ deviceCode: 'DEV001', deviceId: "Device03", deviceType: '門禁系統', paramValue: '', paramStatus: '核准', moduleName: '門禁控制面板', moduleContent: '核心控制設備，負責處理來自各種輸入設備的信息，控制電鎖或警報系統', applyDate: '2025-01-01', projectLeader: "admin" },
	{ deviceCode: 'DEV002', deviceId: "Device03", deviceType: '門禁系統', paramValue: '', paramStatus: '核准', moduleName: '讀卡器', moduleContent: '用來驗證使用者身份，通過卡片識別等方式授權進入', applyDate: '2025-01-01', projectLeader: "admin" },
	{ deviceCode: 'DEV003', deviceId: "Device03", deviceType: '門禁系統', paramValue: '', paramStatus: '核准', moduleName: '指紋識別器', moduleContent: '用來驗證使用者身份，通過指紋識別等方式授權進入', applyDate: '2025-01-01', projectLeader: "admin" },
	{ deviceCode: 'DEV004', deviceId: "Device03", deviceType: '門禁系統', paramValue: '', paramStatus: '核准', moduleName: '人臉識別器', moduleContent: '用來驗證使用者身份，通過面部識別等方式授權進入', applyDate: '2025-01-01', projectLeader: "admin" },
	{ deviceCode: 'DEV005', deviceId: "Device03", deviceType: '門禁系統', paramValue: '', paramStatus: '核准', moduleName: '電磁鎖', moduleContent: '用來控制門的開關，只有在身份驗證成功後才會開鎖', applyDate: '2025-01-01', projectLeader: "admin" },
	{ deviceCode: 'DEV006', deviceId: "Device03", deviceType: '門禁系統', paramValue: '', paramStatus: '核准', moduleName: '身份識別模組', moduleContent: '如指紋識別模組、虹膜識別模組等，用來增強身份識別的安全性', applyDate: '2025-01-01', projectLeader: "admin" },
	{ deviceCode: 'DEV007', deviceId: "Device03", deviceType: '門禁系統', paramValue: '', paramStatus: '核准', moduleName: '門禁讀取介面', moduleContent: '用來與控制面板或雲端服務通信，傳送數據和指令', applyDate: '2025-01-01', projectLeader: "admin" },
	{ deviceCode: 'DEV008', deviceId: "Device03", deviceType: '門禁系統', paramValue: '', paramStatus: '核准', moduleName: '警報系統', moduleContent: '當無權人士嘗試進入時觸發警報，防止非法入侵', applyDate: '2025-01-01', projectLeader: "admin" },
	{ deviceCode: 'DEV009', deviceId: "Device03", deviceType: '門禁系統', paramValue: '', paramStatus: '核准', moduleName: '門禁軟體', moduleContent: '管理用戶、設置開門規則、查看進出紀錄等的後台軟體', applyDate: '2025-01-01', projectLeader: "admin" },
	// 監控
	{ deviceCode: 'CAM001', deviceId: "Device04", deviceType: '監控系統', paramValue: '', paramStatus: '核准', moduleName: '網絡視頻錄像機（NVR）', moduleContent: '數字錄像機，用來接收並儲存來自網絡攝像頭的視頻數據', applyDate: '2025-01-03', projectLeader: "admin1" },
	{ deviceCode: 'CAM002', deviceId: "Device04", deviceType: '監控系統', paramValue: '', paramStatus: '核准', moduleName: '數字視頻錄像機（DVR）', moduleContent: '通常與模擬攝像頭配合使用，錄製並儲存視頻資料', applyDate: '2025-01-03', projectLeader: "admin1" },
	{ deviceCode: 'CAM003', deviceId: "Device04", deviceType: '監控系統', paramValue: '', paramStatus: '核准', moduleName: '存儲設備', moduleContent: '硬碟或雲端服務，用來存儲視頻錄像和其他資料', applyDate: '2025-01-03', projectLeader: "admin1" },
	{ deviceCode: 'CAM004', deviceId: "Device04", deviceType: '監控系統', paramValue: '', paramStatus: '核准', moduleName: '監視顯示器', moduleContent: '用來顯示實時視頻畫面，通常連接到多個攝像頭', applyDate: '2025-01-03', projectLeader: "admin1" },
	{ deviceCode: 'CAM005', deviceId: "Device04", deviceType: '監控系統', paramValue: '', paramStatus: '核准', moduleName: '視頻管理軟件（VMS）', moduleContent: '用於監控、控制攝像頭，並管理錄製的視頻檔案，提供檢索、回放功能', applyDate: '2025-01-03', projectLeader: "admin1" },
	{ deviceCode: 'CAM006', deviceId: "Device04", deviceType: '監控系統', paramValue: '', paramStatus: '核准', moduleName: '移動偵測模組', moduleContent: '能夠自動偵測畫面中有無移動物體，並觸發錄影或警報', applyDate: '2025-01-03', projectLeader: "admin1" },
]

// 設備監控參數設定覆核 deviceParamCheck.html , divceParamEdit.html 
const applyDeviceParams = [
	{ deviceCode: 'TCR001', deviceId: "Device02", deviceType: 'TCR系統', paramValue: '', paramStatus: '核准', moduleName: '現金模組2', moduleContent: '可處理多幣種現金的存取2', applyDate: '2025-04-10', projectLeader: "admin3" },
	{ deviceCode: 'CAM007', deviceId: "Device04", deviceType: '監控系統', paramValue: '10', paramStatus: '核准', moduleName: '固定型攝像頭', moduleContent: '固定角度監視區域，常用於監視大型場地', applyDate: '2025-01-13', projectLeader: "admin2" },
	{ deviceCode: 'CAM008', deviceId: "Device04", deviceType: '監控系統', paramValue: '10', paramStatus: '核准', moduleName: '可旋轉攝像頭（PTZ Camera）', moduleContent: '可遠程控制旋轉、放大，具有更高的靈活性', applyDate: '2025-01-13', projectLeader: "admin2" },
	{ deviceCode: 'CAM009', deviceId: "Device04", deviceType: '監控系統', paramValue: '10', paramStatus: '核准', moduleName: '紅外線攝像頭', moduleContent: '能在低光或夜間條件下工作，提供紅外線影像', applyDate: '2025-01-13', projectLeader: "admin2" },
	{ deviceCode: 'CAM010', deviceId: "Device04", deviceType: '監控系統', paramValue: '10', paramStatus: '核准', moduleName: '高解析度攝像頭', moduleContent: '提供更清晰的影像，適用於需要高細節監控的環境', applyDate: '2025-01-13', projectLeader: "admin2" }
]

// 設備類型
const deviceTypeList = [
	{ deviceType: '循環機(OKI-RG7)', paramValue: '20', applyDate: '2025-01-03', modId: "admin2" },
	{ deviceType: '自動提款機(WIN-1500XE)', paramValue: '15', applyDate: '2025-01-03', modId: "admin2" },
	{ deviceType: '循環機(HITACHI-CZ5000)', paramValue: '20', applyDate: '2025-01-03', modId: "admin2" },

];

// 選單設定
const menu = [
	{ menuName: '基本管理', subMenuName: '設備資料設定', href: "deviceData.html" },
	{ menuName: '基本管理', subMenuName: '設備資料設定覆核', href: "deviceDataCheck.html" },
	{ menuName: '基本管理', subMenuName: '設備類型設定', href: "#" },
	{ menuName: '基本管理', subMenuName: '設備類型設定覆核', href: "#" },
	{ menuName: '基本管理', subMenuName: '設備組別設定', href: "#" },
	{ menuName: '基本管理', subMenuName: '設備組別設定覆核', href: "#" },
	{ menuName: '設備監控管理', subMenuName: '設備狀態查詢', href: "deviceStatusQuery.html" },
	{ menuName: '設備監控管理', subMenuName: '設備交易紀錄查詢', href: "#" },
	{ menuName: '設備監控管理', subMenuName: '設備監控參數設定', href: "deviceParam.html" },
	{ menuName: '設備監控管理', subMenuName: '設備監控參數設定覆核', href: "deviceParamCheck.html" },
	{ menuName: '設備監控管理', subMenuName: '設備交易代碼設定', href: "#" },
	{ menuName: '設備監控管理', subMenuName: '設備交易代碼設定覆核', href: "#" },
	{ menuName: '設備軟體派送管理', subMenuName: '設備軟體版本設定', href: "#" },
	{ menuName: '設備軟體派送管理', subMenuName: '設備軟體版本設定覆核', href: "#" },
	{ menuName: '設備軟體派送管理', subMenuName: '設備軟體排程', href: "#" },
	{ menuName: '設備軟體派送管理', subMenuName: '設備軟體排程覆核', href: "#" },
	{ menuName: '設備軟體派送管理', subMenuName: '設備版本更新紀錄查詢', href: "#" },
	{ menuName: '系統管理', subMenuName: '使用者設定', href: "#" },
	{ menuName: '系統管理', subMenuName: '使用者設定覆核', href: "#" },
	{ menuName: '系統管理', subMenuName: '群組設定', href: "#" },
	{ menuName: '系統管理', subMenuName: '選單設定', href: "#" },
	{ menuName: '系統管理', subMenuName: '權限管理', href: "#" },
	{ menuName: '系統管理', subMenuName: '權限管理覆核', href: "#" },
]

// device_info.js
const deviceUpdatesData = [
	{ deviceName:"循環機", deviceModel:"OKI-RG7", deviceCode:"8c67a3d9", unit:"富邦濟南分行", deviceLocation:"全家01店", deviceId: "ATM001", deviceType: "循環機(OKI-RG7)", lastVer: "無", isMandatory: "Y", previousVer: "無", verNo: "atm_v1.0.0", releaseNotes: "初版", updateTime: "2024/2/1 00:00:00", status: "已派送" },

	{ deviceName:"循環機", deviceModel:"OKI-RG7", deviceCode:"8c67a3d9", unit:"富邦濟南分行", deviceLocation:"全家01店", deviceId: "ATM003", deviceType: "循環機(OKI-RG7)", lastVer: "atm_v1.0.0", isMandatory: "N", previousVer: "無", verNo: "atm_v1.0.5", releaseNotes: "補丁：小幅修正", updateTime: "2024/2/5 00:00:00", status: "已派送" },
	{ deviceName:"循環機", deviceModel:"OKI-RG7", deviceCode:"8c67a3d9", unit:"富邦濟南分行", deviceLocation:"全家01店", deviceId: "ATM001", deviceType: "循環機(OKI-RG7)", lastVer: "atm_v1.0.5", isMandatory: "N", previousVer: "無", verNo: "atm_v1.0.6", releaseNotes: "補丁：小幅修正", updateTime: "2024/2/6 00:00:00", status: "已派送" },
	{ deviceName:"循環機", deviceModel:"OKI-RG7", deviceCode:"8c67a3d9", unit:"富邦濟南分行", deviceLocation:"全家01店", deviceId: "ATM001", deviceType: "循環機(OKI-RG7)", lastVer: "atm_v1.0.6", isMandatory: "N", previousVer: "無", verNo: "atm_v1.0.7", releaseNotes: "補丁：小幅修正", updateTime: "2024/2/7 00:00:00", status: "已派送" },
	{ deviceName:"循環機", deviceModel:"OKI-RG7", deviceCode:"8c67a3d9", unit:"富邦濟南分行", deviceLocation:"全家01店", deviceId: "ATM001", deviceType: "循環機(OKI-RG7)", lastVer: "atm_v1.0.7", isMandatory: "Y", previousVer: "atm_v1.0.7", verNo: "atm_v1.1.0", releaseNotes: "更新：安全性修正", updateTime: "2024/2/8 00:00:00", status: "已派送" },
	{ deviceName:"循環機", deviceModel:"OKI-RG7", deviceCode:"d42c54e7", unit:"富邦長安東路分行", deviceLocation:"7-11 01店", deviceId: "ATM006", deviceType: "循環機(OKI-RG7)", lastVer: "atm_v1.0.0", isMandatory: "N", previousVer: "無", verNo: "atm_v1.1.0", releaseNotes: "補丁：小幅修正", updateTime: "2024/2/8 00:00:00", status: "已派送" },
	{ deviceName:"循環機", deviceModel:"OKI-RG7", deviceCode:"d42c54e7", unit:"富邦長安東路分行", deviceLocation:"7-11 01店", deviceId: "ATM001", deviceType: "循環機(OKI-RG7)", lastVer: "atm_v1.1.0", isMandatory: "Y", previousVer: "無", verNo: "atm_v2.0.0", releaseNotes: "重大功能改版", updateTime: "2024/2/10 03:30:00", status: "已派送" },
	{ deviceName:"自動提款機", deviceModel:"WIN-1500XE", deviceCode:"6e92d27b", deviceLocation: "富邦公庫處ATM2", unit:"富邦營業部", deviceId: "ATM005", deviceType: "自動提款機(WIN-1500XE)", lastVer: "atm_v1.1.0", isMandatory: "Y", previousVer: "無", verNo: "atm_v2.0.0", releaseNotes: "重大功能改版", updateTime: "2024/2/10 03:30:00", status: "已派送" },
	{ deviceName:"循環機", deviceModel:"HITACHI-CZ5000", deviceCode:"a0246f9e", deviceLocation: "7-11大眾門市", unit:"富邦濟南分行", deviceId: "ATM006", deviceType: "循環機(HITACHI-CZ5000)", lastVer: "atm_v1.1.0", isMandatory: "Y", previousVer: "無", verNo: "atm_v2.0.0", releaseNotes: "重大功能改版", updateTime: "2024/2/10 03:30:00", status: "已派送" }
];

const deviceTransDataQuery = [
	//{ deviceCode: "d42c54e7", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 11:00:00", transType: "版本更新", updateStatus: "成功", transStatus: "成功", transDetail: "版本更新至 atm_v2.0.0", verNo: "atm_v2.0.0" },
	//{ deviceCode: "d42c54e7", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 11:05:00", transType: "版本更新", updateStatus: "成功", transStatus: "成功", transDetail: "版本更新至 atm_v2.0.0", verNo: "atm_v2.0.0" },
	//{ deviceCode: "d42c54e7", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 11:10:00", transType: "版本更新", updateStatus: "成功", transStatus: "成功", transDetail: "版本更新至 atm_v2.0.0", verNo: "atm_v2.0.0" },
	//{  deviceLocation: "全家楊鑫店", unit:"富邦濟南分行",  deviceName: "自動提款機", deviceModel: "WIN-1500XE", deviceCode: "7f4b2a93", deviceType: "自動提款機(WIN-1500XE)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 10:15:00", transType: "存款", updateStatus: "成功", transStatus: "成功", transDetail: "存款金額: 5000", verNo: "atm_v1.0.0" },
	//{  deviceLocation: "全家楊鑫店", unit:"富邦濟南分行",  deviceName: "自動提款機", deviceModel: "WIN-1500XE", deviceCode: "7f4b2a93", deviceType: "自動提款機(WIN-1500XE)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 10:20:00", transType: "存款", updateStatus: "成功", transStatus: "成功", transDetail: "存款金額: 8000", verNo: "atm_v1.0.0" },
	{  deviceLocation: "全家堤頂店", unit:"富邦長安東路分行",  deviceName: "循環機", deviceModel: "OKI-RG7", deviceCode: "8c67a3d9", deviceType: "循環機(OKI-RG7)", updateTime: "2025-11-03 23:30:00", transTime: "2025/2/11 10:25:00", transType: "存款", updateStatus: "成功", transStatus: "成功", transDetail: "存款金額: 12000", verNo: "atm_v1.0.0" },
	//{  deviceLocation: "全家堤頂店", unit:"富邦長安東路分行",  deviceName: "循環機", deviceModel: "OKI-RG7", deviceCode: "8c67a3d9", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 10:30:00", transType: "版本更新", updateStatus: "成功", transStatus: "成功", transDetail: "更新：安全性修正", verNo: "atm_v1.1.1" },
	//{  deviceLocation: "全家堤頂店", unit:"富邦長安東路分行",  deviceName: "循環機", deviceModel: "OKI-RG7", deviceCode: "8c67a3d9", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 10:35:00", transType: "版本更新", updateStatus: "成功", transStatus: "成功", transDetail: "更新：安全性修正", verNo: "atm_v1.1.2" },
	//{  deviceLocation: "全家堤頂店", unit:"富邦長安東路分行",  deviceName: "循環機", deviceModel: "OKI-RG7", deviceCode: "8c67a3d9", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 10:40:00", transType: "版本更新", updateStatus: "成功", transStatus: "成功", transDetail: "更新：安全性修正", verNo: "atm_v1.1.3" },
	//{  deviceLocation: "全家堤頂店", unit:"富邦長安東路分行",  deviceName: "循環機", deviceModel: "OKI-RG7", deviceCode: "8c67a3d9", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 10:45:00", transType: "提款", updateStatus: "成功", transStatus: "成功", transDetail: "提款金額: 3000", verNo: "atm_v1.1.3" },
	//{  deviceLocation: "全家堤頂店", unit:"富邦長安東路分行",  deviceName: "循環機", deviceModel: "OKI-RG7", deviceCode: "8c67a3d9", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 10:50:00", transType: "提款", updateStatus: "成功", transStatus: "成功", transDetail: "提款金額: 5000", verNo: "atm_v1.1.3" },
	//{  deviceLocation: "全家堤頂店", unit:"富邦長安東路分行",  deviceName: "循環機", deviceModel: "OKI-RG7", deviceCode: "8c67a3d9", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 10:55:00", transType: "提款", updateStatus: "成功", transStatus: "成功", transDetail: "提款金額: 7000", verNo: "atm_v1.1.3" },
	//{ deviceCode: "d42c54e7", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 11:00:00", transType: "版本更新", updateStatus: "成功", transStatus: "成功", transDetail: "版本更新至 atm_v2.0.0", verNo: "atm_v2.0.0" },
	//{ deviceCode: "d42c54e7", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 11:05:00", transType: "版本更新", updateStatus: "成功", transStatus: "成功", transDetail: "版本更新至 atm_v2.0.0", verNo: "atm_v2.0.0" },
	//{ deviceCode: "d42c54e7", deviceType: "循環機(OKI-RG7)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 11:10:00", transType: "版本更新", updateStatus: "成功", transStatus: "成功", transDetail: "版本更新至 atm_v2.0.0", verNo: "atm_v2.0.0" },
	//{  deviceLocation: "7-11大眾門市", unit:"富邦長安東路分行",   deviceName: "循環機", deviceModel: "HITACHI-CZ5000", deviceCode: "6e92d27b", deviceType: "循環機(HITACHI-CZ5000)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 11:15:00", transType: "存款", updateStatus: "成功", transStatus: "成功", transDetail: "存款金額: 5000", verNo: "atm_v2.0.0" },
	//{  deviceLocation: "7-11大眾門市", unit:"富邦長安東路分行",   deviceName: "循環機", deviceModel: "HITACHI-CZ5000", deviceCode: "6e92d27b", deviceType: "循環機(HITACHI-CZ5000)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 11:20:00", transType: "存款", updateStatus: "成功", transStatus: "成功", transDetail: "存款金額: 8000", verNo: "atm_v2.0.0" },
	//{  deviceLocation: "7-11大眾門市", unit:"富邦長安東路分行",  deviceName: "循環機", deviceModel: "HITACHI-CZ5000", deviceCode: "6e92d27b", deviceType: "循環機(HITACHI-CZ5000)", updateTime: "2025/2/11 10:00:00", transTime: "2025/2/11 11:25:00", transType: "存款", updateStatus: "成功", transStatus: "成功", transDetail: "存款金額: 12000", verNo: "atm_v2.0.0" },
];








const versionInfo = [
  {
    deviceName: "循環機",
    deviceModel: "OKI-RG7",
    deviceType: "循環機(OKI-RG7)",
    verNo: "atm_v1.0.0",
    updateTime: "2024/1/31 00:00:00",
    isMandatory: "Y",
    previousVer: "無",
    updateType: "程式",
    releaseNotes: "初版發布",
    status: "核准",
    uploadUser: "王小明",
    fileName: "OKI-RG7-01_atm_v1.0.0.zip",
    fileBase64: "UEsDBBQACAgIAMZ...",
	userNo:"S1234",
    modId: "王小明",
    modTime: "2025/01/10 12:00:00",
	cofNo:"S5678",
    cofId: "張小華",
    cofTime: "2025/01/10 12:10:00"
  },
  {
    deviceName: "循環機",
    deviceModel: "OKI-RG7",
    deviceType: "循環機(OKI-RG7)",
    verNo: "atm_v1.0.5",
    updateTime: "2024/2/3 00:00:00",
    isMandatory: "N",
    previousVer: "無",
    updateType: "資料",
    releaseNotes: "補丁：小幅修正",
    status: "核准",
    uploadUser: "王小明",
    fileName: "OKI-RG7-01_atm_v1.0.5.zip",
    fileBase64: "UEsDBBQACAgIAMZ...",
	userNo:"S1234",
    modId: "王小明",
    modTime: "2025/01/10 12:01:00",
	cofNo:"S5678",
    cofId: "張小華",
    cofTime: "2025/01/10 12:11:00"
  },
  {
    deviceName: "循環機",
    deviceModel: "OKI-RG7",
    deviceType: "循環機(OKI-RG7)",
    verNo: "atm_v1.0.6",
    updateTime: "2024/2/4 00:00:00",
    isMandatory: "N",
    previousVer: "無",
    updateType: "資料",
    releaseNotes: "補丁：小幅修正",
    status: "核准",
    uploadUser: "王小明",
    fileName: "OKI-RG7-01_atm_v1.0.6.zip",
    fileBase64: "UEsDBBQACAgIAMZ...",
	userNo:"S1234",
    modId: "王小明",
    modTime: "2025/01/10 12:02:00",
	cofNo:"S5678",
    cofId: "張小華",
    cofTime: "2025/01/10 12:12:00"
  },
  {
    deviceName: "循環機",
    deviceModel: "OKI-RG7",
    deviceType: "循環機(OKI-RG7)",
    verNo: "atm_v1.0.7",
    updateTime: "2024/2/5 00:00:00",
    isMandatory: "N",
    previousVer: "無",
    updateType: "新聞",
    releaseNotes: "補丁：小幅修正",
    status: "核准",
    uploadUser: "王小明",
    fileName: "OKI-RG7-01_atm_v1.0.7.zip",
    fileBase64: "UEsDBBQACAgIAMZ...",
	userNo:"S1234",
    modId: "王小明",
    modTime: "2025/01/10 12:03:00",
	cofNo:"S5678",
    cofId: "張小華",
    cofTime: "2025/01/10 12:13:00"
  },
  {
    deviceName: "循環機",
    deviceModel: "OKI-RG7",
    deviceType: "循環機(OKI-RG7)",
    verNo: "atm_v1.1.0",
    updateTime: "2024/2/6 00:00:00",
    isMandatory: "Y",
    previousVer: "atm_v1.0.7",
    updateType: "程式",
    releaseNotes: "更新：安全性修正",
    status: "核准",
    uploadUser: "王小明",
    fileName: "OKI-RG7-01_atm_v1.0.7.zip",
    fileBase64: "UEsDBBQACAgIAMZ...",
	userNo:"S1234",
    modId: "王小明",
    modTime: "2025/01/10 12:04:00",
	cofNo:"S5678",
    cofId: "張小華",
    cofTime: "2025/01/10 12:14:00"
  },
  {
    deviceName: "循環機",
    deviceModel: "OKI-RG7",
    deviceType: "循環機(OKI-RG7)",
    verNo: "atm_v2.0.0",
    updateTime: "2024/2/8 00:00:00",
    isMandatory: "Y",
    previousVer: "無",
    updateType: "程式",
    releaseNotes: "重大改版",
    status: "核准",
    uploadUser: "王小明",
    fileName: "OKI-RG7-01_atm_v2.0.0.zip",
    fileBase64: "UEsDBBQACAgIAMZ...",
	userNo:"S1234",
    modId: "王小明",
    modTime: "2025/01/10 12:05:00",
	cofNo:"S5678",
    cofId: "張小華",
    cofTime: "2025/01/10 12:15:00"
  },
  {
    deviceName: "循環機",
    deviceModel: "OKI-RG7",
    id: "CHK001",
    deviceType: "循環機(OKI-RG7)",
    verNo: "v1.2.3",
    uploadUser: "王小明",
    updateTime: "2025/01/05 14:22",
    isMandatory: "Y",
    previousVer: "無",
    updateType: "程式",
    releaseNotes: "重大改版",
    status: "審核中",
    fileName: "OKI-RG7_v1.2.3.zip",
    fileBase64: "UEsDBBQACAgIAMZ...",
	userNo:"S1234",
    modId: "王小明",
    modTime: "2025/01/10 12:06:00",
	cofNo:"S5678",
    cofId: "張小華",
    cofTime: "2025/01/10 12:16:00"
  },
  {
    deviceName: "循環機",
    deviceModel: "OKI-RG7",
    id: "CHK002",
    deviceType: "循環機(OKI-RG7)",
    verNo: "v3.1.0",
    uploadUser: "李工程",
    updateTime: "2025/01/06 09:18",
    isMandatory: "Y",
    previousVer: "無",
    updateType: "程式",
    releaseNotes: "重大改版",
    status: "審核中",
    fileName: "OKI-RG7_v3.1.0.zip",
    fileBase64: "UEsDBBQACAgICC...",
	userNo:"S1234",
    modId: "王小明",
    modTime: "2025/01/10 12:07:00",
	cofNo:"S5678",
    cofId: "張小華",
    cofTime: "2025/01/10 12:17:00"
  },
  {
    deviceName: "自動提款機",
    deviceModel: "WIN-1500XE",
    id: "CHK003",
    deviceType: "自動提款機(WIN-1500XE)",
    verNo: "v2.2.2",
    uploadUser: "王小明",
    updateTime: "2025/01/09 14:22",
    isMandatory: "Y",
    previousVer: "無",
    updateType: "程式",
    releaseNotes: "重大改版",
    status: "審核中",
    fileName: "WIN-1500XE_v1.2.3.zip",
    fileBase64: "UEsDBBQACAgIAMZ...",
	userNo:"S1234",
    modId: "王小明",
    modTime: "2025/01/10 12:08:00",
	cofNo:"S5678",
    cofId: "張小華",
    cofTime: "2025/01/10 12:18:00"
  }
];


// 軟體版本覆核假資料
const deviceSWVerCheckList = [
 	  {  deviceName: "循環機", deviceModel: "OKI-RG7",
    id: "CHK001",
    deviceType: "循環機(OKI-RG7)",
    verNo: "v1.2.3",
    uploadUser: "王小明",
    updateTime: "2025/01/05 14:22",
	isMandatory: "Y",
	previousVer: "無",
	updateType: "程式",
	releaseNotes: "重大改版",
    status: "審核中",
    fileName: "OKI-RG7_v1.2.3.zip",
    fileBase64: "UEsDBBQACAgIAMZ..." // 你可以放真 base64
  },
  {  deviceName: "循環機", deviceModel: "OKI-RG7",
    id: "CHK002",
    deviceType: "循環機(OKI-RG7)",
    verNo: "v3.1.0",
    uploadUser: "李工程",
    updateTime: "2025/01/06 09:18",
	isMandatory: "Y",
	previousVer: "無",
	updateType: "程式",
	releaseNotes: "重大改版",
    status: "審核中",
    fileName: "OKI-RG7_v3.1.0.zip",
    fileBase64: "UEsDBBQACAgICC..." 
  },
    {  deviceName: "自動提款機", deviceModel: "WIN-1500XE",
    id: "CHK003",
    deviceType: "自動提款機(WIN-1500XE)",
    verNo: "v2.2.2",
    uploadUser: "王小明",
    updateTime: "2025/01/09 14:22",
	isMandatory: "Y",
	previousVer: "無",
	updateType: "程式",
	releaseNotes: "重大改版",
    status: "審核中",
    fileName: "WIN-1500XE_v1.2.3.zip",
    fileBase64: "UEsDBBQACAgIAMZ..." // 你可以放真 base64
  },
];

const deviceUserList = [
	// 退回
	{ userNo: 'S0001', userName: '宋夯特', status: '退回', department: "BU1", email:'BU1@leosys.com', phoneNo: '0912345670',  modId: 'Admin', registrationDate: '2025-02-02',cofId: '楊蔥圈' ,groups: ["ATT", "SYSTEM"], note: 'OoOa ?! ' },
	{ userNo: "S0002", userName: "歐基喔", status: '退回', department: "BU2", email:'BU2@leosys.com', phoneNo: "0912345671",  modId: 'Admin3', registrationDate: '2025-02-02',cofId: '何牛' ,groups: ["ATT", ], note: 'OoOa ?! ' },
	// ATM
	{ userNo: 'S0003', userName: '成振宇', status: '核准', department: "BU3", email:'BU3@leosys.com', phoneNo: '0912345672',  modId: 'Admin', registrationDate: '2025-02-02',cofId: '楊蔥圈' ,groups: ["SYSTEM"], note: 'OoOa ?! ' },
	{ userNo: 'S0004', userName: '柳軫皓', status: '核准', department: "BU4", email:'BU4@leosys.com', phoneNo: '0912345673',  modId: 'Admin', registrationDate: '2025-02-02',cofId: '楊蔥圈' ,groups: ['MG'], note: 'OoOa ?! ' },
	// TCR
	{ userNo: "S0005", userName: "車海印", status: '核准', department: "BU5", email:'BU5@leosys.com', phoneNo: "0912345674",  modId: 'Admin3', registrationDate: '2025-02-02',cofId: '何牛' ,groups: ['PM'], note: 'OoOa ?! ' },
	{ userNo: "S0006", userName: "崔鍾仁", status: '核准', department: "BU6", email:'BU6@leosys.com', phoneNo: "0912345675",  modId: 'Admin3', registrationDate: '2025-02-02',cofId: '何牛' ,groups: ['PM_M', "ATT", "SYSTEM"], note: 'OoOa ?! ' },
]

// 設備類型
const deviceStatusList = [
	{ deviceStatus: '核准' },
	{ deviceStatus: '退回' },
	{ deviceStatus: '待覆核' },
]

// 設備資料設定覆核 deviceUserCheckList.html
const deviceUserCheckList = [
	{ userNo: 'S0007', userName: '孫基焄', status: '待覆核', department: "BU7", email:'BU7@leosys.com', phoneNo: "0912345676", registrationDate: '2025-02-02', modId: 'Admin', cofId: '' ,groups: ['TESTER',"ATT", "SYSTEM"], note: 'OoOa ?! ' },
	{ userNo: "S0008", userName: "韓世美", status: '待覆核', department: "BU8", email:'BU8@leosys.com', phoneNo: "0912345677", registrationDate: '2025-01-11', modId: 'Admin3', cofId: '' ,groups: ['TESTER',"ATT", "SYSTEM"], note: 'OoOa ?! ' },
]

const deviceDepartmentList = [
	{ department: "", departmentName: ''},
	{ department: "BU1", departmentName: '部門一'},
	{ department: "BU2", departmentName: '部門二'},
	{ department: "BU3", departmentName: '部門三'},
	{ department: "BU4", departmentName: '部門四'},
	{ department: "BU5", departmentName: '部門五'},
	{ department: "BU6", departmentName: '部門六'},
	{ department: "BU7", departmentName: '部門七'},
	{ department: "BU8", departmentName: '部門八'},
]

const deviceGroupList = [
	{ groupNo: '', groupName: '', permissions: [], status: '' , note: 'OoOa ?! '},
	{ groupNo: 'ATT', groupName: '經辦', permissions: ["A", "D"] , status: '核准', note: 'OoOa ?! '},
	{ groupNo: 'SYSTEM', groupName: '系統管理員', permissions: ["A","B", "C", "D", "E", "F"] , status: '核准', note: 'OoOa ?! '},
	{ groupNo: 'MG', groupName: '主管', permissions: ["D", "E"] , status: '核准', note: 'OoOa ?! '},
	{ groupNo: 'PM', groupName: 'PM', permissions: ["A", "E"] , status: '核准', note: 'OoOa ?! '},
	{ groupNo: 'PM_M', groupName: 'PM主管',  permissions: ["B"] , status: '核准', note: 'OoOa ?! '},
	{ groupNo: 'TESTER0', groupName: '測試員0', permissions: ["C"] , status: '核准', note: 'OoOa ?! '},
	{ groupNo: 'TESTER1', groupName: '測試員1', permissions: ["C"] , status: '審核中', note: 'OoOa ?! '},
	{ groupNo: 'TESTER2', groupName: '測試員2', permissions: ["C"] , status: '審核中', note: 'OoOa ?! '},
	{ groupNo: 'TESTER3', groupName: '測試員3', permissions: ["C"] , status: '退回', note: 'OoOa ?! '},
	{ groupNo: 'TESTER4', groupName: '測試員4', permissions: ["C"] , status: '退回', note: 'OoOa ?! '},
]

const deviceGroupPermissions = [
	{ permissionNo: 'A', permissionName: '各類型得獎件數表' },
	{ permissionNo: 'B', permissionName: '活動獎勵統計表' },
	{ permissionNo: 'C', permissionName: '活動得獎效期圖表' },
	{ permissionNo: 'D', permissionName: '每月得獎統計表' },
	{ permissionNo: 'E', permissionName: '點數類型分析表' },
	{ permissionNo: 'F', permissionName: '部門點數發送概況表' },
]




