//====================헤더====================//
const app = require(`express`).Router()

const path = require("path")

//=====전처리기, 모듈 함수들 호출=====//
const pre = require(`../../preprocessor.js`)

//====================본문===================//
//=====메인 페이지=====//
app.get(`/`, pre.PreProcessor(async (req, res, result) => {
    //API명
    result.log.API = `메인 페이지 불러오기`
    //로그인 필요 없는 API임
    result.log.ID = `No Login`
    
    result.success = true
    result.message = `메인 페이지 로딩 성공`
    result.url = path.join(__dirname, `../../index.html`)
}))

module.exports = app;