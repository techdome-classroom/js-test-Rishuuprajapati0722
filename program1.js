

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