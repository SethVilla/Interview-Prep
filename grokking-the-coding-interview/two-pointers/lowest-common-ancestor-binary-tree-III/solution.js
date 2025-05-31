// If nodes are not the same depth then they will come across one another at their lowest common ancestor

function lowestCommonAncestor(p, q) {
    let firstPtr = p
    let secondPtr = q

    while (firstPtr !== secondPtr) {

        if (firstPtr.parent) {
            firstPtr = firstPtr.parent
        } else {
            firstPtr = q
        }

        if (secondPtr.parent) {
            secondPtr = secondPtr.parent
        } else {
            secondPtr = p
        }
    }

    return firstPtr;
}