export function addCommas(num: number): string {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function formatBalance(num: number): string {
    return '£' + addCommas(num);
}

export function formatCounts(num: number): string {
    return addCommas(num);
}