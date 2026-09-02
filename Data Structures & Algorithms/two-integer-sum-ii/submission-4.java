class Solution {
    public int[] twoSum(int[] numbers, int target) {
        HashMap<Integer,Integer> sak=new HashMap<>();
        int n=numbers.length;
        for(int i=0;i<n;i++){
            int diff=target-numbers[i];
            if(sak.containsKey(diff)){
                return new int[]{sak.get(diff),i+1};
            }
            sak.put(numbers[i],i+1);
        }
        return new int[]{0};
    }
}
