/**
 * 根据邮箱和已经标注公司为阿里巴巴，来高亮我厂骚年
 */
jQuery('table tbody tr').each(function (k, v) {
    var target = $(v),
        mail = target.find('td:nth-child(3)').text(),
        company = target.find('td:nth-child(6)').text();

    if (mail.indexOf('@alibaba-inc.com') > -1 || mail.indexOf('@taobao.com') > -1 || mail.indexOf('@alipay.com') > -1 || company.indexOf('阿里巴巴') > -1) {
        target.css("background", "orange");
    }
});


// 去掉阿里巴巴童鞋
jQuery('table tbody tr').each(function (k, v) {
    var target = $(v),
        mail = target.find('td:nth-child(3)').text(),
        company = target.find('td:nth-child(6)').text();

    if (mail.indexOf('@alibaba-inc.com') > -1 || mail.indexOf('@taobao.com') > -1 || mail.indexOf('@alipay.com') > -1 || company.indexOf('阿里巴巴') > -1) {
        target.remove();
    }
});


// 去掉已经明确性别的人
jQuery('table tbody tr').each(function (k, v) {
    var target = $(v),
        sex = target.find('td:nth-child(2)').text();
    if (['男', '女'].indexOf(sex) > -1) {
        target.remove();
    }
});


// 去掉学生
jQuery('table tbody tr').each(function (k, v) {
    var target = $(v),
        job = target.find('td:nth-child(5)').text();
    if (job.indexOf('学生') > -1 || job.indexOf('研究生') > -1) {
        target.remove();
    }
});

