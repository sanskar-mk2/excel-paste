document.addEventListener("alpine:init", () => {
    Alpine.data("grid_data", () => {
        const grid = [];

        for (let i = 0; i < 10; i++) {
            grid.push([]);
            for (let j = 0; j < 10; j++) {
                grid[i].push(0);
            }
        }

        return {
            grid,
            on_paste: function (x, y, data) {
                const row_split = data.split("\n");
                row_split.pop();
                for (let i = 0; i < row_split.length; i++) {
                    const data_split = row_split[i].split("\t");
                    for (let j = 0; j < data_split.length; j++) {
                        // make sure we don't go out of bounds
                        if (
                            i + y >= this.grid.length ||
                            j + x >= this.grid[i + y].length
                        ) {
                            continue;
                        }
                        this.grid[i + y][j + x] = data_split[j];
                    }
                }
            },
        };
    });
});
