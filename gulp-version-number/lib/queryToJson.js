/**
 * query to json
 * @id STK.core.json.queryToJson
 * @alias STK.core.json.queryToJson
 * @param {Json} JSON
 * @param {Boolean} isEncode
 * @return {String} querystring
 * @author Robin Young | yonglin@staff.sina.com.cn
 * @example
 * var q1 = 'a=1&b=2&c=3';
 * STK.core.json.queryToJson(q1) === {'a':1,'b':2,'c':3};
 */
var trim = require('./trim');
module.exports = function(QS, isDecode) {
    var _Qlist = trim(QS).split("&");
    var _json = {};
    var _fData = function(data) {
        if (isDecode) {
            return decodeURIComponent(data);
        }
        else {
            return data;
        }
    };
    for (var i = 0, len = _Qlist.length; i < len; i++) {
        if (_Qlist[i]) {
            var _hsh = _Qlist[i].split("=");
            checkForVBscript(_hsh);

            var _key = _hsh[0];
            var _value = _hsh[1];

            // If only the key has no value, then it will all be thrown into an $nullName array
            if (_hsh.length < 2) {
                _value = _key;
                _key = '$nullName';
            }
            // If the cache stack does not have this data
            if (!_json[_key]) {
                _json[_key] = _fData(_value);
            }
            // If this data already exists on the stack, it is converted to an array storage
            else {
                if (Object.prototype.toString.call(_json[_key]) !== '[object Array]') {
                    _json[_key] = [_json[_key]];
                }
                _json[_key].push(_fData(_value));
            }
        }
    }

    function checkForVBscript(_hsh) {
        for (var i = 0, len = _hsh.length; i < len; ++i) {
            if (_hsh[i] === "<%" && _hsh[i + 1]) {
                _hsh[i] = _hsh[i].concat("=").concat(_hsh[i + 1]);
                _hsh.splice(i + 1, 1);
            }
        }
    }

    return _json;
};
