const breakpoints = [576, 768, 992, 1130, 1220];

export const mqMax = breakpoints.map(bp => `@media (max-width: ${bp}px)`)
export const mqMin = breakpoints.map(bp => `@media (min-width: ${bp}px)`)