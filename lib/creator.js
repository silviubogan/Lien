var ConvertToBuffer = require("./to-buffer")
  , Url = require("url")
  , QueryString = require("querystring")
  ;

var LienCreator = module.exports = function (req, res) {

    var self = this;

    // Normalize the pathname
    var pathName = Url.parse(req.url, true).pathname;
    if (pathName.substr(-1) !== "/") {
        pathName += "/";
    }

    var search = QueryString.parse(req.url.substring(req.url.indexOf("?") + 1))
      , lien = {
            req: req
          , res: res
          , search: search
          // TODO Post data
          , data: {}
          // TODO Params
          , params: {}
          , pathName: pathName
          , end: function (content, status) {

                // TODO Handle content type
                if (!content) {
                    return self._sServer.serve(lien.req, lien.res);
                }

                var r = ConvertToBuffer(content);
                self._sServer.sendRes(lien.res, status || 200, r.headers, r.buffer);
            }
        }
    ;

    return lien;
};