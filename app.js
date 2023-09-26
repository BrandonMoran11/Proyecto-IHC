function moveImage(direction) {
    const grid = document.getElementById('grid');
    const imageCell = document.getElementById('imageCell');
    const cells = Array.from(grid.children);
    const imageIndex = cells.indexOf(imageCell);

    let targetIndex;
    switch (direction) {
        case 'up':
            targetIndex = imageIndex - 3;
            break;
        case 'down':
            targetIndex = imageIndex + 4;
            break;
        case 'left':
            if (imageIndex % 3 !== 0) targetIndex = imageIndex - 1;
            console.log(imageIndex);
            break;
        case 'right':
            if (imageIndex % 3 !== 2) targetIndex = imageIndex + 2;
            console.log(imageIndex);
            break;
        default:
            return;
    }

    if (targetIndex >= 0 && targetIndex <= cells.length) {
        grid.insertBefore(imageCell, cells[targetIndex]);
    }
}