/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
    printWidth: 80,
    tabWidth: 2,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: [
        '^react', // React will be placed at the top of third-party modules
        '<THIRD_PARTY_MODULES>',
        '', // use empty strings to separate groups with empty lines
        '^[./]',
    ],
    importOrderBuiltinModulesToTop: true,
    importOrderCaseInsensitive: true,
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
