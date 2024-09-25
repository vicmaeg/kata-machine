export default function bs_list(haystack: number[], needle: number): boolean {
    var low = 0;
    var high = haystack.length;
    do {
        var m = low + (high - low) / 2;
        var value = haystack[m];
        if (value == needle) {
            return true;
        } else if (value > needle) {
            low = m + 1;
        } else {
            high = m;
        }
    } while (low < high);

    return false;

}
