/**
 * Created by chent on 2017/2/3.
 */

var appPath = 'src/app/';

module.exports = {
    modules:[
        {name:'account',path: appPath + 'views/account'},
        {name:'product',  path: appPath + 'views/product'},
        {name:'profile',path: appPath + 'views/profile'},
        {name:'public',path: appPath + 'views/public'}
    ]
};