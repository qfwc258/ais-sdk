/**
 * 视频审核服务token方式请求的使用示例
 */
var video = require("./ais_sdk/moderation_video");
var token = require("./ais_sdk/gettoken");
var utils = require("./ais_sdk/utils");

var username = "*******";        // 配置用户名
var domain_name = "*******";     // 配置用户名
var password = "*******";        // 密码
var region_name = "cn-north-1";  // 配置区域信息

demo_data_url = "https://obs-test-llg.obs.cn-north-1.myhuaweicloud.com/bgm_recognition";

token.getToken(username, domain_name, password, region_name, function (token) {

    video.video(token, demo_data_url, 5, ["terrorism", "porn", "politics"], function (result) {
        console.log(result);
    })

});


