// String insert values

// DESCRIPTION:
// Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.

// Inherited object properties should not be applied

// An example says more than a thousand words..

// Example using object

// var s = 'Hello {foo} - make me a {bar}';
// var o = {
//   foo : 'Jack',
//   bar : 'sandwich'
// };

// format(s, o); // "Hello Jack - make me a sandwich"
// Example using array

// var s = 'Hello {0} - make me a {1}';
// var a = ['Jack', 'sandwich'];

// format(s, a); // "Hello Jack - make me a sandwich"
// See tests for more information.

// - STRINGS,
// - ALGORITHMS

// 1 Solution:

var format = function (str, obj) {
    return str.replace(/{([^}]+)}/g, function(m, p1) { return p1 in obj ? obj[p1] : m })
};

// 2 Solution:

var format = function (str, data) {
    if (typeof str === 'string' && (data instanceof Array)) {
        return str.replace(/({\d})/g, function(i) {
            return data[i.replace(/{/, '').replace(/}/, '')];
        });
    } else if (typeof str === 'string' && (data instanceof Object)) {
        if (Object.keys(data).length === 0) {
            return str;
        }
        for (let key in data) {
            return str.replace(/({([^}]+)})/g, function(i) {
                let key = i.replace(/{/, '').replace(/}/, '');
                if (!data[key]) {
                    return i;
                }
                return data[key];
            });
        }
    } else if (typeof str === 'string' && data instanceof Array === false || typeof str === 'string' && data instanceof Object === false) {
            return str;
    } else {
        return false;
    }
};