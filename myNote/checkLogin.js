//未登录
function noLogin(req,res,next){
    if (!req.session.user) {
        req.flash('error', '抱歉，您还没有登录!');
        return res.redirect('/login');
    }
    next();
}
//已登录
function beLogin(req, res, next) {
    if (req.session.user) {
        req.flash('error', '抱歉，您已登录!如需操作，请先退出登录！');
        return res.redirect('back');//返回之前的页面
    }
    next();
}
exports.noLogin = noLogin;
exports.beLogin = beLogin;