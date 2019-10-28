function initializeDatetime() {
    // 開始日時と終了日時入力フォームの初期値を設定する
    const datetimeFormat = 'YYYY-MM-DDTHH:mm:ss';
    // 開始日は現在時刻の１日前
    var startTime = moment().subtract(1, 'days').format(datetimeFormat);
    var startTimeElem = document.getElementById('startTime');
    startTimeElem.value = startTime;

    // 終了日は現在時刻。つまり１日前から現在までのグラフを表示するのがデフォルト設定ということ
    var endTime = moment().format(datetimeFormat);
    var endTimeElem = document.getElementById('endTime');
    endTimeElem.value = endTime;
}