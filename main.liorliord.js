    function union(a, b) {
        if (Array.isArray(a) && Array.isArray(b)) {
            var obj = {};
            for (var i = a.length - 1; i >= 0; --i)
                obj[a[i]] = a[i];
            for (var i = b.length - 1; i >= 0; --i)
                obj[b[i]] = b[i];
            var res = []
            for (var k in obj) {
                if (obj.hasOwnProperty(k))
                    res.push(obj[k]);
            }
            return res;
        }
        else if (typeof (a) == "object" && typeof (b) == "object") {
            Object.assign(a, b);
        }
    return "undefined";
    }

    function same(a, b) {
        for (var i in a) {
            if (a[i] !== b[i])
                return false;
        }
        for (var i in b) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    }