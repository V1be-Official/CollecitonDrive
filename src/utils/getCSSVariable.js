export const getCSSVariable = variable => {

    return getComputedStyle(document.documentElement)
        .getPropertyValue(variable);

};
