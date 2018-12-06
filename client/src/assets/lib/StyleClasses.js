export default (styleString, classesString, cssModule) => {
    let styles = []
    let classes = []
    if (styleString) styles = styleString.split(" ")
    if (classesString) classes = classesString.split(" ").map(name => cssModule && cssModule[name])
    return [...styles, ...classes].join(" ")
}
