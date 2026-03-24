export const problems = [
  {
    id: 1,
    title: "Two Sum",
    description: "Find two numbers that add up to target",
    solution: `HashMap<Integer, Integer> map = new HashMap<>();
for(int i=0;i<arr.length;i++){
    int diff = target - arr[i];
    if(map.containsKey(diff)){
        return new int[]{map.get(diff), i};
    }
    map.put(arr[i], i);
}`
  }
];