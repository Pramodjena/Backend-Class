"use strict";
/* eslint-env browser */
Object.defineProperty(exports, "__esModule", { value: true });
const level = (() => {
    if (navigator.userAgentData) {
        const brand = navigator.userAgentData.brands.find(({ brand }) => brand === 'Chromium');
        if (brand && brand.version > 93) {
            return 3;
        }
    }
    if (/\b(Chrome|Chromium)\//.test(navigator.userAgent)) {
        return 1;
    }
    return 0;
})();
const colorSupport = level !== 0 && {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3,
};
const supportsColor = {
    stdout: colorSupport,
    stderr: colorSupport,
};
exports.default = supportsColor;
//# sourceMappingURL=browser.js.map