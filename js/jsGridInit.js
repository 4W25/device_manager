function initJsGrid(selector, config = {}) {
    const defaultConfig = {
        height: "auto",
        width: "100%",
        pageSize: 10,
        sorting: true,
        paging: true,
        pageButtonCount: 5, //設定頁碼數量
        pagePrevText: "上一頁",
        pageNextText: "下一頁",
        pagerFormat: "頁數: {first} {prev} {pages} {next} {last} &nbsp;&nbsp; 第 {pageIndex} / {pageCount} 頁",
        noDataContent: "無資料",
        deleteConfirm: "確定要刪除嗎？",
        onRefreshed: function (args) {
            $(".jsgrid-header-row th").css({
                "background-color": "#DDEBF7",
                "color": "#0056b3",
                "padding": "10px",
                "text-align": "center"
            });

            const pager = args.grid._pagerContainer;
            pager.find(".jsgrid-pager-nav-button a").each(function () {
                const $btn = $(this);
                if ($btn.text() === "First") $btn.text("第一頁");
                if ($btn.text() === "Last") $btn.text("最後一頁");
            });
        }
    };

    const finalConfig = $.extend(true, {}, defaultConfig, config);
    $(selector).jsGrid(finalConfig);
}


