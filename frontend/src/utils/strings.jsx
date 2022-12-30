export function truncate(str, length=25) {
    return str.length > length ? str.substring(0, length) + "..." : str;
}