const matchQuery = function(matchKey, matchValue) {
    return {'$match': { [matchKey] : matchValue }};
}

const lookupQuery = function(from, localfield, foreignField, as) {
    return {'$lookup': {'from': from, 'localField': localfield, 'foreignField': foreignField, 'as': as}};
}

exports.matchQuery = matchQuery;
exports.lookupQuery = lookupQuery;