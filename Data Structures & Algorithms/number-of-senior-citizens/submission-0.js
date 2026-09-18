class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let ans=0;
        for(let d of details){
            if(d.slice(11,13) > 60){
                ans++;
            }
        }
        return ans;
    }
}
