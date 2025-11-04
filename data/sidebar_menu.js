const basePath = '/device_manager/';
const sidebarMenu = [
	{
		id: "menu1",
		title: '基本管理',
		icon: 'fas fa-sliders-h',
		order: 0,
		subMenu: [
			{ id: "item1", name: '設備資料設定', href: basePath +'pages/deviceSet/deviceData.html', order: 0 },
			{ id: "item2", name: '設備類型設定', href: basePath +'pages/deviceSet/deviceType.html', order: 1 },
			{ id: "item3", name: '設備組別設定', href: basePath +'pages/deviceSet/deviceGroup.html', order: 2 },
		]
	},
	{
		id: "menu2",
		title: '設備監控管理',
		icon: 'fas fa-desktop',
		order: 1,
		subMenu: [
			{ id: "item4", name: '設備狀態查詢', href: basePath +'pages/deviceMonitor/deviceStatusQuery.html', order: 0 },
			{ id: "item5", name: '設備交易紀錄查詢', href: basePath +'pages/deviceMonitor/deviceTransDataQuery.html', order: 1 },
			{ id: "item6", name: '設備監控參數設定', href: basePath +'pages/deviceMonitor/deviceParam.html', order: 2 },
			{ id: "item7", name: '設備交易代碼設定', href: basePath +'pages/deviceMonitor/deviceTransactionCode.html', order: 3 },
		]
	},
	{
		id: "menu3",
		title: '設備軟體派送管理',
		icon: 'fas fa-paper-plane',
		order: 2,
		subMenu: [
			{ id: "item8", name: '設備軟體版本設定', href: basePath +'pages/versionDelivery/deviceSWVerSetting.html', order: 0 },
			{ id: "item9", name: '設備軟體排程', href: basePath +'pages/versionDelivery/deviceSchedule.html', order: 1 },
			{ id: "item10", name: '設備版本更新紀錄查詢', href: basePath +'pages/versionDelivery/deviceVerUpdateQuery.html', order: 2 }
		]
	},
	{
		id: "menu4",
		title: '系統管理',
		icon: 'fas fa-cogs',
		order: 3,
		subMenu: [
			{ id: "item11", name: '使用者設定', href: basePath +'pages/system/deviceUser.html', order: 0 },
			{ id: "item12", name: '群組設定', href: basePath +'pages/system/deviceGroupsSetting.html', order: 1 },
			{ id: "item13", name: '選單設定', href: basePath +'pages/system/menu.html', order: 2 },
			{ id: "item14", name: '權限設定', href: basePath +'pages/system/permission.html', order: 3 },
		]
	}
]