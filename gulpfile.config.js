module.exports = function () {
    var config = {
        compatibility: [
            'last 2 versions',
            'ie >= 9'
        ],
        paths: {
            bower: {
                root: './bower_components'
            },
            bin: {
                root: './bin'
            },
            src: {
                root: './src'
            },
            dist: {
                root: './dist'
            },
            docs: {
                root: './docs'
            }
        },
        serverPort: 8304,
        uncss: {
            html: ['**/*.html', '**/*.hbs', '**/*.handlebars']
        }
    };
    
    config.paths.bin.layouts = config.paths.bin.root + '/Layouts';
    config.paths.bin.pages = config.paths.bin.root + '/Pages';
    config.paths.bin.partials = config.paths.bin.root + '/Partials';

    config.paths.src.fonts = config.paths.src.root + '/Fonts';
    config.paths.src.icons = config.paths.src.root + '/Icons';
    config.paths.src.images = config.paths.src.root + '/Images';
    config.paths.src.layouts = config.paths.src.root + '/Layouts';
    config.paths.src.pages = config.paths.src.root + '/Pages';
    config.paths.src.partials = config.paths.src.root + '/Partials';
    config.paths.src.scripts = config.paths.src.root + '/Scripts';
    config.paths.src.styles = config.paths.src.root + '/Styles';

    config.paths.dist.fonts = config.paths.dist.root + '/fonts';
    config.paths.dist.icons = config.paths.dist.root + '/icons';
    config.paths.dist.images = config.paths.dist.root + '/img';
    config.paths.dist.scripts = config.paths.dist.root + '/js';
    config.paths.dist.styles = config.paths.dist.root + '/css';

    config.paths.docs.fonts = config.paths.docs.root + '/fonts';
    config.paths.docs.icons = config.paths.docs.root + '/icons';
    config.paths.docs.images = config.paths.docs.root + '/img';
    config.paths.docs.scripts = config.paths.docs.root + '/js';
    config.paths.docs.styles = config.paths.docs.root + '/css';

    return config;
};