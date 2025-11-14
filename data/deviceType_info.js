// 設備類型 deviceType.html
const deviceTypeList = [
  {deviceTypeName:'循環機', deviceTypeCode:'OKI-RG7', deviceTypeDesc: '國眾', status:'true', heartBeatFreq:"20", moduleSelect: [], deviceToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwidHlwZSI6IlVzZXIiLCJleHAiOjE3NjIyMjMzNjgsImlhdCI6MTc2MjEzNjk2OCwianRpIjoiY2JkZTA3YzctYmQ5Mi00MTg5LTljNTEtZjczMWY3ZTM2ZjllIn0.h2ovtQamtT-MswJMnZbLq_5dVN8_MWMfbeVsQpNVUEw', createId:'sam', createTime:'2024-09-15 16:02', modId:'Admin1', modTime:'2025-02-01 12:07'},
  {deviceTypeName:'自動提款機', deviceTypeCode:'WIN-1500XE', deviceTypeDesc: '德利多富', status:'true', heartBeatFreq:"15", moduleSelect: [], deviceToken:'eyJhbGciOiJIUzI1NiJ9.eyJyb3VuZCI6IjA5NTMxNmNiLWRkZTAtNDEzYS04ZmIxLWIwNTZlOTYyOTdhZiIsInVzZXJuYW1lIjoiTEVPIiwiZXhwIjoxNzQ0MDk5MjI3fQ.dK4vEl-b1Z2sv5L7R8PSqIkj7se7NgUyZTnuU56L8kw', createId:'tom', createTime:'2024-05-22 09:42', modId:'Admin1', modTime:'2025-01-12 13:55'},
  {deviceTypeName:'循環機', deviceTypeCode:'HITACHI-CZ5000', deviceTypeDesc: '三商', status:'false', heartBeatFreq:"10", moduleSelect: [], deviceToken:'eyJhbGciOiJIUzI1NiJ9.eyJyb3VuZCI6ImRhOGQ1YTM4LWI1ZjQtNDlkZS05NmIwLTFkYThc4Zq8rxwEnSIpo', createId:'ann', createTime:'2024-10-17 14:25', modId:'Admin2', modTime:'2025-02-25 08:42'},
]


// 設備資料 deviceData.html
const deviceDataList = [
	// 循環機
	{ deviceNo: 'A012001601', deviceLocate: '台北市-大眾門市', deviceTypeCode: "OKI-RG7", createDataDate: '2025-07-08', ip: '0.16.10.0', organId: '0120016', organName: '營運中心', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012001602', deviceLocate: '台北市-中崙門市', deviceTypeCode: "OKI-RG7", createDataDate: '2025-03-15', ip: '05.05.0.05', organId: '0120016', organName: '營運中心', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012001603', deviceLocate: '新北市-大庭門市', deviceTypeCode: "OKI-RG7", createDataDate: '2024-12-31', ip: '164.11.20.18', organId: '0120016', organName: '營運中心', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012200901', deviceLocate: '台中市-大時代門市', deviceTypeCode: "OKI-RG7", createDataDate: '2024-10-22', ip: '162.15.0.04', organId: '0120016', organName: '營運中心', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012200902', deviceLocate: '高雄市-中雅門市', deviceTypeCode: "OKI-RG7", createDataDate: '2024-06-10', ip: '0.0.0.0', organId: '0120016', organName: '營運中心', modId: 'Admin', cofId: '楊蔥圈' },
	/*
	{ deviceNo: 'A012210201', devicelocate: '新北市-中崙門市', status: '核准', deviceTypeCode: "OKI-RG7",  organId: '0120016', organName: '營運中心', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012210202', devicelocate: '台北市-富邦公庫處ATM2', status: '核准', deviceTypeCode: "OKI-RG7",  organId: '0120016', organName: '營運中心', modId: 'Admin', cofId: '楊蔥圈' },
	{ deviceNo: 'A012210203', devicelocate: '台北市-富邦公庫處ATM3', status: '核准', deviceTypeCode: "OKI-RG7", organId: '0120016', organName: '營運中心', modId: 'Admin', cofId: '楊蔥圈' },
	*/
]
