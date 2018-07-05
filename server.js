var request = require('request')
var j = request.jar()
getMainPage();
setTimeout(() => {

}, 1000);

function getMainPage() {
    console.log("runing main page...")
    var url = 'https://www.westernunion.com/ES/EN/password-recovery.html'
    var options = {
        method: 'GET',
        url: url,
        jar: j
    }
    request(options, function (error, response, body) {
        if (error) return console.log('Something\'s wrong: ', error)
        var cookies = j.getCookies(url);

        console.log("cookies", cookies);
        getSessionIdAndIP();
        // getRegisteredStatus();
        // console.log(body)
    });
}
function getSessionIdAndIP() {
    console.log("runing setting session page...")
    var url = 'https://www.westernunion.com/wuconnect/rest/api/v1.0/CreateSession?timestamp=1530536393692'
    var options = {
        method: 'POST',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept': 'application/json',
            'content-length': '1438',
            'Referer': 'https://www.westernunion.com/ES/EN/password-recovery.html',
            'User-Agent': ' Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
            'Origin': ' https://www.westernunion.com',
            'x-nyupe9cs-a': '4HCximCWxmCxp_oWJhKQBMUnEWWLnL0xRb1LIDvlIQZi9koQ9sTFBIu1-lLL-HFa8Vua7oCW7nJTSD2Z7nJN=toqnAKvuNuQrWFqp_5B7JWLEL7YIBmqrz=4-egN76d9jkSQ=_1zIVrQKA42nWFN0dxLn4oZKkeLEMSMSD2wyvUSEvS6BHeF7DjkIVtAEYK57zC66W-LnqZDnbeLIoJ3J_65=bnt6TKh7zytB4d5I6KZjTJ2rVdL-bKjdl02I6TDXoCZ-EzNEk6UE_SQ=my0rkSQu5DSrDZOn4KQJ8rlnyLd7d2MElZZEAHlEqKvtHurn5rfIoCmBs2OjoCHJkeFjkdLEkWw6zrui8wm6z1OIs2-nbrA6zCmKknd7n7hvjJMSNuMjkW07_eSjbhWE6KNtvSwj_FWKHC01kWQSgD=rkdUzVjW-6K_0v2jF4f9f_y-ivJz6WHXs6uM7brb7aZ2dkRvibdk8_2Zf5uanhdQ7brS-jTLjWLL6kyD6khQyD71UWjLBWJz6k10zboW1NRU-TYeJhgUf_ouIvDx-b5J7_Sm0VKZKHgZiZSvp_SbEHytvNpkxv2OnZwmBzoqvLhqJ1Yo76uQK6rwIHZxfbrZjko-x4DUEM0LnkoNeAKZI_6ZEFzQRHFa7HCQ7IDUJVuCjU2jizdA5HKbSqruBHofikVZjHVprHoWkenLkkH9JjitfAK8EbKQd-2Mo_XlJ8xt1kCwnNhUnA2Z7enFXv246AuMp_CmrbFvBbdWJ_JZEbFmkl2m6kCW7eyL9kRUX_CYI_7wnCrAEHoNB60woWYWJ_YmMeuz7_F0p_osEAKOnNqU76ZmBfhsEbzZ6Xry6y71oMDvX1ra7amO0tpAEv2ZI1U0I6ujnbdxXVLMBkKgBmoanzg2fcrWh0iS_gZahnuWfsCvfep5MbeA767jjAoynvmbpjOLvV2WJbNLJ_rxj6p-nzrlXfd2jkrZInu8jAoapDKMukoHEbj-oA0MfVd-E6mw7HyxK62TpvJZ7onx7Hy06khNU_9SnAuzBfuOEH10th9vESmWI5DvgvZi7fB-EXr0UV00KkB98dxpd0uOp_7Q7HoQp_1-phdxEqnMn97-=o9ZpVrqtD1L9ArYUv2fnjpLiqrV6XJOBq0OJ_ULEeFmsk7aHV2yBs4vEDwWJ6KM=1Cz6kJ0jViUP_hq76jkjkHlInwmBs0-76o5fHhOpVrWnVjQxHg-34pPjl2HBfKQxjBLnMv7BHhOjK75jAmYnkbln42TnLBA1Li0jerlyvCwk6uWEeg5jbTLBl2wpVEiiYEZJHSjp_w5nzYO7oJmFkjFnzL5KHFNI02mp_mMfAuMdbe0Jqj0B5oVy_gBMV0wJs0wEbHa7mCmE4dtJbKW0_nLE5uwK5clBzujJ6KzX_yxEMSr8TyXnbULEbm1o5e2re1MMl2Wp_oSvcpLn_yLBH6iszu5y_mmJHSrEAJ-jNYW1_F6jH7M0_oeibFg7W1vEHzjJvDXLZZNM6KvvHultVpLJ_ohEk-5iWrV7HeWB6rMr_CTpVqfjere8Hom7bohBfvljkrm1VKQxVp-imrOMToxBAoQEM2a0V8lrfSWntiqEkFa7HLLpVuWxWoVE6fUnbmlovmZtHuU9kCmI_6Z7_CmfDeLfmCa-be07duWdHhbW_4vx_F-xVu5p0qV7lvL-6fUKH1-nm=lJ_mxo5LSh6uMfVuz7s0OpjwYmVoz6AuaphClEdCzIf2m7d2WJhJaKvRqJ-2h71FZxby0pvzMnl2Y1ApLJ6j-ibCxn5rNptslH-0O7fhafVKsn_y0j-2-nWWFnOPw75T-7VuW7nuQ7HdL1bS6fe6LdaLF0nohEM2Y-4ZNrmLww1fZ6kTLjVKN65BwpDEDJv0Fep2m0V7MrfKQKoohddFZB3pLpVu1K12wIzJQp_KVy_EZ7bRqWHKajVKVJ_iLfv2Q6XKM7Hu5imXlp_hj63uQBs2Y7f1zE_SOEqgv6zn0rLuzKAo4oC7wjsT5FL2DS4uxBF3I_hrZdko1X87cB1_NP42QphChfgghggZi657-7HCmjkoOW46ZK30LJ_mqdb6V65uMKHoh6zKqEo95Eoomk6oY5_Y66yzwdbo2KnpLBf4501oa-smMEVuQEM21nDhwJVKw-AraBfeMXs2mpDhqoVuUEAKDohuznl2NBsq5pV7Sp_108VurrqrWog2huymV7qhZ6kCaEmrWo1ZhpVKNJeFmEWnWp8uT=D2aFItl=hrgv4rsnmu6ohoMnk5V6kmVjjZQEqKW0eJTU6K8ykmqE_CmdAL0jAuBpjmBJVKZn_I77VKMibdL7Hq5jerln4umJrugKkhj=_U0XVZ4_M2mJD2MB5gTI_oMIgi5BmnLBb_lf_hz7_CgpeYZIHmln42OnbSNJ1avJe2l7HFwJtuvII2T=_1On_oMyAHl=6ZZnllqIk7lzD8Nbs00KKLLyVof6yuOJDKuj6vf9k6-6k_LEkTk1kNLBs2Tx42TKWoa7mKjjL2Qf_zhjtpL76Zqfv2qnqrsdoCmrAKO2hrz_aT0n5gvJkmQiDuYnkrQp_-xJeShrqeLXe6KJVZm7Qg5B5pd7JklWWZqE52UfAo1JVuZ0gZoEmCWo_rzjHULBH45z-hftoCaJfTLdAKOnlvlEwTLh5iHBA7Sxm91KHpAB1oT3_BSBf7O=Dj1VkKjjl00sAp8nquN0_68BIpzB6uNnvSWjboPnVrZEDLwrb1UE_rYxmnLr9rMHeFZKWuf71nei4KmtoCZin2WJ_SVJ02jZbCSnmJO7Ad2BoJWFDhmJ_uZjbTS7HS-E-vLJvS5od',
            'x-nyupe9cs-b': '-d9qubq',
            'x-nyupe9cs-c': 'AECd-FpkAQAAQ6vInBHPc4u7ecVIzy5NpKDH09IAPjiaqvmpxyvF2vAbt_L8',
            'x-nyupe9cs-d': '0',
            'x-nyupe9cs-uniquestatekey': 'ADqRE1tkAQAAkjmhWODutsaezU1BfIcB2UqXQx03-PSB14WvsZBUqJpDLMg_',
            'cookie': 'PathContent=/content/wucom/base/es/en; BIGipServerwudispatcher.westernunion.com=855715082.36895.0000; resolution_height=800; resolution_width=1280; is_tablet=false; is_mobile=false; AKCountry=GB; AKZip=; AKRegioncode=EN; AKCity=LONDON; AKAreacode=; AKCounty=; WUCountryCookie_=ES; WULanguageCookie_=EN; AK_TLS_Version=tls1.2; SERVER_COOKIE=R4; mbox=session#511d349636594215a6313e9b4008f8eb#1530538239; AMCVS_AACD3BC75245B4940A490D4D%40AdobeOrg=1; AMCV_AACD3BC75245B4940A490D4D%40AdobeOrg=1099438348%7CMCIDTS%7C17715%7CMCMID%7C05521918946796555033626033985544718340%7CMCAAMLH-1531141185%7C6%7CMCAAMB-1531141185%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1530543585s%7CNONE%7CvVersion%7C2.1.0; _abck=f485yh8ugka3wbree44h_1760'
            // 'Connection': 'keep-alive',     
            // 'Pragma': 'no-cache',
            // 'Host': 'www.pumab2b.com',
            // 'Cache-Control': 'no-cache',
            // 'Upgrade-Insecure-Requests': 1
        },
        formData: {
            bashPath: "/ES/EN/",
            channel: { name: "Western Union", type: "WEB", version: "9Z00" },
            device: { id: "", type: "WEB" },
            external_reference_no: "1",
            locale: { country_code: "ES", language_code: "en" },
            security: {
                black_box_data: {
                    data: "0400JapG4txqVP4Nf94lis1ztnqv7CRnBjGOXyx2B+S3GHv4zk88XIRRreSheVy5uVhms1zdzcTh8G1jzSkZrXqxWzKE0A/nZNqkwx/N92fWAavNc/p/1y9PHkhCTHg+Ms0Qhlz5wlRFwWJi0FRulruXQQGCQaJkXU7G/xCx87H3fYKpqOurJ+l94mG/cdkIMFbm6Yf0/pTJUUx4zcJIblb5JwydKgnOIDKXq4HnEqNOos2/G9pg/BLzT0xFXRiZcQcAnPGnG3CqgLln+4KLswTyWhDAstLN4US5V97h50/5jKuksZ+gFcc8aSdlq6Ngoi5gQITTv1Udki2WMCVbBcdxP6GA3q0kDinWcD6T1dGUjL/hT4nUgBHv4srRWAJJyLNLGj8lONaIGWAEO5SUXZsfzDNnJ9MtC3SwZ/Ah9jXzHp3ED3HepEpuM5tlG61Ntm9z3eln9a65pRCSbhnEUAORTqNiYutQpOa3V62N6Jqrox+LqCpize7FnCuSoEQI23c8MGfGDfMJjL1T/pZNnUTdpA1nyvZTTnwuL6uF5RaYfJDHvJpxYj49Ituh4sP0IV/AjqwHORviq2ncsJVGc8WrWaLE8yqMVQun0jxRYAmjKb1P4ehBV15lxB8HyigIvqgOtuhMAAc2rn1HDo0vYYDC32yzkoyzQ+ygbazR87feXj71svFCT6Ov7S0VWBiBsphp15tFwbb5NkVtrNHzt95ePpTGzJJvTFl9FmQWppRl6Bv4pp48B2PR0LUM6Rn3JtHEfF9hXdZ4DRRiwxmZVjl9I9/GSHlRbmqB3FC5PmOztORMyPpjzYuuV+VhT2JQxvTdC24eZzo97tw16kQoiglK7BJDLfM/X8TvaSyxlUFCiGEdsE8OdwolivehTqT3rw1rUL/Q9DBUr0B8X2Fd1ngNFGSttdZygKPcjXOee1yaDxciKug0+fq4xP2vFnup4QVZmvVWVqAwSicuR/GvVGCWVsTCBZ4TPdh6fSO+PRDZJ3t6I7HSG5+fdiq9o8M92MmVzpOtSOhYmUcg4U0csxkunCw+Jld00Kp8x9RU1HbupPmv0U+PWz4GSIrr+l3H+CrCQOoYdjeTIN4Q7WiTJdXVW619Jo9sezyB2DaomfLTglnhwCemZJhfAhzQxNaIYqv5",
                    length: 1156
                },
                client_ip: "245024209201"
            },


        },
        jar: j
    }
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var cookies = j.getCookies(url);
        console.log(body)

    });
}
function getRegisteredStatus() {
    var url = 'https://www.westernunion.com/wuconnect/rest/api/v1.0/GetUserChallenges?timestamp=1530528552815'
    var options = {
        method: 'POST',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept': 'application/json'

            // 'Connection': 'keep-alive',           
            // 'Origin': 'https://www.pumab2b.com',
            // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36',
            // 'Referer': 'https://www.pumab2b.com/logon.aspx',
            // 'Pragma': 'no-cache',
            // 'Host': 'www.pumab2b.com',
            // 'Cache-Control': 'no-cache',
            // 'Upgrade-Insecure-Requests': 1
        },
        formData: {
            bashPath: "/ES/EN/",
            external_reference_no: "1",
            gateway_customer: { email: "test@test.com", date_of_birth: "1990-03-03" },
            security: { session: { id: "web-3ac64406-39b4-4f60-94a4-4188aea26fc5" }, client_ip: "245024209201" }
        },
        jar: j
    }
    request(options, function (error, response, body) {
        console.log(response.headers)
        if (error) throw new Error(error);
        var cookies = j.getCookies(url);
        console.log(cookies)

    });

}