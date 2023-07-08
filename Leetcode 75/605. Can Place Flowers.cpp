// https://leetcode.com/problems/can-place-flowers/description/

class Solution {
public:
    bool checkAdjacentLegal(vector<int>& flowerbed, int pos) {
        if(flowerbed.size() == 1){
            return flowerbed[0] == 0;
        }
        else if(pos == 0){
            return flowerbed[pos+1] == 0;
        }
        else if (pos == flowerbed.size()-1){
            return flowerbed[pos-1] == 0;
        }
        else{
            return flowerbed[pos-1] == 0 && flowerbed[pos+1] == 0;
        }
    }

    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        int canCount = 0;
        for (int i = 0; i<flowerbed.size(); i++){
            if(flowerbed[i] == 1){
                continue;
            }
            else{
                if(checkAdjacentLegal(flowerbed, i)){
                    canCount++;
                    flowerbed[i] = 1;
                }
            }
            
        }
        return (canCount >= n);
    }
};
