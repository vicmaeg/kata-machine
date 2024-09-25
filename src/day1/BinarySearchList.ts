export default function bs_list(haystack: number[], needle: number): boolean {
    var lo = 0;
    var hi = haystack.length;
    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const value = haystack[m];
        if (value === needle) {
            return true;
        } else if (value > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);

    return false;
}
