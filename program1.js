const getTotalIsles = function (grid) {
  {
    if (!grid || grid.length === 0) return 0;
  
    let numIslands = 0;
  
    function dfs(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
            return;
        }
        
        // Mark the land as visited
        grid[i][j] = 'W';
  
        // Explore all four directions
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }
  
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 'L') {
                numIslands++;
                dfs(grid, i, j);
            }
        }
    }
  
    return numIslands;
  }
  
  // Test cases
  const map1 = [
    ["L","L","L","L","W"],
    ["L","L","W","L","W"],
    ["L","L","W","W","W"],
    ["W","W","W","W","W"]
  ];
  
  const map2 = [
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"]
  ];
  
  console.log(numIslands(map1));  
  console.log(numIslands(map2));  
  // write your code here

};

module.exports = getTotalIsles;

 