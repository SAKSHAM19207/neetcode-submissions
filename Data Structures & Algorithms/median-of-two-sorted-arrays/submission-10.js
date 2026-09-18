class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let together = nums1.concat(nums2);
        together.sort((a,b)=> a-b);
        let n = together.length;
        if(n %2 ===0){
            return (together[n / 2 - 1] + together[n / 2]) / 2.0;
        }else{
            return together[Math.floor(n/2)];
        }
        
    }
}
