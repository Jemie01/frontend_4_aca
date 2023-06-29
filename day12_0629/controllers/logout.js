const getLogOut = (req, res)=>{
    res.clearCookie('username');
    // 브랜드네임 쿠키는 남겨두고 30일 후에 삭제
    // 인증된 사용자 쿠키만 삭제
    res.send({success: true})
}
const postLogOut = (req, res)=>{
    res.clearCookie('username');
    res.send('쿠키 삭제')
}

module.exports = {getLogOut, postLogOut};