var request = require("request");

var options = {
    method: 'POST',
    url: 'https://www.westernunion.com/wuconnect/rest/api/v1.0/CreateSession',
    qs: { timestamp: '1530536393692' },
    headers:
    {
        'Postman-Token': '288175f0-963d-4545-94c0-91be14d979be',
        'Cache-Control': 'no-cache',
        'x-nyupe9cs-a': 'JNwOqPlO4-_LX6iVJgdePVDOMB6-wfJyZj1OqsJNhfaNHL14T8HzN6DbJf6_2vle2oKGJOwvqJ_u23lVPLz8wgSM76w316w94ybFSuQOlsJCwfJMn35RIFzOwjzVDWegwvwK=3E1HTaLZgiklezF5fA9trzoHWaoI6a_qXUT-11efH9bDfDonBtNlvAOM81MnCz3JDJLXRAkHuQywPa-Pcaknda3qcAPdW92wjoe4LbbqWJ9wHDOXf4e2bi6GgyrMvayqs_kZ6iQnPyuDZ4==ft4n-6Ln6iOJgN3Zd6L=vz9hjzWnfBthjzxh8n2Jg-q-Bi6POwYDZDLqucmLrzFACiFJgDbl-pehjQO1giFqf6vHsnMwI6MPONOwWZ_JDpVlwnxDubNf6=1nBi4LBR3U1yVHfD2lPhu1_AIP5aLGu_ewW24Gjz46W1TquSTIzzLQsaz-tz9IWavGgQWhWAFHj1NhjzVqV6K=ubO2fabw6iLHWazHchMgfAMhWJxXWJQhfg1dfiKh6i9qPJOrge=ZHa442DaXf-4J6X4HCSt-fiKhIDjno6GMcaYAGhuZgnF16gaDf4e-sGe4_DvPOa97Th1Z6RRSdtOlvwL-uW4PczPwGnLGLzLnDhePc1VngRJwWDvdf24nPaNAp9xdHnkA-njh8nbquDWIgWVqutFdjzG=NGcj36xZg2equJO1GhMHc=eAs=hixabPuAyqWURjCRBn2BeH6deJg6PnrSjqBoe41jCM3DUq2ANPL94LuDxqgaxn2SeqLt3I3FhwfQAqvzNnPa_pRbpn-Avn-zldsJolrzWwfP9SLzy4oltAfrCGg69wfDLHu_kHThLHVe4wBtClgPvHB=e3g-V2xbVn-zoqfQLquRzJuiLnu63HNiNHoaE=NHeH321ZgUSiVwbLA=MM_wsJ-1xWgv=DX6pd-8yVCz9Z-K_n-AoGB6Lhf6KDW9aablFHmhOdwaV16=tnx99hfGVGLQ6nDG4Sc1M43w3GWHMH_aI1B4LA86QwfHV=3nbqgbywWh=nOgMAWeyTGUV334Q7611wAl1U_i-4vBetuDyDP=tGODDnc1eqjzhH3eNAjshgcn2n-H1JgbkLPAvqiQCGsJoHp2k439OUbRl2sAWT2zPlDi9n2tbH_HPHe6VlqOu5fDPu_NBHuhsw-JkiHKOGP1MPuBhlgQylcDbAW=en8TCHsAxS5hkPcAvqc8SkcJ6J86OPu4L=ezyrfBkPu6CPczoU3QbAcPSlZbFH36OIuJNH32yqWJOSknLnPD_Z5UVZBgCGBDKwHBungibqu6Owmt6hfiJUo99VCEVUvnkrSzblPa-q4zV2fX1n24KPuJKnoHVq8aGlgnPr111Pu6zhfv6qBHHH3Axh6JmPLzY=DzvlNikHcN4GZhengU6uPbVdPbkhBaS=ua_DVaOG4aGl_EWhj_VnWJOHWpTnHhenrzopssSqO28llzy=uQzquXzJ-6OMbHewjz9qsUSdjzk=saOHs99Ms9NHpbFZvzbhjzFjsAxr2D9lHnOD6i_ngheGs=eHNhtGgwOqXnAlDJjX7z9Ae1cn-A-GfNYMbJ_lgibGZzyrNX4DfD9HcUjTPbOn3DL184eJuQxUC1eXWa3Jd6bgfnv1p_xw4-Q-gpaH89Gw8pj18hMq3y9wBwLDg6yUs=erOt41WJUULzFXf21APheh6i_JuPSquS8aODWJgDkDfio18yvHC_elgwbMbaow19bHvA-Zgs3wWGeM3tjGbi-PuJbM2DCW_4VGgwk-fDk-G6DSjzk176oJFpVqVeeP3DyTP=jnrEzZ8wPGVbknJCwq3nPfjz2ZVDvqNDFlNRlANwPU3QGnDAVw8pTh1iS3-8RGT9vn2ibnrbLGKee=6A683JxGfQb1Wz4g6DNn-jCGBDbMOSu2RevwkJ6qV6sqPJWquP-T2V9qNiFnJtb1fiLhfRlSr8Q116VwJz24CbcSL1xqVAyJg=BE-AvhjESluDenPIeq-wp76i4-f6bG1z9Pch=ZfQbqtxv6rzO53QCXuUjw9eenFzLqeyPJusSluD4OgAx3rbbL34eVfaWhpzynDX1io_jqfiKpNzbHWaOO8gb4_tvPubylgxan3iVqgiWlHa1gWhxqfDkS-a9GdybeG9klPANhfe1qCzFwWaNhfAb5CDkpsUVl3iNGJQ3ngDvndrCn-6yIjzLUf6LGg21hfAVDL_XABsS1rS7V-lePLz9=6iQqcJKwf_enrzxM6iNzs1yngOeqQbLnoh1Ho1kugrCqsgCdIzGqDIaIcJxZfiVSoQbqgsSPNAyqGaBwwJvgfXewPayU5abHuQOq9DGD8bNH_VjMfXeJcz97W8QGBG1Hb=ywrzoj8eshfeMwfiOGj9FrL8r2oaPHWTCng24PNA3GODVngA9qbaoZO6WOcJLGWUV2LjClg6oGrz9Hb=VGftNhWJOHV6GA8J9ZPav1PA8h8Ghq6aOlvbFJu6kP71ewBDVUsaOqcJ4hW=QMBt9wpeeG5a8lu_VPXzxwjzLGn=MJZAMluBezCzMlNGjAggswN9bnHbKqinMw6A_HOK_wgQ_RsDyG3DNl-qfqNwOqg6yn2a_PNik8WvS2vKLHCz2Dcr1GgQLh3QxwGMLH_nBn-MNJL3V-fD9qBaODf6VtNF_VgQy-fJb4sDUJPay7fWzwgEo7rzprjzOnr8mPu4yZ2NUZq6v-NwA2sJSAzMMG-JknDiQG48jMsJ9qOtOx3Wf4-DFquDb=bHsWsDS1fQLGCjeliJvwfr9hfb9PuS1q3DFh8zbn2txcgVon3DOh6i9n2d-n3XLwvBkQuUSHv9vnfFSquDLPutNn2QLdMzbGfkewfaKwW-TwwO4HNiOLcAVlwwGGbJoocJvHsDc1BA-quikqemuJOQOA4yWlgB8hWrfaEQFqNiOdWGQPuNyG_Dvnp9xqiaKt76bqR35HVpWqWasnghVG_AbDVAbnF14G-nFn8lznPh4ng6S7Wc_H3DyP4zq-jQOGu4QlsJB-WeSqc9_J2akwWnPM_t_w8BlQs8aqv2enPayJjQFAchTHvAsM_HeA3A8JgQSOLzOM3Nxdr8g',
        'x-nyupe9cs-b': '72gjkq',
        'x-nyupe9cs-c': 'AIBLGWpkAQAAgwiiBCMmnO1CBy3Pj50-59yzPNr0MvBS0Ta_Nni4KagQfRr8',
        'x-nyupe9cs-d': 0,
        'x-nyupe9cs-uniquestatekey': 'ABbOGWpkAQAAHAxBHG9qn3Z85vJlphb5m5jnx2DqnBbtjDlUKYlpFlRfORkV',
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
        referer: 'https://www.westernunion.com/ES/EN/password-recovery.html',
        origin: 'https://www.westernunion.com',
        cookie: 'PathContent=/content/wucom/base/es/en; BIGipServerwudispatcher.westernunion.com=855715082.36895.0000; resolution_height=800; resolution_width=1280; is_tablet=false; is_mobile=false; AKCountry=GB; AKZip=; AKRegioncode=EN; AKCity=LONDON; AKAreacode=; AKCounty=; WUCountryCookie_=ES; WULanguageCookie_=EN; AK_TLS_Version=tls1.2; SERVER_COOKIE=R4; mbox=session#511d349636594215a6313e9b4008f8eb#1530538239; AMCVS_AACD3BC75245B4940A490D4D%40AdobeOrg=1; AMCV_AACD3BC75245B4940A490D4D%40AdobeOrg=1099438348%7CMCIDTS%7C17715%7CMCMID%7C05521918946796555033626033985544718340%7CMCAAMLH-1531141185%7C6%7CMCAAMB-1531141185%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1530543585s%7CNONE%7CvVersion%7C2.1.0; _abck=f485yh8ugka3wbree44h_1760',
        'content-length': '1438',
        'accept-language': 'en-US,en;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body:
    {
        bashPath: '/ES/EN/',
        channel: { name: 'Western Union', type: 'WEB', version: '9Z00' },
        device: { id: '', type: 'WEB' },
        external_reference_no: '1',
        locale: { country_code: 'ES', language_code: 'en' },
        security:
        {
            black_box_data:
            {
                data: '0400JapG4txqVP4Nf94lis1ztnqv7CRnBjGOXyx2B+S3GHv4zk88XIRRreSheVy5uVhms1zdzcTh8G1jzSkZrXqxWzKE0A/nZNqkwx/N92fWAavNc/p/1y9PHkhCTHg+Ms0Qhlz5wlRFwWJi0FRulruXQQGCQaJkXU7G/xCx87H3fYKpqOurJ+l94mG/cdkIMFbm6Yf0/pTJUUx4zcJIblb5JwydKgnOIDKXq4HnEqNOos2/G9pg/BLzT0xFXRiZcQcAnPGnG3CqgLln+4KLswTyWhDAstLN4US5V97h50/5jKuksZ+gFcc8aSdlq6Ngoi5gQITTv1Udki2WMCVbBcdxP6GA3q0kDinWcD6T1dGUjL/hT4nUgBHv4srRWAJJyLNLGj8lONaIGWAEO5SUXZsfzDNnJ9MtC3SwZ/Ah9jXzHp3ED3HepEpuM5tlG61Ntm9z3eln9a65pRCSbhnEUAORTqNiYutQpOa3V62N6Jqrox+LqCpize7FnCuSoEQI23c8MGfGDfMJjL1T/pZNnUTdpA1nyvZTTnwuL6uF5RaYfJDHvJpxYj49Ituh4sP0IV/AjqwHORviq2ncsJVGc8WrWaLE8yqMVQun0jxRYAmjKb1P4ehBV15lxB8HyigIvqgOtuhMAAc2rn1HDo0vYYDC32yzkoyzQ+ygbazR87feXj71svFCT6Ov7S0VWBiBsphp15tFwbb5NkVtrNHzt95ePpTGzJJvTFl9FmQWppRl6Bv4pp48B2PR0LUM6Rn3JtHEfF9hXdZ4DRRiwxmZVjl9I9/GSHlRbmqB3FC5PmOztORMyPpjzYuuV+VhT2JQxvTdC24eZzo97tw16kQoiglK7BJDLfM/X8TvaSyxlUFCiGEdsE8OdwolivehTqT3rw1rUL/Q9DBUr0B8X2Fd1ngNFGSttdZygKPcjXOee1yaDxciKug0+fq4xP2vFnup4QVZmvVWVqAwSicuR/GvVGCWVsTCBZ4TPdh6fSO+PRDZJ3t6I7HSG5+fdiq9o8M92MmVzpOtSOhYmUcg4U0csxkunCw+Jld00Kp8x9RU1HbupPmv0U+PWz4GSIrr+l3H+CrCQOoYdjeTIN4Q7WiTJdXVW619Jo9sezyB2DaomfLTglnhwCemZJhfAhzQxNaIYqv5',
                length: 1156
            },
            client_ip: '245024209201'
        }
    },
    json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
