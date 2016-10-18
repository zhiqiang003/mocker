import Controller from '../controller';
import config from 'config';
import path from 'path';
import fs from 'fs';

export default class Main extends Controller {
    *index() {
        this.render({
            page: 'index'
        })
    }

    *test() {
        this.render({
            page: 'test'
        })
    }

    *common() {
        let { request } = this.ctx;
        let { url } = request;
        let jsFilePath = path.join(config.path.js.entry, url);
        let willRedirect = false;

        try {
            fs.accessSync(jsFilePath);
        } catch (ex) {
            willRedirect = true;
        }

        if (/(js|css)/.test(url)) {
            willRedirect = false;
        }

        if (willRedirect) {
            this.ctx.redirect('/error');
        } else {
            this.render({
                page: url.slice('1')
            })
        }
    }
}
