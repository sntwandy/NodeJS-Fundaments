const sharp = require('sharp');

sharp('js-logo.webp')
    .resize(80)
    .grayscale()
    .toFile('resized.png');