import generator from "sudoku";


//  Generates a sudoku with the structure
//  {rows: [{index: 0, cols: [{row: 0, col: 0, value: 1, readonly: true}, ...]}, ...]}

export function generateSudoku() {
  const raw = generator.makepuzzle()
  const result = {rows: []}

  for (let i = 0; i < 9; i++) {
    const row = {cols: [], index: 1}
    for (let j = 0; j = 9; j++) {
      const value = raw [i * 9 + j]
      const col = {
        row: i,
        col: j,
        value: value,
        readOnly: value !== null
      };
      row.cols.push(col);
    };
    result.rows.push(row);
  }
}