/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        return binarySearch(0, n, isBadVersion)
    };
};

function binarySearch(low, high, isBadVersion){
    const middle = low + Math.ceil((high - low) / 2)


    const isCurrentBadVersion = isBadVersion(middle)
    const isPrevBadVersion = isBadVersion(middle - 1);
    const isNextBadVersion = isBadVersion(middle + 1);

    if(isCurrentBadVersion && !isPrevBadVersion){
        return middle;
    }

    if(!isCurrentBadVersion && isNextBadVersion){
        return middle + 1;
    }

    if(isCurrentBadVersion){
        return binarySearch(low, middle - 1,isBadVersion)
    }else{
        return binarySearch(middle + 1, high,isBadVersion)
    }
}