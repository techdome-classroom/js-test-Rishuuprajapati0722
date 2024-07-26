// // const getTotalIsles = function (grid) {

  

// //   // write your code here

// // };

// // module.exports = getTotalIsles;

// function numIslands(grid) {
//   if (!grid || grid.length === 0) return 0;

//   let numIslands = 0;

//   function dfs(grid, i, j) {
//       if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
//           return;
//       }
      
//       // Mark the land as visited
//       grid[i][j] = 'W';

//       // Explore all four directions
//       dfs(grid, i + 1, j);
//       dfs(grid, i - 1, j);
//       dfs(grid, i, j + 1);
//       dfs(grid, i, j - 1);
//   }

//   for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[0].length; j++) {
//           if (grid[i][j] === 'L') {
//               numIslands++;
//               dfs(grid, i, j);
//           }
//       }
//   }

//   return numIslands;
// }

// // Test cases
// const map1 = [
//   ["L","L","L","L","W"],
//   ["L","L","W","L","W"],
//   ["L","L","W","W","W"],
//   ["W","W","W","W","W"]
// ];

// const map2 = [
//   ["L","L","W","W","W"],
//   ["L","L","W","W","W"],
//   ["W","W","L","W","W"],
//   ["W","W","W","L","L"]
// ];

// console.log(numIslands(map1));  
// console.log(numIslands(map2));  


function getTotalIsles(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
      return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(r, c) {
      const stack = [[r, c]];
      const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; 

      while (stack.length > 0) {
          const [x, y] = stack.pop();
          
          for (const [dx, dy] of directions) {
              const nx = x + dx;
              const ny = y + dy;

              if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && !visited[nx][ny] && grid[nx][ny] === 'L') {
                  visited[nx][ny] = true;
                  stack.push([nx, ny]);
              }
          }
      }
  }

  let islandCount = 0;

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L' && !visited[i][j]) {
              visited[i][j] = true;
              dfs(i, j);
              islandCount++;
          }
      }
  }

  return islandCount;
}

module.exports = getTotalIsles;