export function commafy(num) {
    return num.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}