function containsDuplicate(nums){
    let c = {}
    return !!nums.filter((el,i) => {
        c[nums[i]] = (c[nums[i]] | 0) + 1
        return c[nums[i]] > 1
    }).length
}
console.log(containsDuplicate([1,2,3,4]))