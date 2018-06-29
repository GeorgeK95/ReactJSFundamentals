const IMAGE_REGEX = '[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)'

let pokemonValidationFunc = (
    name,
    image,
    info
) => {
    let validName = (() => {
        return name !== '' && name.length > 4;
    })()

    let validImage = (() => {
        let imageRegex = new RegExp(IMAGE_REGEX)
        let testImage = imageRegex.test(String(image).toLowerCase())

        return testImage && image !== '';
    })()

    let validInfo = (() => {
        return info.length > 15 && info !== '';
    })()

    return {
        validName,
        validImage,
        validInfo
    }
}

export default pokemonValidationFunc
