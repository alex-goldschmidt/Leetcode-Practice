/**
 * @param {number[]} nums
 * @return {number}
 1. create obj
 2. let maj = prices[0]
 3. let max = 1
 4. for loop
 5. increment count of current map element & convert count to int if null/undef
 6. if (map[num] > max)
        set max = current element in map
        Set maj = current element
 7. return maj        
 */
var majorityElement = function(nums) {
    let map = {}
    let maj = nums[0]
    let max = 1
    for (let num of nums) {
        map[num] = ~~map[num] + 1
        if (map[num] > max) {
            max = map[num]
            maj = num
        }
    }
    return maj
};