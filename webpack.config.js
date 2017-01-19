var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');

module.exports = {
    entry: {
        'cory/traversal/BFSTraversal': './src/cory/traversal/BFSTraversal.ts',
        'cory/traversal/DFSTraversal': './src/cory/traversal/DFSTraversal.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    plugins: [
        new CleanWebpackPlugin([ path.resolve(__dirname, './dist') ])
    ],

    resolve: {
        root: [
            path.resolve('./src'),
            path.resolve('./tests')
        ],
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.scss']
    },

    module: {
        loaders: [{ // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            test: /\.tsx?$/,
            include: [
                path.resolve(__dirname, './src'),
                path.resolve(__dirname, './tests'),
                path.resolve(__dirname, './node_modules/@types')
            ],
            loader: "ts-loader"
        }],
        preLoaders: [{ // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            test: /\.js$/,
            include: [
                path.resolve(__dirname, './src'),
                path.resolve(__dirname, './tests')
            ],
            loader: "source-map-loader"
        }]
    }
};