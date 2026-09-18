class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let flatGrid = grid.flat().sort();
        let a;
        let b;
        let length = flatGrid.length;
        for(let i=1;i<length;i++){
            if(flatGrid[i]===flatGrid[i-1]){
                a=flatGrid[i];
                break;
            }
        }
        let seen = new Set(flatGrid);
        for(let i=1;i<=length;i++){
            if(!seen.has(i)){
                b=i;
                break;
            }
        }
        return [a,b];
    }
}
